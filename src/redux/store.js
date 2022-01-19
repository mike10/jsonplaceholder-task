import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './usersSlice'
import postsSlice from './postsSlice'
import albumsSlice from './albumsSlice'

export const store = configureStore({
  reducer: {
      users: usersSlice,
      posts: postsSlice,
      albums: albumsSlice
  },
})