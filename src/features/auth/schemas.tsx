import {z} from 'zod';

export const loginSchema=z.object({
    email:z.string().email(),
    password:z.string().min(8,'Min 8 Characters required'),
})

export const registerSchema=z.object({
    name:z.string().max(10,'Max 10 Characters Allowed '),
    email:z.string().email(),
    password:z.string().min(8,'Min 8 Characters required'),
})