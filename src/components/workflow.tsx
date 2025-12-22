export default function Workflow() {
    return (
        <section id="como-funciona" className="section">
            <div className="container">
                <h2 className="section-title">Três passos e pronto.</h2>
                <p className="section-sub">O fluxo é simples porque o Sinu é feito pra ser simples.</p>

                <div className="steps">
                    <div className="card step">
                        <div className="num">1</div>
                        <h3 style={{ margin: '0 0 8px' }}>Cadastre suas assinaturas</h3>
                        <p className="a">Nome, valor e frequência. Só o necessário.</p>
                    </div>
                    <div className="card step">
                        <div className="num">2</div>
                        <h3 style={{ margin: '0 0 8px' }}>O Sinu organiza automaticamente</h3>
                        <p className="a">Atualiza status e mantém tudo coerente com o tempo.</p>
                    </div>
                    <div className="card step">
                        <div className="num">3</div>
                        <h3 style={{ margin: '0 0 8px' }}>Você decide com clareza</h3>
                        <p className="a">Veja o que manter, cortar e priorizar — sem ruído.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}