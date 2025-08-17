import './HomePage.css';

function HomePage() {


    return (
        <>
            <main>
                <div className="container-fluid gradient">
                    <div className="container text-center hg">
                        <h1 className="white">Luiz Marinho. Codificando o futuro, do design à funcionalidade</h1>
                        <p className="white">Visualize os projetos executados</p>
                        <a className="button-call" href="/exercicios">Projetos</a>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="container-bt hg">
                        <div className="a-side">
                            <h1>Bem vindo ao repositório de conteúdo</h1>
                        </div>
                        <div className="b-side">
                            <p>Acesse todas as atividades e fique por dentro de tudo!</p>
                            <a className="button-call" href="/exercicios">Atividades</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomePage;