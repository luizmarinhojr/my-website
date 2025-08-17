import { useState } from 'react';
import './Header.css';
import Nav from './Nav';
import hamburguer from '../assets/menu-svgrepo-com.svg';
import logo from '../assets/logo-luiz-dev.png';

function Header() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toogleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    }

    const closeMenu = () => {
        setIsMenuVisible(false);
    }

    return (
        <>
            <header>
                <div className="container-header">
                    <div className="logo">
                        <img src={hamburguer} id="hamburguer-menu" onClick={toogleMenu} width="30px" height="30px" />
                        <a className="not-btn" href="/"><img src={logo} width="202px" height="43px" /></a>
                    </div>
                    <div className="menu">
                        <Nav onCloseMenu={closeMenu} />
                    </div>
                </div>

                <div id="modal" className={`${isMenuVisible ? 'visible' : ''}`}>
                    <div className="modal-header">
                        <div className="logo">
                            <img src={hamburguer} id="hamburguer-menu" onClick={toogleMenu} width="30px" height="30px" />
                            <img src={logo} width="202px" height="43px" />
                        </div>

                        <div className="modal-menu">
                            <Nav onCloseMenu={closeMenu} />
                        </div>
                    </div>

                    <div className="modal-footer">
                        <a href="https://api.whatsapp.com/send/?phone=5521998868487&text=Ol%C3%A1%2C+vi+o+seu+curr%C3%ADculo&type=phone_number&app_absent=0" target="_blank">Whatsapp</a>
                        <a href="mailto:luizmarinhodev@gmail.com" target="_blank">E-mail</a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;