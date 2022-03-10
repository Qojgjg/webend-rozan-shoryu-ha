import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { userLanguage, hamburgerOnSet, userSearchMatch } from '../../../features/usersetup/usersetupSlice';
import { menu } from '../../../assets/option/navOption';
import { navLangData } from '../../../assets/data/languageData';
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowBack } from 'react-icons/io'
import SearchResult from "../../search/SearchResult"
import WalletMenu from '../../wallet/WalletMenu'
import UserMenu from '../../user/UserMenu'

const style = {
    mobileWrapper: `absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`,
    mobileHeaderConsole: `rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50`,
    mobileHeaderTop: `pt-5 pb-3 px-5 `,
    mobileHeaderTopItemHeader: `flex items-center justify-between`,
    mobileHeaderClose: `bg-white rounded-md p-2 inline-flex items-center justify-center text-blue-400 hover:text-blue-500 `,
    mobileHeaderTopMenu: `grid gap-y-8`,
    mobileHeaderTopMenuItem: `-m-3 p-3 flex items-center rounded-md hover:bg-gray-50`,
    mobileHeaderTopMenuItemIcon: `flex-shrink-0 h-6 w-6 text-indigo-600`,
    mobileHeaderTopMenuItemName: `ml-3 text-base font-medium text-gray-900`,
    mobileHeaderBottom: `py-6 px-5 space-y-6`,
    mobileHeaderBottomMenu: `grid grid-cols-2 gap-y-4 gap-x-8`,
    mobileHeaderBottomMenuItem: `text-base font-medium text-gray-900 hover:text-gray-700`,
    mobileHeaderBottomSigupButton: `w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700`,
    mobileHeaderBottomMsg: `mt-6 text-center text-base font-medium text-gray-500`,
    mobileHeaderBottomLink: `text-indigo-600 hover:text-indigo-500`,
}

const NFTMarketHeaderMobile = () => {
    const dispatch = useAppDispatch();
    const [selectorMenu, setSelectorMenu] = useState("none")

    const isMatched = useAppSelector(userSearchMatch);
    const lang = useAppSelector(userLanguage);
    let langFlag = lang.replace("-", "")

    const setHamburgerOff = () => {
        dispatch(hamburgerOnSet(false))
    };

    const menuSelector = (menu) => {
        if (menu == "none") {
            return DefaultMenu()
        } else if (menu == "explore" || menu == "stats" || menu == "resources") {
            return SubMenu(menu)
        } else if (menu == "wallet") {
            return WalletSubmenu()
        } else if (menu == "user") {
            return UserSubmenu()
        } else {
            return "Something wrong Mann!!"
        }

    }

    const DefaultMenu = () => {
        return (
            <div>
                {menu.map((item) => (
                    <div className="relative" key={item.id}>
                        {item.type == "menu"
                            ? (
                                <button
                                    type="button"
                                    onClick={() => setSelectorMenu(item.name)}
                                    className="py-3 flex w-full justify-between items-center rounded-md hover:bg-gray-50"
                                    aria-expanded="false"
                                >
                                    <span className="ml-7 py-3 text-base font-medium text-gray-900">{navLangData[item.name][langFlag]}</span>
                                    <div className='mr-7 text-2xl text-gray-400'>
                                        <IoIosArrowForward />
                                    </div>
                                </button>
                            ) : (
                                <Link href={`${item.path}`}>
                                    <a href="#" className="py-5 w-full flex items-center rounded-md hover:bg-gray-50">
                                        <span className="ml-7 text-base font-medium text-gray-900">{navLangData[item.name][langFlag]}</span>
                                    </a>
                                </Link>
                            )
                        }
                    </div>
                ))}
                <div className={style.mobileHeaderBottom}>
                    <div>
                        <a href="#"
                            onClick={() => setSelectorMenu('wallet')}
                            className={style.mobileHeaderBottomSigupButton}
                        > Connect Wallet </a>
                        <p className={style.mobileHeaderBottomMsg}>
                            Existing customer?
                            <a href="#"
                                onClick={() => setSelectorMenu('user')}
                                className={style.mobileHeaderBottomLink}
                            > user </a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    const SubMenu = (submenu) => {
        const subElement = menu.find((element) => element.name == submenu)
        return (
            <div className='relative'>
                <div onClick={() => setSelectorMenu("none")} className="py-3 flex justify-between items-center  hover:bg-gray-50 ">
                    <button type="button" className="ml-2 text-xl p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <IoIosArrowBack />
                        <span className="-mt-1 ml-1 text-xl font-medium">{navLangData[submenu][langFlag]}</span>
                    </button>
                </div>
                <div>
                    {subElement.list.map((subItem, k) => (
                        <div key={k} className="py-3 flex justify-between items-center rounded-md hover:bg-gray-50">
                            <Link href={`${subItem.path}`}>
                                <a href="#" className=" p-3 items-center rounded-md">
                                    <span className="ml-7 py-3 text-base font-medium text-gray-900">{navLangData[subItem.name][langFlag]}</span>
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

        )
    }

    const WalletSubmenu = () => {
        return (
            <div className='relative pb-5 '>
                <div onClick={() => setSelectorMenu("none")} className="mt-3 py-3 flex justify-between items-center  hover:bg-gray-50 ">
                    <button type="button" className="text-xl inline-flex items-center justify-center text-gray-400 hover:text-gray-500  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <IoIosArrowBack />
                        <span className="-mt-1 ml-1 text-xl font-medium">back</span>
                    </button>
                </div>
                <div className='mt-2 flex items-center border-r border-l border-gray-300 w-full'>
                    <WalletMenu />
                </div>
            </div>
        )
    }

    const UserSubmenu = () => {
        return (
            <div className='relative pb-5'>
                <div onClick={() => setSelectorMenu("none")} className="mt-3 py-3 flex justify-between items-center  hover:bg-gray-50 ">
                    <button type="button" className="text-xl inline-flex items-center justify-center text-gray-400 hover:text-gray-500  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <IoIosArrowBack />
                        <span className="-mt-1 ml-1 text-xl font-medium">back</span>
                    </button>
                </div>
                <div className='mt-2 items-center border-r border-l border-gray-300 w-full'>
                    <UserMenu />
                </div>
            </div>
        )
    }

    return (
        <div className={style.mobileWrapper}>
            <div className={style.mobileHeaderConsole}>
                <div className={style.mobileHeaderTop}>
                    <div className={style.mobileHeaderTopItemHeader}>
                        <div>
                            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                        </div>
                        <div className="-mr-2">
                            <button type="button" onClick={setHamburgerOff} className={style.mobileHeaderClose}>
                                <span className="sr-only">Close menu</span>
                                <svg className="mr-2 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='pr-3 mt-3'>
                        <div className='p-2 flex items-center rounded-[0.3rem] border border-gray-300 w-full'>
                            <div className='text-gray-400 text-xl'>
                                <AiOutlineSearch />
                            </div>
                            <input
                                className='ml-2 h-8 w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-gray-400 placeholder:text-[#8a939b]'
                                placeholder="Search...."
                            />
                        </div>
                        {isMatched
                            ? (
                                <div className="">
                                    <div className="mt-2 border border-gray-300 rounded-[0.3rem]">
                                        <SearchResult />
                                    </div>
                                </div>
                            ) : (
                                <div className="">
                                    <nav className={style.mobileHeaderTopMenu}>
                                        {menuSelector(selectorMenu)}
                                    </nav>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFTMarketHeaderMobile

