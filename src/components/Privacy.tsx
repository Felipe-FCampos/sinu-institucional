type PrivacyPolicyProps = {
    appName?: string;
    contactEmail?: string;
    lastUpdated?: string; // ex: "22/12/2025"
};

export default function PrivacyPolicy({
    appName = "Sinu",
    contactEmail = "sinu.app.br@gmail.com",
    lastUpdated = "22/12/2025",
}: PrivacyPolicyProps) {
    return (
        <main className="pp">
            <header className="pp__header">
                <h1 className="pp__title">Política de Privacidade</h1>
                <p className="pp__meta">
                    {appName} • Última atualização: <strong>{lastUpdated}</strong>
                </p>
            </header>

            <section className="pp__section">
                <h2>1. Visão geral</h2>
                <p>
                    Esta Política descreve como o <strong>{appName}</strong> coleta, usa e protege informações
                    quando você utiliza o aplicativo e seus serviços. Nosso objetivo é ser transparente e
                    coletar apenas o necessário para entregar as funcionalidades.
                </p>
            </section>

            <section className="pp__section">
                <h2>2. Dados que coletamos</h2>
                <ul>
                    <li>
                        <strong>Dados de conta:</strong> nome e e-mail (quando você cria conta ou faz login).
                    </li>
                    <li>
                        <strong>Dados de assinaturas:</strong> nome do serviço, valor, frequência, status,
                        datas de cobrança e informações relacionadas ao controle de assinaturas.
                    </li>
                    <li>
                        <strong>Suporte:</strong> informações enviadas por você em formulários de contato
                        (ex.: mensagem e e-mail para retorno).
                    </li>
                </ul>
            </section>

            <section className="pp__section">
                <h2>3. Como usamos seus dados</h2>
                <ul>
                    <li>Fornecer e manter as funcionalidades do aplicativo (dashboard, listas e status).</li>
                    <li>Permitir autenticação, segurança e prevenção de uso indevido.</li>
                    <li>Responder solicitações de suporte e comunicação operacional.</li>
                    <li>Melhorar o produto (ex.: ajustes de desempenho e correções).</li>
                </ul>
            </section>

            <section className="pp__section">
                <h2>4. Compartilhamento</h2>
                <p>
                    Não vendemos seus dados. Podemos utilizar provedores de infraestrutura (ex.: hospedagem,
                    banco de dados, envio de e-mail) para operar o serviço. Esses provedores processam dados
                    apenas conforme necessário para entregar a operação.
                </p>
            </section>

            <section className="pp__section">
                <h2>5. Armazenamento e segurança</h2>
                <p>
                    Aplicamos práticas de segurança para proteger as informações. Ainda assim, nenhum sistema
                    é 100% infalível. Recomendamos que você utilize senhas fortes e mantenha seus acessos
                    protegidos.
                </p>
            </section>

            <section className="pp__section">
                <h2>6. Cookies e tecnologias similares</h2>
                <p>
                    Podemos utilizar cookies e/ou armazenamento local para manter sua sessão e preferências.
                    Se você não quiser, pode configurar seu navegador para restringir cookies, o que pode
                    afetar algumas funcionalidades.
                </p>
            </section>

            <section className="pp__section">
                <h2>7. Seus direitos</h2>
                <ul>
                    <li>Solicitar acesso, correção ou atualização de dados.</li>
                    <li>Solicitar exclusão da conta e dos dados associados, quando aplicável.</li>
                    <li>Revogar consentimentos quando a base legal for consentimento.</li>
                </ul>
            </section>

            <section className="pp__section">
                <h2>8. Retenção</h2>
                <p>
                    Mantemos os dados enquanto sua conta estiver ativa ou enquanto for necessário para
                    cumprir obrigações legais/operacionais. Você pode solicitar exclusão quando desejar.
                </p>
            </section>

            <section className="pp__section">
                <h2>9. Contato</h2>
                <p>
                    Se tiver dúvidas sobre esta Política, fale com a gente:{" "}
                    <a className="pp__link" href={`mailto:${contactEmail}`}>
                        {contactEmail}
                    </a>
                </p>
            </section>

            <footer className="pp__footer">
                <p className="pp__disclaimer">
                    Este texto é uma base de política de privacidade para MVP e pode ser ajustado conforme o
                    {` ${appName} `} evoluir (ex.: analytics, integrações, notificações e novas features).
                </p>
            </footer>
        </main>
    );
}