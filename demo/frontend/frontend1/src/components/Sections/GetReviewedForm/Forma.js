import React, {Component} from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'
import "../NewsSections/HeaderSections.css"

class Forma extends Component {
    render(){
            const categoryId=this.props.categoryId
            const eventId=this.props.eventId
            console.log(this.props.eventId)
        return (
          <div className={"container"}>
              <div className={"row pt-2"}>
                <div className={"col-2"}>
                   <img className="img-icon" src={this.props.categories[categoryId].backgroundUrl}/>
                </div>
                <div className={"col"}>
                   <h2 className={"font-weight-bold justify content centre"}>{this.props.categories[categoryId].nastani[eventId].naslov}</h2>
                </div>
              </div>
              <br/>
              <br/>
          <div className={"container"}>
               <Form>
                 <Form.Row className={"pr-2"}>
                   <Form.Group  controlId="formGridEmail" className={"pr-2"}>
                     <Form.Label>Name</Form.Label>
                     <Form.Control type="email" placeholder="Insert your name" />
                   </Form.Group>

                   <Form.Group  controlId="formGridPassword">
                     <Form.Label>Surname</Form.Label>
                     <Form.Control type="password" placeholder="Insert your surname" />
                   </Form.Group>
                 </Form.Row>

                 <Form.Group controlId="formGridAddress1">
                   <Form.Label>Your E-mail</Form.Label>
                   <Form.Control placeholder="accountusername@mail.com" />
                 </Form.Group>





                 <Button variant="primary" type="submit">
                   Get Reviews
                 </Button>
               </Form>
               </div>
        </div>

        );
    }
}

export default Forma;