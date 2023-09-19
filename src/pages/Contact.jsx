import React from "react";
import '../App.css';

const Contact = () => {
    return (
        <>
            <div className="app-container">
                <div className="hero">
                    <div className="hero-content">
                        <form className="contact-form">
                            <div className="form-container">
                                <p className="large-text">Contactame</p>
                                <div className="form-col">
                                    <label className="form-label">Nombre</label>
                                    <input className="form-input" type="text" name="name" />
                                    <label className="form-label">Apellido</label>
                                    <input className="form-input" type="text" name="lastname" />
                                    <label className="form-label">Correo</label>
                                    <input className="form-input" type="email" name="email" />
                                    <label className="form-label">Telefono</label>
                                    <input className="form-input" type="tel" name="phone" />
                                </div>
                            </div>
                        </form>
                        <div className="space">
                            <button className="main-button" >Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;