import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import SideBarScreen from "./SideBarScreen";
import CheckedTextInput from "../CheckedTextInput/CheckedTextInput";
import PillButton from "../PillButton/PillButton";
import typography from "../../config/typography";

export default class AuthScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            userNameValid: false,
            passwordValid: false,
            userNameError: '',
            passwordError: ''
        };

        this.checkUserName = this.checkUserName.bind(this);
        this.checkPassword = this.checkPassword.bind(this);

        this.onUserNameTextChange = this.onUserNameTextChange.bind(this);
        this.onPasswordTextChange = this.onPasswordTextChange.bind(this);
    }

    onUserNameTextChange(input) {
        this.setState({userName: input});
        this.checkUserName(input);
    }

    onPasswordTextChange(input) {
        this.setState({password: input});
        this.checkPassword(input);
    }

    checkUserName(input) {
        // *Warning should be in a config file* rules for a valid user name inputs
        if (input.length == 5) {
            this.setState({
                userNameValid: true,
                userNameError: '',
            });
            return;
        }

        this.setState({
            userNameValid: false,
            userNameError: 'please put in a user name',
        });
    }

    checkPassword(input) {
        // *Warning should be in a config file* rules for a valid user name inputs 
        if(input.length >= 3) {
            this.setState({
                passwordValid: true,
                passwordError: ''
            });
            return;
        }
        
        this.setState({
            passwordValid: false,
            passwordError: ' Password is too short'
        });
    }

    render() {
        console.log("Username is valid:" + this.state.userNameValid);
        console.log("Password is valid:" + this.state.passwordValid);
        console.log("Should button be enabled: " + (this.state.passwordValid && this.state.userNameValid))
        return(
            <SideBarScreen
                backgroundColor={'#FF9100'}
                iconName={'chevron-left'}
                action={() => {}}
                style={{
                    paddingLeft: 24,
                    paddingRight: 8
                }}>

                <Text style={[typography.HEADER_ONE_STYLE, ]}>Login</Text>

                <View 
                    style={[{
                        alignItems: 'center',
                        marginTop: 48,
                    },]}>

                    <CheckedTextInput
                        title="Email"
                        placeholder="Enter Your Email"
                        text={this.state.userName}
                        onTextChange={this.onUserNameTextChange}
                        errorMessage={this.state.userNameError}
                        checker={(input) => this.checkUserName(input) }/>
                    
                    <CheckedTextInput
                        title="Password"
                        placeholder="Enter Your Password"
                        text={this.state.password}
                        onTextChange={this.onPasswordTextChange}
                        errorMessage={this.state.passwordError}
                        checker={(input) => this.checkPassword(input)}
                        hideText={true}
                        style={{
                            marginTop: 32
                        }}/>
                </View>

                    <PillButton 
                        text={'Login'}
                        action={()=>{}}
                        color={'#FF9100'}
                        highlightColor={'#FFB85C'}
                        style={{
                            marginTop: 32,
                            alignSelf: 'center'
                        }}
                        disabled={!(this.state.passwordValid && this.state.userNameValid)}/>

            </SideBarScreen>
        );
    }
}

const styles = StyleSheet.create({});