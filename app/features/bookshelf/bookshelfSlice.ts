import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IBook {
  id: string;
  name: string;
  price: string;
  category: string;
}

const initialState = {
  books: [{ id: '1', name: 'Three Body', price: '$1.45', category: 'fiction' }] as IBook[]
};

export const counterSlice = createSlice({
  name: 'bookshelf',
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<IBook>) => {
      state.books.push(payload);
    },
    remove: (state, { payload }: PayloadAction<string>) => {
      state.books = state.books.filter((book) => book.id !== payload);
    },
    update: (state, { payload }: PayloadAction<IBook>) => {
      const book = state.books.find((book) => book.id === payload.id);
      if (book) {
        book.name = payload.name;
        book.price = payload.price;
        book.category = payload.category;
      }
    }
  }
});

export const { add, remove, update } = counterSlice.actions;

export default counterSlice.reducer;
