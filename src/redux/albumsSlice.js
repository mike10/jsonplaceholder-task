import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchAlbums = createAsyncThunk('albums', async (userId) => {
    let resp = await fetch(`https://jsonplaceholder.typicode.com/albums/${userId.id}/photos`);
    let result = await resp.json()
    return result
})


const albumsSlice = createSlice({
    name: 'albums',
    initialState: {
        data: [],
        status: undefined,
    },  
    reducers: {
    },
    extraReducers: {
        [fetchAlbums.fulfilled]: (state, action) => {
            state.data = action.payload
            state.status = "success"
        },
        [fetchAlbums.pending]: (state, action) => {
            state.status = "loading"
        },
        [fetchAlbums.rejected]: (state, action) => {
            state.status = "error"
        }
    }
  
  })

  export default albumsSlice.reducer
  