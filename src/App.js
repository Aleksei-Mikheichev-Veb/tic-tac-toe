import './App.css';
import Board from "./components/Board/Board";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {checkWinner} from "./utils/checkWinner";
import {getScore} from "./redux/asyncActions/getScore";
import {sendGame} from "./redux/asyncActions/sendGame";
import MyButton from "./components/UI/MyButton/MyButton";
import {finishedGameAC, resetGameAC} from "./redux/store";
import MyPopup from "./components/UI/MyPopup/MyPopup";

function App() {
    // State который необходим
    const state = useSelector(state => state)
    const dispatch = useDispatch()


    // Получим счет на пернвой отрисовке
    useEffect(()=>{
        dispatch(getScore())
    },[])


    // Проверяем есть ли победитель после сделанного шага
    useEffect(()=>{
        const winner = checkWinner(state.squares)
        if(winner){
            dispatch(sendGame(winner))
        }
    },[state.squares])


    // Начать новую игру
    const startNewGame = () => {
        dispatch(resetGameAC())
        dispatch(finishedGameAC())
    }
  return (
    <div className="App">
        <h1>Счет игры</h1>
        {state.apiErrorMessage
        ? <div className='error'>Извините при запросе счета произошла ошибка: {state.apiErrorMessage}</div>
        :  <div className="score">
                <p>X</p>
                <div>{state.scoreGames.scoreCross} : {state.scoreGames.scoreZero}</div>
                <p>0</p>
            </div>
        }
      <Board />
        {state.finishedGame && <div className={'box'}><MyButton onClick={startNewGame}>Сыграть еще</MyButton></div>}
        {state.modalActive && <MyPopup>Победил {state.champ}</MyPopup>}
    </div>
  );
}

export default App;
