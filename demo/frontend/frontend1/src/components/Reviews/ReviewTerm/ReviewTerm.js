import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ReviewTerm extends Component {
    render() {

        return (//props soodvetno review
            <tr className="ingredients">
                <td scope="col">{this.props.term.title}</td>
                <td scope="col">{this.props.term.destinationName}</td>
                <td scope="col">{this.props.term.description}</td>

                <td scope="col">
                    <button className="btn btn-sm btn-secondary">
                        <span className="fa fa-edit"/>
                        <Link className="btn btn-default" to={"/ingredients/"+this.props.name+"/details"}>Details</Link>
                    </button>
                    <a onClick={()=>this.props.onDelete(this.props.name)} className="btn btn-danger" title="Delete">
                        <i className="fa fa-trash">Remove</i>
                    </a>

                    <button className="btn btn-sm btn-outline-dark">
                        <Link className="btn btn-default" to={"/ingredients/"+this.props.name+"/edit"}><i className="fa fa-pencil"></i>Edit</Link>
                    </button>
                </td>
            </tr>

        );
    }
    spicy(){
        if (this.props.term.spicy) {
            return <div>true</div>;

        }else{
            return <div>false</div>
        }
    }
    veggie(){
        if (this.props.term.veggie ) {
            return <div>true</div>;

        }else{
            return <div>false</div>
        }
    }
}
export default ReviewTerm;