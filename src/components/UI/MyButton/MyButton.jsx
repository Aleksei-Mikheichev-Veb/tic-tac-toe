import React from 'react';
import style from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
    return (
        <div className={style.neon_blue}>
            <button {...props} className={style.button}>
                {children}
            </button>
        </div>
    );
};

export default MyButton;