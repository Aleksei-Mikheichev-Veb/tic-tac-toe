import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import {thunk} from "redux-thunk";

const initialState = {
    nextX: true,
    scoreGames: {
        scoreCross: 0,
        scoreZero: 0
    },
    squares:Array(9).fill(null),
    apiErrorMessage: '',
    finishedGame: false,
    modalActive:false,
    champ:' '
}
const SET_WHO_IS_NEXT = 'SET_WHO_IS_NEXT';
const GET_SCORE_GAMES = 'GET_SCORE_GAMES';
const ADD_MADE_MOVE = 'ADD_MADE_MOVE';
const SET_API_ERROR_MESSAGE = 'SET_API_ERROR_MESSAGE';
const RESET_GAME = 'RESET_GAME';
const FINISHED_GAME = 'FINISHED_GAME';
const MODAL_WITH_CHAMP_ACTIVE = 'MODAL_WITH_CHAMP_ACTIVE';
const SET_CHAMP = 'SET_CHAMP';


const Reducer = (state= initialState, action) => {
    switch (action.type) {
        // Определим кто следующий ходит
        case SET_WHO_IS_NEXT: {
            return {...state, nextX: !state.nextX}
        }
        // Получим счет с сервера
        case GET_SCORE_GAMES:{
            return {
                ...state,
                scoreGames: {
                    ...state.scoreGames, scoreCross:action.payload.scoreCross, scoreZero: action.payload.scoreZero}
            }
        }
        // Добавим ход
        case ADD_MADE_MOVE: {
            const nextMove = state.nextX ? 'x' : 'o';
            const newSquares = structuredClone(state)
            newSquares.squares[action.payload] = nextMove
            return newSquares
        }
        // Установим текс ошибки если она есть
        case SET_API_ERROR_MESSAGE: {
            return {...state, apiErrorMessage: action.payload}
        }
        // Обновим поля доски
        case RESET_GAME :{
            const newSquares = structuredClone(state)
            newSquares.squares = Array(9).fill(null)
            return {...state,squares:Array(9).fill(null) }
        }
        // Установим модалке active
        case MODAL_WITH_CHAMP_ACTIVE: return {...state, modalActive: !state.modalActive}
        // Значение обознчающее, что текущая игра закончена, но новая еще не начата
        case FINISHED_GAME: return {...state, finishedGame: !state.finishedGame}
        // Установим победителя текущей игры
        case SET_CHAMP: return {...state, champ: action.payload}
        default: return state
    }
}
// Action creators
export const setWhoIsNextAC = () => ({type: SET_WHO_IS_NEXT})
export const getScoreGamesAC = (payload) => ({type: GET_SCORE_GAMES, payload})
export const addMadeMoveAC = (index) => ({type: ADD_MADE_MOVE, payload: index})
export const setApiErrorMessageAC = (message) => ({type:SET_API_ERROR_MESSAGE, payload:message})
export const resetGameAC = () => ({type:RESET_GAME })
export const finishedGameAC = () => ({type:FINISHED_GAME })
export const modalWithChampActiveAC = () => ({type:MODAL_WITH_CHAMP_ACTIVE })
export const setChamp = (champ) => ({type:SET_CHAMP, payload:champ })

export const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)))