import React, {Component} from "react";
import { Navigation } from "react-native-navigation";
import SideBarScreen from "./SideBarScreen";
import InteractionForm from "../InteractionForm/InteractionForm";
import { Modal, TouchableWithoutFeedback, View, Alert, Dimensions } from "react-native";
import ChipListModal from "../Modal/ChipListModal";

/**
 * ISSUE: All IDs must be unique
 */

export default class IntegrationsScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
            modalOptions: 1,
            allOptions: [
                {
                    formID: 1,
                    data: [
                        {
                            label: '',
                            id: -1,
                        },
                    ],
                },
            ],
            formData: [
                {
                    id: -1,
                    question: '',
                    type: '',
                    response: [
                        {
                            label: '',
                            id: -1,
                        },
                    ],
                }
            ],
        };

        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.editResponses = this.editResponses.bind(this);
        this.transferOptionToFormResponse = this.transferOptionToFormResponse.bind(this);
    }

    componentDidMount() {
        this.setState({
            allOptions: optionAll,
            formData: dataForm,
        }, () => {
            this.setState({
                modalOptions: this.state.allOptions[0].formID
            });
        });
    }

    openModal(id) {
        this.setState({
            modalOptions: id 
        },() => {
            this.setState({
                modalVisible: true
            });
        });
    }

    closeModal() {
        this.setState({
            modalVisible: false
        });
    }

    editResponses(id, type, editConfig) {
        // let currentform = JSON.parse(JSON.stringify(this.state.formData));
        // let response = currentform.find(x => x.id == id).response; // Error Hidding here

        switch (type) {
            case 'one2many_add':
                this.openModal(id);
                return;
            case 'one2many_remove':
                // Copy all data to be modified
                let formCopy = JSON.parse(JSON.stringify(this.state.formData));
                let addToOptions = formCopy.find(ele => ele.id == id).response.filter(ele => ele.id == editConfig.removeID)[0];
                let allOptionsCopy = JSON.parse(JSON.stringify(this.state.allOptions));
                
                // remove element form form response
                formCopy.find(ele => ele.id == id).response = formCopy.find(ele => ele.id == id).response.filter(ele => ele.id != editConfig.removeID);

                // Add element to 
                const optionsCopy = {...this.state.allOptions.find(ele => ele.formID == id)};
                const optionsLength = optionsCopy.data.length;
                addToOptions.id = (optionsLength > 0)? optionsCopy.data[optionsLength -1].id +1: 0;

                allOptionsCopy.find(ele => ele.formID == id).data.push(addToOptions);

                this.setState({
                    formData: formCopy,
                    allOptions: allOptionsCopy
                });
                return;
            default:
                return;
        }
    }

    transferOptionToFormResponse(option) {
        let allOptionsCopy = JSON.parse(JSON.stringify(this.state.allOptions));
        let formDataCopy = JSON.parse(JSON.stringify(this.state.formData));

        allOptionsCopy.find(ele => ele.formID == this.state.modalOptions).data = allOptionsCopy.find(ele => ele.formID == this.state.modalOptions).data.filter(ele => ele.id != option.id);
        formDataCopy.find(ele => ele.id == this.state.modalOptions).response.push(option);

        this.setState({
            allOptions: allOptionsCopy,
            formData: formDataCopy,
        });
    }

    render() {
        const modalOptions = this.state.allOptions.find(option => option.formID == this.state.modalOptions);

        return(
            <SideBarScreen
                color={'#FF9100'}
                highlightColor={'#FFB85C'}
                iconName={'chevron-left'}
                action={() => Navigation.pop(this.props.componentId)}>
                    <Modal
                        visible={this.state.modalVisible}
                        transparent={true}
                        style={{
                            justifyContent: 'center'
                        }}>
                            <TouchableWithoutFeedback
                                onPress={this.closeModal}
                                disabled={true}>
                                <View 
                                    style={{
                                        flex: 1,
                                        backgroundColor: 'rgba(0,0,0, .54)',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                    {/* <TouchableWithoutFeedback onPress={() => {}}> */}
                                        <ChipListModal
                                            title={'Calendars'}
                                            options={modalOptions.data}
                                            closingAction={this.closeModal}
                                            chipAction={this.transferOptionToFormResponse}/>
                                    {/* </TouchableWithoutFeedback> */}
                                </View>
                            </TouchableWithoutFeedback>

                    </Modal>
                    <InteractionForm
                        style={{marginLeft: 24, paddingTop: 50}}
                        color={'#FF9100'}
                        highlightColor={'#FFB85C'}
                        data={this.state.formData}
                        primaryFocusID={this.props.primaryFocusID}
                        secondaryFocusID={this.props.secondaryFocusID}
                        modifyFormAction={this.editResponses}/>
            </SideBarScreen>
        );
    }
}

const optionAll = [
    {
        formID: 1,
        data: [
            {
                label: 'Form test',
                id: 0,
            },{
                label: 'Form Option 1, 2',
                id: 1,
            },{
                label: 'Form Option 1, 3',
                id: 22,
            },{
                label: 'Form Option 1, 4',
                id: 32,
            },
        ],
    },{
        formID: 2,
        data: [
            {
                label: 'Form Option 2',
                id: 0,
            },{
                label: 'Form Option 2',
                id: 1,
            },{
                label: 'Form Option 2',
                id: 2,
            },{
                label: 'Form Option 2',
                id: 3,
            },{
                label: 'Form Option 2',
                id: 4,
            },{
                label: 'Form Option 2',
                id: 5,
            },{
                label: 'Form Option 2',
                id: 6,
            },{
                label: 'Form Option 2',
                id: 7,
            },{
                label: 'Form Option 2',
                id: 8,
            },{
                label: 'Form Option 2',
                id: 9,
            },{
                label: 'Form Option 2',
                id: 10,
            }
        ],
    },
];

const dataForm = [
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