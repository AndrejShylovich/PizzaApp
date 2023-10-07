import axios from 'axios'

export const getAllPizzas = () => async dispatch => {
    dispatch({type:'GET_PIZZAS_REQUEST'})
    
    try {
        const responce = await axios.get('http://localhost:8000/api/pizzas/getallpizzas')
        console.log(responce)
        dispatch({type:'GET_PIZZAS_SUCCESS' , payload: responce.data})
    }
    catch (err) {
        dispatch({type:'GET_PIZZAS_FAILED' , payload: err})
    }  
}