import Challenge from '#/pages/(auth)/challenge'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/challenge')({
  component: Challenge,
})
