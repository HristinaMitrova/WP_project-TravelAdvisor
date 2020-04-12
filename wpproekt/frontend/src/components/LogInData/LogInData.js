import React, {Component} from 'react';
import {
    Col, Form,
    FormGroup, Label, Input,
    Button,Row,
} from 'reactstrap';


class LogInData extends Component{
    render(){
        return (
            <div className="mt-3">
                <Row>
                    <Col xs="3"/>
                    <Col>
                        <h2>Log In now:</h2>
                        <Form className="form" >
                            <Col>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="exampleEmail"
                                        placeholder="myemail@email.com"/>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="examplePassword"
                                        placeholder="********"/>
                                </FormGroup>
                            </Col>
                            <Button>Log In</Button>
                        </Form>
                    </Col>
                    <Col xs="3"/>
                </Row>
            </div>
        );
    }
}

export default LogInData;