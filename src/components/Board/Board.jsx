import React, {useEffect, useState} from 'react';
import style from './Board.module.css'
import Square from "../Square/Square";
import {checkWinner} from "../../utils/checkWinner";
import {Api} from "../../api/api";
import {useDispatch, useSelector} from "react-redux";
import {addMadeMoveAC, setWhoIsNextAC} from "../../redux/store";

const Board = () => {

    const dispatch = useDispatch()
    const squares = useSelector(state => state.squares)


    const setValueSquare = (index) => {
        // Проверим заполнено ли поле
        if(squares[index]) {return}
        dispatch(addMadeMoveAC(index))
        dispatch(setWhoIsNextAC())
    }
    return (
        <div className={style.board}>
            {squares.map((square, index) => {
               return <Square key={index} value={square} setValueSquare={() => setValueSquare(index)}/>
            })}
        </div>
    );
};

export default Board;