import { Link } from "react-router-dom";

export default function Faq() {
    return (
        <section id="faq" className="section">
            <div className="container">
                <h2 className="section-title">FAQ</h2>
                <p className="section-sub">Respostas rápidas pras dúvidas mais comuns.</p>

                <div className="faq">
                    <div className="card">
                        <p className="q">O Sinu é um app ou site?</p>
                        <p className="a">Hoje o Sinu é web-first: funciona no navegador com experiência de app.</p>
                    </div>
                    <div className="card">
                        <p className="q">O Sinu conecta no meu banco?</p>
                        <p className="a">No momento, o foco é controle manual simples e confiável.</p>
                    </div>
                    <div className="card">
                        <p className="q">Se eu pago anual, ele calcula por mês?</p>
                        <p className="a">Sim. O Sinu converte tudo para equivalente mensal.</p>
                    </div>
                    <div className="card">
                        <p className="q">Tem notificações?</p>
                        <p className="a">Podemos usar alertas por e-mail no web-first. Push fica para depois.</p>
                    </div>
                </div>

                <div className="card" style={{ marginTop: '18px', display: 'flex', justifyContent: 'space-between', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div>
                        <h3 style={{ margin: '0 0 6px' }}>Tenha clareza sobre seus gastos recorrentes.</h3>
                        <p className="section-sub" style={{ margin: 0 }}>Organize em minutos e comece a enxergar o essencial.</p>
                    </div>
                <Link className="btn btn-primary" to="https://sinuapp.netlify.app">Acessar app</Link>
                </div>
            </div>
        </section>
    )
}