import { cn } from "@/lib/utils"
import Link from "next/link"
import { Shell } from "./shell"
import { buttonVariants } from "./ui/button"

export const LandingPage = () => {
    return (
        <Shell className="flex justify-center h-[80vh] items-center a">
            <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
                <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
                    <Link
                        href={""}
                        className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
                        target="_blank"
                    >
                        Follow along on Twitter
                    </Link>
                    <h1 className="font-heading font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                        CodeBits: Share, Save, Explore Code Bits Easily
                    </h1>
                    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                        I&apos;m building a web app with Next.js 13 and open sourcing
                        everything. Follow along as we figure this out together.
                    </p>
                    <div className="space-x-4">
                        <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
                            Get Started
                        </Link>
                        <Link
                            href={""}
                            target="_blank"
                            rel="noreferrer"
                            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                        >
                            GitHub
                        </Link>
                    </div>
                </div>
            </section>
        </Shell>
    )
}