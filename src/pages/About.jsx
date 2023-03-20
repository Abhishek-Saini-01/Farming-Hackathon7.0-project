import React from 'react'
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import { Container, Row, Col } from 'reactstrap'
import './About.css'

const About = () => {
  return (
    <section>
        <Header />       
        <Container className='pt-0'>
            <Row>
                <Col lg='12' className='text-center mb-4 mt-4 '>
                    <h2 className='menu__title About_us_title'>About Us</h2>
                </Col>

               <Col>
                    <p className='About_text'>Our Website basically provides Facilities to farmer about how they are able to rich market efficiently and sell their product without any difficulties with desired cost. Agriculture is at the epicentre of the country’s journey towards Atma Nirbharta with farmers at its core.</p><p className='About_text'> The efforts of our government have consistently focused upon upliftment, empowerment and stability of farmers in the technical, economic and social realm. It is in this endeavour that we continuously explore various methods to achieve ecologically sustainable and economically viable methods. Natural farming is one such method that holds potential to realise all these goals. It is backed by our rich traditional knowledge, and is a practice of agriculture based on locally available resources, which makes it a sustainable and viable practice.</p>
               </Col>
            </Row>
        </Container>
        <Footer />
    </section>
  )
}

export default About