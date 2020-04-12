
import React, {Component} from 'react';
import './App.css';
import CarouselComponent from "./components/CarouselComponent/CarouselComponent";
import Menu from "./components/Menu/Menu";





class App extends Component {



    state={
        agencies:[
            {
                agencyName:'Rapsody Travel',
                location:'Skopje',
                contactNo:'02-345-987',
                contactMail:'rapsody@mail.com',
                offers:[
                    {arrId:0,
                        description:'Sunny Spain',
                        destination:'Spain',
                        price:300},
                    {arrId:1,
                        description:'Cultural Shock - Istanbul',
                        destination:'Turkey',
                        price:200},
                    {arrId:2,
                        description:'Amalfi Coast',
                        destination:'Italy',
                        price:500}

                ]

            },
            {
                agencyName:'Balkan Fun',
                location:'Skopje',
                contactNo:'02-415-586',
                contactMail:'balkanfun@mail.com',
                offers:[
                    {arrId:0,
                        description:'Urban capital city - Lisbon',
                        destination:'Portugal',
                        price:600},
                    {arrId:1,
                        description:'Party in Ibiza',
                        destination:'Spain',
                        price:700},
                    {arrId:2,
                        description:'Go to Paris.',
                        destination:'France',
                        price:900}

                ]

            },
            {
                agencyName:'Iguana Travel',
                location:'Skopje',
                contactNo:'02-400-500',
                contactMail:'iguanatravel@mail.com',
                offers:[
                    {arrId:0,
                        description:'Beer and wurst - Munchen',
                        destination:'Germany',
                        price:400},
                    {arrId:1,
                        description:'Urban challenge - Berlin',
                        destination:'Germany',
                        price:700},
                    {arrId:2,
                        description:'Visit Madrid',
                        destination:'Spain',
                        price:500}

                ]

            },
            {
                agencyName:'Savana Tours',
                location:'Skopje',
                contactNo:'02-011-110',
                contactMail:'savanatours@mail.com',
                offers:[
                    {arrId:0,
                        description:'Mamma mia - Rome',
                        destination:'Italy',
                        price:500},
                    {arrId:1,
                        description:'City of fashion - Milano',
                        destination:'Italy',
                        price:700},
                    {arrId:2,
                        description:'European New York - Amsterdam',
                        destination:'Neatherlands',
                        price:500}

                ]

            }
        ]
    }
    chooseAgency = (agencyName) =>{
        console.log(agencyName);
        let path = `/details/`+agencyName;
        this.props.history.push(path);
    }
    searchByDestination=(destination)=> {
        console.log(destination);
        let path = '/offers/' + destination;
        this.props.history.push(path);
    }
  render(){
    return (

        <div className="App">
            <Menu/>
            <CarouselComponent/>




        </div>

    );
  }
}

export default App;
