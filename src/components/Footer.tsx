import './Footer.css';
import logo from '../assets/logo-luiz-dev.png';

function Footer() {
    return (
        <>
            <footer>
                <div className="container-bt align-start">
                    <div className="column">
                        <a className="not-btn" href="/"><img src={logo} width="202px" height="43px" style={{ marginTop: "15px" }} /></a>
                    </div>
                    <div className="column">
                        <p><b>Redes Sociais</b></p>
                        <a href="https://github.com/luizmarinhojr" target="_blank">Github</a>
                        <a href="https://linkedin.com/luizmarinhojr" target="_blank">Linkedin</a>
                    </div>
                    <div className="column">
                        <p><b>Contato</b></p>
                        <a href="https://api.whatsapp.com/send/?phone=5521998868487&text=Ol%C3%A1%2C+vi+o+seu+curr%C3%ADculo&type=phone_number&app_absent=0" target="_blank">Whatsapp</a>
                        <a href="mailto:luizmarinhodev@gmail.com" target="_blank">E-mail</a>
                    </div>
                    <div className="column">
                        <p><b>Principais projetos</b></p>
                        <a href="https://github.com/luizmarinhojr/forum-hub-back-end" target="_blank">Back-end Java</a>
                        <a href="https://github.com/luizmarinhojr/gnome-gdrive-sync-integration" target="_blank">Gnome Drive Sync</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;