import React,{useState,useEffect} from 'react'
import {useParams, useHistory, Link} from 'react-router-dom';
import axios from '../../repository/axiosConsultationsRepository'

const ReviewEdit = (props) => {

    const [review,setReview] = useState({});
    const {title} = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get("/rest/reviews/"+name).then((data)=>{
            setReview(data.data);
        })
    },[])

    const onFormSubmit = (e) => {
        e.preventDefault();
        debugger;
        console.log(e);
        console.log(e.target.name.value);

        const newReview= {

            "title": e.target.title.value,
            "destination": e.target.destination.value,
            "description": e.target.description.value

        }
        props.onsubmitt(newReview);

        history.push("/reviews");

    }

    const handleReviewOnChange  = (e) => {
        const paramName = e.target.name;
        const paramValue = e.target.value;
        setTReview({paramName:paramValue});
    }

    return (
        <div className="row">
            <form className="card" onSubmit={onFormSubmit}>
                <h4 className="text-upper text-left">Edit Review</h4>
                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-4 offset-sm-1 text-left">Review title:</label>
                    <div className="col-sm-6">
                        <input type="text" value={review.title} name={"title"} onChange={handleReviewOnChange} className="form-control" id="title" placeholder="Review title" maxLength="50"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="destination" className="col-sm-4 offset-sm-1 text-left">Destination</label>
                    <div className="col-sm-6">
                        <input type="text" name={"destination"} value={review.destination} onChange={handleReviewOnChange} className="form-control" id="destination" placeholder="Destination" maxLength="50"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="description" className="col-sm-4 offset-sm-1 text-left">Description</label>
                    <div className="col-sm-6 col-xl-4">
                        <input type="text" name={"description"} value={review.description} onChange={handleReviewOnChange}className="form-control" id="description"placeholder="Decription" maxLength="50"/>
                    </div>
                </div>



                <div className="form-group row">
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <button
                            type="submit"
                            className="btn btn-primary text-upper">
                            Save
                        </button>
                    </div>
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <button
                            className="btn btn-warning text-upper">
                            <Link to={"/reviews"}>Reset</Link>
                        </button>
                    </div>
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <button
                            className="btn btn-danger text-upper">
                            <Link to={"/reviews"}>Cancel</Link>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ReviewEdit;
