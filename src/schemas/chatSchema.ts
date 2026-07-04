import { z } from "zod";

export const describeImageSchema = z.object({
  image: z
    .string()
    .min(1, "La imagen no puede estar vacía")
    .max(6_000_000, "La imagen excede el tamaño máximo permitido (4MB)")
    .refine(
      (val) => /^[A-Za-z0-9+/]+=*$/.test(val),
      { message: "Formato base64 inválido" }
    ),
});

export type DescribeImageData = z.infer<typeof describeImageSchema>;
