import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchUsers } from '../actions/index';
import { User } from '../actions/index';

interface UsersState {
  users: User[];
  filteredUsers: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  filteredUsers: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    filterUsers: (state, action: PayloadAction<string>) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredUsers = state.users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.filteredUsers = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching users';
      });
  },
});

export const { filterUsers } = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users.users;
export const selectFilteredUsers = (state: RootState) => state.users.filteredUsers;
export const selectLoading = (state: RootState) => state.users.loading;
export const selectError = (state: RootState) => state.users.error;

export default usersSlice.reducer;
