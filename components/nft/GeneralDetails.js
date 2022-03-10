import { AiFillHeart } from 'react-icons/ai'
import { MdRefresh } from 'react-icons/md'
import { RiShareBoxLine } from 'react-icons/ri'
import { FiMoreVertical } from 'react-icons/fi'
import { GiShare } from 'react-icons/gi'

const styles = {
    wrapper: `flex`,
    infoContainer: `h-36 flex flex-col flex-1 justify-between mb-6`,
    accent: `text-[#2081e2]`,
    nftTitle: `text-3xl font-extrabold`,
    otherInfo: `flex`,
    ownedBy: `text-[#8a939b] mr-4`,
    likes: `flex items-center text-[#8a939b]`,
    likeIcon: `mr-1`,
    actionButtonsContainer: `w-44`,
    actionButtons: `flex container justify-between text-[1.4rem] border-2 rounded-lg`,
    actionButton: `my-2`,
    divider: `border-r-2`,
}

const GeneralDetails = ({ selectedNft }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.infoContainer}>
                <div className={styles.accent}>Bored Ape Yacht Club</div>
                <div className={styles.nftTitle}>{selectedNft?.name}</div>
                <div className={styles.otherInfo}>
                    <div className={styles.ownedBy}>
                        Owned by <span className={styles.accent}>e88vault</span>
                    </div>
                    <div className={styles.likes}>
                        <AiFillHeart className={styles.likeIcon} /> 2.3K
                        favorites
                    </div>
                </div>
            </div>
            <div className={styles.actionButtonsContainer}>
                <div className={styles.actionButtons}>
                    <div className={`${styles.actionButton} ml-2`}>
                        <MdRefresh />
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.actionButton}>
                        <RiShareBoxLine />
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.actionButton}>
                        <GiShare />
                    </div>
                    <div className={styles.divider} />
                    <div className={`${styles.actionButton} mr-2`}>
                        <FiMoreVertical />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralDetails
