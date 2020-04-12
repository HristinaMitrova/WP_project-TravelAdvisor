import React from 'react';

import {Link} from "react-router-dom";
import Review from "./Review";
//ova e funkcionalna komponenta

const getReviews = (props) => {

    const reviews = props.reviews.map((term,index)=> {
        //map da se izmapira site konsult i eden po eden obj se izminuva
        debugger;
        return (//props termino koj tekovno go predavaam
            <Review onDelete={props.onDelete} name={term.title} term={term} key={index} colClass={"col-md-6 mt-2 col-sm-12"}/>
        );
    });

    const handlePageClick = (e) => {
        props.onPageClick(e.selected)
    }

    let LengthProps = props.terms.length;
    if(LengthProps === 0){
        return(
            <div>
                <div>There are no reviews</div>
                <button className="btn btn-outline-secondary">
                    <Link className="nav-link" to={"/reviews/new"}>Add new review</Link>
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
                                <th scope="col">Destination</th>
                                <th scope="col">Description</th>

                            </tr>
                            </thead>
                            <tbody>
                            {reviews}
                            </tbody>
                        </table>
                    </div>
                    <button className="btn btn-outline-secondary">
                        <Link className="nav-link" to={"/reviews/new"}>Add new review</Link>
                    </button>
                </div>
            </div>
        )
    }
}

export default getReviews;