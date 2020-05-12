import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Categories extends Component{

    render() {
        return (<div className={"text-center"}>
                {this.props.categories.map((kategorija) => {
                    return <div className={"display-category"}>
                        <div className={"container-category"} onClick={this.props.chooseCategory.bind(this,kategorija.id)}>
                            <img src={kategorija.backgroundUrl} className={"rounded-circle category-image"}/>
                            <div className="overlay rounded-circle">
                                <div className={"text"}> {kategorija.title}</div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        );
    }
}

 export default Categories;