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
        name: ""
    },  
    reducers: {
    },
    extraReducers: {
        [fetchUsers.fulfilled]: (state, action) => {
            return {
                data: action.payload, 
                status: "success",
            }
        },
        [fetchUsers.pending]: (state, action) => {
            return {
                ...state,
                status: "loading",
            }
        },
        [fetchUsers.rejected]: (state, action) => {
            return {
                ...state.data,
                status: "error",
            }
        }
    }
  
  })

  export default usersSlice.reducer
