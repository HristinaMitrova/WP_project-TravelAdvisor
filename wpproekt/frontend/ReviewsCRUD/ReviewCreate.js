import React from 'react'
import {Link, Redirect,useHistory} from 'react-router-dom';

const ReviewCreate = (props) => {
    let valid=false;
    const history = useHistory();

    const onFormSubmit = (e) => {//pva onForm Submit se izvrsuva ko ce se klikni na kopceto zacuvaj i da ja obrabotam taa forma
        //vnatre se kreira event koj se keira pri klik na kopceto
        e.preventDefault();
        debugger;//za da vidime so ima vo ovoj event e
        console.log(e);

        const reviewnew = {
            "title": e.target.title.value,
            "destination": e.target.destination.value,
            "description": e.target.description.value

        };
        if(reviewnew.title === "" || reviewnew.destination ===""|| reviewnew.description ===""){
            valid=false;
            return valid;
        }
        else {
            valid=true;
            props.onNewTermAdded(newTerm);
            history.push("/reviews")
        }
    }

    return (//jsx template koja treba da ja vrajca ova forma
        <div className="row">
            <form className="card" onSubmit={onFormSubmit}>
                <h4 className="text-upper text-left">Add Review</h4>
                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-4 offset-sm-1 text-left " >Review title</label>
                    <div className="col-sm-6">
                        <input type="text" name={"name"}  className="form-control" id="title" placeholder="Review title" maxLength="50"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="destination" className="col-sm-4 offset-sm-1 text-left" >Destination</label>
                    <div className="col-sm-6">
                        <input type="text" name={"destination"} className="form-control" id="destination" placeholder="Destination" maxLength="50"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="description" className="col-sm-4 offset-sm-1 text-left" >Description</label>
                    <div className="col-sm-6">
                        <input type="text" name={"description"} className="form-control" id="description" placeholder="Description" maxLength="500"/>
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
                            <Link to={"/reviews/new"}>Reset</Link>
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

export default ReviewCreate;