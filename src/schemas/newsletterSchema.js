import { z } from 'zod';

export const newsletterSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: 'Email is required' })
    .pipe(
      z
        .string()
        .max(254, { message: 'Email is too long' })
        .email({ message: 'Enter a valid email address' })
        .refine((value) => !value.includes('..'), {
          message: 'Enter a valid email address',
        })
    ),
});
