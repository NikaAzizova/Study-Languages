import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL_WORDS = 'http://itgirlschool.justmakeit.ru/api/words';

export const fetchWords = createAsyncThunk('words/fetchWords', async () => {
    const response = await axios.get(URL_WORDS);
    return response.data;
});

const initialState = {
    words: [],
    status: 'idle',
    error: null,
};

const wordsSlice = createSlice({
    name: 'words',
    initialState,
    reducers: {
        setData(state, action) {
            state.words = action.payload
        },

       // addData: {
           // reducer(state, action) {
           //     state.words.push(action.payload)
          //  }, prepare(english, russian, transcription) {
          //      return {
             //       payload: {
             //           id: nanoid,
              //          english,
              //          russian,
              //          transcription
               //     }
             //   }
          //  }

       // },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchWords.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchWords.fulfilled, (state, action) => {
                state.status = 'succeeded'
                console.log(action.payload);
                //state.posts.push(action.payload);
                const loadedPosts = action.payload.map(post => {
                    return post;
                })
                state.words = loadedPosts
            })
            .addCase(fetchWords.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message;
            })

    }
});

export const selectAllWords = (state) => state.words.words;
export const getWordsStatus = (state) => state.words.status;
export const getWordsError = (state) => state.words.error;

export const { setData } = wordsSlice.actions;
export default wordsSlice.reducer;