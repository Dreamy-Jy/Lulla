import React, {Component} from "react";
import SideBarScreen from "./SideBarScreen";
import InteractionForm from "../InteractionForm/InteractionForm";
// import { } from "react-native";

export default class IntegrationsScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <SideBarScreen
                color={'#FF9100'}
                highlightColor={'#FFB85C'}
                iconName={'chevron-left'}
                action={this.props.backAction}>
                    <InteractionForm
                        style={{marginLeft: 24, paddingTop: 50}}
                        color={'#FF9100'}
                        highlightColor={'#FFB85C'}
                        data={this.props.formData}
                        primaryFocusID={this.props.primaryFocusID}
                        secondaryFocusID={this.props.secondaryFocusID}/>
            </SideBarScreen>
        );
    }
}