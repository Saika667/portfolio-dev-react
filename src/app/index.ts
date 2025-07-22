import { configureStore } from '@reduxjs/toolkit';
import animationReducer from '../feature/animationSlice';
import uiReducer from '../feature/uiSlice';

export const store = configureStore({
  reducer: {
    animation: animationReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 