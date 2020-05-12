import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css'

class SearchBar extends Component {
    state={
        searchValue: ''
    }

    handleChange(event){
        console.log(event.target.value);
        this.setState({searchValue: event.target.value});
    }

    render(){
        return (
            <div>
                <h1 className={"pb-4 h1-color mt-4 w-6"}>Read the most accurate facts </h1>
                <div className=" mb-4 pt-4 d-flex">
                    <input onChange={this.handleChange.bind(this)} className={"form-control mr-1"} type="text" placeholder="Where to? (Enter a name of a place e.g. Spain)" aria-label="Search" />

                    <button style={{background: "#C0C0C0"}} className={"btn btn-rounded  ml-2"} onClick={this.props.searchByLocation.bind(this,this.state.searchValue)}>Go!</button>
                </div>
            </div>
        );
    }
}

export default SearchBar;