import { format } from "date-fns";
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
                        <p className="white">{repo.owner.login}</p>
                    </a>
                    <span>{format(new Date(repo.updated_at), 'dd/MM/yyyy')} - {repo.language}</span>
                </section>
                <div className="buttons">
                    <a className="button-call grow text-center" href={repo.html_url} target="_blank">Acessar código</a>
                    {repo.homepage &&
                        <a className="button-call grow text-center white" href={repo.homepage} target="_blank">Acessar pronto</a>
                    }
                </div>
            </div>
        </>
    )
}