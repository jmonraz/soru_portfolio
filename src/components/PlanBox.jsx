import React from "react";
import style from './PlanBox.module.css';

const PlanBox = ({ children, title }) => {
    return (
        <>
            <div className={style['planbox']}>
                <div className={style['planbox-row']}>
                    <p>
                        {title}
                    </p>
                </div>
                <div className={style["planbox-col"]}>
                    {children}
                </div>
            </div>
        </>

    );
};

export default PlanBox;