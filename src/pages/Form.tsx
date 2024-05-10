import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { otherFormSchema } from "../Validations/formValidation";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
const defaultBackendUrl = "https://jsonplaceholder.typicode.com/posts"; // Default URL for testing
// import { Input,  } from 'antd';
// const { TextArea } = Input;
type payload = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  birthDate: Date;
  aboutYourself: string;
};
const Form = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(otherFormSchema),
  });

  const onFinish = async (values: payload) => {
    const dataString = localStorage.getItem("data") || "[]";
    if (!dataString) {
      const payloadString = JSON.stringify([values]);
      localStorage.setItem("data", payloadString);
    }
    const data: payload[] = JSON.parse(dataString);
    data.push(values);
    const payLoadString = JSON.stringify(data);
    localStorage.setItem("data", payLoadString);
    toast("Form submitted successfully");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit(onFinish)} className="max-w-md mx-auto mt-8">
        <div className="flex flex-col gap-4 w-[600px]">
          <Card>
            <CardContent className="pt-3 ">
              <div className="flex-col gap-4 flex">
                <Label htmlFor="name">{t("First Name")}</Label>
                <Input id="name" type="text" {...register("firstName")} />
              </div>
              <p className="text-red-500 text-xs italic mt-2">
                {errors.firstName?.message}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-3 ">
              <div className="flex-col gap-4 flex">
                <Label htmlFor="name">{t("Last Name")}</Label>
                <Input
                  id="name"
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("lastName")}
                />
              </div>
              <p className="text-red-500 text-xs italic mt-2">
                {errors.lastName?.message}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-3 ">
              <div className="flex-col gap-4 flex">
                <Label htmlFor="date">{t("Birth Date")}</Label>
                <Input
                  id="date"
                  type="date"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("birthDate")}
                />
              </div>
              <p className="text-red-500 text-xs italic mt-2">
                {errors.birthDate?.message}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-3 ">
              <div className="flex-col gap-4 flex">
                <Label htmlFor="email">{t("email")}</Label>
                <Input
                  id="email"
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("email")}
                />
              </div>
              <p className="text-red-500 text-xs italic mt-2">
                {errors.email?.message}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-3 ">
              <div className="flex-col gap-4 flex">
                <Label htmlFor="age">{t("Age")}</Label>
                <Input
                  id="age"
                  type="number"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("age")}
                />
              </div>
              <p className="text-red-500 text-xs italic mt-2">
                {errors.age?.message}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-3 ">
              <div className="flex-col gap-4 flex">
                <Label htmlFor="aboutYourself">
                  {t("Write About Yourself")}
                </Label>
                <textarea
                  id="aboutYourself"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("aboutYourself")}
                />
              </div>
              <p className="text-red-500 text-xs italic mt-2">
                {errors.aboutYourself?.message}
              </p>
            </CardContent>
          </Card>
          <div className="flex items-center justify-center">
            <Button type="submit">{t("Submit")}</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
