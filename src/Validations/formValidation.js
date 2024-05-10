import { object, string, number, date, boolean } from 'yup';

export const otherFormSchema = object().shape({
    firstName: string().required('First name is required'),
    lastName: string().required('Last name is required'),
    age: number().positive().integer().required('Age is required'),
    email: string().email().required('Email is required'),
    birthDate: date().required('Birth date is required'),
    aboutYourself: string().required('Your self is required').min(10),
});
