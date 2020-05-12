import React from 'react';
import ReviewTerm from "../ReviewTerm/ReviewTerm";
import {Link} from "react-router-dom";
//functional component

const getReviews = (props) => {

    const consultationTerms = props.terms.map((term,index)=> {
        //map ->going through all objects one by one
        debugger;
        return (//props->recent review
            <ReviewTerm onDelete={props.onDelete} name={term.title} term={term} key={index} colClass={"col-md-6 mt-2 col-sm-12"}/>
        );//calling onDELETE method after click
    });

    const handlePageClick = (e) => {
        props.onPageClick(e.selected)
    }

    let LengthProps = props.terms.length;
    if(LengthProps === 0){
        return(
            <div>
                <div>You have not added any reviews yet.</div>
                <button className="btn btn-outline-secondary">
                    <Link className="nav-link" to={"/ingredients/new"}>Add new review</Link>
                </button>
            </div>
        )
    }
    else {
        return (
            <div className={"row"}>
                <div className="row">
                    <h4 className="text-upper text-left">Reviews</h4>
                    <div className="table-responsive">
                        <table className="table tr-history table-striped small">
                            <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Destination Name</th>
                                <th scope="col">Description</th>

                            </tr>
                            </thead>
                            <tbody>
                            {consultationTerms}
                            </tbody>
                        </table>
                    </div>
                    <button className="btn btn-outline-secondary">
                        <Link className="nav-link" to={"/ingredients/new"}>Add new review</Link>
                    </button>
                </div>
            </div>
        )
    }
}

export default getReviews;