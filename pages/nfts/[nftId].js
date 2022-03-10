import Header from '../../components/Header'
import { useEffect, useMemo, useState } from 'react'
import { useWeb3 } from '@3rdweb/hooks'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { useRouter } from 'next/router'
import NFTImage from '../../components/nft/NFTImage'
import GeneralDetails from '../../components/nft/GeneralDetails'
import ItemActivity from '../../components/nft/ItemActivity'
import Purchase from '../../components/nft/Purchase'

const styles = {
    wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
    container: `container p-6`,
    topContent: `flex`,
    nftImgContainer: `flex-1 mr-4`,
    detailsContainer: `flex-[2] ml-4`,
}

const Nft = () => {
    const { provider } = useWeb3()
    const [selectedNft, setSelectedNft] = useState()
    const [listings, setListings] = useState([])
    const router = useRouter()

    const nftModule = useMemo(() => {
        if (!provider) return

        const sdk = new ThirdwebSDK(
            provider.getSigner(),
            'https://eth-rinkeby.alchemyapi.io/v2/boIi2TswgzWyiJ9wcLZzdPkiVNkRTD0Z'
        )
        return sdk.getNFTModule('0xE6C196313EA337457eEBdb6AEC6AF7712ce256eD')
    }, [provider])

    useEffect(() => {
        if (!nftModule) return
        ;(async () => {
            const nfts = await nftModule.getAll()

            const selectedNftItem = nfts.find(
                (nft) => nft.id === router.query.nftId
            )

            setSelectedNft(selectedNftItem)
        })()
    }, [nftModule])

    const marketPlaceModule = useMemo(() => {
        if (!provider) return

        const sdk = new ThirdwebSDK(
            provider.getSigner(),
            'https://eth-rinkeby.alchemyapi.io/v2/boIi2TswgzWyiJ9wcLZzdPkiVNkRTD0Z'
        )
        return sdk.getMarketplaceModule(
            '0x6ABc86d5F9A527dDCBD734e4777DF418fC7d39a5'
        )
    }, [provider])

    useEffect(() => {
        if (!marketPlaceModule) return
        ;(async () => {
            setListings(await marketPlaceModule.getAllListings())
        })()
    }, [marketPlaceModule])

    return (
        <div>
            <Header />

            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.topContent}>
                        <div className={styles.nftImgContainer}>
                            <NFTImage selectedNft={selectedNft} />
                        </div>
                        <div className={styles.detailsContainer}>
                            <GeneralDetails selectedNft={selectedNft} />
                            <Purchase
                                isListed={router.query.isListed}
                                selectedNft={selectedNft}
                                listings={listings}
                                marketPlaceModule={marketPlaceModule}
                            />
                        </div>
                    </div>

                    <ItemActivity />
                </div>
            </div>
        </div>
    )
}

export default Nft
