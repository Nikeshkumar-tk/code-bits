import type { SocialType } from "@/types"

export const siteConfig = {
  name: "CodeBits",
  description: "A collection of code snippets",
  socials: [
    {
      name: "github",
      link: "https://github.com/Nikeshkumar-tk/code-bits",
      icon: "github",
    },
  ] satisfies SocialType[],
  navItems: [
    {
      name: "Explore",
      link: "/",
    },
    {
      name: "Saved",
      link: "/snippets",
    },
    {
      name: "Drafts",
      link: "/about",
    },
  ],
}
