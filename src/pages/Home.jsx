import React from "react";
import { useNavigate } from 'react-router-dom';
import graphIcon from '../assets/icons8-graph-50.png';
import runningIcon from '../assets/icons8-running-50.png';
import locationIcon from '../assets/icons8-location-64.png';
import '../App.css';

const Home = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate("/Contacto");
    }

    return (
        <>
            <div className="app-container">
                <div className="hero">
                    <div className="hero-content">
                        <div className="hero-content-col">
                            <p className="large-text">Transforma tu vida y desbloquea tu potencial con un entrenador personal dedicado a tu lado.</p>
                            <p className="caption-text">Yo, Soru Vargas, creo en que el ejercicio no es solo un destino, sino un habito que
                                cambiara tu vida. Juntos, crearemos un plan de acondicionamiento fisico personalizado
                                que se adapte a tus necesidades y objetivos únicos, ayudándote a convertirte en la mejor
                                versión de ti mismo.</p>
                            <button className="main-button" onClick={onClick}>Empieza ahora</button>
                        </div>
                        <div className="hero-footer">
                            <div className="footer-row">
                                <img src={graphIcon} className="icon" alt="graph_icon" />
                                <p className="small-text">Resultados constantes</p>
                            </div>
                            <div className="footer-row">
                                <img src={runningIcon} className="icon" alt="running_icon" />
                                <p className="small-text">Entrenamiento personal</p>
                            </div>
                            <div className="footer-row">
                                <img src={locationIcon} className="icon" alt="location_icon" />
                                <p className="small-text">San Diego</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;