import React, {Component} from 'react';
import Header from './components/Header/Header';
import Content from './components/Content'
import './App.css';
import StickyFooter from "./components/StickyFooter";
import Sections from "./components/Sections/Sections";
import Menu from "./components/Menu/Menu";
import DetailsPage from "./components/ArrangementDetails/DetailsPage";
import Mapping from "./components/Agencies/Mapping";
import Chatting from "./components/ChattingBot/Chatting";
import Diagram from "./components/ChartPopularity/Diagram";
import DragnDropzone from "./components/DragNDrop/DragnDrop";

class App extends Component {
    state={
        categories:[
            {
                id:0,
                title:'Europe',
                backgroundUrl:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2016%2F10%2Fpositano-amalfi-coast-italy-AMALFI1024.jpg&q=85',

                nastani:[
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
                    }


                ]

            },
            {
                id:1,
                title:'Asia',
                backgroundUrl:'https://cache.desktopnexus.com/thumbseg/2454/2454630-bigthumbnail.jpg',

                nastani:[
                    {
                        redenBroj:1,
                        naslov:"Kyoto",
                        sodrzina:"Kinkaku-ji, Fushimi Inari Taisha, Kiyomizu-dera, Arashiyama best to visit in spring.",
                        lokacija: "Japan"
                    },
                    {
                        redenBroj:2,
                        naslov:"Beautiful India",
                        sodrzina:"Taj Mahal, Amber Palace, Ranthambore, Red Fort.",
                        lokacija: "India"
                    },
                    {
                        redenBroj:3,
                        naslov:"Beautiful India pt2",
                        sodrzina:"Taj Mahal.",
                        lokacija: "India"
                    },
                    {
                        redenBroj:4,
                        naslov:"Tokyo",
                        sodrzina:"East.",
                        lokacija: "Japan"
                    }


                ]
            },
            {
                id:2,
                title:'Middle East',
                backgroundUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9eYZ33uTgG8u-nnJ-RfeQnt_Xvcvw6FkRlmn4DTmHe9cpRpoy&s',

                nastani:[
                    {
                        redenBroj:1,
                        naslov:"Middle East",
                        sodrzina:"Burj Khalifa, The Dubai Mall, The Dubai Fountain, Palm Jumeirah",
                        lokacija:"Dubai"
                    },
                    {
                        redenBroj:2,
                        naslov:"Middle East Northeast Africa",
                        sodrzina:" Giza Necropolis, Valley of the Kings, Egyptian Museum, Great Sphinx od Giza",

                        lokacija:"Egypt"
                    },
                    {
                        redenBroj:3,
                        naslov:"Unated Arab Emirates",
                        sodrzina:" Emirates",

                        lokacija:"Emirates"
                    }


                ]
            },
            {
                id:3,
                title:'USA',
                backgroundUrl:'https://cdn.theatlantic.com/thumbor/c6E6XXq9Xtl0wtuTltVuuhgzmsc=/0x219:4200x2582/720x405/media/img/mt/2015/11/CB053713/original.jpg',

                nastani:[
                    {
                        redenBroj:1,
                        naslov:"New York, New York",
                        sodrzina:"New York Statue od Liberty Monument, Central Park, Times Square, Empire State Building",

                        lokacija:"New York"
                    },
                    {
                        redenBroj:2,
                        naslov:"San Fran",
                        sodrzina:"San Francisco Golden Gate Bridge, Alcatraz Island, Fisherman's Wharf, Golden Gate Park",
                        lokacija:"San Francisco"
                    },
                    {
                        redenBroj:3,
                        naslov:"Malibu",
                        sodrzina:"Malibu Point Dume, Santa Monica Mountains National Recreation Area, Zuma Beach, Malibu Creek State Park",
                        lokacija:"Malibu"
                    }


                ]
            },
            {
                id:4,
                title:'Australia',
                backgroundUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRupCBm0tfJI2thsR-MRrLexR25AKj7c-FHEGgv4QUqX7PcgThm&s',

                nastani:[
                    {
                        redenBroj:1,
                        naslov:"Sydney",
                        sodrzina:"Sydney Opera House, Bondi Beach, Sydney Harbour Bridge, Darling Harbour ",
                        lokacija:"Sydney"
                    },
                    {
                        redenBroj:2,
                        naslov:"Melbourne",
                        sodrzina:"Yarra River, Queen Victoria Market, Royal Botanic Gardens Victoria, Federation Square",

                        lokacija: "Melbourne"
                    },
                    {
                        redenBroj:3,
                        naslov:"Sydney pt 2",
                        sodrzina:"Sydney Opera House",

                        lokacija: "Sydney"
                    }


                ]
            }
        ],
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

    chooseCategory = (id) =>{
        console.log(id);
        let path = `/details/`+id;
        this.props.history.push(path);
    }

    searchByLocation=(location)=> {
        console.log(location);
        let path = '/events/' + location;
        this.props.history.push(path);
    }
    render(){
    return (

             <div className="App">
                          <Header searchByLocation={this.searchByLocation}/>
                          <Diagram/>
                          <Content categories={this.state.categories} chooseCategory={this.chooseCategory}/>
                          <Chatting/>
                          <Mapping/>
                          <StickyFooter/>
             </div>

    );
  }
}

export default App;
