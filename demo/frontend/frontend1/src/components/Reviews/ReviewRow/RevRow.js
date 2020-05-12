import React, {Component} from "react";


class RevRow extends Component {
    render() {
        return (
            <div className="row">
                <span className="col-8 text-left"><b> Title:  </b>{this.props.pizza.name}</span>
                <span className="col-6 text-left"><b>  Destination Name: </b>{this.props.pizza.description}</span>
            </div>
        )
    }
}

export default RevRow;