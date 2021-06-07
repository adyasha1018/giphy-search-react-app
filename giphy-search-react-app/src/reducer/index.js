import {combineReducers} from "redux";
import GiphyReducer from "./giphy";

const rootReducer = combineReducers({
    giphys: GiphyReducer
})


export default rootReducer;
