import { createSlice } from "@reduxjs/toolkit";

const initialContacts ={
  items: [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  { id: 'id-5', name: 'Gordon Dikson', number: '228-98-28' },
],}

export const itemsSlice = createSlice({
  name: 'items',
  initialState: initialContacts,
  reducers: {
    addItems: ({items}, {payload}) => {
      items.push(payload);
    },
    delItems: ({items}, {payload}) => {
      items = items.filter(item => item.id !== payload);
    },
  },
});

export const {addItems, delItems} = itemsSlice.actions;

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    updateFilter: (state, action) => action.payload,
  },
});

export const {updateFilter} = filterSlice.actions;
