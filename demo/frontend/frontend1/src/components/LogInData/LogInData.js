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
                 <h2>Log in with your existing account:</h2>
                 <Form className="form" onSubmit={this.props.handleLogin}>
                     <Col>
                         <FormGroup>
                            <Label>Email</Label>
                            <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="accountusername@email.com"/>
                        </FormGroup>
                     </Col>
                    <Col>
                        <FormGroup>
                        <Label for="examplePassword">Your Password:</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"/>
                        </FormGroup>
                    </Col>
                    <Button style={{background: "#C0C0C0"}}>Sign In</Button>
                 </Form>
                 </Col>
                    <Col xs="3"/>
                </Row>
            </div>
        );
    }
}

export default LogInData;