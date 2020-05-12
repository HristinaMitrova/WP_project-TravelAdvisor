import React, {Component} from 'react';
import Menu from "../Menu/Menu";
import EventsList from "../ArrangementEventsList/EventsList";
import StickyFooter from "../StickyFooter";
import SectionComponent from "../SectionComponent/SectionComponent";
import "./EventDetails.css"

class EventDetails extends Component{

    state={
        events:[
            {
                redenBroj:1,
                naslov:"Sunny Spain",
                sodrzina:"Barcelona: Park Guell, Casa Mila, La Sagrada Familia, Cassa Batlo and many more...",
                lokacija: "Spain"
            },
            {
                redenBroj:2,
                naslov:"Madrid",
                sodrzina:"Plaza Mayor, Royal Palace of Madrid, El Retiro Park, Museo Nacional de Prado - A must see!",
                lokacija: "Spain"
            },
            {
                redenBroj:3,
                naslov:"IBIZA",
                sodrzina:"Es Vedra, Cala Comte, Platja dem Bomte, Cala Benirras - The most beautiful beaches in the world.",
                lokacija: "Spain"
            },
            {
                redenBroj:4,
                naslov:"Lisbon",
                sodrzina:"Has to offer you sightseeing to Belem Tower, Prk and National Palace of Pena, Jeronimos Monastery, Castelo de S. Jorge.",
                lokacija: "Portugal"
            },
            {
                redenBroj:5,
                naslov:"Berlin",
                sodrzina:"Brandenburg Gate, Reichstag Building, East Side Gallery, Berlin Wall Memorial are just the begining, you should try their food.",
                lokacija:"Germany"
            },
            {
                redenBroj:6,
                naslov:"Kyoto",
                sodrzina:"Kinkaku-ji, Fushimi Inari Taisha, Kiyomizu-dera, Arashiyama best to visit in spring.",
                lokacija: "Japan"
            },
            {
                redenBroj:7,
                naslov:"Beautiful India",
                sodrzina:"Taj Mahal, Amber Palace, Ranthambore, Red Fort.",
                lokacija: "India"
            },
            {
                redenBroj:8,
                naslov:"Middle East",
                sodrzina:"Burj Khalifa, The Dubai Mall, The Dubai Fountain, Palm Jumeirah",
                lokacija:"Dubai"
            },
            {
                redenBroj:9,
                naslov:"Middle East Northeast Africa",
                sodrzina:" Giza Necropolis, Valley of the Kings, Egyptian Museum, Great Sphinx od Giza",

                lokacija:"Egypt"
            },
            {
                redenBroj:10,
                naslov:"New York, New York",
                sodrzina:"New York Statue od Liberty Monument, Central Park, Times Square, Empire State Building",

                lokacija:"New York"
            },
            {
                redenBroj:11,
                naslov:"San Fran",
                sodrzina:"San Francisco Golden Gate Bridge, Alcatraz Island, Fisherman's Wharf, Golden Gate Park",
                lokacija:"San Francisco"
            },
            {
                redenBroj:12,
                naslov:"Sydney",
                sodrzina:"Sydney Opera House, Bondi Beach, Sydney Harbour Bridge, Darling Harbour ",
                lokacija:"Sydney"
            },
            {
                redenBroj:13,
                naslov:"Malibu",
                sodrzina:"Malibu Point Dume, Santa Monica Mountains National Recreation Area, Zuma Beach, Malibu Creek State Park",
                lokacija:"Malibu"
            },
            {
                redenBroj:14,
                naslov:"Melbourne",
                sodrzina:"Yarra River, Queen Victoria Market, Royal Botanic Gardens Victoria, Federation Square",

                lokacija: "Melbourne"
            }
        ]
    }

    render() {
        const location=this.props.match.params.location;
        const locEvents=this.state.events.filter((e)=>e.lokacija==location)
        console.log(locEvents);
        return(
        <div>
            <Menu/>
            <SectionComponent>
                <h2 className={"text-center"}>Travelling arrangements in {location}</h2>
                <hr className={"content-hr"}/>
            </SectionComponent>
            <EventsList events={locEvents}/>
            <StickyFooter/>
        </div>
        );
    }
}

export default EventDetails;