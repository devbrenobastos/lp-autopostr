import { motion } from 'framer-motion';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { ShieldCheck, Zap, Trash2, Mail } from 'lucide-react';

const Privacy = () => {
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
                        Política de Privacidade
                    </h1>

                    <p className="text-zinc-400 leading-relaxed text-base mb-6">
                        Última atualização: Fevereiro de 2026.
                    </p>

                    <p className="text-zinc-400 leading-relaxed text-base mb-6">
                        Bem-vindo ao <strong>AutoPostr</strong>! Nós valorizamos a sua privacidade e criamos esta política de forma simples e direta para que você saiba exatamente como cuidamos dos seus dados.
                    </p>

                    <h2 className="text-xl font-bold text-zinc-100 mt-12 mb-4 flex items-center gap-2">
                        <ShieldCheck className="w-6 h-6 text-blue-500" />
                        1. Quais dados nós coletamos?
                    </h2>
                    <p className="text-zinc-400 leading-relaxed text-base mb-6">
                        Para que a nossa mágica de automação funcione, precisamos nos conectar à sua conta do Threads através da API oficial da Meta. Nós coletamos apenas o estritamente necessário:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mb-6 text-zinc-400 marker:text-blue-500">
                        <li>Seu Username e Foto de Perfil do Threads (para exibição no seu painel).</li>
                        <li>O Token de Acesso Secure fornecido pela Meta (para podermos publicar em seu nome).</li>
                        <li>O ID da sua conta.</li>
                    </ul>

                    <h2 className="text-xl font-bold text-zinc-100 mt-12 mb-4 flex items-center gap-2">
                        <Zap className="w-6 h-6 text-blue-500" />
                        2. Como usamos os seus dados?
                    </h2>
                    <p className="text-zinc-400 leading-relaxed text-base mb-6">
                        Seus dados são usados exclusivamente para prestar o serviço que você contratou: agendar e publicar suas mensagens no Threads e adicionar auto-comentários nas suas próprias publicações.
                    </p>
                    <p className="text-zinc-400 leading-relaxed text-base mb-6">
                        Nós <strong>NUNCA</strong> vendemos seus dados, não lemos seu feed e não enviamos mensagens para outras pessoas sem a sua autorização explícita via agendamento.
                    </p>

                    <h2 className="text-xl font-bold text-zinc-100 mt-12 mb-4 flex items-center gap-2">
                        <Trash2 className="w-6 h-6 text-blue-500" />
                        3. Como excluir seus dados (Data Deletion)
                    </h2>
                    <p className="text-zinc-400 leading-relaxed text-base mb-6">
                        Você tem controle total. Para revogar nosso acesso e excluir seus dados, você tem duas opções:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mb-6 text-zinc-400 marker:text-blue-500">
                        <li>
                            <strong>Pelo AutoPostr:</strong> Acesse o seu painel, vá em "Minhas Contas" e exclua a sua conta. Todos os seus tokens e dados de agendamento serão apagados do nosso banco de dados.
                        </li>
                        <li>
                            <strong>Pela Meta (Instagram/Threads):</strong> Acesse as configurações do seu aplicativo do Instagram, vá em "Permissões de sites e aplicativos", encontre o AutoPostr e clique em "Remover". Isso corta nosso acesso imediatamente.
                        </li>
                    </ul>

                    <p className="text-zinc-400 leading-relaxed text-base mt-12 border-t border-zinc-800 pt-8 flex items-center gap-2">
                        <Mail className="w-5 h-5 text-blue-500" />
                        Caso precise de suporte extra para a exclusão total de registros, envie um e-mail para <a href="mailto:suporte@autopostr.site" className="text-blue-400 hover:text-blue-300 transition-colors">suporte@autopostr.site</a>.
                    </p>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default Privacy;
