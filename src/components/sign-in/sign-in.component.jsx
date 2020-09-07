import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {auth, signInWithGoogle} from "../../firebase/firebase.utils";

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
} from './sign-in.styles';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault()

        const { email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: "", password: ""});
        } catch (error) {
            console.log(error)
        }

        this.setState({email: '', password: ''})
    };

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    };

    render() {
        return (
            <SignInContainer className="sign-in">
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your Email and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Email"
                        required/>
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password'
                        required/>
                    <ButtonsBarContainer>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
                            Google Sign In
                        </CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn
