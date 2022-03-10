import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { userLanguage, userSigned, hamburgerOnSet, sideBarSet, signedSet } from '../../features/usersetup/usersetupSlice';
import { users } from '../../assets/dummieData/users.js'
import { FiCopy } from 'react-icons/fi'

const style = {
    wrapper: `flex flex-col`,
    userProfile: `p-5 pr-5 flex flex-col w-full hover:bg-gray-100 border-b border-t border-gray-300`,
    menuItem: `w-full p-5 pr-5 hover:bg-gray-100 `,
    menuName: `ml-3 text-[1.2rem] font-medium text-gray-500`
}

function UserMenu() {
    let user = users[1]

    const dispatch = useAppDispatch();

    const handleSignOut = () => {
        dispatch(signedSet(false))
        dispatch(sideBarSet({ isOn: false, content: "" }))
    };

    //solve Function components cannot be given refs
    const CustomImageLink = React.forwardRef(({ onClick, href }, ref) => {
        return (
            <div onClick={onClick} ref={ref}>
                <Image src={user.img}
                    objectFit="cover"
                    className="rounded-full cursor-pointer"
                    height={40}
                    width={40}
                />
            </div>
        )
    })

    return (
        <div className={style.wrapper}>
            <div className={style.userProfile}>
                <div className="w-full flex ">
                    <div className="relative">
                        <Link href="/user/edit">
                            <CustomImageLink />
                        </Link>
                    </div>
                    <div className="ml-3 mt-[0.2rem] text-gray-600 text-xl ">{user.name}</div>
                </div>
                <div className="flex ">
                    <div className="text-orange-600">
                        <div>{`${user.address.slice(0, 7)}...${user.address.slice(35)}`}</div>
                    </div>
                    <div className="mt-1 ml-2 text-[1rem] text-gray-500">
                        <FiCopy />
                    </div>
                </div>
            </div>
            <div className="flex flex-col border-b border-gray-300">
                <div className={style.menuItem}>
                    <Link href={`/favorites`}>
                        <a>
                            <span className={style.menuName}>favorites</span>
                        </a>
                    </Link>
                </div>
                <div className={style.menuItem}>
                    <Link href={`/watchlist`}>
                        <a>
                            <span className={style.menuName}>watchlist</span>
                        </a>
                    </Link>
                </div>
                <div className={style.menuItem}>
                    <Link href={`/collections`}>
                        <a>
                            <span className={style.menuName}>collections</span>
                        </a>
                    </Link>
                </div>
            </div>
            <div className="w-full p-5 pr-5 border-b border-gray-200">
                <div className='flex w-full items-center'>
                    <button
                        type="button"
                        className="h-10 rounded-md w-full bg-blue-500 hover:bg-blue-900"
                        aria-expanded="false"
                        onClick={() => handleSignOut()}
                    >
                        Sign Out
                    </button>
                </div>
            </div>
        </div >
    )
}

export default UserMenu