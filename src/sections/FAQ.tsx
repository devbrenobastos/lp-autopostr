import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        q: "Tem risco de banimento da minha conta?",
        a: "Não. Nosso sistema possui uma trava de segurança que impede postagens em um intervalo menor que 20 minutos, respeitando os limites oficiais da API da Meta."
    },
    {
        q: "Posso usar para clientes de agência?",
        a: "Sim! Você pode comprar contas conectadas adicionais infinitas no seu painel e gerenciar dezenas de clientes sem precisar sair da sua conta."
    },
    {
        q: "Se eu pausar o robô, perco a fila?",
        a: "Não. A sua biblioteca de mensagens fica intacta. Assim que você ativar o botão, ele retoma o trabalho de onde parou."
    }
];

export const FAQ = () => {
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    return (
        <section className="py-24 bg-black/30">
            <div className="container mx-auto px-4 max-w-3xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-16 text-center"
                >
                    Perguntas Frequentes
                </motion.h2>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                className="w-full p-6 flex items-center justify-between text-left group"
                            >
                                <span className="text-lg font-bold text-zinc-100 group-hover:text-blue-400 transition-colors">
                                    {faq.q}
                                </span>
                                <ChevronDown className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {openIdx === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-zinc-400 leading-relaxed border-t border-zinc-800/50 pt-4">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
