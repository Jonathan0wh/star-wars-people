import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PeopleState {
  previousUrl: string | null;
  nextUrl: string | null;
  list: Array<{
    name: string;
    height: string;
    mass: string;
    birthYear: string;
    gender: string;
    filmsUrl: Array<string>;
  }>;
}

const initialState: PeopleState = {
  previousUrl: null,
  nextUrl: null,
  list: [],
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    updateCurrentList: (state, action: PayloadAction<PeopleState>) => {
      state = action.payload;
    },
  },
});

export const { updateCurrentList } = peopleSlice.actions;

export default peopleSlice.reducer;
