import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk('users', async () => {
    let resp = await fetch(`https://jsonplaceholder.typicode.com/users`);
    let result = await resp.json()
    return result
})

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        status: undefined,
    },  
    reducers: {
    },
    extraReducers: {
        [fetchUsers.fulfilled]: (state, action) => {
            state.data = action.payload
            state.status = "success"
        },
        [fetchUsers.pending]: (state, action) => {
            state.status = "loading"
        },
        [fetchUsers.rejected]: (state, action) => {
            state.status = "error"
        }
    }
  
  })

  export default usersSlice.reducer
