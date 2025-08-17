import { CardList } from "../components/CardList";

function ProjectsPage() {
    return (
        <>
            <main>
                <section className="container-fluid gradient">
                    <div className="container">
                        <h1 style={{ color: 'white' }}>Projetos</h1>
                    </div>
                </section>

                <section className="container-fluid">
                    <div className="container hg">
                        <CardList />
                    </div>
                </section>
            </main>
        </>
    )
}

export default ProjectsPage;