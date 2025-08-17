import './Header.css';
import Nav from './Nav';

function Header() {
    return (
        <>
            <header>
                <div className="container-header">
                    <div className="logo">
                        <a className="not-btn" href="/"><img src="/src/assets/logo-luiz-dev.png" width="202px" height="43px" /></a>
                    </div>
                    <div className="menu">
                        <Nav />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;