import {Api} from "../../api/api";
import {finishedGameAC, modalWithChampActiveAC, resetGameAC, setChamp} from "../store";
import {getScore} from "./getScore";
import {getDate} from "../../utils/getDate";

export const sendGame = (winner) => {
    return async dispatch => {
        // Определим победиля в переменную для отображения его в объекте
        let winnerX = false;
        if(winner === 'x'){winnerX = true}

        // Установим текущую дату в нужном формате
        const dateString = getDate()

        //Итоговый объект для отправки
        const finishedGame = {
            cross: winnerX,
            circle: !winnerX,
            date: dateString
            }
        console.log(finishedGame)
        // Отправляем запрос
        // const response = await Api.addNewGame(finishedGame)
        // console.log(response)
        // Перезагружаем поле и обновляем счет
        console.log('in api')
        dispatch(finishedGameAC())
        dispatch(modalWithChampActiveAC())
        dispatch(setChamp(winner))
        dispatch(getScore())
    }
}