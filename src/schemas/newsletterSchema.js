import { z } from 'zod';

// Validation schema for the newsletter subscribe form. Kept in its own file so
// the rules are declared once and are easy to reuse or test.
//
// `pipe` runs the format checks only once the field is non-empty, so an empty
// field reports "Email is required" instead of the format message.
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
