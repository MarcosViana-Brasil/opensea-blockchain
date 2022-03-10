import { BsFillCartFill } from 'react-icons/bs'

const styles = {
    eventItem: `flex px-4 py-5 font-medium`,
    event: `flex items-center`,
    eventIcon: `mr-2 text-xl`,
    eventName: `text-lg font-semibold`,
    eventPrice: `flex items-center`,
    eventPriceValue: `text-lg`,
    ethLogo: `h-5 mr-2`,
    accent: `text-[#2081e2]`,
}

const EventItem = ({ event }) => {
    return (
        <div className={styles.eventItem}>
            <div className={`${styles.event} flex-[2]`}>
                <div className={styles.eventIcon}>
                    <BsFillCartFill />
                </div>
                <div className={styles.eventName}>Sale</div>
            </div>
            <div className={`${styles.eventPrice} flex-[2]`}>
                <img
                    src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
                    alt="eth"
                    className={styles.ethLogo}
                />
                <div className={styles.eventPriceValue}>{event.price}</div>
            </div>
            <div className={`${styles.accent} flex-[3]`}>{event.from}</div>
            <div className={`${styles.accent} flex-[3]`}>{event.to}</div>
            <div className={`${styles.accent} flex-[2]`}>{event.date}</div>
        </div>
    )
}

export default EventItem
