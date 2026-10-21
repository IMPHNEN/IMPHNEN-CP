import { z } from "zod"

export const RankSchema = z.object({
    id: z.number(),
    name: z.enum(["Pemula", "Madya", "Ahli", "Professor", "Veteran", "Tetua", "Sepuh", "Pahlawan", "Mitologi", "Legenda"]),
    badge: z.string(),
    scoreImprovement: z.number()
})

export type TRankSchema = z.infer<typeof RankSchema>