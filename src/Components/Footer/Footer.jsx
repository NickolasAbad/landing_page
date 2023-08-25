/* eslint-disable react/prop-types */
import styles from './index.module.scss'

import language from "../../../public/language.json"

const Footer = (props) => {
    return (
        <>
            <footer className={styles.footer} id='footer'>
                <p className={styles.footer__text}>{props.isEnglish ? language[1].footer : language[0].footer}</p>
            </footer>
        </>
    )
}

export default Footer