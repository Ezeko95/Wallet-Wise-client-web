import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface User {
  id: number;
  name: string;
  email: string;
  picture: string;
  premium: boolean;
  active: boolean;
  suspensionEndDate: Date;
  createdAt: string;
  updatedAt: string;
  balance: {
    total: number
  };
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await axios.get<User[]>('/user');
    return response.data;
  } catch (error:any) {
    throw new Error(error.message);
  }
});

// export const fetchUsersDetail = createAsyncThunk('users/fetchUsersDetail', async (id: number) => {
//   try {
//     const response = await axios.get<User[]>(`/user/${id}`);
//     return response.data;
//   } catch (error: any) {
//     throw new Error(error.message);
//   }
// });

// export const fetchUsersByName = createAsyncThunk('users/fetchUsersByName', async (name: string) => {
//   try {
//     const response = await axios.get<User[]>(`/user?${name}`);
//     return response.data;
//   } catch (error:any) {
//     throw new Error(error.message);
//   }
// });