import { useEffect, useState } from 'react'
import { client } from '../../lib/sanityClient'
import { TransactionContext } from '../../context/TransactionContext'
import { useContext } from 'react'
import Image from 'next/image'
import ethLogo from '../../assets/ethCurrency.png'
import { FiArrowUpRight } from 'react-icons/fi'

const style = {
    wrapper: `h-full text-white select-none h-full w-screen flex-1 pt-14 flex items-end justify-end pb-12 overflow-scroll px-8`,
    txHistoryItem: `bg-[#191a1e] rounded-lg px-4 py-2 my-2 flex items-center justify-end`,
    txDetails: `flex items-center`,
    toAddress: `text-[#f48706] mx-2`,
    txTimestamp: `mx-2`,
    etherscanLink: `flex items-center text-[#2172e5]`,
}

function TransactionHistory() {
    const { isLoading, currentAccount } = useContext(TransactionContext)
    const [transactionHistory, setTransactionHistory] = useState<any[]>([])

    useEffect(() => {
        ; (async () => {
            if (!isLoading && currentAccount) {
                // check type users and id pick last 4 of transaction list and order it by timestamp in {"transactionList"}
                const query = `*[_type=="users" && _id == "${currentAccount}"] {
                    "transactionList": transactions[]->{amount, toAddress, timestamp, txHash}|order(timestamp desc)[0..4]
                }`

                const clientRes = await client.fetch(query)

                setTransactionHistory(clientRes[0]?.transactionList)
            }

        })()
    }, [isLoading, currentAccount])

    return (
        <div className={style.wrapper}>
            <div>
                {transactionHistory &&
                    transactionHistory?.map((tx, i) => (
                        <div className={style.txHistoryItem} key={i}>
                            <div className={style.txDetails}>
                                <Image src={ethLogo} height={20} width={15} alt='eth' />
                                {tx.amount} Ξ sent to{' '}
                                <span className={style.toAddress}>
                                    {tx.toAddress.substring(0, 6)}...
                                </span>
                            </div>{' '}
                            on{' '}
                            <div className={style.txTimestamp}>
                                {new Date(tx.timestamp).toLocaleString('en-US', {
                                    timeZone: 'PST',
                                    hour12: true,
                                    timeStyle: 'short',
                                    dateStyle: 'long',
                                })}
                            </div>
                            <div className={style.etherscanLink}>
                                <a
                                    href={`https://rinkeby.etherscan.io/tx/${tx.txHash}`}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={style.etherscanLink}
                                >
                                    View on Etherscan
                                    <FiArrowUpRight />
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TransactionHistory