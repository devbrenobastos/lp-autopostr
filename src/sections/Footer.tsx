import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="py-12 border-t border-zinc-900 bg-zinc-950">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-blue-500 fill-blue-500" />
                        <span className="text-lg font-bold">AutoPostr</span>
                    </div>

                    <div className="flex items-center gap-8 text-sm text-zinc-500 font-medium">
                        <Link to="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
                        <Link to="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
                        <a href="https://app.autopostr.site/login" className="hover:text-white transition-colors">Entrar</a>
                        <a href="https://app.autopostr.site/cadastro" className="hover:text-white transition-colors">Criar Conta</a>
                    </div>

                    <p className="text-sm text-zinc-600">
                        © {new Date().getFullYear()} AutoPostr. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};
