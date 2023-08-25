/* eslint-disable react/prop-types */
import styles from './index.module.scss'
import memojiImg from './assets/Memoji.png'
import clone from './assets/clone_disney+.png'
import agenda from './assets/agenda.png'
import landing from './assets/landing_page.png'
import thayse from './assets/thayse.jpeg'
import trancoso from './assets/trancoso.jpeg'
import portfoliofoto from './assets/portfolio.png'
import clsx from 'clsx/dist/clsx.m'
import { useState } from 'react'
import { useEffect, useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import language from "../../../public/language.json"
const Portfolio = (props) => {

    const [pessoaisAtivo, setPessoaisAtivo] = useState(true)
    const [hoverPessoais0, setHoverPessoais0] = useState(false)
    const [hoverPessoais1, setHoverPessoais1] = useState(false)
    const [hoverPessoais2, setHoverPessoais2] = useState(false)
    const [hoverPessoais3, setHoverPessoais3] = useState(false)
    const [hoverProfissionais0, setHoverProfissionais0] = useState(false)
    const [hoverProfissionais1, setHoverProfissionais1] = useState(false)
    const [profWidth, setProfWidth] = useState(0)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const myRef = useRef();

    const defineProfWidth = () => {
        const buttonWidth = myRef.current.clientWidth;
        setProfWidth(buttonWidth)
    }

    const trocaParaPessoais = () => {
        setPessoaisAtivo(true)
    }

    const trocaParaProfissional = () => {
        setPessoaisAtivo(false)
    }

    useEffect(() => {
        defineProfWidth()
    }, [profWidth])

    useEffect(() => {
        window.addEventListener("DOMContentLoaded", defineProfWidth);
    }, []);
    let timer = -200;

    const atualizaTimer = () => {
        timer += 250;
        
        return parseInt(timer)
    }

    const projectsPessoaisData = [
        {
            title: (<>{props.isEnglish ? language[1].portfolio_personal_disney_title : language[0].portfolio_personal_disney_title}</>),
            img: clone,
            infos: (<>{props.isEnglish ? language[1].portfolio_personal_disney_infos : language[0].portfolio_personal_disney_infos}</>),
            tecnologias: ['HTML', 'SCSS', 'JavaScript', 'Gulp'],
            link: 'https://clone-disneyplus-oficial-nickolasabad.vercel.app/',
            code: 'https://github.com/NickolasAbad/clone_disneyplus',
            hover: hoverPessoais0,
            setHover: setHoverPessoais0,
        },
        {
            title: (<>{props.isEnglish ? language[1].portfolio_personal_portfolio_title : language[0].portfolio_personal_portfolio_title}</>),
            img: portfoliofoto,
            infos: (<>{props.isEnglish ? language[1].portfolio_personal_portfolio_infos : language[0].portfolio_personal_portfolio_infos}</>),
            tecnologias: ['HTML', 'SCSS', 'JavaScript', 'React', 'Bootstrap', 'Vite'],
            link: 'https://bit.ly/nickolasabad',
            code: 'https://github.com/NickolasAbad/landing_page',
            hover: hoverPessoais1,
            setHover: setHoverPessoais1,
        },
        {
            title: (<>{props.isEnglish ? language[1].portfolio_personal_birthday_title : language[0].portfolio_personal_birthday_title}</>),
            img: landing,
            infos: (<>{props.isEnglish ? language[1].portfolio_personal_birthday_infos : language[0].portfolio_personal_birthday_infos}</>),
            tecnologias: ['HTML', 'SCSS', 'JavaScript', 'Parcel'],
            link: 'https://landing-page-aniversario-iota.vercel.app/',
            code: 'https://github.com/NickolasAbad/landing_page_aniversario',
            hover: hoverPessoais2,
            setHover: setHoverPessoais2,
        },
        {
            title: (<>{props.isEnglish ? language[1].portfolio_personal_address_title : language[0].portfolio_personal_address_title}</>),
            img: agenda,
            infos: (<>{props.isEnglish ? language[1].portfolio_personal_address_infos : language[0].portfolio_personal_address_infos}</>),
            tecnologias: ['React', 'Redux', 'MaterialUI', 'TypeScript', 'Vite'],
            link: 'https://agenda-de-contatos-ten-delta.vercel.app/',
            code: 'https://github.com/NickolasAbad/agenda_de_contatos',
            hover: hoverPessoais3,
            setHover: setHoverPessoais3,
        },
    ]

    const projectsProfissionaisData = [
        {
            title: (<>{props.isEnglish ? language[1].portfolio_professional_psychologist_title : language[0].portfolio_professional_psychologist_title}</>),
            img: thayse,
            infos: (<>{props.isEnglish ? language[1].portfolio_professional_psychologist_infos : language[0].portfolio_professional_psychologist_infos}</>),
            tecnologias: ['HTML', 'SCSS', 'JavaScript', 'React', 'Bootstrap', 'Vite'],
            link: 'https://thayselabancapsi.com.br/',
            hover: hoverProfissionais0,
            setHover: setHoverProfissionais0,
        },
        {
            title: (<>{props.isEnglish ? language[1].portfolio_professional_luxury_title : language[0].portfolio_professional_luxury_title}</>),
            img: trancoso,
            infos: (<>{props.isEnglish ? language[1].portfolio_professional_luxury_infos : language[0].portfolio_professional_luxury_infos}</>),
            tecnologias: ['HTML', 'Styled-Components', 'JavaScript', 'React', 'React-Router', 'MaterialUI', 'Vite'],
            link: 'https://odaratrancoso.com.br/',
            hover: hoverProfissionais1,
            setHover: setHoverProfissionais1,
        },
    ]

    
    return (
        <>
            <section id='portfolio' className={styles.portfolio}>
                <div className="container">
                    <div className={styles.portfolio__content}>
                        <h1 data-aos="flip-up" data-aos-duration="1000" className={clsx(styles.portfolio__title)}>{props.isEnglish ? language[1].portfolio_title : language[0].portfolio_title}</h1>
                        <img data-aos="slide-up" className={clsx(styles.portfolio__img)} src={memojiImg} alt="Memoji Apple" />
                        <nav className={styles.portfolio__tabs} style={{overflowX: 'hidden'}}>
                            <button onClick={trocaParaPessoais} className={clsx(styles.portfolio__button, `${pessoaisAtivo ? styles.portfolio__buttonIsActive : ""}`)} style={{width: profWidth}}>
                                {props.isEnglish ? language[1].portfolio_type_personal : language[0].portfolio_type_personal}
                            </button>
                            <button onClick={trocaParaProfissional} ref={myRef} className={clsx(styles.portfolio__button, `${!pessoaisAtivo ? styles.portfolio__buttonIsActive : ""}`, styles.portfolio__button__prof)}>
                                {props.isEnglish ? language[1].portfolio_type_professional : language[0].portfolio_type_professional}
                            </button>
                        </nav>
                        <ul className={clsx(styles.portfolio__list, `${pessoaisAtivo ? styles.portfolio__listIsActive : ""}`)}>
                        {projectsPessoaisData.map((project, index) => (
                            <li data-aos="zoom-in" data-aos-duration="1000" data-aos-delay={atualizaTimer()} key={index+1} onMouseEnter={() => project.setHover(true)} onMouseLeave={() => project.setHover(false) || handleClose()}>
                                {project.hover ? <>
                                    <img className={styles.portfolio__item__imgHover} src={project.img} alt="" />
                                    <div className={styles.portfolio__textHover}>
                                    <button onClick={handleShow} style={{borderRadius: '12px'}}>
                                        {props.isEnglish ? language[1].portfolio_button : language[0].portfolio_button}
                                    </button>
                                    <Modal show={show} onHide={() => handleClose() || project.setHover(false)} centered>
                                            <Modal.Header closeButton>
                                              <Modal.Title>{project.title}</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body style={{whiteSpace: 'pre-line'}}>
                                            {project.infos}
                                                {props.isEnglish ? language[1].portfolio_technology : language[0].portfolio_technology}
                                            <b>
                                                <ul>
                                                    {project.tecnologias.map((tecnologia, idx) => (
                                                      <li key={`${index}-${idx+1}`}>{tecnologia}</li>
                                                    ))}
                                                </ul>
                                            </b>
                                            </Modal.Body>
                                            <Modal.Footer>
                                              <Button variant="dark" href={project.code} target='_blank'>
                                                {props.isEnglish ? language[1].portfolio_code : language[0].portfolio_code}
                                              </Button>
                                              <Button variant="warning" href={project.link} target='_blank'>
                                                {props.isEnglish ? language[1].portfolio_view : language[0].portfolio_view}
                                              </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                </> : <>
                                    <img className={styles.portfolio__item__img} src={project.img} alt="" />    
                                </>}
                            </li>
                        ))}
                        </ul>
                        <ul data-tab-id="profissionais" className={clsx(styles.portfolio__list, `${!pessoaisAtivo ? styles.portfolio__listIsActive : ""}`, styles.portfolio__profissional)}>
                        {projectsProfissionaisData.map((project, index) => (
                            <li data-aos="zoom-in" data-aos-duration="1000"  data-aos-delay={atualizaTimer()} key={index+1} onMouseEnter={() => project.setHover(true)} onMouseLeave={() => project.setHover(false) || handleClose()}>
                                {project.hover ? <>
                                    <img className={styles.portfolio__item__imgHover} src={project.img} alt="" />
                                    <div className={styles.portfolio__textHover}>
                                    <button onClick={handleShow} style={{borderRadius: '12px'}}>
                                        {props.isEnglish ? language[1].portfolio_button : language[0].portfolio_button}
                                    </button>
                                    <Modal show={show} onHide={() => handleClose() || project.setHover(false)} centered>
                                            <Modal.Header closeButton>
                                              <Modal.Title>{project.title}</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body style={{whiteSpace: 'pre-line'}}>
                                            {project.infos}
                                                {props.isEnglish ? language[1].portfolio_technology : language[0].portfolio_technology}
                                            <b>
                                                <ul>
                                                    {project.tecnologias.map((tecnologia, idx) => (
                                                      <li key={`${index}-${idx+1}`}>{tecnologia}</li>
                                                    ))}
                                                </ul>
                                            </b>
                                            </Modal.Body>
                                            <Modal.Footer>
                                              <Button variant="warning" href={project.link} target='_blank'>
                                                {props.isEnglish ? language[1].portfolio_view : language[0].portfolio_view}
                                              </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                </> : <>
                                    <img className={styles.portfolio__item__img} src={project.img} alt="" />    
                                </>}
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
