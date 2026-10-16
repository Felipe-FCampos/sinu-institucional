export default function MainHero() {
    return (
        <section className="hero">
            <div className="container hero-grid mainhero">
                <h1>Comece hoje gratuitamente e seja um beta tester de nosso app!</h1>
                <p>Baixe a versão para celular, ou acesse diretamente pelo navegador. Comece a gerenciar suas despesas de maneira rápida e fácil sem nenhuma planilha!</p>
                <p>Para testes mais rápidos é recomendado o acesso pela web.</p>
                <div className="hero-ctas">
                    <a href="/download/sinu-v2.18.19.apk"
                        download="sinu-v2.18.19.apk">
                        <button className="btn btn-primary">Baixar versão Beta v2.18.19</button>
                    </a>
                    <a href="https://sinuapp.com" className="webbutton">
                        <button className="btn btn-primary">Acessar pela web</button>
                    </a>
                </div>
                <p>A versão de download está disponível apenas para Android.</p>
            </div>
        </section>
    );
}
