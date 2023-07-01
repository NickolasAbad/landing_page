import styles from './_index.module.scss'
import memojiImg from './assets/Memoji.png'
import clsx from 'clsx/dist/clsx.m'
import { useState } from 'react'

const Portfolio = () => {

    const [pessoaisAtivo, setPessoaisAtivo] = useState(true)
    const [imgHover1, setImgHover1] = useState(false)
    const [imgHover2, setImgHover2] = useState(false)
    const [imgHover3, setImgHover3] = useState(false)
    const [imgHover4, setImgHover4] = useState(false)
    const [imgHover5, setImgHover5] = useState(false)
    const [imgHover6, setImgHover6] = useState(false)
    const [imgHover7, setImgHover7] = useState(false)
    const [imgHover8, setImgHover8] = useState(false)
    const [imgHover9, setImgHover9] = useState(false)
    const [imgHover10, setImgHover10] = useState(false)
    const [imgHover11, setImgHover11] = useState(false)
    const [imgHover12, setImgHover12] = useState(false)

    const trocaParaPessoais = () => {
        setPessoaisAtivo(true)
    }

    const trocaParaProfissional = () => {
        setPessoaisAtivo(false)
    }
    return (
        <>
            <section id='portfolio' className={styles.portfolio}>
                <div className="container">
                    <div className={styles.portfolio__content}>
                        <h1 data-aos="flip-up" data-aos-duration="1000" className={styles.portfolio__title}>Portfólio de Projetos</h1>
                        <img data-aos="slide-up" className={clsx(styles.portfolio__img)} src={memojiImg} alt="Memoji Apple" />
                        <nav className={styles.portfolio__tabs}>
                            <button onClick={trocaParaPessoais} className={clsx(styles.portfolio__button, `${pessoaisAtivo ? styles.portfolio__buttonIsActive : ""}`)}>
                                Pessoais
                            </button>
                            <button onClick={trocaParaProfissional} className={clsx(styles.portfolio__button, `${!pessoaisAtivo ? styles.portfolio__buttonIsActive : ""}`)}>
                                Profissionais
                            </button>
                        </nav>
                        <ul className={clsx(styles.portfolio__list, `${pessoaisAtivo ? styles.portfolio__listIsActive : ""}`)}>
                            <li data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="50" onMouseEnter={() => setImgHover1(true)} onMouseLeave={() => setImgHover1(false)} className={styles.portfolio__item}>
                                {imgHover1 ? <>
                                    <img className={styles.portfolio__item__imgHover} src="https://via.placeholder.com/630x378" alt="" />
                                    <div className={styles.portfolio__textHover}>
                                        <h3 className={styles.portfolio__textHover__title}>Portfólio Teste</h3>
                                        <p className={styles.portfolio__textHover__desc}>HTML, CSS, JavaScript e React</p>
                                    </div>
                                </> : <>
                                    <img className={styles.portfolio__item__img} src="https://via.placeholder.com/630x378" alt="" />    
                                </>}
                            </li>
                            <li data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" onMouseEnter={() => setImgHover2(true)} onMouseLeave={() => setImgHover2(false)} className={styles.portfolio__item}>
                                {imgHover2 ? <>
                                    <img className={styles.portfolio__item__imgHover} src="https://via.placeholder.com/630x378" alt="" />
                                    <div className={styles.portfolio__textHover}>
                                        <h3 className={styles.portfolio__textHover__title}>Portfólio Teste</h3>
                                        <p className={styles.portfolio__textHover__desc}>HTML, CSS, JavaScript e React</p>
                                    </div>
                                </> : <>
                                    <img className={styles.portfolio__item__img} src="https://via.placeholder.com/630x378" alt="" />    
                                </>}
                            </li>
                            <li data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600" onMouseEnter={() => setImgHover3(true)} onMouseLeave={() => setImgHover3(false)} className={styles.portfolio__item}>
                                {imgHover3 ? <>
                                    <img className={styles.portfolio__item__imgHover} src="https://via.placeholder.com/630x378" alt="" />
                                    <div className={styles.portfolio__textHover}>
                                        <h3 className={styles.portfolio__textHover__title}>Portfólio Teste</h3>
                                        <p className={styles.portfolio__textHover__desc}>HTML, CSS, JavaScript e React</p>
                                    </div>
                                </> : <>
                                    <img className={styles.portfolio__item__img} src="https://via.placeholder.com/630x378" alt="" />    
                                </>}
                            </li>
                            <li data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" onMouseEnter={() => setImgHover4(true)} onMouseLeave={() => setImgHover4(false)} className={styles.portfolio__item}>
                                {imgHover4 ? <>
                                    <img className={styles.portfolio__item__imgHover} src="https://via.placeholder.com/630x378" alt="" />
                                    <div className={styles.portfolio__textHover}>
                                        <h3 className={styles.portfolio__textHover__title}>Portfólio Teste</h3>
                                        <p className={styles.portfolio__textHover__desc}>HTML, CSS, JavaScript e React</p>
                                    </div>
                                </> : <>
                                    <img className={styles.portfolio__item__img} src="https://via.placeholder.com/630x378" alt="" />    
                                </>}
                            </li>
                            <li data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600" onMouseEnter={() => setImgHover5(true)} onMouseLeave={() => setImgHover5(false)} className={styles.portfolio__item}>
                                {imgHover5 ? <>
                                    <img className={styles.portfolio__item__imgHover} src="https://via.placeholder.com/630x378" alt="" />
                                    <div className={styles.portfolio__textHover}>
                                        <h3 className={styles.portfolio__textHover__title}>Portfólio Teste</h3>
                                        <p className={styles.portfolio__textHover__desc}>HTML, CSS, JavaScript e React</p>
                                    </div>
                                </> : <>
                                    <img className={styles.portfolio__item__img} src="https://via.placeholder.com/630x378" alt="" />    
                                </>}
                            </li>
                            <li data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="900" onMouseEnter={() => setImgHover6(true)} onMouseLeave={() => setImgHover6(false)} className={styles.portfolio__item}>
                                {imgHover6 ? <>
                                    <img className={styles.portfolio__item__imgHover} src="https://via.placeholder.com/630x378" alt="" />
                                    <div className={styles.portfolio__textHover}>
                                        <h3 className={styles.portfolio__textHover__title}>Portfólio Teste</h3>
                                        <p className={styles.portfolio__textHover__desc}>HTML, CSS, JavaScript e React</p>
                                    </div>
                                </> : <>
                                    <img className={styles.portfolio__item__img} src="https://via.placeholder.com/630x378" alt="" />    
                                </>}
                            </li>
                        </ul>
                        <ul data-tab-id="profissionais" className={clsx(styles.portfolio__list, `${!pessoaisAtivo ? styles.portfolio__listIsActive : ""}`)}>
                        <li onMouseEnter={() => setImgHover7(true)} onMouseLeave={() => setImgHover7(false)} className={styles.portfolio__item}>
                                {imgHover7 ? <>
                                    <img className={styles.portfolio__item__imgHover} src="https://via.placeholder.com/630x378" alt="" />
                                    <div className={styles.portfolio__textHover}>
                                        <h3 className={styles.portfolio__textHover__title}>Portfólio Teste</h3>
                                        <p className={styles.portfolio__textHover__desc}>HTML, CSS, JavaScript e React</p>
                                    </div>
                                </> : <>
                                    <img className={styles.portfolio__item__img} src="https://via.placeholder.com/630x378" alt="" />    
                                </>}
                            </li>
                            <li onMouseEnter={() => setImgHover8(true)} onMouseLeave={() => setImgHover8(false)} className={styles.portfolio__item}>
                                {imgHover8 ? <>
                                    <img className={styles.portfolio__item__imgHover} src="https://via.placeholder.com/630x378" alt="" />
                                    <div className={styles.portfolio__textHover}>
                                        <h3 className={styles.portfolio__textHover__title}>Portfólio Teste</h3>
                                        <p className={styles.portfolio__textHover__desc}>HTML, CSS, JavaScript e React</p>
                                    </div>
                                </> : <>
                                    <img className={styles.portfolio__item__img} src="https://via.placeholder.com/630x378" alt="" />    
                                </>}
                            </li>
                            <li onMouseEnter={() => setImgHover9(true)} onMouseLeave={() => setImgHover9(false)} className={styles.portfolio__item}>
                                {imgHover9 ? <>
                                    <img className={styles.portfolio__item__imgHover} src="https://via.placeholder.com/630x378" alt="" />
                                    <div className={styles.portfolio__textHover}>
                                        <h3 className={styles.portfolio__textHover__title}>Portfólio Teste</h3>
                                        <p className={styles.portfolio__textHover__desc}>HTML, CSS, JavaScript e React</p>
                                    </div>
                                </> : <>
                                    <img className={styles.portfolio__item__img} src="https://via.placeholder.com/630x378" alt="" />    
                                </>}
                            </li>
                            <li onMouseEnter={() => setImgHover10(true)} onMouseLeave={() => setImgHover10(false)} className={styles.portfolio__item}>
                                {imgHover10 ? <>
                                    <img className={styles.portfolio__item__imgHover} src="https://via.placeholder.com/630x378" alt="" />
                                    <div className={styles.portfolio__textHover}>
                                        <h3 className={styles.portfolio__textHover__title}>Portfólio Teste</h3>
                                        <p className={styles.portfolio__textHover__desc}>HTML, CSS, JavaScript e React</p>
                                    </div>
                                </> : <>
                                    <img className={styles.portfolio__item__img} src="https://via.placeholder.com/630x378" alt="" />    
                                </>}
                            </li>
                            <li onMouseEnter={() => setImgHover11(true)} onMouseLeave={() => setImgHover11(false)} className={styles.portfolio__item}>
                                {imgHover11 ? <>
                                    <img className={styles.portfolio__item__imgHover} src="https://via.placeholder.com/630x378" alt="" />
                                    <div className={styles.portfolio__textHover}>
                                        <h3 className={styles.portfolio__textHover__title}>Portfólio Teste</h3>
                                        <p className={styles.portfolio__textHover__desc}>HTML, CSS, JavaScript e React</p>
                                    </div>
                                </> : <>
                                    <img className={styles.portfolio__item__img} src="https://via.placeholder.com/630x378" alt="" />    
                                </>}
                            </li>
                            <li onMouseEnter={() => setImgHover12(true)} onMouseLeave={() => setImgHover12(false)} className={styles.portfolio__item}>
                                {imgHover12 ? <>
                                    <img className={styles.portfolio__item__imgHover} src="https://via.placeholder.com/630x378" alt="" />
                                    <div className={styles.portfolio__textHover}>
                                        <h3 className={styles.portfolio__textHover__title}>Portfólio Teste</h3>
                                        <p className={styles.portfolio__textHover__desc}>HTML, CSS, JavaScript e React</p>
                                    </div>
                                </> : <>
                                    <img className={styles.portfolio__item__img} src="https://via.placeholder.com/630x378" alt="" />    
                                </>}
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio