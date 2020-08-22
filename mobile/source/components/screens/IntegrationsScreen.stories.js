import React from "react";
import IntegrationsScreen from "./IntegrationsScreen";
import { storiesOf } from "@storybook/react-native";
import typography from "../../config/typography";
import { GOOGLE_CALENDAR_ID, BLACKBOARD_ID } from "../../config/values";

const data = [
    {
        question: "Assignments to Calendars",
        type: "one2many",
        response: [
            {
                label: 'Main',
                id: 0,
            },{
                label: 'Side Calendar',
                id: 1,
            },{
                label: 'Home Work',
                id: 2,
            },{
                label: 'Jax',
                id: 3,
            },{
                label: 'Test',
                id: 4,
            },{
                label: 'Side Calendar',
                id: 5,
            },{
                label: 'Test',
                id: 6,
            }
        ]
    },{
        question: "Exams to Calendar",
        type: "one2many",
        response: [
            {
                label: 'Main',
                id: 0,
            },{
                label: 'Side Calendar',
                id: 1,
            },{
                label: 'Home Work',
                id: 2,
            },{
                label: 'Jax',
                id: 3,
            },{
                label: 'Test',
                id: 4,
            },{
                label: 'Side Calendar',
                id: 5,
            },{
                label: 'Test',
                id: 6,
            }
        ]
    },
];

storiesOf('Integrations Screen', module)
    .add('Expected', () => <IntegrationsScreen
                                primaryFocusID={GOOGLE_CALENDAR_ID}
                                secondaryFocusID={BLACKBOARD_ID}/>);