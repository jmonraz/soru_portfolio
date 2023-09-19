import React, { useEffect, useState } from "react";
import style from './About.module.css';
import { useNavigate } from 'react-router-dom';

import gymImg from '../assets/gym_bg2.jpeg'
import soru1 from '../assets/imagen_1.jpg'
import soru2 from '../assets/imagen_2.jpg'

const About = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate("/Contacto");
    }

    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        setShouldAnimate(true);
    }, []);

    return (
        <>
            <div className={style['container']}>
                <div className={style['row']}>
                    <img src={gymImg} alt="gym_bg" className="banner" />
                </div>
                <div className={style['sub-container']}>
                    <div className={style['row']}>
                        <div className={style['col']}>
                            <img src={soru1} alt="soru_1" className={`${style['image-fade-in']} ${shouldAnimate && style['fade-in']}`} />
                        </div>
                        <div className={style['col']}>
                            <div className={style['about-content']}>
                                <h1>ACERCA DE MI</h1>
                                <p>
                                    Con más de una década de experiencia en la industria del fitness, me complace presentarme como tu
                                    dedicado entrenador personal. Actualmente, me enorgullece formar parte del distinguido equipo de
                                    Ultimate Fitness Center, después de exitosos periodos en reconocidos establecimientos como 24 Hour
                                    Fitness, Family Gym y Planet Fitness.
                                </p>
                                <p>
                                    Mi misión es simple pero profunda: transformar tu estilo de vida, ayudándote a evolucionar hacia la mejor
                                    versión de ti mismo. Aprovechando mi amplia experiencia y mi dedicación a esta disciplina, he tenido el
                                    privilegio de competir en tres torneos de culturismo distintos, lo que refuerza aún más mi compromiso con
                                    la excelencia.
                                </p>
                                <p>
                                    Mi trayectoria también se ha enriquecido gracias a colaboraciones con profesionales de la industria que
                                    han compartido generosamente su conocimiento, actuando como mentores y moldeando mi enfoque en el
                                    entrenamiento personal.
                                </p>
                                <p>
                                    Emprende este viaje transformador conmigo y, juntos, desbloquearemos tu verdadero potencial. Descubre el
                                    camino hacia un tú más saludable, más fuerte y con mayor confianza en ti mismo.
                                </p>
                            </div>
                        </div>
                        <div className={style['col']}>
                            <img src={soru2} alt="soru_2" className={`${style['image-fade-in']} ${shouldAnimate && style['fade-in']}`} />
                        </div>
                    </div>
                </div>
                <div className={style['footer']}>
                    <button className="main-button" onClick={onClick}>Empieza ahora</button>
                    <p className={style['footer-text']}>Soru Vargas, entrenamiento personal &copy; 2023</p>
                </div>
            </div >
        </>
    );
};

export default About;