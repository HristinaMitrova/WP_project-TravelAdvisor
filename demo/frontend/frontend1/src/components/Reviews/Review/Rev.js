import React, {Component} from 'react';



import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'


import ReviewDetail from "../ReviewDetails/ReviewDetail";
import ReviewAdd from "../ReviewCreate/ReviewAdd";
import RevEdit from "../ReviewUpdate/RevEdit";
import IngredientsService from "../../../repository/axiosConsultationsRepository";
import Reviews from "../ReviewList/ReviewLists"


class Rev extends Component {
    constructor(props) {//all the reviews in state
        super(props);
        this.state = {//the recent state called terms
            terms: []
        }
    }

    componentDidMount() {
        this.loadIngredients();
    }

    loadIngredients = () => {
        IngredientsService.fetchIngredientTerms().then(response=>{
            this.setState((prevState)=>{//previous state as an input
                return {
                    "terms":response.data.content//data in content that should be rendered
                    //application usage
                }
            })
        })
    }


    createIngredient = (newTerm) => {
        IngredientsService.addIngredientTerm(newTerm).then((response)=>{
            const newTerm = response.data;
            this.setState((prevState) => {//update previous state
                const newTermsRef = [...prevState.terms, newTerm];//adding new element in terms
                //const terms = prevState.terms.concat(newTerm);
                return {
                    "terms": newTermsRef
                }
            });
        });
    }

    updateIngredient = ((editedTerm) => {
        IngredientsService.updateIngredientTerm(editedTerm).then((response)=>{
            const newTerm = response.data;
            this.setState((prevState) => {
                const newTermsRef = prevState.terms.map((item)=>{
                    debugger;
                    if (item.name===newTerm.name) {
                        return newTerm;
                    }
                    return item;
                })
                return {
                    "terms": newTermsRef
                }
            });
        });
    });


    deleteIngredient = (name) => {
        IngredientsService.deleteIngredientTerm(name).then((response)=>{
            this.setState((state) => {
                const terms = state.terms.filter((t) => {
                    return t.name !== name;
                });
                return {terms}
            })
        })
    }

    render() {

        const routing = (
            <Router>

                <main role="main" className="mt-3">

                    <div className="container">
                        <Route path={"/ingredients"} exact render={()=>
                            <Reviews onPageClick={this.loadIngredients} terms={this.state.terms} onDelete={this.deleteIngredient}/>}>
                        </Route>
                        <Route path={"/ingredients/new"} render={()=><ReviewAdd onNewTermAdded={this.createIngredient}/>}>
                        </Route>
                        <Route path="/ingredients/:name/edit" render={()=>
                            <RevEdit onsubmitt={this.updateIngredient}/>}>
                        </Route>
                        <Route path="/ingredients/:name/details" render={()=>
                            <ReviewDetail />}>
                        </Route>
                        <Redirect to={"/ingredients"}/>
                    </div>
                </main>
            </Router>
        )

        return (

            <div >
                {routing}
            </div>
        );
    }
}

export default Rev;
