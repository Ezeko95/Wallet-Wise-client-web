import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducer/COUNTERsLICE';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;