import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { useRouter } from 'next/router'
import abi from '../assets/abi/transactionABI.json'
import { client } from '../lib/sanityClient'

const contractABI = abi.abi
const contractAddress = '0xa0F2EC2FBb680b56E7Eb5bC00EDD9d326A75Ed72'

export const TransactionContext = React.createContext()

let eth
if (typeof window !== 'undefined') {
    eth = window.ethereum
}

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(eth)
    const signer = provider.getSigner()
    const transactionContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer,
    )

    return transactionContract
}

export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        addressTo: '',
        amount: '',
    })

    const router = useRouter()

    useEffect(() => {
        checkIfWalletConnected()
    }, []) //everytime boose

    useEffect(() => {
        if (!currentAccount) return
            ; (async () => {
                const userDoc = {
                    _type: 'users',
                    _id: currentAccount,
                    userName: 'Unnamed',
                    address: currentAccount,
                }

                await client.createIfNotExists(userDoc)
            })()
    }, [currentAccount])

    const connectWallet = async (metamask = eth) => {
        try {
            if (!metamask) return alert("please install metamask")
            let accounts = await metamask.request({ method: "eth_requestAccounts" })
            setCurrentAccount(accounts[0])
        } catch (e) {
            console.error(e)
            throw new Error('No Ethereum Object')
        }
    }

    const checkIfWalletConnected = async (metamask = eth) => {
        try {
            if (!metamask) return alert("please install metamask")
            let accounts = await metamask.request({ method: "eth_accounts" })
            if (accounts.length) {
                setCurrentAccount(accounts[0])
                console.log("Wallet is already connected")
            }
        } catch (e) {
            console.error(e)
            throw new Error('No Ethereum Object')
        }
    }

    const saveTransaction = async (
        txHash,
        amount,
        fromAddress = currentAccount,
        toAddress,) => {
        const txDoc = {
            _type: 'transactions',
            _id: txHash,
            fromAddress: fromAddress,
            toAddress: toAddress,
            timestamp: new Date(Date.now()).toISOString(),
            txHash: txHash,
            amount: parseFloat(amount),
        }

        await client.createIfNotExists(txDoc)

        await client
            .patch(currentAccount) //linke relation, make sure user are did created or patch notthing
            .setIfMissing({ transactions: [] })
            .insert('after', 'transactions[-1]', [ // append to referenc array
                {
                    _key: txHash,
                    _ref: txHash,
                    _type: 'reference',
                },
            ])
            .commit()

        return
    }

    const sendTransaction = async (metamask = eth, connectedAccount = currentAccount) => {
        try {
            if (!metamask) return alert("please install metamask")
            const { addressTo, amount } = formData
            const transactionContract = getEthereumContract()

            const parsedAmount = ethers.utils.parseEther(amount)
            await metamask.request({
                method: "eth_sendTransaction",
                params: [
                    {
                        from: connectedAccount,
                        to: addressTo,
                        gas: '0x7EF40', // 520000 Gwei
                        value: parsedAmount._hex,
                    }
                ]
            })

            const transactionHash = await transactionContract.publishTransaction(
                addressTo,
                parsedAmount,
                `Transferring ETH ${parsedAmount} to ${addressTo}`,
                'TRANSFER',
            )
            setIsLoading(true)

            await transactionHash.wait()

            await saveTransaction(
                transactionHash.hash,
                amount,
                connectedAccount,
                addressTo,
            )

            setIsLoading(false)
        } catch (err) {
            console.error(err)
            throw new Error('No Ethereum Object')
        }
    }

    const handleChange = (e, name) => {
        setFormData(prev => ({ ...prev, [name]: e.target.value }))
    }

    useEffect(() => {
        if (isLoading) {
            router.push(`/?loading=${currentAccount}`)
        } else {
            router.push(`/`)
        }
    }, [isLoading])

    return (
        <TransactionContext.Provider
            value={{
                currentAccount,
                connectWallet,
                sendTransaction,
                handleChange,
                formData,
                isLoading
            }}
        >
            {children}
        </TransactionContext.Provider>
    )
}

