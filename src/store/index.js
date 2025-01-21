import { createStore, applyMiddleware } from "redux"
import { thunk } from "redux-thunk"; 

const initialState = {
    dataMovies: [],
    dataCoba: "aku terpanggil",
    movieDetail: {}
}

const reducer = (state = initialState, action) => {
    console.log(action, "action sampai reducer");
    
    switch (action.type) {

        case "CHANGE_DATA_MOVIES":
            return { ...state, dataMovies: action.payload }
    
        case "CHANGE_DETAIL":
            return { ...state, movieDetail: action.payload}   
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk))
export default store