import React, {Component} from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Forma from '../GetReviewedForm/Forma';
import HeaderSections from './HeaderSections';

class NewsSections extends Component {
    constructor(props){
        super(props)
        this.showForm=this.showForm.bind(this);
    }

    state={
        IsShowForm:false,
        eventId: 0,
        form: <span></span>
    };

    showForm=(id)=>{
        var toggled=!this.state.IsShowForm;
        console.log(id)
        console.log(toggled)
        this.setState(state => ({
              IsShowForm: true
            }));
        console.log(this.state.IsShowForm)
        this.setState(state => ({
                      eventId: id
                    }));
        console.log(this.state.eventId)

        if(this.state.IsShowForm){
            this.setState(state => ({
                     // form: <Forma categories={this.props.categories} categoryId={this.props.categoryId} eventId={this.state.eventId} />
             }));
        }
        console.log(this.state.IsShowForm)
        console.log(this.state.eventId)

    }

     chooseEvent = (id) =>{
         console.log(id);
         let path = `/details/`+id;
         this.props.history.push(path);
      }


     render(){
        const categoryId=this.props.categoryId;
        let form=<span></span>;
        const shown=this.state.IsShowForm;

       if(shown){
            form=<Forma categories={this.props.categories} categoryId={this.props.categoryId} eventId={this.state.eventId} />
        }
        return (
      <div className="container">

      <HeaderSections categories={this.props.categories} categoryId={this.props.categoryId}/>

      <div className="card-elem">
         <CardDeck>
         <Card>
            <Card.Body>
               <Card.Title className={"font-weight-bold"}>{this.props.categories[categoryId].nastani[0].naslov}</Card.Title>
               <hr/>
               <Card.Text>{this.props.categories[categoryId].nastani[0].sodrzina}</Card.Text>
            </Card.Body>
            <Card.Footer>
               <Button variant="primary" onClick={this.showForm.bind(this, 0)}>Get Reviews</Button>
            </Card.Footer>
         </Card>
         <Card>
            <Card.Body>
               <Card.Title className={"font-weight-bold"}>{this.props.categories[categoryId].nastani[1].naslov}</Card.Title>
               <hr/>
               <Card.Text>{this.props.categories[categoryId].nastani[1].sodrzina}</Card.Text>
            </Card.Body>
            <Card.Footer>
               <Button variant="primary" onClick={this.showForm.bind(this, 1)}>Get Reviews</Button>
            </Card.Footer>
         </Card>
         <Card>
            <Card.Body>
               <Card.Title className={"font-weight-bold"}>{this.props.categories[categoryId].nastani[2].naslov}</Card.Title>
               <hr/>
               <Card.Text>{this.props.categories[categoryId].nastani[2].sodrzina}</Card.Text>
            </Card.Body>
            <Card.Footer>
               <Button variant="primary" onClick={this.showForm.bind(this, 2)}>Get Reviews</Button>
            </Card.Footer>
         </Card>
         </CardDeck>

      </div>

        <ul class="pagination pt-5  justify-content-center">
          <li class="page-item disable=true"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item "><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>

           {form}
     </div>
    );
    }
}

export default NewsSections;