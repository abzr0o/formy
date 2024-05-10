import { useForm,  } from "react-hook-form"
import { userSchema } from "../Validations/userValidation"
import { yupResolver } from "@hookform/resolvers/yup"



export default function Test() {
    const { register, handleSubmit, formState:{errors} } = useForm({
      resolver: yupResolver(userSchema) // Pass userSchema directly to yupResolver
    });
  
    const onSubmit = (data) => alert(JSON.stringify(data));
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="email" {...register('email')} />
        <p>{errors.email?.message}</p>
        <input name="password" {...register('password')} />
        <p>{errors.password?.message}</p>
        <input type="submit" />
      </form>
    );
  }