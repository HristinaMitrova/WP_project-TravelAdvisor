import React from 'react'
import {Link, Redirect,useHistory} from 'react-router-dom';
import DragnDropzone from "../../DragNDrop/DragnDrop";

const ReviewCreate = (props) => {
    let valid=false;
    const history = useHistory();

    const onFormSubmit = (e) => {//onForm se izvrsuva pri klik na kopceto Save, potoa se kreira event
        e.preventDefault();//prevencija od call back povici
        debugger;//debugs whats in this event
        console.log(e);

        const newTerm = {
            "title": e.target.title.value,
            "destinationName": e.target.destinationName.value,
            "description": e.target.description.value
        };
        //the picture with Drag'n'Drop is optional, so its not included in this if
        if(newTerm.title === "" || newTerm.destinationName==="" || newTerm.description){
            valid=false;
            return valid;
        }
        else {
            valid=true;
            props.onNewTermAdded(newTerm);//onNewTermAdded called by function in  Reviews.js via property
            history.push("/ingredients")
        }
    }

    return (//jsx template form
        <div className="row">
            <form className="card" onSubmit={onFormSubmit}>
                <h4 className="text-upper text-left">Add Your Review</h4>
                <div className="form-group row">
                    <label htmlFor="ingredient" className="col-sm-4 offset-sm-1 text-left " >Review title</label>
                    <div className="col-sm-6">
                        <input type="text" name={"name"}  className="form-control" id="ingredient" placeholder="Title" maxLength="50"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="amount" className="col-sm-4 offset-sm-1 text-left" >The Name of The Destination</label>
                    <div className="col-sm-6">
                        <input type="text" name={"amount"} className="form-control" id="amount" placeholder="destination name" maxLength="50"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="veggie" className="col-sm-4 offset-sm-1 text-left">Your Description</label>
                    <div className="col-sm-6 col-xl-4">
                        <input type="text" name={"veggie"} className="form-control" id="veggie" placeholder="Description here..."/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="image" className="col-sm-4 offset-sm-1 text-left">This is optional</label>
                    <div className="col-sm-6 col-xl-4">
                        <DragnDropzone/>

                    </div>
                </div>



                <div className="form-group row">
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <button type="submit"className="btn btn-primary text-upper" disabled={valid}>
                            Save
                        </button>
                    </div>
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <button
                            className="btn btn-warning text-upper">
                            <Link to={"/ingredients/new"}>Reset</Link>
                        </button>
                    </div>
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <button
                            className="btn btn-danger text-upper">
                            <Link to={"/ingredients"}>Cancel</Link>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default ReviewCreate;