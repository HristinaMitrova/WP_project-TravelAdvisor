import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Categories from './Destinations/Categories.js'
import SectionComponent from "./SectionComponent/SectionComponent";
import SitePost from "./SitePost/SitePost";
import './Destinations/CategoriesHomePage.css'
import './Content.css'


class Content extends Component {
    render(){
        return (
            <div>
            <SectionComponent>
                <h2 className={"h2 text-center mt-4 mb-3 h-content-color font-weight-bold"}>Destinations</h2>
                <hr className={"content-hr"}/>
                <Categories  categories={this.props.categories} chooseCategory={this.props.chooseCategory}  />
            </SectionComponent>
            <SectionComponent>
                <hr className={"content-hr"}/>

            </SectionComponent>
            </div>
        );
    }
}

export default Content;