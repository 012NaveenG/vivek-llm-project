

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
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
// import axios from "axios"

const Auth = () => {

    const [loading, setLoading] = useState(false)
    const formSchema = z.object({
        username: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
        password: z.string().min(2, {
            message: "password must be at least 2 characters.",
        }),
    })


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: ""
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
        <div className="sm:h-screen w-screen flex items-center justify-center p-5 sm:p-0">
            <Card className="w-full max-w-2xl">
                <CardContent className="flex flex-col md:flex-row items-center justify-center gap-8 py-8">
                    {/* Image Section */}
                    <div className="flex-shrink-0">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/023/841/777/non_2x/charming-crimson-bots-small-cute-robots-generated-by-ai-free-png.png"
                            alt="Bot"
                            className="h-36 sm:h-68 w-42 sm:w-68 object-contain"
                        />
                    </div>

                    {/* Form Section */}
                    <div className="flex-1 w-full max-w-sm">
                        <CardHeader className="p-0 pb-4">
                            <CardTitle>Login to your account</CardTitle>
                            <CardDescription>
                                Enter your credentials below to login to your account
                            </CardDescription>
                        </CardHeader>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
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
                                <div className="space-y-4">

                                    <div className="text-right">
                                        <Link
                                            to="#"
                                            className="text-sm font-medium text-blue-600 hover:underline"
                                        >
                                            Forgot Password?
                                        </Link>
                                    </div>


                                    <Button type="submit" className="w-full">
                                        {loading ? <BtnLoader /> : "Login"}
                                    </Button>


                                    <p className="text-center text-sm text-muted-foreground">
                                        Don't have an account?{" "}
                                        <Link
                                            to="/sign-up"
                                            className="font-medium text-blue-600 hover:underline"
                                        >
                                            SignUp
                                        </Link>
                                    </p>
                                </div>

                            </form>
                        </Form>
                    </div>
                </CardContent>
            </Card>
        </div>

    )
}

export default Auth
