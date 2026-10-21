import { z } from "zod";

export const ExampleSchema = z.object({
    id: z.string(),
    input: z.string(),
    output: z.string()
})

export const ProblemSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    example: z.array(ExampleSchema)
})

export type TProblemSchema = z.infer<typeof ProblemSchema>