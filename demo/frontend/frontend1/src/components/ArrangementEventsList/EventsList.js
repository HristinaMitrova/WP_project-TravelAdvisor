import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import SectionComponent from "../SectionComponent/SectionComponent"
import './EventsList.css'

class EventsList extends Component{

    render() {
        return(
            <SectionComponent>
            <div className="card-elem">
                <CardDeck>
                    {this.props.events.map((event)=>{
                        return <div className={"m-4"}>
                        <Card>
                                <Card.Body>
                                    <Card.Title className={"font-weight-bold"}>{event.naslov}</Card.Title>
                                    <hr/>
                                    <Card.Text>{event.sodrzina}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary">Get Reviews now</Button>
                                </Card.Footer>
                        </Card>
                        </div>
                    })}
                </CardDeck>
            </div>
            </SectionComponent>
        );
    }
}

export default EventsList;