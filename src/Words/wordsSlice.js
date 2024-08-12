import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL_WORDS = 'http://itgirlschool.justmakeit.ru/api/words';
const URL_ADDEDWORD = `/api/words/add`;

export const fetchWords = createAsyncThunk('words/fetchWords', async () => {
    const response = await axios.get(URL_WORDS);
    return response.data;
});

export const addNewWords = createAsyncThunk('words/addNewWord', async (initialWord) => {
    try {
        const response = await axios.post(URL_ADDEDWORD, initialWord);
        return response.data;
    } catch (err) {
        return err.message
    }
})

export const updateWords = createAsyncThunk('words/updateWords', async (initialWord) => {
    const { id } = initialWord;
    try {
        const response = await axios.post(`api/words/${id}/update`, initialWord);
        return response.data;
    } catch (error) {
        console.log('Words did not update: ', error);

    }
})

export const deleteWords = createAsyncThunk('words/deleteWords', async (initialWord) => {
    const { id } = initialWord;
    try {
        const response = await axios.post(`/api/words/${id}/delete`);
        if (response?.status === 200) return initialWord;
        return `${response?.status}: ${response?.statusText}`;
    } catch (error) {
        console.log(err.message);
        return err.message
    }
})

const initialState = {
    words: [],
    status: 'idle',
    error: null,
};

const wordsSlice = createSlice({
    name: 'words',
    initialState,
    reducers: {},

    extraReducers(builder) {
        builder
            .addCase(fetchWords.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchWords.fulfilled, (state, action) => {
                state.status = 'succeeded'
                console.log(action.payload);
                const loadedWords = action.payload.map(word => {
                    return word;
                })
                state.words = loadedWords
            })
            .addCase(fetchWords.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message;
            })
            .addCase(addNewWords.fulfilled, (state, action) => {
                console.log(action.payload);
                state.words.push(action.payload)
            })
            .addCase(updateWords.fulfilled, (state, action) => {

                if (!action.payload?.id) {
                    console.log('Update could not complete');
                    console.log(action.payload);
                    return;
                }

                const { id } = action.payload;
                const wordsList = state.words.filter(item => item.id !== id);
                state.words = [...wordsList, action.payload];
                console.log(wordsList);

            })
            .addCase(deleteWords.fulfilled, (state, action) => {

                if (!action.payload?.id) {
                    console.log('Delete could not complete');
                    console.log(action.payload);
                    return;
                }

                const { id } = action.payload;
                const wordList = state.words.filter(item => item.id !== id);
                state.words = wordList;
            })

    }
});

export const selectAllWords = (state) => state.words.words;
export const getWordsStatus = (state) => state.words.status;
export const getWordsError = (state) => state.words.error;

export default wordsSlice.reducer;