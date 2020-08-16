import React, { Component } from "react";
import InteractionForm from "./InteractionForm";
import { storiesOf } from "@storybook/react-native";
import { BLACKBOARD_ID, GOOGLE_CALENDAR_ID } from "../../config/values";
import { Alert } from "react-native";

const data = [
    {
        id: 1,
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
        id: 2,
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
    .add('Expected', () => <TestComponent/>);

class TestComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: [
                {
                    id: 1,
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
                    id: 2,
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
            ]
        };

        this.editResponses = this.editResponses.bind(this);
    }

    editResponses(id, type, editConfig) {
        let currentform = JSON.parse(JSON.stringify(this.state.formData));

        switch (type) {
            case 'one2many_add':
                let response = currentform.find(x => x.id == id).response;
                currentform.find(x => x.id == id).response = response.concat({
                    label: "test",
                    id: response[response.length -1].id +1
                });
                this.setState({
                    formData: currentform
                });
                return;
            case 'one2many_remove':
                // Alert.alert("remove "+id);
                currentform.find(x => x.id == id).response = currentform.find(x => x.id == id).response.filter(item => item.id != editConfig.removeID);
                this.setState({
                    formData: currentform
                });
                return;
            default:
                return;
        }

    }

    render() {
        return(
            <InteractionForm
                color={'#FF9100'}
                highlightColor={'#FFB85C'}
                data={this.state.formData}
                primaryFocusID={GOOGLE_CALENDAR_ID}
                secondaryFocusID={BLACKBOARD_ID}
                modifyFormAction={this.editResponses}/>
        );
    }
}