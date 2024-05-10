import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { otherFormSchema } from '../Validations/formValidation';
const defaultBackendUrl = 'https://jsonplaceholder.typicode.com/posts'; // Default URL for testing
import { Card, Space } from 'antd';
// import { input,  } from 'antd';
// const { TextArea } = Input;

const Form = () => {

  const { t } = useTranslation();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(otherFormSchema),
  });

  const onFinish = async (values) => {
    try {
      // Make a POST request to the default backend URL
      const response = await axios.post(defaultBackendUrl, values);

      // Check if the response status is successful (2xx)
      if (response.status >= 200 && response.status < 300) {
        console.log('Request successful:', response.data);
        // Do something with the response if needed
        toast('Form submitted successfully');

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


  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit(onFinish)} className="max-w-md mx-auto mt-8">
        <Space direction="vertical" size={3}>
          <Card

            style={{
              width: 600,
            }}
          >
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              {t('First Name')}
            </label>
            <p><input
              id="name"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register('firstName')}
            /></p>
            <p className="text-red-500 text-xs italic">{errors.firstName?.message}</p>
          </Card>



          <Card className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              {t('Last Name')}
            </label>
            <input
              id="name"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register('lastName')}
            />
            <p className="text-red-500 text-xs italic">{errors.lastName?.message}</p>
          </Card>
          <Card className="mb-4">
            <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
              {t('Birth Date')}
            </label>
            <input
              id="date"
              type="date"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register('birthDate')}
            />
            <p className="text-red-500 text-xs italic">{errors.birthDate?.message}</p>
          </Card>

          <Card className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              {t('email')}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register('email')}
            />
            <p className="text-red-500 text-xs italic">{errors.email?.message}</p>
          </Card>
          <Card className="mb-4">
            <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">
              {t('Age')}
            </label>
            <input
              id="age"
              name="age"
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register('age')}
            />
            <p className="text-red-500 text-xs italic">{errors.age?.message}</p>
          </Card>
          <Card className="mb-4">
            <label htmlFor="aboutYourself" className="block text-gray-700 text-sm font-bold mb-2">
              {t('Write About Yourself')}
            </label>
            <textarea
              id="aboutYourself"
              name="aboutYourself"
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register('aboutYourself')}
            />
            <p className="text-red-500 text-xs italic">{errors.aboutYourself?.message}</p>
          </Card>
          <Card className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {t('Submit')}
            </button>
          </Card>
        </Space>
      </form>
    </div>
  );
};

export default Form;
