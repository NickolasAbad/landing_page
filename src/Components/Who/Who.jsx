import styles from './index.module.scss'
import whoImage from './assets/fotoWho.png'

const Who = () => {
    return (
        <>
            <section id='who' className={styles.who}>
                <div data-aos="flip-down" data-aos-duration="1000" data-aos-delay="50" className="container">
                    <div className={styles.who__content}>
                        <div className={styles.who__img}>
                            <img src={whoImage} alt="Foto de Nickolas Abad" />
                        </div>
                        <div className={styles.who__text}>
                            <h3 className={styles.who__subtitle}>Quem sou eu</h3>
                            <h2 className={styles.who__title}>Nickolas Abad</h2>
                            <h4 className={styles.who__description}>Desenvolvedor Fullstack Java</h4>
                            <p className={styles.who__info}>
                                Olá! Me chamo Nickolas Abad, um jovem apaixonado por tecnologia em busca de desafios empolgantes.
                                Estudante de Desenvolvimento Fullstack na EBAC, estou determinado a transformar minhas habilidades em soluções inovadoras.
                                Com criatividade e empatia, mergulho de cabeça em projetos que impulsionam meu crescimento. 
                                Sou um entusiasta colaborativo, sempre disposto a aprender com equipes talentosas.
                                Vamos juntos explorar o potencial ilimitado da tecnologia, criar experiências incríveis e fazer a diferença no mundo digital.
                                Estou animado para conectar ideias, enfrentar desafios e construir um futuro digital extraordinário.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Who