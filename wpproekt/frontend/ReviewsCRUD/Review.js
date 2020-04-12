import React, {Component} from 'react';
import Moment from "react-moment";
import {Link} from "react-router-dom";

class Review extends Component {

    render() {

        return (
            <tr className="ingredients">
                <td scope="col">{this.props.review.title}</td>
                <td scope="col">{this.props.review.destination}</td>
                <td scope="col">{this.props.review.description}</td>

                <td scope="col">
                    <button className="btn btn-sm btn-secondary">
                        <span className="fa fa-edit"/>
                        <Link className="btn btn-default" to={"/reviews/"+this.props.title+"/details"}>Details</Link>
                    </button>
                    <a onClick={()=>this.props.onDelete(this.props.name)} className="btn btn-danger" title="Избриши">
                        <i className="fa fa-trash">Remove</i>
                    </a>

                    <button className="btn btn-sm btn-outline-dark">
                        <Link className="btn btn-default" to={"/reviews/"+this.props.title+"/edit"}><i className="fa fa-pencil"></i>Edit</Link>
                    </button>
                </td>
            </tr>

        );
    }



}


export default Review;