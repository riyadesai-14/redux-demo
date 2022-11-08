import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./user/UserReducer"
import postsReducer from "./posts/postsReducer"

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer, 
    user: userReducer,
    post: postsReducer
})
export default rootReducer