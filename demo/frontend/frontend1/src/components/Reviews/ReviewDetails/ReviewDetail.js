import React,{useState,useEffect} from 'react'
import {useParams, useHistory, Link} from 'react-router-dom';
import axios from '../../../custom-axios/axios'
import IngredientsService from '../../../repository/axiosConsultationsRepository'
import ReviewRow from "../ReviewRow/ReviewRow";


const ReviewDetail = (props) => {


    const [term,setTerm] = useState({});
    const [pizzas, setPizzas] = useState([]);
    const {name} = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get("/rest/ingredients/"+name).then((data)=>{
            setTerm(data.data);
        })
    },[])

    useEffect(() => {
        IngredientsService.getIngredientPizzas(name).then(response => {
            setPizzas(response.data);
        })
    }, []);

    let pizzasView = pizzas.map(pizza => <ReviewRow pizza={pizza}/>);

    if (pizzasView.length === 0) {
        pizzasView = <span>None</span>
    }
    return (
        <div className="row">
            <h4 className="text-upper text-left col-12">Detail Review</h4>

            <div className="form-group row">
                <div  name={"name"} className="col-12 text-left" ><b> Title:</b> {term.name} </div>
                <div  name={"amount"}  className="col-12 text-left" ><b>Destination Namet:</b> {term.amount} </div>
                <div  name={"veggie"}  className="col-12 text-left" ><b>Description: </b>{term.veggie}</div>
                <div  name={"spicy"}  className="col-12 text-left" ><b>Spicy: </b> {term.spicy}</div>

                <div className="offset-sm-1 col-12  text-center">
                    <button className="btn btn-danger text-upper">
                        <Link to={"/ingredients"}>Cancel</Link>
                    </button>
                </div>
            </div>
            <div><h2>Reviews: </h2>
                {pizzasView}
            </div>
        </div>
    );
}



export default ReviewDetail;
