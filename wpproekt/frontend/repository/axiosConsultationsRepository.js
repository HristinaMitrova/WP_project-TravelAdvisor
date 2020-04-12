import axios from '../custom-axios/axios'
import qs from 'qs'

const ReviewService = {
    fetchReviews: ()=> {
        return axios.get("/rest/reviews");
    },
    fetchReviewsPaged:(page,pageSize)=>{
        return axios.get("/rest/reviews",{
            headers: {
                'page':page,'page-size':pageSize
            }
        })
    },

    getReviewAgencies: (title) => {
        return axios.get(`/rest/reviews/${title}/agencies`);
    },

    addReview: (review) => {
        const data = {
            ...review,
            name:review.title
            //
        }
        const formParams = qs.stringify(data);
        return axios.post("/rest/reviews",formParams);
    },
    deleteReview: (title) => {
        return axios.delete(`/rest/reviews/${title}`);
    },
    updateReview : (review) => {
        const data = {
            ...review,
        }
        const title= review.title;
        const formParams = qs.stringify(data);
        return axios.patch("/rest/reviews/"+title,formParams,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
    },

}

export default ReviewService;