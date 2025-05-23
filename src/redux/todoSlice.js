import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  currentTodo: null,
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const deleteId = action.payload;
      state.items = state.items.filter(todo => todo.id !== deleteId);
    },
    setCurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
    updateTodo: (state, action) => {
      const updatedTodo = action.payload;
      const index = state.items.findIndex(todo => todo.id === updatedTodo.id);
      if (index !== -1) {
        state.items[index] = updatedTodo;
      }
      state.currentTodo = null;
    },
    cancelEditTodo: state => {
      state.currentTodo = null;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  cancelEditTodo,
  setCurrentTodo,
  updateTodo,
} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
