import { NavLink } from "react-router";
import './Nav.css';

interface menuItems {
    id: number;
    link: string;
    name: string;
}

export default function Nav() {
    const items: menuItems[] = [
        { id: 1, link: "/", name: "Início" },
        { id: 2, link: "/projetos", name: "Projetos" },
        { id: 3, link: "/contato", name: "Contato" }
    ]

    return (
        <>
            <nav className="menu-items">
                {items.map((value) => (
                    <NavLink key={value.id} to={value.link} className="menu-item not-btn" end>{value.name}</NavLink>
                ))}
            </nav>
        </>
    )
}