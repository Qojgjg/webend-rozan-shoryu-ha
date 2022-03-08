declare var window: any
import Head from "next/head";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setWeb3Provider, setAddress, setChainId, resetWeb3Provider, walletDetail } from "./walletsetupSlice"
import { useCallback, useEffect, useReducer, useState } from 'react'
import { ethers } from 'ethers'
import { useWeb3React } from "@web3-react/core"
import { InjectedConnector } from '@web3-react/injected-connector'
import { NoEthereumProviderError } from '@web3-react/injected-connector'
import { UserRejectedRequestError } from '@web3-react/injected-connector'

const injected = new InjectedConnector({ supportedChainIds: [4, 97] })
let mockBUSD_address = "0x24864e07224489eCB3D56A84961b960f1B167777"
const mockBUSDABI = require("../../assets/abi/mockBUSDABI.json")
let crypteriumProxy_address = "0xaABdaA76368225Eee00f149f9079B91332CA0aB6"
const crypteriumImpABI = require("../../assets/abi/crypterium_b1_impABI.json")

//https://github.com/NoahZinsmeister/web3-react/tree/v6/docs/connectors
function WalletConnectWeb3React() {
    const { activate, active, chainId, account, library: provider, error } = useWeb3React()
    const isNoEthereumProviderError = error instanceof NoEthereumProviderError
    const isUserRejectedRequestError = error instanceof UserRejectedRequestError
    // console.log(isNoEthereumProviderError)
    // console.log(isUserRejectedRequestError)

    const wallet = useAppSelector(walletDetail);
    const dispatch = useAppDispatch();
    console.log(wallet);

    const [hasMetamask, setHasMetamask] = useState(false);

    useEffect(() => {
        if (typeof window.ethereum !== "undefined") {
            setHasMetamask(true);
        }
    }, [])

    useEffect(() => {
        if (active) {
            dispatch(setAddress({ address: account }))
        }
    }, [active])

    const loadConnector = async () => {
        if (typeof window.ethereum !== "undefined") {
            try {
                //connect to Injected Provider
                await activate(injected);
                setHasMetamask(true);
            } catch (e) {
                console.log(e);
            }
        }
    }

    const execute = async () => {
        if (active) {
            const signer = provider.getSigner();
            var mockBUSD = new ethers.Contract(mockBUSD_address, mockBUSDABI, signer)
            var crypterium = new ethers.Contract(crypteriumProxy_address, crypteriumImpABI, signer)

            try {
                console.log(await mockBUSD.connect(signer).name())
                console.log(await crypterium.connect(signer).name())
            } catch (err) {
                console.log(err)
            }

        } else {
            console.log("Please install MetaMask");
        }
    }

    return (
        <div>
            {hasMetamask ? (
                active ? (
                    "Connected! "
                ) : (
                    <button onClick={loadConnector}>Connect</button>
                )
            ) : (
                "Please install metamask"
            )}

            {active ? <button onClick={execute}>Execute</button> : "please connect"}

            <p>{account}</p>
            <p>{active.toString()}</p>
            <p>{chainId}</p>
        </div>
    )
}

export default WalletConnectWeb3React

