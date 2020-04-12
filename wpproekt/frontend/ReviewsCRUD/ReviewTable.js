import React, {Component} from "react";


class ReviewTable extends Component {
    render() {
        return (
            <div className="row">
                <span className="col-8 text-left"><b> Title:  </b>{this.props.review.title}</span>
                <span className="col-6 text-left"><b>  Desc: </b>{this.props.review.description}</span>
            </div>
        )
    }
}

export default ReviewTable;