import './HomePage.css';

function HomePage() {


    return (
        <>
            <main>
                <div className="container-fluid gradient">
                    <div className="container text-center hg">
                        <h1 className="white">Luiz Marinho. Codificando o futuro, do design à funcionalidade</h1>
                        <p className="white">Desenvolvendo softwares que unem o que há de mais moderno em tecnologia</p>
                        <a className="button-call" href="/exercicios">Conhecer Projetos</a>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="container-bt hg">
                        <div className="a-side">
                            <h1 className="white">Transformando Ideias em Experiências Digitais</h1>
                            <p className="white">Criando aplicações web intuitivas e robustas, do conceito inicial ao produto final. Onde a inovação se encontra com a usabilidade.</p>
                        </div>
                        <div className="b-side">
                            <img className="photo" src="/src/assets/boy-programming-no-bg.png" />
                        </div>
                    </div>
                </div>

                <div className="container-fluid bg-dark">
                    <div className="container-bt hg">
                        <div className="c-side">
                            <img className="photo" src="/src/assets/computer-system-no-bg.png" />
                        </div>
                        <div className="d-side">
                            <h1 className="white">Soluções Full Stack Completas para o Seu Negócio</h1>
                            <p className="white">Cuidando de todas as etapas do desenvolvimento, do design do front-end à lógica complexa do back-end, garantindo uma solução de ponta a ponta.</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomePage;