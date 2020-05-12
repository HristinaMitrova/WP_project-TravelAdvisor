import React, {Component, useCallback } from 'react';
import Menu from "../Menu/Menu";
import SectionComponent from "../SectionComponent/SectionComponent"
import StickyFooter from "../StickyFooter";
import RegisterData from "../RegisterData/RegisterData"
import app from "../../firebaseConfig"
import { withRouter } from "react-router";


const Register= ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    },[history]);
          return (
              <div>
                  <Menu/>
                  <SectionComponent>
                      <RegisterData handleSignUp={handleSignUp}/>
                  </SectionComponent>
                  <SectionComponent/>
                  <SectionComponent/>
                  <StickyFooter/>
              </div>
          );
}

export default withRouter(Register);