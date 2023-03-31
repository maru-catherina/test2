
import React, { Component } from "react";
import { Container, CardGroup, Card, Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap/Carousel";
import CarouselBox from "../Components/CarouselBox";

export default class Home extends Component{
    render () {
        return (
            <>
            <CarouselBox />
            <Container>
                <h2 className="text-center m-4">Nature</h2>
                <CardGroup >
                    <Card  className="m-4" bg="warning" border="primary">
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                        <Card.Img variant="bottom" src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></Card.Img>
                        
                    </Card>
                    <Card  className="m-4" border="dark" text="primary">
                        <Card.Img variant="top" src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></Card.Img>
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                    <Card className="m-4" >
                        <Card.Img variant="top" src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></Card.Img>
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
            </>
        )
    }
}