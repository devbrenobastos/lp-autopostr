import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import dashboardImage from '../assets/dashboard-autopostr.png';

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-blur -z-10 opacity-50" />

            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-tight"
                >
                    Domine o Threads no <br />
                    <span className="text-gradient">Piloto Automático.</span>
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mt-8 leading-relaxed"
                >
                    Agende postagens, configure auto-comentários e gerencie múltiplas contas em um único painel. A ferramenta definitiva para criadores e agências que querem escalar sem esforço.
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-10 flex flex-col items-center gap-4"
                >
                    <a href="https://app.autopostr.site/cadastro" className="btn-primary text-lg px-8 py-4 group">
                        Criar Conta e Automatizar
                        <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                    <p className="text-zinc-500 text-sm">Teste imediato. Cancele quando quiser.</p>
                </motion.div>

                {/* Mockup Element */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 md:mt-24 relative px-4"
                >
                    <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full -z-10" />
                    <div className="glass-card p-2 md:p-3 max-w-5xl mx-auto overflow-hidden border-zinc-800 shadow-2xl relative select-none">

                        <img
                            src={dashboardImage}
                            alt="AutoPostr Dashboard"
                            className="w-full h-auto rounded-xl shadow-2xl pointer-events-none"
                            onContextMenu={(e) => e.preventDefault()}
                            draggable={false}
                        />

                        {/* Floating decoration */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -top-6 -right-2 md:-top-12 md:-right-8 glass-card p-4 md:p-6 shadow-xl border-blue-500/30 hidden md:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <Zap className="w-5 h-5 fill-current" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-zinc-400">Post agendado</p>
                                    <p className="text-sm font-bold">Hoje, 18:00</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const Zap = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M4 14.75 15.3 3 12.1 9.75 20 9.25 8.7 21 11.9 14.25H4Z" />
    </svg>
);
