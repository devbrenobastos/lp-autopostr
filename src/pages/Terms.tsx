import { motion } from 'framer-motion';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { Info, AlertTriangle, Scale, Clock } from 'lucide-react';

const Terms = () => {
    return (
        <div className="bg-zinc-950 min-h-screen text-zinc-300">
            <Navbar />

            <main className="pt-32 pb-20 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto mt-12 mb-20 p-8 md:p-12 bg-zinc-900/50 border border-zinc-800/50 rounded-3xl backdrop-blur-sm shadow-2xl"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 pb-8 border-b border-zinc-800">
                        Termos de Uso
                    </h1>

                    <p className="text-zinc-400 leading-relaxed text-base mb-6">
                        Bem-vindo ao <strong>AutoPostr</strong>! Ao utilizar nossa plataforma de agendamento, você concorda com as regras abaixo. Leia com atenção.
                    </p>

                    <h2 className="text-xl font-bold text-zinc-100 mt-12 mb-4 flex items-center gap-2">
                        <Info className="w-6 h-6 text-blue-500" />
                        1. O que é o AutoPostr?
                    </h2>
                    <p className="text-zinc-400 leading-relaxed text-base mb-6">
                        Somos uma ferramenta de produtividade desenvolvida para ajudar criadores e empresas a agendarem publicações na rede social Threads, utilizando a API oficial da Meta.
                    </p>

                    <h2 className="text-xl font-bold text-zinc-100 mt-12 mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-6 h-6 text-blue-500" />
                        2. Suas Responsabilidades e Regras Anti-Spam
                    </h2>
                    <p className="text-zinc-400 leading-relaxed text-base mb-6">
                        Nós levamos as Diretrizes da Comunidade da Meta muito a sério. Ao usar o AutoPostr, você concorda em <strong>NÃO</strong>:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mb-6 text-zinc-400 marker:text-blue-500">
                        <li>Publicar conteúdo ofensivo, ilegal ou que viole os Termos de Serviço da Meta/Threads.</li>
                        <li>Utilizar a ferramenta para enviar Spam ou floodar a rede.</li>
                        <li>Tentar burlar nossas travas de segurança de 20 minutos entre postagens.</li>
                        <li>Usar a ferramenta para assediar ou enganar outros usuários.</li>
                    </ul>
                    <p className="text-zinc-400 italic text-sm mb-6 bg-zinc-800/30 p-4 rounded-xl border border-zinc-800/50">
                        Nota: Nosso sistema possui travas de segurança para proteger sua conta e a saúde da rede. Tentativas de burlar isso resultarão em banimento da nossa plataforma.
                    </p>

                    <h2 className="text-xl font-bold text-zinc-100 mt-12 mb-4 flex items-center gap-2">
                        <Scale className="w-6 h-6 text-blue-500" />
                        3. Limitação de Responsabilidade
                    </h2>
                    <p className="text-zinc-400 leading-relaxed text-base mb-6">
                        O AutoPostr funciona integrado à API da Meta. Não nos responsabilizamos por:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mb-6 text-zinc-400 marker:text-blue-500">
                        <li>Instabilidades na rede social Threads.</li>
                        <li>Mudanças repentinas nas regras da API da Meta.</li>
                        <li>Punições aplicadas pela Meta à sua conta devido ao conteúdo publicado.</li>
                    </ul>

                    <h2 className="text-xl font-bold text-zinc-100 mt-12 mb-4 flex items-center gap-2">
                        <Clock className="w-6 h-6 text-blue-500" />
                        4. Cancelamento
                    </h2>
                    <p className="text-zinc-400 leading-relaxed text-base mb-6">
                        Você pode cancelar sua assinatura de slots a qualquer momento no seu painel. O serviço continuará ativo até o fim do período já pago.
                    </p>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default Terms;
