import { type Icons } from "@/components/icons"

export type SocialType = {
  name: string
  link: string
  icon: keyof typeof Icons
}
