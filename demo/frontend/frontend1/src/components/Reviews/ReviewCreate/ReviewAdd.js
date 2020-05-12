import React from 'react'
import {Link, Redirect,useHistory} from 'react-router-dom';
import DragnDropzone from "../../DragNDrop/DragnDrop";

const ReviewAdd = (props) => {
    let valid=false;
    const history = useHistory();

    const onFormSubmit = (e) => {//onForm execute by click on Save, then create event
        //prevent call back
        e.preventDefault();
        debugger;//debugs whats in this event
        console.log(e);

        const newTerm = {
            "name": e.target.name.value,
            "spicy": e.target.spicy.value,
            "amount": e.target.amount.value,
            "veggie": e.target.veggie.value
        };
        //the picture with Drag'n'Drop is optional, so its not included in this if
        if(newTerm.amount === "" || newTerm.name ===""){
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
                <h4 className="text-upper text-left">Add Review</h4>
                <div className="form-group row">
                    <label htmlFor="ingredient" className="col-sm-4 offset-sm-1 text-left " >Review Title</label>
                    <div className="col-sm-6">
                        <input type="text" name={"name"}  className="form-control" id="ingredient" placeholder="title" maxLength="50"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="amount" className="col-sm-4 offset-sm-1 text-left" >Destination name</label>
                    <div className="col-sm-6">
                        <input type="text" name={"amount"} className="form-control" id="amount" placeholder="destination" maxLength="50"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="veggie" className="col-sm-4 offset-sm-1 text-left">Description</label>
                    <div className="col-sm-6 col-xl-4">
                        <input type="text" name={"veggie"} className="form-control" id="veggie" placeholder="description"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="spicy" className="col-sm-4 offset-sm-1 text-left">This is optional</label>
                    <div className="col-sm-6 col-xl-4">
                        <DragnDropzone/>
                        <input type="text" name={"spicy"} className="form-control" id="spicy"placeholder="additional message"/>
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

export default ReviewAdd;