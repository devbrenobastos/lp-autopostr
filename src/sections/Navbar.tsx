import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6"
        >
            <div className="w-full max-w-7xl glass-card px-6 py-3 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Zap className="h-6 w-6 text-blue-500 fill-blue-500" />
                    <span className="text-xl font-extrabold tracking-tighter">AutoPostr</span>
                </Link>

                <div className="flex items-center gap-6">
                    <a href="https://app.autopostr.site/login" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">
                        Entrar
                    </a>
                    <a href="https://app.autopostr.site/cadastro" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20">
                        Começar Agora
                    </a>
                </div>
            </div>
        </motion.nav>
    );
};
