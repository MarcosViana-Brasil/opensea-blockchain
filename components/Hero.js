import React from 'react'
import Image from 'next/image'

import hero from '../assets/hero.png'
import profile from '../assets/profile-2f.png'

const styles = {
    wrapper: `relative`,
    //container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s250')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
    container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('../assets/hero.png')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/2`,
    title: `relative text-white text-[46px] font-semibold`,
    description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
    ctaContainer: `flex`,
    accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
    button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
    cardContainer: `rounded-[3rem]`,
    infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white -mt-[0.4rem]`,
    author: `flex flex-col justify-center ml-4`,
    name: ``,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    <div className={styles.copyContainer}>
                        <div className={styles.title}>
                            Dicover, collect and sell extraordinary NFTs
                        </div>
                        <div className={styles.description}>
                            Opensea is the world&apos;s first and largest NFT
                            marketplace
                        </div>
                        <div className={styles.ctaContainer}>
                            <button className={styles.accentedButton}>
                                Explore
                            </button>
                            <button className={styles.button}>Create</button>
                        </div>
                    </div>
                    <div className={styles.cardContainer}>
                        <Image
                            src={hero}
                            alt="hero"
                            height={400}
                            width={300}
                            className="rounded-t-lg"
                        />
                        <div className={styles.infoContainer}>
                            <Image
                                src={profile}
                                alt="profile"
                                height={40}
                                width={40}
                                className="h-[2.225rem] rounded-full"
                            />
                            <div className={styles.author}>
                                <div className={styles.name}>Jolly</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
