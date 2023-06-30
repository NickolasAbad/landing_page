import styles from './index.module.scss'
import clsx from 'clsx/dist/clsx.m'
import memojiHero from './assets/memojiHero.png'

const Home = () => {
    return (
        <>
            <section id='home' className={styles.home}>
                <div data-aos="fade-right" data-aos-duration="1000" className="container">
                    <div className={styles.hero}>
                        <div className={styles.hero__content}>
                            <div className={styles.hero__text}>
                                <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className={styles.hero__title}>
                                    Unindo criatividade e tecnologia para criar produtos digitais de última geração para 
                                    <span className={clsx(styles.hero__title, styles.hero__title__Highlight)}> empresas visionárias</span>.
                                </h1>
                                <a data-aos="fade-right" data-aos-duration="1000" data-aos-delay="350" href="#"><button className={styles.hero__button}>Currículo</button></a>
                                <a data-aos="fade-right" data-aos-duration="1000" data-aos-delay="650" href="#"><button className={styles.hero__button}>Contato</button></a>
                            </div>
                            <img data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100" className={styles.hero__img} src={memojiHero} alt='Foto de um Apple Memoji'/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home