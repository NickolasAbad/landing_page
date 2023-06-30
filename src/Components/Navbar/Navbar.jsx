import styles from '../Navbar/index.module.scss'
import clsx from '../../../node_modules/clsx/dist/clsx.m.js'

const Navbar = () => {
    return (
        <>
            <header className={clsx(styles.header, "container")}>
                <span data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className={styles.header__logo}>
                    &lt;/&gt;
                </span>
                <nav className={styles.header__nav}>
                    <ul className={styles.header__list}>
                        <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="350"  className={styles.header__item}>
                            <a className={styles.header__link} href="#home">inicio</a>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="650" className={styles.header__item}>
                            <a className={styles.header__link} href="#who">sobre</a>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="950" className={styles.header__item}>
                            <a className={styles.header__link} href="#skills">habilidades</a>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="1250" className={styles.header__item}>
                            <a className={styles.header__link} href="#portfolio">portfólio</a>
                        </li>
                    </ul>
                </nav>
                <span></span>
            </header>
        </>
    )
}

export default Navbar