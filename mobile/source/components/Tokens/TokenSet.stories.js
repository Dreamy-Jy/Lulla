import React from "react";
import TokenSet from "./TokenSet";
import { storiesOf } from "@storybook/react-native";
import { BLACKBOARD_ID, GOOGLE_CALENDAR_ID, MICROSOFT_TODO_ID, TODOIST_ID } from "../../config/values";

const datumOne = [
    {
        serviceID: BLACKBOARD_ID,
        areLinked: true
    },{
        serviceID: GOOGLE_CALENDAR_ID,
        areLinked: true
    },{
        serviceID: MICROSOFT_TODO_ID,
        areLinked: false
    },{
        serviceID: TODOIST_ID,
        areLinked: false
    }
];

storiesOf('Token Set', module)
    .add('Expected', () => <TokenSet 
                                services={datumOne}
                                primaryAction={()=> {}}
                                secondaryAction={()=> {}}
                                title='Links'
                                focusID={GOOGLE_CALENDAR_ID}/>);

