import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {modalReducer} from "./modalReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    modal: modalReducer,
})

export type RootState = ReturnType<typeof rootReducer>