"use client"

import Link from "next/link"
import { api } from "@/trpc/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { type z } from "zod"

import { userSchema } from "@/lib/validations"

import { Icons } from "../icons"
import { Avatar, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

const profileSchema = userSchema.pick({
  email: true,
  bio: true,
  image: true,
  username: true,
})

type ProfileFormValues = z.infer<typeof profileSchema>

export function ProfileForm({ userInfo }: { userInfo: ProfileFormValues }) {
  const trpcUtils = api.useUtils()
  const updateUserMutation = api.user.update.useMutation({
    onSuccess() {
      toast.success("Profile info updated successfully")
    },
    onSettled() {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      trpcUtils.user.me.invalidate()
    },
  })

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      email: userInfo.email ?? "",
      bio: userInfo.bio ?? "",
      image: userInfo.image ?? "",
      username: userInfo.username ?? "",
    },
  })

  function onSubmit(data: ProfileFormValues) {
    console.log(data)
    updateUserMutation.mutate({
      ...data,
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <Avatar className="size-24">
              <AvatarImage src={field.value} />
            </Avatar>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name. It can be your real name or a
                pseudonym. You can only change this once every 30 days.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                You can manage verified email addresses in your{" "}
                <Link href="/examples/forms">email settings</Link>.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can <span>@mention</span> other users and organizations to
                link to them.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          {updateUserMutation.isLoading && (
            <Icons.spinner className="animate-spin" />
          )}
          Update profile
        </Button>
      </form>
    </Form>
  )
}
