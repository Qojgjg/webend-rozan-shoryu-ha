import { IoIosArrowBack } from 'react-icons/io'
import Image from 'next/image'
import Link from 'next/link'
import UserMenu from '../../components/user/UserMenu'
import WalletMenu from '../../components/wallet/WalletMenu'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { userLanguage, hamburgerOnSet, sideBarSet } from '../../features/usersetup/usersetupSlice';

function SideBar({ content }) {
    const dispatch = useAppDispatch();

    const setSideBarOn = (sidebarSetup) => {
        dispatch(sideBarSet(sidebarSetup))
    };

    return (
        <div className="flex flex-col min-h-screen py-2">
            <div className="top-0 right-0 w-[17rem] bg-gray-200 text-white fixed h-full ">
                <button
                    onClick={() => setSideBarOn({ isOn: false, content: "" })}
                    type="button"
                    className="flex w-full items-center rounded-md hover:bg-gray-100 border-b border-gray-200"
                    aria-expanded="false"
                >
                    <div className='text-3xl text-gray-600'>
                        <IoIosArrowBack />
                    </div>
                    <span className="ml-1 -mt-1 py-3 text-2xl font-medium text-gray-900">{content}</span>
                </button>
                {content == "connect"
                    ? <WalletMenu />
                    : content == "user"
                        ? <UserMenu />
                        : <div>somthing wrong</div>
                }

            </div>
        </div>
    )
}

export default SideBar