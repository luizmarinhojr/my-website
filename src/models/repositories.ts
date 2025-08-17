export interface Owner {
    id: number;
    avatar_url: string;
    html_url: string;
    login: string;
}

export interface Repo {
    id: number;
    name: string;
    description: string;
    full_name: string;
    owner: Owner;
    html_url: string;
    homepage: string;
    language: string;
    updated_at: string;
}

export type Repos = Repo[];