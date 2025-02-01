import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
// import { Button } from "@/components/ui/Button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Define form validation schema
const loginFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
})

// Define type for form data
type LoginFormValues = z.infer<typeof loginFormSchema>

export default function Login() {
  // Initialize form with validation
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // Handle form submission
  function onSubmit(data: LoginFormValues) {
    console.log(data)
    
  }

  return (
    <div className="flex h-screen items-center justify-center bg-primary">
      <Card className="w-[400px] bg-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Boitoi Login</CardTitle>
          {/* <CardDescription>Enter your credentials to access your account</CardDescription> */}
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage className="text-danger"/>
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
                      <Input type="password" placeholder="Enter your password" {...field} />
                    </FormControl>
                    <FormMessage className="text-danger"/>
                  </FormItem>
                )}
              />
              <button type="submit" className="w-full text-white bg-primary p-2 rounded-lg hover:bg-secondary">Login</button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
