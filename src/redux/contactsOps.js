import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66ec10ee2b6cf2b89c5d15f3.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
      try {
        const res = await axios.get("/contacts");
        return res.data;
      } catch (error) {
        console.error(error);
        return thunkAPI.rejectWithValue();
      }
    }
  );

  export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, thunkAPI) => {
      try {
        const res = await axios.post("/contacts", newContact);
        return res.data;
      } catch (error) {
        console.error(error);
        return thunkAPI.rejectWithValue();
      }
    }
  );

  export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactsId, thunkAPI) => {
      try {
        const res = await axios.delete(`/contacts/${contactsId}`);
        return res.data;
      } catch (error) {
        console.error(error);
        return thunkAPI.rejectWithValue();
      }
    }
  );