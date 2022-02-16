import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk('post', async (userId) => {
    let resp = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId.id}`);
    let result = await resp.json()
    return result
})


const postsSlice = createSlice({
    name: 'post',
    initialState: {
        data: [],
        status: undefined,
    },  
    reducers: {
    },
    extraReducers: {
        [fetchPosts.fulfilled]: (state, action) => {
            state.data = action.payload
            state.status = "success"
        },
        [fetchPosts.pending]: (state, action) => {
            state.status = "loading"
        },
        [fetchPosts.rejected]: (state, action) => {
            state.status = "error"
        }
    }
  
  })

  export default postsSlice.reducer
  