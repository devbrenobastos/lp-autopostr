import { motion } from 'framer-motion';
import { Clock, MessageSquare, Shield } from 'lucide-react';

export const Features = () => {
    const items = [
        {
            icon: <Clock className="w-8 h-8 text-blue-400" />,
            title: "Agendamento Inteligente",
            desc: "Defina horários fixos ou deixe nosso sistema calcular intervalos perfeitos entre as postagens."
        },
        {
            icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
            title: "Auto-Comentário",
            desc: "O algoritmo ama respostas. O AutoPostr já solta o seu primeiro comentário com link logo após publicar."
        },
        {
            icon: <Shield className="w-8 h-8 text-blue-500" />,
            title: "Escudo Anti-Spam",
            desc: "Nossa IA respeita o limite de 20 minutos da Meta, mantendo suas contas 100% seguras contra bloqueios."
        }
    ];

    return (
        <section className="py-24 bg-zinc-950">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold">Estrutura que trabalha por você 24/7.</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card p-10 hover:border-zinc-700 transition-colors group"
                        >
                            <div className="mb-6 p-4 rounded-2xl bg-zinc-800/50 w-fit group-hover:scale-110 transition-transform duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
