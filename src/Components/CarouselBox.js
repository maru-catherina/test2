import React, { Component } from "react";
import  Carousel  from "react-bootstrap/Carousel";
import beach1 from "../assets/beach1.jpg"
import beach2 from "../assets/beach2.jpg"
import beach3 from "../assets/beach3.jpg"
export default class CarouselBox extends Component{
    render () {
        return (
           <Carousel>
            <Carousel.Item>
                <img className="d-block w-100"
                src={beach1} alt="Beach" />
            <Carousel.Caption>
                <h3 >Sunny Beach</h3>
                <p>Some text about the picture</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"
                src={beach2} alt="Beach" />
            <Carousel.Caption>
                <h3>Hot Beach</h3>
                <p>Another  text about the picture</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"
                src={beach3} alt="Beach" />
            <Carousel.Caption>
                <h3>Evening Beach</h3>
        <p>Maybe a little bit more information about the picture</p>
            </Carousel.Caption>
            </Carousel.Item>
           </Carousel>


        )
    }
}