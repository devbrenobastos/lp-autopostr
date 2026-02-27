import { motion } from 'framer-motion';
import { CreditCard, CheckCircle2 } from 'lucide-react';

export const Pricing = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Preço justo para escalar.</h2>

                    <div className="mt-12 glass-card p-12 border-blue-500/20 bg-zinc-900/80 relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                            Pagamento por Uso
                        </div>

                        <div className="flex flex-col items-center">
                            <span className="text-zinc-400 font-medium mb-4">Plano Único</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl md:text-7xl font-extrabold">R$ 15,00</span>
                                <span className="text-zinc-500 text-xl">/mês</span>
                            </div>
                            <p className="text-xl text-zinc-300 mt-4 font-medium">por conta conectada</p>
                        </div>

                        <div className="mt-10 pt-10 border-t border-zinc-800 space-y-4 max-w-sm mx-auto text-left">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                                <span className="text-zinc-300">Adicione quantas contas conectadas quiser</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                                <span className="text-zinc-300">Pague apenas pelo que usar</span>
                            </div>
                        </div>

                        <button className="btn-primary w-full max-w-sm mx-auto mt-12 py-4 text-lg">
                            Liberar meu acesso
                        </button>

                        <div className="mt-8 flex items-center justify-center gap-6 text-zinc-500 text-sm">
                            <div className="flex items-center gap-2">
                                <CreditCard className="w-4 h-4" />
                                <span>Seguro via PIX</span>
                            </div>
                            <div className="w-px h-4 bg-zinc-800" />
                            <span className="italic">Pagamento instantâneo</span>
                        </div>

                        <p className="mt-4 text-xs text-zinc-500 bg-zinc-800/30 py-2 px-4 rounded-lg inline-block">
                            Liberação na hora
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
