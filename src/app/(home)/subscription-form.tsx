import { Mail, User } from "lucide-react";
import { InputField, InputIcon, InputRoot } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";

export default function SubscriptionForm() {
    return (
        <form className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-110">
            <h2 className="font-heading font-semibold text-gray-200 text-xl">Inscrição</h2>

            <div className="space-y-3">
                <InputRoot>
                    <InputIcon>
                        <User />
                    </InputIcon>
                    <InputField type="text" placeholder="Nome Completo" />
                </InputRoot>
                <InputRoot>
                    <InputIcon>
                        <Mail />
                    </InputIcon>
                    <InputField type="email" placeholder="Example@example.com" />
                </InputRoot>
            </div>

            <Button type="submit">Confirmar</Button>
        </form>
    )
}