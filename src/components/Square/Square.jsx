// import React, { useState } from 'react';
// import styles from './Square.module.css';
// import cross from './../../assets/Cross.svg';
// import zero from './../../assets/Circle.svg';
//
// const Square = ({ value, setValueSquare }) => {
//     let flag;
//     if (value) {
//         flag = value;
//     }
//
//     const isClassAdded, setIsClassAdded = useState(false);
//
//     const handleClick = () => {
//         setValueSquare(flag);
//         setIsClassAdded(!isClassAdded);
//     };
//
//     let classN = 'img';
//     if (isClassAdded) {
//         classN.push('active');
//     }
//
//     return (
//         <div className={styles.neon_blue}>
//             <button className={styles.square} onClick={handleClick}>
//                 {flag === 'x' && <img src={cross} alt="" className={classN.join(' ')} />}
//                 {flag === 'o' && <img src={zero} alt="" className={classN.join(' ')} />}
//             </button>
//         </div>
//     );
// };
//
// export default Square;

import React, {useEffect, useState} from 'react';
 import  './Square.css'
import cross from './../../assets/Cross.svg';
import zero from './../../assets/Circle.svg';
import {useSelector} from "react-redux";

const Square = ({ value, setValueSquare }) => {
    const finishedGame = useSelector(state => state.finishedGame)
    const [isClassAdded, setIsClassAdded] = useState(false);

    const handleClick = () => {
        if(finishedGame){return}
        setValueSquare();
        setIsClassAdded(true);
    };
    return (
        <div className={'neon_blue'}>
            <button className={'square'} onClick={handleClick}>
                {value && value === 'x' && <img src={cross} alt="" />}
                {value && value === 'o' && <img src={zero} alt="" />}

            </button>
        </div>
    );
};

export default Square;
// import React, {useEffect, useState} from 'react';
//  import  './Square.css'
// import cross from './../../assets/Cross.svg';
// import zero from './../../assets/Circle.svg';
// import {useSelector} from "react-redux";
// // import styles from "./module.css";
//
// const Square = ({ value, setValueSquare }) => {
//     const finishedGame = useSelector(state => state.finishedGame)
//     const [isClassAdded, setIsClassAdded] = useState(false);
//     let flag;
//     if (value) {
//         flag = value;
//     }
//
//     const handleClick = () => {
//         if(finishedGame){return}
//         setValueSquare();
//         setIsClassAdded(true);
//     };
//     let classN = ['img'];
//     if (isClassAdded) {
//             classN.push('active');
//     }
//     return (
//         <div className={'neon_blue'}>
//             <button className={'square'} onClick={handleClick}>
//                 {flag === 'x' && <img src={cross} alt="" className={classN.join(' ')} />}
//                 {flag === 'o' && <img src={zero} alt="" className={classN.join(' ')} />}
//
//             </button>
//         </div>
//     );
//
// };
//
// export default Square;