'use client'
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";


const FormValidation = z.object({
    name: z.string().min(1, "Please Enter Your Name"),
    phone: z.string().min(11, "Phone Number Should Be minimum 11 numbers").max(11, "Phone Number Should Be maximum 11 numbers"),
    email: z.string().min(1, "Please Enter Your Email"),
    message: z.string().optional(),
});

type FormData = z.infer<typeof FormValidation>;

const Contact = ({ }) => {
    const form = useForm<FormData>({
        resolver: zodResolver(FormValidation),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = (data: FormData) => {
        bookTableMutation.mutate(data);
    };

    const bookTableMutation = useMutation({
        mutationFn: async (values: z.infer<typeof FormValidation>) => {
            return await axios.post("/api/contact", values);
        },
        onSuccess: () => {
            toast.success(
                "Your message has been submitted successfully. We will get back to you soon",
            );
            form.reset();
        },
        onError: () => {
            toast.error(
                "There was an error submitting your message. Please try again later",
            );
        },
    });
    return (
        <section id="welcome" className="flex w-full items-center justify-center bg-[#0b0b0b] overflow-hidden">
            <div className="relative flex flex-col h-fit lg:min-h-[60vh] max-w-[1300px] w-full items-center justify-center px-4 lg:px-0 py-12 lg:py-24">
                <p className="text-5xl font-gotu text-center text-[#C1C1C1]">Contact us</p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="h-full w-full">
                        <div className="flex gap-4 pt-7">
                            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-16">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel className="text-sm text-[#787571] ">First Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0c0c0c] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel className="text-sm text-[#787571] ">Phone</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0c0c0c] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel className="text-sm text-[#787571] ">Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    {...field}
                                                    className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0c0c0c] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel className="text-sm text-[#787571] ">Message</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0c0c0c] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <div className="flex w-full flex-col items-center justify-center pt-7 lg:flex-row">
                            <Button className="w-fit h-12 px-10"
                                disabled={bookTableMutation.isPending}
                            >Submit</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </section>
    );
};

export default Contact;
