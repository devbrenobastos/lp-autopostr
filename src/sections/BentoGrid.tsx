import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

export const BentoGrid = () => {
    return (
        <section className="py-20 bg-black/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">O fim do trabalho manual.</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Manual Post Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 bg-zinc-950/40 relative overflow-hidden group border-red-900/10"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <X className="w-32 h-32 text-red-500" />
                        </div>

                        <h3 className="text-2xl font-bold mb-8 text-zinc-400">Postagem Manual</h3>

                        <ul className="space-y-6">
                            <ListItem icon={<X className="text-red-500" />} text="Esquecer os horários de pico" />
                            <ListItem icon={<X className="text-red-500" />} text="Tomar block por postar rápido demais" />
                            <ListItem icon={<X className="text-red-500" />} text="Login/Logout toda hora" />
                            <ListItem icon={<X className="text-red-500" />} text="Perder alcance sem o 1º comentário" />
                        </ul>
                    </motion.div>

                    {/* AutoPostr Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-0.5 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-500/20 shadow-2xl overflow-hidden group"
                    >
                        <div className="bg-zinc-900/90 h-full w-full rounded-[0.95rem] p-8 relative">
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full group-hover:bg-blue-500/20 transition-colors" />

                            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-2">
                                Com o AutoPostr
                                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">Vantagem</span>
                            </h3>

                            <ul className="space-y-6">
                                <ListItem icon={<Check className="text-blue-400" />} text="Fila de agendamento infinita" premium />
                                <ListItem icon={<Check className="text-blue-400" />} text="Proteção Anti-Spam inteligente" premium />
                                <ListItem icon={<Check className="text-blue-400" />} text="Múltiplas contas simultâneas" premium />
                                <ListItem icon={<Check className="text-blue-400" />} text="Auto-comentário para engajamento" premium />
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const ListItem = ({ icon, text, premium = false }: { icon: React.ReactNode, text: string, premium?: boolean }) => (
    <li className="flex items-center gap-3">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${premium ? 'bg-blue-500/10' : 'bg-zinc-800/50'}`}>
            {icon}
        </div>
        <span className={premium ? 'text-zinc-100 font-medium' : 'text-zinc-500'}>{text}</span>
    </li>
);
