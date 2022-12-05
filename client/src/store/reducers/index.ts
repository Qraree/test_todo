import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {modalReducer} from "./modalReducer";
import {uiReducer} from "./uiReducer";
import {tasksReducer} from "./tasksReducer";
import {globalReducer} from "./globalReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    modal: modalReducer,
    ui: uiReducer,
    tasks: tasksReducer,
    global: globalReducer,
})

export type RootState = ReturnType<typeof rootReducer>