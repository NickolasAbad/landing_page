/* eslint-disable react/prop-types */

import {Nav, Navbar, Form, FormLabel, Container} from 'react-bootstrap'

import language from "../../../public/language.json"

function NavbarE(props) {
    
  return (
    <>
      <Navbar data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" bg="transparent" data-bs-theme="dark" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">&lt;/&gt;</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className='border-0 position-absolute top-0 end-0'/>
          <Navbar.Collapse id="responsive-navbar-nav" className='text-center'>
              <Nav className="m-auto">
                <Nav.Link data-aos="fade-right" data-aos-duration="500" data-aos-delay="350" href="#home">{props.isEnglish ? language[1].nav_home : language[0].nav_home}</Nav.Link>
                <Nav.Link data-aos="fade-right" data-aos-duration="500" data-aos-delay="650" href="#who">{props.isEnglish ? language[1].nav_about : language[0].nav_about}</Nav.Link>
                <Nav.Link data-aos="fade-right" data-aos-duration="500" data-aos-delay="950" href="#skills">{props.isEnglish ? language[1].nav_skills : language[0].nav_skills}</Nav.Link>
                <Nav.Link data-aos="fade-right" data-aos-duration="500" data-aos-delay="1250" href="#portfolio">{props.isEnglish ? language[1].nav_portfolio : language[0].nav_portfolio}</Nav.Link>
              </Nav>
              <Nav className='pt-2'>
                <Form className='d-flex m-auto'>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    onChange={props.toggle}
                  />
                  <FormLabel className='text-muted ps-1'>
                    {props.isEnglish ? "English" : "Português"}
                  </FormLabel>
                </Form>
              </Nav>
          </Navbar.Collapse>
      </Container>
      </Navbar>
    </>
  );
}

export default NavbarE;