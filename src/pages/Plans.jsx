import React from "react";
import '../App.css';
import PlanBox from "../components/PlanBox";

const Plans = () => {
    return (
        <>
            <div className="hero">
                <div className="hero-content">
                    <div className="hero-row">
                        <PlanBox title="Plan Nutricional">
                            <p className="medium-text">Servicios incluidos</p>
                            <ul className="planbox-list">
                                <li>Asesoria nutricional dedicada</li>
                                <li>Plan de comidas personalizadas</li>
                                <li>Asesoria de suplementos</li>
                                <li>Asesoria de estilo de vida</li>
                            </ul>
                            <div className="planbox-footer">

                                <p>*Para informacion de precio, favor de contactarme.</p>
                            </div>
                        </PlanBox>
                        <PlanBox title="Plan de Entrenamiento">
                            <p className="medium-text">Sevicios incluidos</p>
                            <ul className="planbox-list">
                                <li>Rutina personalizada de ejercicios</li>
                                <li>Plan de comidas personalizadas</li>
                                <li>Asesoria de entrenamiento</li>
                                <li>Asesoria de suplementos</li>
                                <li>Asesoria de estilo de vida</li>
                                <li>Asesoria de salud</li>
                                <li>Videos personalizados de tu rutina</li>
                            </ul>
                            <div className="planbox-footer">
                                <p >*Para informacion de precio, favor de contactarme.</p>
                            </div>

                        </PlanBox>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Plans;