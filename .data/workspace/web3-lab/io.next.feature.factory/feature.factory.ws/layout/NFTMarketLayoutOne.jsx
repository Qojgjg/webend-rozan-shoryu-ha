import Head from 'next/head'
import { useState, useRef, useEffect } from 'react';
import NFTMarketHeader from '../components/header/nftMarketHeader/Index';
import SideBar from '../components/sidebar/SideBar';
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { userLanguage, hamburgerOnSet, sideBarSet, userSideBar } from '../features/usersetup/usersetupSlice';

const style = {
    wrapper: `flex`,
}

const NFTMarketLayoutOne = ({ children, ...props }) => {
    const { pageTitle, description, ...other } = props
    const ref = useRef()
    const dispatch = useAppDispatch();
    const sidebar = useAppSelector(userSideBar);

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (sidebar.isOn && ref.current && !ref.current.contains(e.target)) {
                dispatch(sideBarSet({ isOn: false, content: "" }))
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [sidebar.isOn])

    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <title>{pageTitle}</title>

                <meta property="og:title" content={pageTitle} key="ogtitle" />
                <meta property="og:description" content={description} key="ogdesc" />

                {/* Twitter */}
                {/* <meta name="twitter:card" content="summary" key="twcard" />
                <meta name="twitter:creator" content={twitterHandle} key="twhandle" /> */}

                {/* Open Graph */}
                {/* <meta property="og:url" content={currentURL} key="ogurl" />
                <meta property="og:image" content={previewImage} key="ogimage" />
                <meta property="og:site_name" content={siteName} key="ogsitename" />
                <meta property="og:title" content={pageTitle} key="ogtitle" />
                <meta property="og:description" content={description} key="ogdesc" /> */}
            </Head>
            <main>
                <div className={style.wrapper}>
                    <div>
                        <NFTMarketHeader />
                        <div>{children}</div>
                        <div>footer</div>
                    </div>

                    {sidebar.isOn &&
                        <div ref={ref}>
                            <SideBar content={sidebar.content} />
                        </div>
                    }
                </div>
            </main>
        </div>
    )
}

export default NFTMarketLayoutOne;
