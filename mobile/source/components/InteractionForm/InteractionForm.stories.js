import React from "react";
import InteractionForm from "./InteractionForm";
import { storiesOf } from "@storybook/react-native";
import { BLACKBOARD_ID, GOOGLE_CALENDAR_ID } from "../../config/values";

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

storiesOf('Interaction Form', module)
    .add('Expected', () => <InteractionForm
                                color={'#FF9100'}
                                highlightColor={'#FFB85C'}
                                data={data}
                                primaryFocusID={GOOGLE_CALENDAR_ID}
                                secondaryFocusID={BLACKBOARD_ID}
                           />);