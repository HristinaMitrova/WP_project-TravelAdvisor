import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FilteringSections from "./FilteringSections/FilteringSections";
import NewsSections from "./NewsSections/NewsSections.js";
import './Sections.css';
import  Categories from '../Destinations/Categories'

class Sections extends Component {
    render(){
        return (
            <div className={"container-fluid content"}>
                <div className={"row"}>
                    <div className={"col-2 pl-5 float-left"}>
                        <FilteringSections >
                         <Categories categories={this.props.categories} chooseCategory={this.props.chooseCategory}/>
                        </FilteringSections>
                    </div>
                    <div className={"col-10 float-left"}>
                        <NewsSections categories={this.props.categories} categoryId={this.props.categoryId}/>
                    </div>
                </div>
            </div>
    );
    }
}

export default Sections;