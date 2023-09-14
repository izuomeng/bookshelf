import { configureStore } from '@reduxjs/toolkit';
import bookshelfReducer from './features/bookshelf/bookshelfSlice';

export const store = configureStore({
  reducer: {
    bookshelf: bookshelfReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
