import React, {Component} from 'react';
//import './SuggestionForm.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu/Menu.js';
import StickyFooter from './StickyFooter.js';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormCheck from 'react-bootstrap/FormCheck';
import Button from 'react-bootstrap/Button';
import DragnDropzone from "./DragNDrop/DragnDrop";
class SuggestionForm extends Component{
    render() {


    return(
        <div>
            <Menu/>
            <br/>
            <br/>
            <div className={"container"}>
                <Form>
                    <h3 className="{justify-content-start}">Fill in the following input places: </h3>
                    <br/>
                    <Form.Row className={"pr-2"}>
                        <Form.Group  controlId="formGridEmail" className={"pr-2"}>
                            <Form.Label><b>Your Name</b></Form.Label>
                            <Form.Control  placeholder="Insert your name here" />
                        </Form.Group>

                        <Form.Group  controlId="formGridPassword">
                            <Form.Label><b>Surname</b></Form.Label>
                            <Form.Control  placeholder="Insert your surname here" />
                        </Form.Group>
                    </Form.Row>


                     <Form.Row>
                      <Form.Group controlId="formGridCity" className={"pr-2"}>
                           <Form.Label><b>You can pick from the following destinations if you like:</b></Form.Label>
                           <Form.Control as="select">
                                           <option>Choose one...</option>
                                           <option>Spain, Ibiza</option>
                                           <option>Portugal, Lisbon</option>
                                           <option>Germany, Berlin</option>
                                           <option>None of theese, I will write you mine bellow</option>
                           </Form.Control>
                       </Form.Group>

                      </Form.Row>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label><b>Your personal recommendation of a place that you want to recieve reviews:</b></Form.Label>
                        <Form.Control placeholder="You can insert more than one if you want :))" />
                    </Form.Group>
                    <Form.Group controlId="formGridAddress3">
                        <Form.Label><b>In case you are not familiar with the name of the place, but you have a picture,you can upload it here</b></Form.Label>
                        <DragnDropzone/>
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label><b>Your e-mail</b></Form.Label>
                        <Form.Control type="email" placeholder="Insert your mail here (username@mail.com) " />
                    </Form.Group>



                    <Button variant="primary" type="submit">
                        <b>Submit</b>
                    </Button>
                </Form>
            </div>
            <br/>
            <br/>
            <StickyFooter/>
        </div>



    );
    }
}
export default SuggestionForm;