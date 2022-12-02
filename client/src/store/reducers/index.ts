import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {modalReducer} from "./modalReducer";
import {uiReducer} from "./uiReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    modal: modalReducer,
    ui: uiReducer
})

export type RootState = ReturnType<typeof rootReducer>