import Image from 'next/image'
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { userLanguage, userScrollHeight, userIsHamburgerOn } from '../../../features/usersetup/usersetupSlice';
import TechMeta from './TechMeta'
import NFTMarketHeader from './NFTMarketHeader'
import NFTMarketHeaderMobile from './NFTMarketHeaderMobile'
import MsgBar from './MsgBar'


const style = {
    wrapper: `fixed top-0 left-0 right-0`,
}


function Index() {
    const [isMatched, setIsMatched] = useState(true)
    const scrollHeight = useAppSelector(userScrollHeight);
    const hamburger = useAppSelector(userIsHamburgerOn);


    useEffect(() => {
        if (scrollHeight > 90) {
            setIsMatched(false)
        }

    }, [scrollHeight])

    return (
        <div className={style.wrapper} >
            {scrollHeight <= 90 && <TechMeta setIsMatched={setIsMatched} isMatched={isMatched} />}
            {scrollHeight <= 280 && (
                <>
                    <NFTMarketHeader />
                    {/* <MsgBar /> */}
                </>
            )}
            {hamburger && <NFTMarketHeaderMobile />}
        </div>
    )
}

export default Index

