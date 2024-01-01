import { siteConfig } from "@/config/site"
import { Icons } from "./icons"

export const Socials = () => {
    return (
        <div>
            {siteConfig.socials.map(social => <SocialItem link={social.link} logo={social.icon} key={social.name} />)}
        </div>
    )
}


const SocialItem = ({ link, logo }: { link: string, logo: keyof typeof Icons }) => {
    const Icon = Icons[logo]
    return (
        <a href={link} className="h-10 w-10" target="_blank" rel="noopener noreferrer">
            <Icon className="h-10 w-6" />
        </a>
    )
}