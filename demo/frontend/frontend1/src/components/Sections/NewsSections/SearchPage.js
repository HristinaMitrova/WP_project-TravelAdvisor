import React, {Component} from 'react';
import './Search.css';

class SearchPage extends Component {
    render(){
        return (
            <div>
            <div className="active-pink-3 active-pink-4 mb-4">
                  <span  className={"d-flex"}>
                    <input className="form-control" type="text" placeholder="Пребарај..."    aria-label="Search" />
                        <button className={"btn btn-rounded "}>Search</button>
                  </span>
            </div>
            </div>
        );
    }
}

export default SearchPage;