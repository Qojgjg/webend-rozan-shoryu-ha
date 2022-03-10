import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CgProfile } from 'react-icons/cg'
import { users } from '../../assets/dummieData/users.js'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { userLanguage, userSigned, signedSet } from '../../features/usersetup/usersetupSlice';

const style = {
    wrapper: `flex flex-col w-full`,
    menuItem: `flex w-full p-5 pr-5 hover:bg-gray-100 items-center cursor-pointer`,
    menuName: `ml-3 text-[1rem] font-medium text-gray-500`
}

export default function WalletMenu() {
    let user = users[1]

    const dispatch = useAppDispatch();
    const isSigned = useAppSelector(userSigned);

    const setSigned = () => {
        dispatch(signedSet(true))
    };


    return (
        <div className={style.wrapper}>
            <div className='p-5 pr-5 flex text-gray-600 flex w-full border-t border-gray-300'>
                <div className="w-full flex ">
                    <div className="relative">
                        {isSigned
                            ? (
                                <Image src={user.img}
                                    objectFit="cover"
                                    className="rounded-full cursor-pointer"
                                    height={30}
                                    width={30}
                                />
                            ) : (
                                <CgProfile className="text-3xl" />
                            )}
                    </div>
                    <span className="ml-2 text-[1.2rem]" >My Wallet</span>
                </div>
            </div>
            <div className='p-3 pr-5 flex text-gray-600 flex w-full border-b border-t border-gray-300'>
                <span className="text-base"> Connect with one of our available wallet providers or create a new one.</span>
            </div>
            <div className="flex flex-col border-b border-gray-300">
                <div className={style.menuItem} onClick={() => setSigned()}>
                    <div className="flex items-center">
                        <Image src="/assets/images/icon/metaMask-logo.png"
                            objectFit="cover"
                            className="rounded-full "
                            height={30}
                            width={30}
                        />
                    </div>
                    <span className={style.menuName}>Metamask</span>
                </div>
                <div className={style.menuItem}>
                    <div className="flex items-center">
                        <Image src="/assets/images/icon/coinbase-logo.png"
                            objectFit="cover"
                            className="rounded-full cursor-pointer"
                            height={30}
                            width={30}
                        />
                    </div>
                    <span className={style.menuName}>Coinbase</span>
                </div>
                <div className={style.menuItem}>
                    <div className="flex items-center">
                        <Image src="/assets/images/icon/walletconnect-logo.png"
                            objectFit="cover"
                            className="rounded-full cursor-pointer"
                            height={30}
                            width={30}
                        />
                    </div>
                    <span className={style.menuName}>Wallet Connect</span>
                </div>
            </div>
            {/* <div className="w-full p-5 pr-5 border-b border-gray-200">
                <div className='flex w-full items-center'>
                    <button
                        type="button"
                        className="h-10 rounded-md w-full bg-blue-500 hover:bg-blue-900"
                        aria-expanded="false"
                        onClick={() => setSigned()}
                    >
                        Connect
                    </button>
                </div>
            </div> */}
        </div >
    )
}
