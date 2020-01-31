import { combineReducers } from "redux";
import GenderReducer from "./GenderReducer";
import PostsReducer from "./PostsReducer"

const rootReducer = combineReducers({
    gender: GenderReducer,
    like: PostsReducer,
});

export default rootReducer;
