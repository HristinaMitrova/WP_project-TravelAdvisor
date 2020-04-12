/*
import ReviewService from "../../repository/axiosConsultationsRepository";
import {Component} from "react";
import App from "../../App";
class ReviewApp extends Component {
constructor(props) {//site agencii i reviews koi stojat vo state
    super(props);
    this.state = {
        agencies: []
    }
}

componentDidMount() {
    this.loadReviews();
}

loadReviews = () => {
    ReviewService.fetchReviews().then(response=>{
        this.setState((prevState)=>{//kako vlez ja imam prethodnata sostojba
            return {
                "agencies":response.data.content
                //ovde se vleguva vo upotreba na aplikacijata
            }
        })
    })
}


createReview = (newReview) => {
    ReviewService.addReview(newReview).then((response)=>{
        const newReview = response.data;
        this.setState((prevState) => {//modifikacija na prethodnio state
            const newReviewRef = [...prevState.agencies, newReview];//dodavame element vo lista na terms toj so go dodadov a go dobivam od response
            //or
            //const terms = prevState.terms.concat(newTerm); //koncatenacija se kreira nova lista se dodava nov elem i na toj nacin state  se kreira nova referenca
            return {
                "agencies": newReviewRef
            }
        });
    });
}

updateReview = ((editedReview) => {
    ReviewService.updateReview(editedReview).then((response)=>{
        const newReview = response.data;
        this.setState((prevState) => {
            const newReviewRef = prevState.agencies.map((item)=>{
                debugger;
                if (item.title===newReview.title) {
                    return newReview;
                }
                return item;
            })
            return {
                "agencies": newReviewRef
            }
        });
    });
});


deleteReview = (title) => {
    ReviewService.deleteReview(title).then((response)=>{
        this.setState((state) => {
            const reviews = state.reviews.filter((t) => {
                return t.title !== title;
            });
            return {reviews}
        })
    })
}
export default ReviewApp;
*/