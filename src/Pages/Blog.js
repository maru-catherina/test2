import React, { Component } from "react";
import { Container,   Row, Col, Card, ListGroup } from "react-bootstrap";

export default class Blog extends Component{
    render () {
        return (
            <Container>
                <Row>
                    <Col className="mt-3" md="9">
                        <Card>
                            <Card.Img variant="top"                             
                            height={300}
                            
                            src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            />
                            <Card.Body>
                            <h5>Blog post</h5>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                 accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                  quae ab illo inventore veritatis et quasi architecto beatae 
                                  vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia 
                                  voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                   magni dolores eos qui ratione voluptatem sequi nesciunt. 
                                   Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                   consectetur, adipisci velit, sed quia non numquam eius modi 
                                   tempora incidunt ut labore et dolore magnam aliquam quaerat 
                                   voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem 
                                   ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
                                   consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
                                   velit esse quam nihil molestiae consequatur, vel illum qui dolorem 
                                   eum fugiat quo voluptas nulla pariatur?</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Html</ListGroup.Item>
                                <ListGroup.Item>Css</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>Rython</ListGroup.Item>
                                <ListGroup.Item>Html</ListGroup.Item>
                                <ListGroup.Item>Css</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="m-3" bg="light" > 
                            <Card.Body> 
                            <Card.Title>Side Widget</Card.Title>
                            <Card.Text>                     
                            Quis autem vel eum iure reprehenderit qui in ea voluptate
                                   velit esse quam nihil molestiae consequatur, vel illum qui dolorem 
                                   eum fugiat quo voluptas nulla pariatur?"
                            </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>

                </Row>


            </Container>
                

            

        )
    }
}