import React, {Component} from 'react';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'
import "../Sections/NewsSections/HeaderSections.css"

class EventLocationForm extends Component {
    render(){
        const event=this.props.event;
        return (
            <div className={"container m-3"}>
                <div className={"container"}>
                    <Card>
                        <Card.Body>
                            <Form>
                                <Form.Row className={"pr-2"}>
                                    <Form.Group  controlId="formGridEmail" className={"pr-2"}>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group  controlId="formGridPassword">
                                        <Form.Label>Лозинка</Form.Label>
                                        <Form.Control type="password" placeholder="Лозинка" />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group controlId="formGridAddress1">
                                    <Form.Label>Адреса</Form.Label>
                                    <Form.Control placeholder="" />
                                </Form.Group>

                                <Form.Group controlId="formGridAddress2">
                                    <Form.Label>Адреса 2</Form.Label>
                                    <Form.Control placeholder="апартман , студио..." />
                                </Form.Group>

                                <Form.Row>
                                    <Form.Group controlId="formGridCity" className={"pr-2"}>
                                        <Form.Label>Град</Form.Label>
                                        <Form.Control as="select">
                                            <option>Избери...</option>
                                            <option>Скопје</option>
                                            <option>Битола</option>
                                            <option>Прилеп</option>
                                            <option>Тетово</option>
                                            <option>Куманово</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="formGridZip" className={"pr-2"}>
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                                </Form.Row>

                                <Button variant="primary" type="submit">
                                    Пријави се
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        );
    }
}

export default EventLocationForm;