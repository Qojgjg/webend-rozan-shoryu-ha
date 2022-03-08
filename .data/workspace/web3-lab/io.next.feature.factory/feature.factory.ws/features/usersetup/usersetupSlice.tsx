import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';


export interface UsersetupState {
  language: string;
  scrollHeight: number;
  isHamburgerOn: boolean;
}

const initialState: UsersetupState = {
  language: "en",
  scrollHeight: 0,
  isHamburgerOn: false,
};

export const usersetupSlice = createSlice({
  name: 'usersetup',
  initialState,
  reducers: {
    languageSet: (state, action) => {
      state.language = action.payload
    },
    scrollHeightSet: (state, action) => {
      state.scrollHeight = action.payload
    },
    hamburgerOnSet: (state, action) => {
      state.isHamburgerOn = action.payload
    }
  },
});

export const { languageSet, scrollHeightSet, hamburgerOnSet } = usersetupSlice.actions;
export const userLanguage = (state: RootState) => state.usersetup.language;
export const userScrollHeight = (state: RootState) => state.usersetup.scrollHeight;
export const userIsHamburgerOn = (state: RootState) => state.usersetup.isHamburgerOn;
export default usersetupSlice.reducer;