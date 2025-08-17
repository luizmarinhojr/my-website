import { NavLink } from "react-router";
import './Nav.css';

interface menuItems {
    id: number;
    link: string;
    name: string;
}

interface NavProps {
    onCloseMenu: () => void;
}

export default function Nav({ onCloseMenu }: NavProps) {
    const items: menuItems[] = [
        { id: 1, link: "/", name: "Início" },
        { id: 2, link: "/projetos", name: "Projetos" },
        { id: 3, link: "/contato", name: "Contato" }
    ]

    return (
        <>
            <nav className="menu-items">
                {items.map((value) => (
                    <NavLink key={value.id} to={value.link} className="menu-item not-btn" onClick={onCloseMenu} end>{value.name}</NavLink>
                ))}
            </nav>
        </>
    )
}