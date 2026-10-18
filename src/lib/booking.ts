import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80, "Name is too long"),
  phone: z
    .string()
    .trim()
    .transform((v) => v.replace(/[\s-]/g, ""))
    .refine((v) => /^(\+91|91|0)?[6-9]\d{9}$/.test(v), "Enter a valid 10-digit Indian mobile number"),
  service: z.string().min(1, "Please choose a service"),
  date: z.string().min(1, "Please choose a date"),
  time: z.string().min(1, "Please choose a time"),
  message: z.string().trim().max(500, "Message must be under 500 characters").optional(),
});

export type Booking = z.infer<typeof bookingSchema>;

export function bookingMessage(b: Booking) {
  return [
    "Hello NEU Be UNISEX SALON, I would like to request an appointment.",
    `Name: ${b.name}`,
    `Mobile: ${b.phone}`,
    `Service: ${b.service}`,
    `Preferred date: ${b.date}`,
    `Preferred time: ${b.time}`,
    b.message ? `Note: ${b.message}` : "",
  ].filter(Boolean).join("\n");
}
