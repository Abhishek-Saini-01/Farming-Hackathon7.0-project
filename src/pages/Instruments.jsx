import React from 'react'
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import { Container, Row, Col } from 'reactstrap'
import { MenuPack } from '../components';

const Instruments = () => {
  return (
    <section>
        <Header />       
            <Container className='pt-0'>
                <Row>
                    <Col lg='12' className='text-center mb-4 mt-4 '>
                        <h2 className='menu__title About_us_title'>Instruments</h2>
                    </Col>

                    <Col>
                    <MenuPack />
                    </Col>
                </Row>
            </Container>
        <Footer />
    </section>
  )
}

export default Instruments