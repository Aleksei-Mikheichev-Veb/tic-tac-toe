import React from 'react';
import './MyPopup.css'
import {useDispatch} from "react-redux";
import {modalWithChampActiveAC} from "../../../redux/store";

const MyPopup = ({children}) => {
    const dispatch = useDispatch()

    return (
        <div onClick={() => dispatch(modalWithChampActiveAC())} className={'popup'}>
            <div onClick={(e) => e.stopPropagation()} className="popup__content">
                {children}
            </div>
        </div>
    );
};

export default MyPopup;