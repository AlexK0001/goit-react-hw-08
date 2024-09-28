import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { logOut } from '../auth/operations';

export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => contacts?.filter(contact =>
    contact.name?.toLowerCase().includes(filter?.toLowerCase())
  )
);
const initialState ={
   items: [],
   loading: false,
   error: null
  }
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(fetchContacts.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
    })
    .addCase(fetchContacts.rejected, (state) => {
      state.loading = false;
      state.error = true;
    })
    .addCase(addContact.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload);
      state.loading = false;
    })
    .addCase(addContact.rejected, (state) => {
      state.loading = false;
      state.error = true;
    })
    .addCase(deleteContact.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.items = state.items.filter(
        (contacts) => contacts.id !== action.payload.id
      );
      state.loading = false;
    })
    .addCase(logOut.fulfilled, (state) =>{
        state = {
            items: [],
            loading: false,
            error: null
        }
    })
    .addCase(deleteContact.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  }
});
export default contactsSlice.reducer;