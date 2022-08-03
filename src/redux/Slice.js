import { createSlice } from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import initialContacts from '../data/contacts.json';

// const initialContacts ={
//   items: [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   { id: 'id-5', name: 'Gordon Dikson', number: '228-98-28' },
// ],}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['items'],
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState:{
    items: initialContacts,
    filter: '',
  },
  reducers: {
    addItems: (state, {payload}) => {
      state.items.push(payload);
    },
    delItems: (state, {payload}) => {
      state.items = state.items.filter(item => item.id !== payload);
    },
    updateFilter: (state, {payload}) => {state.filter = payload},
  },
});

export const {addItems, delItems, updateFilter} = contactSlice.actions;

export const persistedReducer = persistReducer(persistConfig, contactSlice.reducer);
