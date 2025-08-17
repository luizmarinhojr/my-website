import { useEffect, useState } from "react"
import type { Repos } from "../models/repositories";
import { Card } from "./Card";
import { fetchRepos } from "../services/RepositorieService";

export function CardList() {
    const [repositories, setRepositories] = useState<Repos>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getRepos = async () => {
            const data = await fetchRepos();
            const sortedData = [...data].sort((a, b) => {
                const dateA = new Date(a.updated_at).getTime();
                const dateB = new Date(b.updated_at).getTime();
                return dateB - dateA;
            });

            setRepositories(sortedData);
            setLoading(false);
        };

        getRepos();
    }, []);


    if (loading) {
        return <div>Carregando repositórios...</div>;
    }

    return (
        <>
            <div className="cards">
                {repositories.map((repo) => (
                    <Card key={repo.id} repo={repo} />
                ))}
            </div>
        </>
    )
}