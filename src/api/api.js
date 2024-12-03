import axios from "axios";

export const Api = {
    getGames: async () => {
        try{
            const response = await axios.get('https://api.ohotaktiv.ru/api/v2/test_front/index.php')
            return response.data
        }
        catch(e){
            return e.message
        }
    },
    addNewGame: async (game) => {
        try{
            const response = await axios.post('https://api.ohotaktiv.ru/api/v2/test_front/index.php', game)
            console.log(response)
            return response
        }
        catch(e){
            return e.message
        }
    }
}