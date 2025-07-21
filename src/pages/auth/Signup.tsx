
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { useState } from "react"
import { toast } from "sonner"
import BtnLoader from "@/components/BtnLoader.tsx"


const Signup = () => {

    const [loading, setLoading] = useState(false)
    const formSchema = z.object({
        username: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
        password: z.string().min(2, {
            message: "password must be at least 2 characters.",
        }),
        location: z.string().min(2, {
            message: "location must be at least 2 characters.",
        }),
    })


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
            location: ""
        },
    })

    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setLoading(true)
            // const response = await axios.post(``, values)
            // if (response.status == 200) {
            //     toast.success(`LoggedIn successfully`)
            // }
            console.log(values)
        } catch (error) {
            toast.error(`Login Failed`)
        } finally {
            setLoading(false)
        }
    }


    return (
        <div className=" flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-3xl">
                <div className="flex flex-col gap-6">
                    <Card className="overflow-hidden p-0">
                        <CardContent className="grid p-0 md:grid-cols-2">
                            <div className=" relative hidden md:block">
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/023/841/800/original/adorable-blue-bots-small-cute-robots-generated-by-ai-free-png.png" alt="Image"
                                    className="absolute inset-0 h-full w-full object-cover "
                                />
                            </div>
                            <form onSubmit={form.handleSubmit(handleSubmit)} className="p-6 md:p-8">
                                <Form {...form}>
                                    <div className="flex flex-col gap-6">
                                        <div className="flex flex-col items-center text-center">
                                            <h1 className="text-2xl font-bold">Welcome </h1>
                                            <p className="text-muted-foreground text-balance">
                                                Register to create  account
                                            </p>
                                        </div>

                                        <FormField
                                            control={form.control}
                                            name="username"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Username</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your username" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="password"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Password</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="your password" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="location"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Location</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="your location" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <div className="space-y-4">

                                            <Button type="submit" className="w-full">
                                                {loading ? <BtnLoader /> : "SignUp"}
                                            </Button>

                                            <div className="text-center text-sm">
                                                Already have an account?{" "}

                                                <Link
                                                    to="/sign-in"
                                                    className="underline underline-offset-4"
                                                >
                                                    SignIn
                                                </Link>
                                            </div>

                                        </div>
                                    </div>
                                </Form>
                            </form>

                        </CardContent>
                    </Card>

                </div>
            </div>
        </div>
    )
}

export default Signup
