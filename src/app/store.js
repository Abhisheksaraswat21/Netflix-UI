import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import { createStore, applyMiddleware } from 'redux';

export const store = configureStore({
  reducer: {
    user: userReducer,
  }, 
});


