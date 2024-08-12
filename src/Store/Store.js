import { configureStore } from "@reduxjs/toolkit";
import wordsReducer from '../Words/wordsSlice.js'

export const store = configureStore({
    reducer:{
        words: wordsReducer,
       
    }
})