declare var window: any
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setWeb3Provider, setAddress, setChainId, resetWeb3Provider, walletDetail } from "./walletsetupSlice"
import { useCallback, useEffect, useReducer, useState } from 'react'
import { ethers } from 'ethers'

let rpcEndpoint = process.env.RINKEBY_RPC_URL


let mockBUSD_address = "0x24864e07224489eCB3D56A84961b960f1B167777"
const mockBUSDABI = require("../../assets/abi/mockBUSDABI.json")
let crypteriumProxy_address = "0xaABdaA76368225Eee00f149f9079B91332CA0aB6"
const crypteriumImpABI = require("../../assets/abi/crypterium_b1_impABI.json")

function WalletConnectPlain() {
    const [hasMetamask, setHasMetamask] = useState(false)
    const [isConnected, setIsConnected] = useState(false)
    // const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner | null>(null)

    const wallet = useAppSelector(walletDetail);
    const dispatch = useAppDispatch();
    console.log(wallet);

    useEffect(() => {
        if (typeof window.ethereum !== "undefined") {
            setHasMetamask(true)
            console.log('MetaMask is installed!');
        }
    }, [])

    const loadConnector = useCallback(async function () {
        if (typeof window.ethereum !== "undefined") {
            try {
                //@ts-ignore
                await ethereum.request({ method: "eth_requestAccounts" });
                setIsConnected(true)

                //@ts-ignore
                const accounts = (await ethereum.request({ method: "eth_accounts" }))[0].toString();
                dispatch(setAddress({ address: accounts }))

            } catch (err) {
                console.log(err)
            }
        } else {
            setIsConnected(false)
        }
    }, [])

    const execute = useCallback(async function () {
        if (typeof window.ethereum !== "undefined") {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            let signer = await provider.getSigner()
            console.log(await signer.getAddress())

            var mockBUSD = new ethers.Contract(mockBUSD_address, mockBUSDABI, signer)
            var crypterium = new ethers.Contract(crypteriumProxy_address, crypteriumImpABI, signer)
            try {
                // console.log(mockBUSD.interface)
                // console.log(signer)
                console.log(await mockBUSD.connect(signer).name())
                console.log(await crypterium.connect(signer).name())
            } catch (err) {
                console.log(err)
            }
        }
    }, [])

    return (
        <>
            <div>WalletConnectPlain</div>
            <p>{wallet.address}</p>
            {/* <p>{signer?.provider?.connection?.url.toString()}</p> */}

            {hasMetamask ? (
                isConnected ? (
                    "Connected! "
                ) : (
                    <button id="connectButton" onClick={loadConnector}>Connect</button>
                )
            ) : (
                "Please install metamask"
            )}

            <br />
            {isConnected
                ? <button id="executeButton" onClick={execute}>execute</button>
                : "please connect"
            }
        </>
    )
}

export default WalletConnectPlain