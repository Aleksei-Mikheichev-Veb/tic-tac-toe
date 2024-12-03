import {Api} from "../../api/api";
import {finishedGameAC, modalWithChampActiveAC, setChamp} from "../store";
import {getScore} from "./getScore";
import {getDate} from "../../utils/getDate";

export const sendGame = (winner) => {
    return async dispatch => {
        // Определим победиля в переменную для отображения его в отправляемом объекте
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
        // Отправляем результат игры
        const response = await Api.addNewGame(finishedGame)
        console.log(response)
        // Перезагружаем поле и обновляем счет
        dispatch(finishedGameAC())
        dispatch(setChamp(winner))
        dispatch(modalWithChampActiveAC())
        dispatch(getScore())
    }
}