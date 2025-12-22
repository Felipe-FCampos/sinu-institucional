export default function Hero() {
    return (
        <section className="hero">
            <div className="container hero-grid">
                <div>
                    <h1 className="h1">Controle suas assinaturas sem planilhas.</h1>
                    <p className="p">
                        O Sinu organiza seus serviços, calcula seu custo mensal real e mostra, com clareza,
                        o que está ativo, o que vence e o que já passou do prazo.
                    </p>
                    <div className="cta-row">
                        <a className="btn btn-primary" href="/app">Começar agora</a>
                        <a className="btn btn-ghost" href="#como-funciona">Ver como funciona</a>
                    </div>
                    <div className="micro">Web-first. Simples. Sem complicação.</div>

                    <div className="kpis">
                        <div className="card kpi">
                            <strong>Clareza</strong>
                            <span>Resumo do cenário em segundos</span>
                        </div>
                        <div className="card kpi">
                            <strong>Controle</strong>
                            <span>Status e organização automática</span>
                        </div>
                        <div className="card kpi">
                            <strong>Prioridade</strong>
                            <span>Favoritos para o que importa</span>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h3 style={{ margin: '0 0 10px' }}>O que você vê no dashboard</h3>
                    <p className="section-sub" style={{ margin: '0 0 16px' }}>
                        Total mensal estimado, contagem por status e suas assinaturas favoritas no topo.
                    </p>
                    <div className="card" style={{ boxShadow: 'none' }}>
                        <strong>Exemplo</strong>
                        <p className="section-sub" style={{ margin: '6px 0 0' }}>“Você gasta ~R$ 149/mês em assinaturas.”</p>
                    </div>
                </div>
            </div>
        </section>
    )
}