declare var window: any
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setWeb3Provider, setAddress, setChainId, resetWeb3Provider, walletDetail } from "./walletsetupSlice"
import { useCallback, useEffect, useReducer, useState } from 'react'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import WalletConnectProvider from "@walletconnect/web3-provider"

let mockBUSD_address = "0x24864e07224489eCB3D56A84961b960f1B167777"
const mockBUSDABI = require("../../assets/abi/mockBUSDABI.json")
let crypteriumProxy_address = "0xaABdaA76368225Eee00f149f9079B91332CA0aB6"
const crypteriumImpABI = require("../../assets/abi/crypterium_b1_impABI.json")

// https://github.com/scaffold-eth/scaffold-eth
function WalletConnectWeb3Modal() {
    //hook
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(false)
    const [isConnected, setIsConnected] = useState(false);
    const [hasMetamask, setHasMetamask] = useState(false);
    const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner | undefined>(undefined);

    //redux
    const wallet = useAppSelector(walletDetail);
    const dispatch = useAppDispatch();
    const { provider, web3Provider, address, chainId } = useAppSelector(walletDetail)


    useEffect(() => {
        if (typeof window.ethereum !== "undefined") {
            setHasMetamask(true);
        }
    }, []);


    //provider
    let web3Modal: Web3Modal
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                rpc: { 97: process.env.BSC_TESTNET_RPC_URL }
            }
        }
    }
    if (typeof window !== "undefined") {
        web3Modal = new Web3Modal({
            cacheProvider: false,
            // disableInjectedProvider: true,
            providerOptions, // required
            theme: {
                background: "rgb(39, 49, 56)",
                main: "rgb(199, 199, 199)",
                secondary: "rgb(136, 136, 136)",
                border: "rgba(195, 195, 195, 0.14)",
                hover: "rgb(16, 26, 32)"
            }
        });
    }

    const loadConnector = async () => {
        if (typeof window.ethereum !== "undefined") {
            try {
                const modalProvider = await web3Modal.connect()
                setIsConnected(true);
                const Web3modalProvider = new ethers.providers.Web3Provider(modalProvider);
                let Web3modaSigner = Web3modalProvider.getSigner()
                setSigner(Web3modaSigner);

                const network = await Web3modalProvider.getNetwork()

                dispatch(setWeb3Provider({
                    provider: modalProvider,
                    web3Provider: Web3modalProvider,
                    address: await Web3modaSigner.getAddress(),
                    chainId: network.chainId
                }))
            } catch (err) {
                console.log(err)
            }
        } else {
            setIsConnected(false);
        }
    }

    async function execute() {
        if (typeof window.ethereum !== "undefined" && signer) {
            var mockBUSD = new ethers.Contract(mockBUSD_address, mockBUSDABI, signer)
            var crypterium = new ethers.Contract(crypteriumProxy_address, crypteriumImpABI, signer)
            try {
                console.log(await mockBUSD.connect(signer).name())
                console.log(await crypterium.connect(signer).name())
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log("Please install MetaMask");
        }
    }

    return (
        <>
            <main>
                <div>WalletConnectWeb3Modal</div>
                <p>{wallet.address}</p>
                <p>{wallet.chainId}</p>
                {true ? (
                    isConnected ? (
                        "Connected! "
                    ) : (
                        <button onClick={() => loadConnector()}>Connect</button>
                    )
                ) : (
                    "Please install metamask"
                )}

                {isConnected ? <button onClick={() => execute()}>Execute</button> : ""}
            </main>
        </>
    )
}

export default WalletConnectWeb3Modal