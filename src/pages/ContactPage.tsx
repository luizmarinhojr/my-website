import { useState } from 'react';
import './ContactPage.css';
import { useIMask } from 'react-imask';
import PostContactForm from '../services/FormService';

export interface formContact {
    name: string;
    email: string;
    whatsapp?: string;
    message: string;
}

export default function ContactPage() {
    const { ref, maskRef } = useIMask({
        mask: '(00) 0 0000-0000',
        definitions: {
            '0': /[0-9]/
        }
    })

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
    const [popupMessage, setPopupMessage] = useState<string>('');
    const [popupIsError, setPopupIsError] = useState<boolean>(false);

    const submitForm = () => {
        const data: formContact = {
            name: name,
            email: email,
            whatsapp: maskRef.current?.value,
            message: message
        }
        console.log(data);

        try {
            PostContactForm(data);

            setPopupMessage('Formulário enviado com sucesso!');
            setPopupIsError(false);

            setName('');
            setEmail('');
            setMessage('');
            if (maskRef.current) {
                maskRef.current.typedValue = '';
            }

        } catch (error) {
            // Se houver um erro na requisição
            console.error(`Erro no envio do formulário: ${error}`);
            setPopupMessage('Ocorreu um erro ao enviar o formulário. Tente novamente.');
            setPopupIsError(true);
        } finally {
            setIsPopupVisible(true); // Mostra o popup
        }
    }

    const closePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <>
            <main>
                <div className="container">
                    <h1 className="white">Entre em contato</h1>
                    <form action={submitForm}>
                        <div className="form-section">
                            <label htmlFor="name">Seu nome <span className="required">*</span></label>
                            <input type="text" id="name" placeholder="Digite seu nome" maxLength={50} value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="email">Seu e-mail <span className="required">*</span></label>
                            <input type="email" id="email" placeholder="Digite seu e-mail" maxLength={150} value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="whatsapp">Seu whatsapp <span className="required">*</span></label>
                            <input ref={ref as React.Ref<HTMLInputElement>} type="text" id="whatsapp" placeholder="Digite seu número de whatsapp" required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="message">Sua mensagem <span className="required">*</span></label>
                            <textarea rows={10} id="message" placeholder="Digite sua mensagem" maxLength={600} value={message} onChange={(e) => setMessage(e.target.value)} required />
                        </div>
                        <div className="form-section">
                            <input type="submit" id="enviar" value="Enviar" />
                        </div>
                    </form>

                    {isPopupVisible && (
                        <div className={`popup ${popupIsError ? 'popup-error' : 'popup-success'}`}>
                            <div className="popup-content">
                                <span className="close-btn" onClick={closePopup}>&times;</span>
                                <p>{popupMessage}</p>
                            </div>
                        </div>
                    )}
                </div>

            </main>
        </>
    )
}