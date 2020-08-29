import React from 'react'
import './Main.css'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Button } from 'react-bootstrap';

function Main() {
    return (
        <>
            <div className='carousel'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/slider_1.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/slider_2.png"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/slider_3.png"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className='main-welcome'>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h3><b>WELCOME TO GOLDEN FORK</b></h3>
                        <br />
                        <p>
                            Golden Fork är Stockholms äldsta och bästa rockställe! En oas för dig som gillar god mat och bra musik, oavsett ålder eller samhällsklass. <br /><br />
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum distinctio velit, minus modi eos quasi quo reprehenderit eius possimus delectus atque suscipit officia magnam, necessitatibus neque. Obcaecati corporis aliquid ipsum.
                </p>
                    </div>


                    <div className="col-sm-12 col-md-6">
                        <h3><b>TODAY'S MENU</b></h3>
                        <br />
                        <img
                            className="d-block w-100"
                            src="images/todays_menu.jpg"
                            alt="Today's menu"
                        />
                    </div>


                </div>

                <Button className=' mt-5' variant="danger" size="lg" block>
                    <Link to='/boka' > Book a table</Link>
                </Button>


            </div>
        </>
    )
}

export default Main
