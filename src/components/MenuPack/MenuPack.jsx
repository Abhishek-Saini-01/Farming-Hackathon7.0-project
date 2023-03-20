import React,{ useState, useEffect } from 'react'
import './MenuPack.css'
import { Container, Row, Col } from 'reactstrap'
import { Vegitables, Fruits, coffeeProducts, Tools, Food } from '../../assets/fake-data/products'
import ProductCard from '../ProductCard/ProductCard'

const MenuPack = () => {

    const [filter, setFilter] = useState('TOOLS')
    const [products, setProducts] = useState(Tools)

    useEffect(()=>{
        if(filter === 'TOOLS'){
            setProducts(Tools);
        }
        if(filter === 'FOOD'){
            setProducts(Food);
        }
        if(filter === 'Fruits'){
            setProducts(Fruits);
        }
        if(filter === 'PIZZA'){
            setProducts(Vegitables);
        }
        if(filter === 'COFFEE'){
            setProducts(coffeeProducts);
        }
    }, [filter])

  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className='text-center mb-4 '>
                    <h3 className='menu__title'>Oue Menu Pack</h3>
                </Col>
                <Col lg='12' className='text-center mb-5'>
                    <button className={`filter-btn ${filter === 'TOOLS' ? 'active__btn' : ''}`}onClick={()=> setFilter('TOOLS')}>Tools</button>
                    <button className={`filter-btn ${filter === 'FOOD' ? 'active__btn' : ''}`} onClick={()=> setFilter('FOOD')}>Seed</button>
                    <button className={`filter-btn ${filter === 'Fruits' ? 'active__btn' : ''}`} onClick={()=> setFilter('Fruits')}>Fruits</button>
                    <button className={`filter-btn ${filter === 'PIZZA' ? 'active__btn' : ''}`} onClick={()=> setFilter('PIZZA')}>Vegitables</button>
                    <button className={`filter-btn ${filter === 'COFFEE' ? 'active__btn' : ''}`} onClick={()=> setFilter('COFFEE')}>Machienary</button>
                </Col>

                {
                    products.map((item=>(
                        <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mb-4'>
                            <ProductCard item={item}/>
                        </Col>
                    )))
                }
            </Row>
        </Container>
    </section>
  )
}

export default MenuPack