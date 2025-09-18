import {Api} from "../../api/api";
import {finishedGameAC, incrementCross, incrementZero, modalWithChampActiveAC, setChamp} from "../store";
import {getScore} from "./getScore";
import {getDate} from "../../utils/getDate";

export const sendGame = (winner) => {
    return async dispatch => {
        // Определим победиля в переменную для отображения его в отправляемом объекте
        let winnerX = true;
        if(winner === 'o'){winnerX = false}

        // Установим текущую дату в нужном формате
        const dateString = getDate()

        //Итоговый объект для отправки
        const finishedGame = {
            cross: winnerX,
            circle: !winnerX,
            date: dateString
            }
        // Отправляем результат игры
        const response = await Api.addNewGame(finishedGame)
        console.log(response)
        // Перезагружаем поле и обновляем счет
        dispatch(finishedGameAC())
        dispatch(setChamp(winner))
        dispatch(modalWithChampActiveAC())
        dispatch(getScore())
        if(winner === 'x'){
            console.log(1)
            dispatch(incrementCross())
        }else{
            console.log(2)
            dispatch(incrementZero())
        }

    }
}