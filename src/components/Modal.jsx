import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from 'emailjs-com';

const Modal = () => {
    
    function contactClose() {
        document.body.classList.remove("contact__open")
    }

    const form = useRef()
    const contact = (e) => {
        e.preventDefault() /* since forms by default refresh page */
        const loading = document.querySelector('.modal__overlay--loading')
        const success = document.querySelector('.modal__overlay--success')
        loading.classList += " modal__overlay--visible"
        emailjs 
            .sendForm(
                'service_m1vgo5n',
                'template_og8pegb',
                form.current,
                'DeltiihXjEe1s6iW1'
            ).then(() => { /* need this since we have to wait for the server*/
                loading.classList.remove("modal__overlay--visible")
                success.classList += " modal__overlay--visible"
            }).catch(() => { /* for error/timeouts */
                loading.classList.remove("modal__overlay--visible")
                alert(
                    "The E-mail service is temporarily unavailable. Please contact me directly on majdrammal2001@gmail.com"
                )
            })
    }

    return (
        <div className="modal">
            <div className="modal__contact">
                <FontAwesomeIcon icon="fa-solid fa-x" className="modal__closer" onClick={contactClose}/>
                <h3 className="modal__title">
                    Let's have a chat!
                </h3>
                <h3 className="modal__sub-title">
                    I'm currently open to new opportunities.
                </h3>
                <form ref={form} className="contact__form" onSubmit={contact}>
                    <div className="form__item">
                        <label className="form__item--label">Name</label>
                        <input type="text" name="user_name" className="input" required></input>
                    </div>
                    <div className="form__item">
                        <label className="form__item--label">Email</label>
                        <input type="email" name="user_email" className="input" required></input>
                    </div>
                    <div className="form__item">
                        <label className="form__item--label">Message</label>
                        <textarea type="text" name="message" className="input" required></textarea>
                    </div>
                    <button className="form__submit">
                        Send it my way
                    </button>
                </form>
                <div className="modal__overlay modal__overlay--loading">
                    <FontAwesomeIcon icon="fa-solid fa-spinner" />
                </div>
                <div className="modal__overlay modal__overlay--success">
                    Thanks for the message! Looking forward to speaking to you soon.
                </div>
            </div>
        </div>
    );
}

export default Modal;
