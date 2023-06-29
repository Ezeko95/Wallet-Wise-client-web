import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, fetchUsersDetail, fetchUsersByName } from '../actions/index';
import {User} from "../actions/index"

interface UsersState {
  users: User[];
  userDetail: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  userDetail: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching users';
      })
      .addCase(fetchUsersDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsersDetail.fulfilled, (state, action) => {
        state.userDetail = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUsersDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching user detail';
      })
      .addCase(fetchUsersByName.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsersByName.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUsersByName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching user detail';
      });
  },
});

export default usersSlice.reducer;
