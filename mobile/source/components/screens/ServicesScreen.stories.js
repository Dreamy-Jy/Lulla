import React from "react";
import { storiesOf } from '@storybook/react-native';
import ServicesScreen from "./ServicesScreen";
import { BLACKBOARD_ID } from "../../config/values";

storiesOf("Services Screen", module)
    .add("Expected", () => <ServicesScreen
                                focusID={BLACKBOARD_ID}/>);