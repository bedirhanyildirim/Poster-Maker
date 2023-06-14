import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    },
  },
})

export const { setIsLoggedIn } = auth.actions
export default auth.reducer