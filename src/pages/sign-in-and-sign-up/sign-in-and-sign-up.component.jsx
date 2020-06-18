import React from "react";

import {auth} from "../../firebase/firebase.utils";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import "./sign-in-and-sign-up.styles.scss";
import CustomButton from "../../components/custom-button/custom-button.component";

const SignInAndSignUpPage = ({currentUser}) => (
    <div >
        {
            currentUser ?
                <div className="sign-in-and-sign-up is-signed-in">
                    <span className="signed-in-user">{currentUser.displayName} is signed In</span>
                    <CustomButton type="submit" onClick={() => auth.signOut()}>Sign Out</CustomButton>
                </div >
                :
                <div className="sign-in-and-sign-up sign-in-and-sign-up-form">
                    <SignIn />
                    <SignUp />
                </div>
        }
    </div>
);

export default SignInAndSignUpPage
