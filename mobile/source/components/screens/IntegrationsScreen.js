import React, {Component} from "react";
import SideBarScreen from "./SideBarScreen";
import InteractionForm from "../InteractionForm/InteractionForm";
import { Modal, TouchableWithoutFeedback, View } from "react-native";
import ChipListModal from "../Modal/ChipListModal";
// import { } from "react-native";

export default class IntegrationsScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false
        };

        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.editResponses = this.editResponses.bind(this);
    }

    openModal() {
        this.setState({
            modalVisible: true
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
                this.openModal();
                return;
            case 'one2many_remove':
                // currentform.find(x => x.id == id).response = response.filter(item => item.id != editConfig.removeID);
                // this.setState({
                //     formData: currentform
                // });
                return;
            default:
                return;
        }
    }


    render() {
        return(
            <SideBarScreen
                color={'#FF9100'}
                highlightColor={'#FFB85C'}
                iconName={'chevron-left'}
                action={this.props.backAction}>
                    <Modal
                        visible={this.state.modalVisible}
                        transparent={true}>
                            <TouchableWithoutFeedback
                                onPress={this.closeModal}
                                disabled={!this.state.modalVisible}>
                                <View style={{
                                    flex: 1,
                                    backgroundColor: 'rgba(0,0,0, .54)',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <ChipListModal
                                        title={'Calendars'}
                                        options={[]}
                                        closingAction={this.closeModal}/>
                                </View>
                            </TouchableWithoutFeedback>

                    </Modal>
                    <InteractionForm
                        style={{marginLeft: 24, paddingTop: 50}}
                        color={'#FF9100'}
                        highlightColor={'#FFB85C'}
                        data={this.props.formData}
                        primaryFocusID={this.props.primaryFocusID}
                        secondaryFocusID={this.props.secondaryFocusID}
                        modifyFormAction={this.editResponses}/>
            </SideBarScreen>
        );
    }
}