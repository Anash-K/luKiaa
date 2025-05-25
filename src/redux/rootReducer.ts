import { combineReducers } from "@reduxjs/toolkit";
const dummyReducer = (state = {}, action) => state;
export const rootReducer = combineReducers({
     dummy: dummyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;