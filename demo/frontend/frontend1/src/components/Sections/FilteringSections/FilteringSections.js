import React, {Component} from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './FilteringSections.css'

class FilteringSections extends Component {
    render(){
        return (
            <div className={"container pt-3 "}>
             <h5 className={"font-weight-bold pt-2"}>Destinations</h5>
               <div className={"row pt-3 icon"}>
                    {this.props.children}
               </div>

             </div>
    );
    }
}

export default FilteringSections;