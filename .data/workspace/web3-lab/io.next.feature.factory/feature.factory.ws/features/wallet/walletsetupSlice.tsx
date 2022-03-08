import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type StateType = {
    provider?: any | null
    web3Provider?: any | null
    address?: string | null
    chainId?: number | null
}

const initialState: StateType = {
    provider: null,
    web3Provider: null,
    address: null,
    chainId: null,
}

export const walletsetupSlice = createSlice({
    name: "wallet",
    initialState,
    reducers: {
        setWeb3Provider: (state, action: PayloadAction<StateType>) => {
            let copy = {
                ...state,
                provider: action.payload.provider,
                web3Provider: action.payload.web3Provider,
                address: action.payload.address,
                chainId: action.payload.chainId,
            };
            state.provider = copy.provider
            state.web3Provider = copy.web3Provider
            state.address = copy.address
            state.chainId = copy.chainId
        },
        setAddress: (state, action: PayloadAction<StateType>) => {
            let copy = {
                ...state,
                address: action.payload.address,
            };
            state.address = copy.address
        },
        setChainId: (state, action: PayloadAction<StateType>) => {
            let copy = {
                ...state,
                chainId: action.payload.chainId,
            };
            state.chainId = copy.chainId
        },
        resetWeb3Provider: (state) => {
            state.provider = null
            state.web3Provider = null
            state.address = null
            state.chainId = null
        },
    },
})

export const { setWeb3Provider, setAddress, setChainId, resetWeb3Provider } = walletsetupSlice.actions;
export const walletDetail = (state: RootState) => state.walletsetup;
export default walletsetupSlice.reducer;
