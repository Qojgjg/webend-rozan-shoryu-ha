declare var window: any
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setWeb3Provider, setAddress, setChainId, resetWeb3Provider, walletDetail } from "./walletsetupSlice"
import { useCallback, useEffect, useReducer, useState } from 'react'
import { ethers } from 'ethers'
import { useMoralis, useWeb3Contract } from 'react-moralis'

let rpcEndpoint = process.env.RINKEBY_RPC_URL


let mockBUSD_address = "0x24864e07224489eCB3D56A84961b960f1B167777"
const mockBUSDABI = require("../../assets/abi/mockBUSDABI.json")
let crypteriumProxy_address = "0xaABdaA76368225Eee00f149f9079B91332CA0aB6"
const crypteriumImpABI = require("../../assets/abi/crypterium_b1_impABI.json")

let airdropWallet = "0xabf003De1d15B744DAd6418f326016c68CD7662f"

// https://github.com/MoralisWeb3/react-moralis
// https://github.com/ethereum-boilerplate/ethereum-boilerplate
function WalletConnectMoralis() {
    const [hasMetamask, setHasMetamask] = useState(false)
    const { enableWeb3, isWeb3Enabled } = useMoralis()
    const { data, error, runContractFunction, isFetching, isLoading } = useWeb3Contract({
        abi: mockBUSDABI,
        contractAddress: mockBUSD_address,
        functionName: "balanceOf",
        params: {
            account: airdropWallet
        }
    })

    const wallet = useAppSelector(walletDetail);
    const dispatch = useAppDispatch();
    console.log(wallet);

    const loadConnector = useCallback(async function () {
        try {
            dispatch(setAddress({ address: "6556" }))
        } catch (err) {
            console.log(err)
        }
    }, [])

    useEffect(() => {
        if (typeof window.ethereum !== "undefined") {
            setHasMetamask(true)
            console.log('MetaMask is installed!');
            loadConnector()
        }
    }, [])
    console.log(data)
    console.log(error)
    return (
        <>
            <div>WalletConnectMoralis</div>
            {hasMetamask
                ? isWeb3Enabled
                    ? "Connected! "
                    : <button id="connectButton" onClick={() => enableWeb3()}>Connect</button>
                : "Please install metamask"
            }

            {isWeb3Enabled
                ? <button id="connectButton" onClick={() => runContractFunction()}>Execute</button>
                : "Please connected"
            }
            {data &&
                <pre>
                    {JSON.stringify(data)}
                </pre>
            }
            {error &&
                <pre>
                    {JSON.stringify(error)}
                </pre>
            }
        </>
    )
}

export default WalletConnectMoralis