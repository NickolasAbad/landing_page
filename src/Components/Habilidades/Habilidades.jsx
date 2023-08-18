/* eslint-disable react/prop-types */
import styles from './index.module.scss'
import bootstrapImg from './assets/Bootstrap.png'
import cssImg from './assets/CSS.png'
import gitImg from './assets/Git.png'
import gruntImg from './assets/Grunt.png'
import gulpImg from './assets/Gulp.png'
import htmlImg from './assets/HTML5.png'
import jsImg from './assets/JavaScript.png'
import jqueryImg from './assets/jQuery.png'
import reactImg from './assets/React.png'
import sassImg from './assets/SASS.png'
import tsImg from './assets/TypeScript.png'
import vueImg from './assets/Vue.js.png'

import language from "../../../public/language.json"

const Habilidades = (props) => {

return (
<>
    <section id='skills' className={styles.skills}>
        <div className="container">
            <div className={styles.skills__content}>
                <h2 data-aos="fade-down" data-aos-duration="1000" className={styles.skills__title}>{props.isEnglish ? language[1].skills_title : language[0].skills_title}</h2>
                <div className={styles.skills__languages}>
                    <ul className='row list-unstyled text-center ps-5 pe-5 pt-1 pb-1'>
                        <li data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100" className='col-lg-2 col-sm-3 col-4 mb-5'>
                            <img className={styles.skills__img} src={gruntImg} alt="Grunt Logo" />
                            <span className={styles.skills__text}>Grunt</span>
                        </li>
                        <li data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="300" className='col-lg-2 col-sm-3 col-4 mb-5'>
                            <img className={styles.skills__img} src={cssImg} alt="CSS Logo" />
                            <span className={styles.skills__text}>CSS</span>
                        </li>
                        <li data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="500" className='col-lg-2 col-sm-3 col-4 mb-5'>
                            <img className={styles.skills__img} src={gitImg} alt="GIT Logo" />
                            <span className={styles.skills__text}>GIT</span>
                        </li>
                        <li data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="700" className='col-lg-2 col-sm-3 col-4 mb-5'>
                            <img className={styles.skills__img} src={jsImg} alt="JavaScript Logo" />
                            <span className={styles.skills__text}>JavaScript</span>
                        </li>
                        <li data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="900" className='col-lg-2 col-sm-3 col-4 mb-5'>
                            <img className={styles.skills__img} src={tsImg} alt="TypeScript Logo" />
                            <span className={styles.skills__text}>TypeScript</span>
                        </li>
                        <li data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="1100" className='col-lg-2 col-sm-3 col-4 mb-5'>
                            <img className={styles.skills__img} src={vueImg} alt="Vue.js Logo" />
                            <span className={styles.skills__text}>Vue.js</span>
                        </li>
                        <li data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="1300" className='col-lg-2 col-sm-3 col-4 mb-5'>
                            <img className={styles.skills__img} src={sassImg} alt="SASS Logo" />
                            <span className={styles.skills__text}>SASS</span>
                        </li>
                        <li data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="1500" className='col-lg-2 col-sm-3 col-4 mb-5'>
                            <img className={styles.skills__img} src={htmlImg} alt="HTML5 Logo" />
                            <span className={styles.skills__text}>HTML5</span>
                        </li>
                        <li data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="1700" className='col-lg-2 col-sm-3 col-4 mb-5'>
                            <img className={styles.skills__img} src={reactImg} alt="React Logo" />
                            <span className={styles.skills__text}>React</span>
                        </li>
                        <li data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="1900" className='col-lg-2 col-sm-3 col-4 mb-5'>
                            <img className={styles.skills__img} src={gulpImg} alt="Gulp Logo" />
                            <span className={styles.skills__text}>Gulp</span>
                        </li>
                        <li data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="2100" className='col-lg-2 col-sm-3 col-4 mb-5'>
                            <img className={styles.skills__img} src={bootstrapImg} alt="Bootstrap Logo" />
                            <span className={styles.skills__text}>Bootstrap</span>
                        </li>
                        <li data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="2300" className='col-lg-2 col-sm-3 col-4 mb-5'>
                            <img className={styles.skills__img} src={jqueryImg} alt="jQuery Logo" />
                            <span className={styles.skills__text}>jQuery</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</>
)
}

export default Habilidades