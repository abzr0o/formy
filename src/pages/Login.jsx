import { userSchema } from '../Validations/userValidation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useLoginStore } from '../stores/loginStateStore';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const defaultBackendUrl = 'https://jsonplaceholder.typicode.com/posts'; // Default URL for testing

const Login = () => {

  const navigate = useNavigate();
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(userSchema),
  });


  // const onFinishFailed = (errorInfo) => {
  //   toast(`Something went wrong ${errorInfo}`)
  //   console.log('Failed:', errorInfo);
  // };
  const login = useLoginStore((state) => state.login);

  const handleLogin = async (values) => {
    try {
      // Make a POST request to the default backend URL
      const response = await axios.post(defaultBackendUrl, values);

      // Check if the response status is successful (2xx)
      if (response.status >= 200 && response.status < 300) {
        console.log('Request successful:', response.data);
        // Do something with the response if needed
        navigate("/form");
        login();
      } else {
        // Handle unsuccessful response
        console.error('Request failed:', response);
        toast.error('Request failed');
      }
    } catch (error) {
      // Handle error if request fails
      console.error('Request error:', error);
      toast.error('Request failed: ' + error.message);
    }
  };

  return (<div className="flex justify-items-center align-items-center h-screen bg-gray-100" style={{ minHeight: "100vh", alignItems: 'center' }}>
    <form className="max-w-sm mx-auto mt-8 bg-white rounded-lg shadow-md p-8" style={{ height: 'fit-content' }}>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
          {t('Email')}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register('email')}
          placeholder="Your email"
        />
        <p className="text-red-500 text-xs italic">{errors.email?.message}</p>
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
          {t('Password')}
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          {...register('password')}
          placeholder="Your password"
        />
        <p className="text-red-500 text-xs italic">{errors.password?.message}</p>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleSubmit((data) => handleLogin(data))}
        >
          {t('Sign in')}
        </button>
      </div>
    </form>
  </div>

  );
};
export default Login;