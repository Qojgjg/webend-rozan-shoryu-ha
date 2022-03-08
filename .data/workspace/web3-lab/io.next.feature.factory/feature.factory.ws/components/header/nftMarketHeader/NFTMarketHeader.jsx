import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import siteLogo from '../../../assets/logo-89nft.svg'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { userLanguage, hamburgerOnSet } from '../../../features/usersetup/usersetupSlice';
import { menu } from '../../../assets/option/navOption';
import { navLangData } from '../../../assets/data/languageData';

const style = {
    wrapper: `bg-gradient-to-b from-black relative w-screen `,
    container: `pr-11 max-w-7xl mx-auto pl-4 sm:pl-6`,
    subContainer: `flex justify-between items-center py-6 md:justify-start md:space-x-10`,
    siteLogoArea: `flex justify-start lg:w-0 lg:flex-1`,
    siteLogo: `flex h-10`,
    hamBurger: `bg-blue-500 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-[#04111d]-500 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`,
    headMenu: `hidden md:flex space-x-10`,
    headMenuDropButton: `h-10 text-white group  rounded-md inline-flex items-center text-base font-medium hover:text-orange-500 focus:outline-none`,
    headMenuDropIcon: `text-white ml h-5 w-5 mt-1 group-hover:text-orange-500`,
    headMenuButton: `mt-2 text-base font-medium text-blue-500 hover:text-orange-500 cursor-pointer`,
    headUserArea: `hidden md:flex items-center justify-end md:flex-1 lg:w-0`,
    profileButton: `mr-4 whitespace-nowrap text-base font-medium text-white cursor-pointer`,
    signButton: `mr-0 whitespace-nowrap inline-flex items-center justify-center px-1 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-700 hover:bg-orange-500 cursor-pointer`,

    menuGroup: `group inline-block relative`,
    subMenuWrapper: "top-10 absolute hidden group-hover:block rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden transform w-screen max-w-[12rem]",
    subMenuItem: ` relative grid gap-1 bg-white `,
    subMenuItemLink: `flex items-start px-4 py-4 hover:bg-gray-200`,
    subMenuItemName: `text-base font-medium text-gray-500`,

}

const NFTMarketHeader = () => {
    const [isHmOpen, setIsHmOpen] = useState(false)
    const [isSigned, setIsSign] = useState(true)
    const dispatch = useAppDispatch();

    const lang = useAppSelector(userLanguage);
    let langFlag = lang.replace("-", "")

    const setHamburgerOn = () => {
        dispatch(hamburgerOnSet(true))
    };

    return (
        <>
            <div className={style.wrapper}>
                <div className={style.container}>
                    <div className={style.subContainer}>
                        <div className={style.siteLogoArea}>
                            <a href="#">
                                <span className="sr-only">Workflow</span>
                                <div className={style.siteLogo}>
                                    <Image src={siteLogo} />
                                </div>
                            </a>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <button type="button" onClick={setHamburgerOn} className={style.hamBurger} aria-expanded="false">
                                <span className="sr-only">Open menu</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                        <nav className={style.headMenu}>
                            {menu.map((item) => (
                                <div className="relative" key={item.id}>
                                    {item.type == "menu"
                                        ? (
                                            <div className={style.menuGroup} key={item.id}>
                                                <button
                                                    type="button"
                                                    className={style.headMenuDropButton}
                                                    aria-expanded="false"
                                                >
                                                    <span>{navLangData[item.name][langFlag]}</span>
                                                    <svg className={style.headMenuDropIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                                <div>
                                                    <ul
                                                        className={style.subMenuWrapper}
                                                    >
                                                        {item.list.map((subItem, k) => (
                                                            <li key={k} className={style.subMenuItem}>
                                                                <Link href={`${subItem.path}`}>
                                                                    <a className={style.subMenuItemLink}>
                                                                        <div className={style.subMenuItemName}>{navLangData[subItem.name][langFlag]}</div>
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                        : (
                                            <Link href={`${item.path}`}>
                                                <div className={style.headMenuButton}>{navLangData[item.name][langFlag]}</div>
                                            </Link>
                                        )}
                                </div>
                            ))}
                        </nav>
                        <div className={style.headUserArea}>
                            <div className={style.profileButton}>
                                <CgProfile className="text-3xl" />
                            </div>
                            <div className={isSigned ? style.signButton : style.profileButton}>
                                <MdOutlineAccountBalanceWallet className={isSigned ? `text-3xl` : `text-[2.2rem]`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NFTMarketHeader


