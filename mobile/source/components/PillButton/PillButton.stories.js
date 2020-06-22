import React from "react";
import { storiesOf } from "@storybook/react-native";
import PillButton from "./PillButton";
import { Alert } from "react-native";

storiesOf('Pill Button', module).add('Expected', ()=><PillButton
                                                        text={'Login'}
                                                        action={()=>{ }}
                                                        color={'#FF9100'}
                                                        highlightColor={'#FFB85C'}/>);