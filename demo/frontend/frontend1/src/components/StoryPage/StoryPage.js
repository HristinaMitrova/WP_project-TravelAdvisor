import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Menu from "../Menu/Menu";
import UserStory from "../UserStory";
import StickyFooter from "../StickyFooter";

class StoryPage extends Component{
    render() {
        return(
            <div>
                <Menu/>
                <UserStory/>
                <StickyFooter/>
            </div>
        )
    }
}

export default StoryPage;