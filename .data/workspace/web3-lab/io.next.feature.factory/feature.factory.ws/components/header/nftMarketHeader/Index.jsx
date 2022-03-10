import Image from 'next/image'
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { userLanguage, userScrollHeight, userIsHamburgerOn, searchMatchSet, userWarning } from '../../../features/usersetup/usersetupSlice';
import TechMeta from './TechMeta'
import NFTMarketHeader from './NFTMarketHeader'
import NFTMarketHeaderMobile from './NFTMarketHeaderMobile'
import Warning from '../../warning/Warning'


const style = {
    wrapper: `fixed top-0 left-0 right-0`,
}

function Index() {
    const dispatch = useAppDispatch();

    const scrollHeight = useAppSelector(userScrollHeight);
    const hamburger = useAppSelector(userIsHamburgerOn);
    const warning = useAppSelector(userWarning);

    //turnoff search result when scrool
    // useEffect(() => {
    //     if (scrollHeight > 90) {
    //         dispatch(searchMatchSet(false))
    //     }

    // }, [scrollHeight])


    return (
        <div className={style.wrapper} >
            {scrollHeight <= 90 && <TechMeta />}
            {scrollHeight <= 280 && (
                <>
                    <NFTMarketHeader />
                    {warning && (<Warning />)}
                </>
            )}
            {hamburger && <NFTMarketHeaderMobile />}
        </div>
    )
}

export default Index

