"use client"

import { Mail, User } from "lucide-react";
import { InputField, InputIcon, InputRoot } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";



export default function SubscriptionForm() {

    const subscriptionSchema = z.object({
        name: z.string().min(2, "Nome muito curto"),
        email: z.string().email("Email inválido")
    })

    type SubscriptionSchema = z.infer<typeof subscriptionSchema>

    const { register, handleSubmit, formState: { errors } } = useForm<SubscriptionSchema>({
        resolver: zodResolver(subscriptionSchema)
    })

    const onSubscribe = (data: SubscriptionSchema) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubscribe)} className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-110">
            <h2 className="font-heading font-semibold text-gray-200 text-xl">Inscrição</h2>

            <div className="space-y-3">
                <div className="space-y-2">
                    <InputRoot>
                        <InputIcon>
                            <User />
                        </InputIcon>
                        <InputField {...register("name")} type="text" placeholder="Nome Completo" />
                    </InputRoot>
                    {errors.name && <p className="text-danger text-xs font-semibold">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                    <InputRoot>
                        <InputIcon>
                            <Mail />
                        </InputIcon>
                        <InputField {...register("email")} type="email" placeholder="Example@example.com" />
                    </InputRoot>
                    {errors.email && <p className="text-danger text-xs font-semibold">{errors.email.message}</p>}
                </div>
            </div>

            <Button type="submit">Confirmar</Button>
        </form>
    )
}