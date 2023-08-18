/* eslint-disable react/prop-types */
import styles from './index.module.scss'
import clsx from 'clsx/dist/clsx.m'
import memojiHero from './assets/memojiHero.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HideOn } from 'react-hide-on-scroll';
import { useMediaQuery } from 'react-responsive'
import cv from "./assets/CV.pdf"
import resume from "./assets/RESUME.pdf"

import language from "../../../public/language.json"

const vhpx = document.documentElement.clientHeight;

function Home(props) {

    const PC = useMediaQuery({
        query: '(min-width: 1201px)'
    })

    const Mobile = useMediaQuery({ query: '(max-width: 1200px)' })

    return (
        <Container>
            <section className={styles.hero} id='home'>
                {PC &&
                    <Row>
                        <Col xl={8}>
                            <h1 className={styles.hero__title}>
                            {props.isEnglish ? language[1].home_title : language[0].home_title}
                                <span className={clsx(styles.hero__title, styles.hero__title__Highlight)}> {props.isEnglish ? language[1].home_title_highlighted : language[0].home_title_highlighted}</span>.
                            </h1>
                            <a data-aos="fade-right" data-aos-duration="1000" data-aos-delay="350" target='_blank' rel="noreferrer" href={props.isEnglish ? resume : cv}><button className={styles.hero__button}>{props.isEnglish ? language[1].home_resume_button : language[0].home_resume_button}</button></a>
                            <a data-aos="fade-right" data-aos-duration="1000" data-aos-delay="650" href="mailto:nickolasabad@icloud.com"><button className={styles.hero__button}>{props.isEnglish ? language[1].home_contact_button : language[0].home_contact_button}</button></a>
                        </Col>
                        <Col xl={4}>
                            <img data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100" className={styles.hero__img} src={memojiHero} alt='Foto de um Apple Memoji' />
                        </Col>
                    </Row>
                }
                {Mobile &&
                    <>
                       <h1 className={styles.hero__title}>
                            {props.isEnglish ? language[1].home_title : language[0].home_title}
                                <span className={clsx(styles.hero__title, styles.hero__title__Highlight)}> {props.isEnglish ? language[1].home_title_highlighted : language[0].home_title_highlighted}</span>.
                            </h1>
                            <a data-aos="fade-right" data-aos-duration="1000" data-aos-delay="350" target='_blank' rel="noreferrer" href={props.isEnglish ? resume : cv}><button className={styles.hero__button}>{props.isEnglish ? language[1].home_resume_button : language[0].home_resume_button}</button></a>
                            <a data-aos="fade-right" data-aos-duration="1000" data-aos-delay="650" href="mailto:nickolasabad@icloud.com"><button className={styles.hero__button}>{props.isEnglish ? language[1].home_contact_button : language[0].home_contact_button}</button></a>
                    </>
                }
                <HideOn atHeight height={vhpx * 0.3}>
                    <div data-aos="fade-up" data-aos-duration="1000" className={styles.scroll}>
                        <div className={styles.scroll__mouse}>
                            <div className={styles.scroll__wheel}></div>
                        </div>
                        <div>
                            <span className={clsx(styles.scroll__arrows, styles.um)} ></span>
                            <span className={clsx(styles.scroll__arrows, styles.dois)} ></span>
                            <span className={clsx(styles.scroll__arrows, styles.tres)} ></span>
                        </div>
                    </div>
                </HideOn>
            </section>
        </Container>
    );
}
export default Home
