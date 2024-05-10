import { object, string, number, date, boolean } from 'yup';

export const userSchema = object().shape({
    // name: string().required(),
    // age: number().required(),
    email: string().email().required(),
    // birthDate: date(),
    password: string().min(5).max(10).required(),
    remember: boolean()
})