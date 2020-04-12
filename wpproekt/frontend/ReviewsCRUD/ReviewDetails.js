import React,{useState,useEffect} from 'react'
import {useParams, useHistory, Link} from 'react-router-dom';



import ReviewService from "../../repository/custom-axios/axiosConsultationsRepository";
import ReviewTable from "./ReviewTable";

const IngredientDetails = (props) => {


    const [reviews,setReviews] = useState({});
    const [agencies, setAgency] = useState([]);
    const {title} = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get("/rest/reviews/"+title).then((data)=>{
            setTerm(data.data);
        })
    },[])

    useEffect(() => {
        ReviewService.getReviewAgencies(title).then(response => {
            setAgencies(response.data);
        })
    }, []);

    let agenciesView = agencies.map(agency => <ReviewTable review={review}/>);

    if (agenciesView.length === 0) {
        agenciesView= <span>None</span>
    }
    return (
        <div className="row">
            <h4 className="text-upper text-left col-12">Detail Review</h4>

            <div className="form-group row">
                <div  name={"title"} className="col-12 text-left" ><b> Title:</b> {term.name} </div>
                <div  name={"description"}  className="col-12 text-left" ><b>Description:</b> {term.amount} </div>
                <div  name={"destination"}  className="col-12 text-left" ><b>Destination: </b></div>


                <div className="offset-sm-1 col-12  text-center">
                    <button className="btn btn-danger text-upper">
                        <Link to={"/reviews"}>Cancel</Link>
                    </button>
                </div>
            </div>
            <div><h2>Agencies: </h2>
                {agenciesView}
            </div>
        </div>
    );
}



export default IngredientDetails;
