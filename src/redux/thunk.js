import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://648987a55fa58521caafc3ac.mockapi.io/api/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_URL, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      // console.log(data);
      const response = await fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // console.log(response);
      // console.log(data);
      return await response.json();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      // console.log(id);
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
      });
      // console.log(response);
      return await response.json();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
