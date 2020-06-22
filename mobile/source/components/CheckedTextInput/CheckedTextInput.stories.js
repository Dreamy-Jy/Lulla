import React from "react";
import { storiesOf } from "@storybook/react-native";
import CheckedTextInput from "./CheckedTextInput";


storiesOf('Checked Text Input', module).add('Expected', ()=><CheckedTextInput
                                                                title="Password"
                                                                placeholder="Enter Your Password"
                                                                checker={(input)=>{
                                                                    if(input == "" || input.length >= 6) {
                                                                        return "";
                                                                    }
                                                                    return "*Bad Password"; }}/>);