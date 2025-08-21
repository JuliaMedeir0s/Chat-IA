import { Input } from "../../../components/Input";
import { Label } from "../../../components/Label";
import { Button } from "../../../components/Button";
import { Checkbox } from "../../../components/Checkbox";
import { LinkText } from "../../../components/LinkText";

import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
            {/* Logo e título */}
            <div className="flex flex-col items-center mb-6">
                <div className="bg-gradient-to-br from-blue-600 to-teal-500 p-3 rounded-xl mb-4">
                    <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A9 9 0 1117.803 5.121 9 9 0 015.121 17.804z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <h1 className="text-2xl font-semibold text-gray-800">Entrar na plataforma</h1>
                <p className="text-sm text-gray-500 mt-1">
                    Use seu e-mail corporativo para fazer login
                </p>
            </div>

            {/* Card de login */}
            <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-5">
                <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" name="email" type="email" placeholder="seu.email@empresa.com.br" icon={Mail} />
                </div>

                <div>
                    <Label htmlFor="password">Senha</Label>
                    <Input id="password" name="password" type="password" placeholder="Digite sua senha" icon={Lock} />
                </div>

                <div className="flex items-center justify-between">
                    <Checkbox label="Lembrar de mim" />
                    <LinkText href="#">Esqueci minha senha</LinkText>
                </div>

                <Button>Entrar</Button>
            </div>

            {/* Rodapé */}
            <footer className="mt-6 text-xs text-gray-400">
                © 2025 Sua Empresa. Todos os direitos reservados.
            </footer>
        </div>
    );
}