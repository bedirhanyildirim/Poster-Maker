import { configureStore } from '@reduxjs/toolkit'

import auth from './auth.jsx'

const store = configureStore({
  reducer: {
    auth
  },
})

export default store