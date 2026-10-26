import z from "zod";

export const UserSchema = z.object({
    id: z.string(),
    name: z.string(),
    image: z.string()
})

export type TUserSchema = z.infer<typeof UserSchema>