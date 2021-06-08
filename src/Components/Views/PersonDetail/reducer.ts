import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PersonDetailState {
  name: string;
  birthYear: string;
  gender: string;
  filmIDs: Array<string>;
}

const initialState: PersonDetailState = {
  name: "",
  birthYear: "",
  gender: "",
  filmIDs: [],
};

const personDetailSlice = createSlice({
  name: "personDetail",
  initialState,
  reducers: {
    updatePersonDetail: (state, action: PayloadAction<PersonDetailState>) => {
      return action.payload;
    },
  },
});

export const { updatePersonDetail } = personDetailSlice.actions;

export default personDetailSlice.reducer;
