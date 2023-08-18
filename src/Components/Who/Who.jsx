/* eslint-disable react/prop-types */
import styles from './index.module.scss'
import whoImage from './assets/fotoWho.jpg'
import { Container } from 'react-bootstrap'

import language from "../../../public/language.json"

const Who = (props) => {
    return (
        <>
            <Container>
                <section id='who' className={styles.who}>
                    <div data-aos="flip-down" data-aos-duration="1000" data-aos-delay="50" className="container">
                        <div className={styles.who__content}>
                            <div className={styles.who__img}>
                                <img className={styles.who__img} src={whoImage} alt="Foto de Nickolas Abad" />
                            </div>
                            <div className={styles.who__text}>
                                <h3 className={styles.who__subtitle}>{props.isEnglish ? language[1].who_subtitle : language[0].who_subtitle}</h3>
                                <h2 className={styles.who__title}>{props.isEnglish ? language[1].who_title : language[0].who_title}</h2>
                                <h4 className={styles.who__description}>{props.isEnglish ? language[1].who_description : language[0].who_description}</h4>
                                <p className={styles.who__info}>
                                {props.isEnglish ? language[1].who_info : language[0].who_info}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    )
}

export default Who