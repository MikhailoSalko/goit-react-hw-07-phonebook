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
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return await response.json();
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
