import React, {Component} from "react";

class ReviewRow extends Component{
render() {
return(
    <div className="row">
        <span className="col-8 text-left"><b> Title:  </b>{this.props.pizza.title}</span>
        <span className="col-6 text-left"><b>  Destination: </b>{this.props.pizza.destinationName}</span>
        <span className="col-6 text-left"><b>  Description: </b>{this.props.pizza.description}</span>
    </div>
)
}
}
export default ReviewRow;