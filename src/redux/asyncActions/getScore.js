import {Api} from "../../api/api";
import {getScoreGamesAC, setApiErrorMessageAC} from "../store";

export const getScore =  () => {

    return async dispatch => {
        const score = {
            cross: 0,
            zero: 0
        }
        const arrayGames = await Api.getGames();
        if(!Array.isArray(arrayGames)){
            dispatch(setApiErrorMessageAC(arrayGames))
            return
        }
        for (let scoreGame of arrayGames) {
            if(scoreGame.circle){
                score.zero += 1
            }else{
                score.cross += 1
            }
        }
        dispatch(getScoreGamesAC({scoreCross:score.cross, scoreZero: score.zero }))
    }

}