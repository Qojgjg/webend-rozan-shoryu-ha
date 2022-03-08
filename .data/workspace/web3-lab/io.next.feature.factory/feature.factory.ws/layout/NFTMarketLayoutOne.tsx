import Head from 'next/head'
import NFTMarketHeader from '../components/header/nftMarketHeader/Index';

type Props = {
    children: React.ReactNode
    pageTitle: string
    description: string
}

const style = {
    wrapper: `flex`,
}

const NFTMarketLayoutOne: React.FC<Props> = ({ children, ...props }: Props) => {
    const { pageTitle, description, ...other } = props
    console.log(pageTitle)
    console.log(description)

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
                </div>
            </main>
        </div>
    )
}

export default NFTMarketLayoutOne;
