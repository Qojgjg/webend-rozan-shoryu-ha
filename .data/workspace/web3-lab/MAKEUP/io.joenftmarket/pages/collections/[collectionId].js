import React, { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { useWeb3 } from '@3rdweb/hooks'
import { ThirdwebSDK } from '@3rdweb/sdk'

const style = {
    bannerImageContainer: `h-[20vh] w-screen overflow-hidden flex justify-center items-center`,
    bannerImage: `w-full object-cover`,
    infoContainer: `w-screen px-4`,
    midRow: `w-full flex justify-center text-white`,
    endRow: `w-full flex justify-end text-white`,
    profileImg: `w-40 h-40 object-cover rounded-full border-2 border-[#202225] mt-[-4rem]`,
    socialIconsContainer: `flex text-3xl mb-[-2rem]`,
    socialIconsWrapper: `w-44`,
    socialIconsContent: `flex container justify-between text-[1.4rem] border-2 rounded-lg px-2`,
    socialIcon: `my-2`,
    divider: `border-r-2`,
    title: `text-5xl font-bold mb-4`,
    createdBy: `text-lg mb-4`,
    statsContainer: `w-[44vw] flex justify-between py-4 border border-[#151b22] rounded-xl mb-4`,
    collectionStat: `w-1/4`,
    statValue: `text-3xl font-bold w-full flex items-center justify-center`,
    ethLogo: `h-6 mr-2`,
    statName: `text-lg w-full text-center mt-1`,
    description: `text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4`,
}

function Collection() {
    const router = useRouter()
    const { provider } = useWeb3()
    const { collectionId } = router.query
    const [collection, setCollection] = useState({})
    const [nft, setNft] = useState([])
    const [listings, setListing] = useState({})

    const nftModule = useMemo(() => {
        if (!provider) return
        const sdk = new ThirdwebSDK(
            provider.getSigner(),
            process.env.NEXT_PUBLIC_RINKEBY_RPC_URL,
            2100000,
        )
        return sdk.getNFTModule(collectionId)
    }, [provider])

    useEffect(() => {
        if (!nftModule) return
            ; (async () => {
                const nfts = await nftModule.getAll()
                setNft(nfts)
            })()
    }, [nftModule])

    const marketPlaceModule = useMemo(() => {
        if (!provider) return
        const sdk = new ThirdwebSDK(
            provider.getSigner(),
            process.env.NEXT_PUBLIC_RINKEBY_RPC_URL
        )
        return sdk.getMarketModule(
            '0x9D296D36fAB055f6f0732814f3f3f49DB6bdf0cc'
        )
    }, [provider])

    useEffect(() => {
        let seller = "0x8ab355616f8CFaaA1d41dC4090A3cB3B8D630A7f"
        if (!marketPlaceModule) return
            ; (async () => {
                setListing(await marketPlaceModule.get(0))
                // setListing(await marketPlaceModule.getAll({ seller: seller }))
            })()
    }, [marketPlaceModule])

    console.log(nft)
    console.log(listings)

    return (
        <div>hi</div>
    )
}

export default Collection