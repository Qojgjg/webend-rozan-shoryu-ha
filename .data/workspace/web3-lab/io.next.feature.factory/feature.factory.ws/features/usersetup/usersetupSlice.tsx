import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';


export interface UsersetupState {
  language: string;
  scrollHeight: number;
  isHamburgerOn: boolean;
  isSigned: boolean;
  isSearchMatch: boolean;
  sideBar: {
    isOn: boolean,
    content: 'connect' | 'user' | ''
  };
  isWarnOn: boolean;
}

const initialState: UsersetupState = {
  language: "en",
  scrollHeight: 0,
  isHamburgerOn: false,
  isSigned: false,
  isSearchMatch: true,
  sideBar: {
    isOn: false,
    content: ''
  },
  isWarnOn: true
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
    },
    signedSet: (state, action) => {
      state.isSigned = action.payload
    },
    searchMatchSet: (state, action) => {
      state.isSearchMatch = action.payload.isOn
    },
    sideBarSet: (state, action) => {
      state.sideBar.isOn = action.payload.isOn
      state.sideBar.content = action.payload.content
    },
    warnOnSet: (state, action) => {
      state.isWarnOn = action.payload.isOn
    },
  },
});

export const { languageSet, scrollHeightSet, hamburgerOnSet, signedSet, sideBarSet, searchMatchSet, warnOnSet } = usersetupSlice.actions;
export const userLanguage = (state: RootState) => state.usersetup.language;
export const userScrollHeight = (state: RootState) => state.usersetup.scrollHeight;
export const userIsHamburgerOn = (state: RootState) => state.usersetup.isHamburgerOn;
export const userSigned = (state: RootState) => state.usersetup.isSigned;
export const userSearchMatch = (state: RootState) => state.usersetup.isSearchMatch;
export const userSideBar = (state: RootState) => state.usersetup.sideBar;
export const userWarning = (state: RootState) => state.usersetup.isWarnOn;
export default usersetupSlice.reducer;