import type { Repo } from "../models/repositories";
import './Card.css';

interface CardProps {
    repo: Repo;
}

export function Card({ repo }: CardProps) {
    return (
        <>
            <div className="card-h">
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <section className="owner">
                    <a className="link" href={repo.owner.html_url}>
                        <img className="owner-pic" src={repo.owner.avatar_url} width="30px" height="30px" />
                        <p>{repo.owner.login}</p>
                    </a>
                    <span>{repo.language}</span>
                </section>
                <div className="buttons">
                    <a className={repo.homepage ? "button-call wd-50 text-center" : "button-call wd-100 text-center"} href={repo.html_url} target="_blank">Acessar código</a>
                    {repo.homepage &&
                        <a className="button-call wd-50 text-center dark" href={repo.homepage} target="_blank">Acessar pronto</a>
                    }
                </div>
            </div>
        </>
    )
}