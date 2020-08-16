import React from "react";
import LinkSet from "./LinkSet";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { BLACKBOARD_ID, GOOGLE_CALENDAR_ID, MICROSOFT_TODO_ID } from "../../config/values";

const datumOne = [
    {
        serviceID: BLACKBOARD_ID,
        inUse: true
    },{
        serviceID: GOOGLE_CALENDAR_ID,
        inUse: true
    },{
        serviceID: MICROSOFT_TODO_ID,
        inUse: false
    }
];


storiesOf('Link Set', module)
    .add('Expected', () => <LinkSet
                                data={datumOne}
                                headerText='Your Services'
                                primaryHighlightColor='#FFB85C'
                                primaryIconColor='#FF9100'
                                primaryAction={action('button-click')}
                                secondaryHighlightColor='#8AE65C'
                                secondaryIconColor='#4DA835'
                                secondaryAction={action('button-click')}/>);