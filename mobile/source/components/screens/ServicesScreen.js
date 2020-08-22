import React, { Component } from 'react';
import { View, Platform, TouchableWithoutFeedback, Alert, SafeAreaView } from 'react-native';
import SideBarScreen from './SideBarScreen';
import TokenSet from '../Tokens/TokenSet';
import { BLACKBOARD_ID, GOOGLE_CALENDAR_ID, MICROSOFT_TODO_ID, TODOIST_ID } from '../../config/values';
import { Navigation } from 'react-native-navigation';

function getServices(serviceID) {
    //We Need a method to get this Options based on ID, we need to design a method for this.
    //Rename to reflect the singlar use of this item.

    const allOptions = [
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

    return allOptions.filter(item => !(item.serviceID == serviceID) );
}

export default class ServicesScreen extends Component {
    render() {
        return(
            <SideBarScreen
                color={'#FF9100'}
                highlightColor={'#FFB85C'}
                iconName={'chevron-left'}
                action={() => Navigation.pop(this.props.componentId)}
                style={{paddingTop: 48}}>
                    <TokenSet
                        services={getServices(this.props.focusID)}
                        primaryAction={(secondaryFocusID) => selectNavProps(this.props.focusID, secondaryFocusID,this.props.componentId)}
                        secondaryAction={() => {
                            Alert.alert("implement a secondary action");
                        }}
                        title={'Links'}
                        focusID={this.props.focusID}/>
            </SideBarScreen>
        );
    }
}

function selectNavProps(primaryFocusID, secondaryFocusID, componentID) {
    Navigation.push(componentID, {
        component: {
            name: "Integrations Screen",
            passProps: {
                primaryFocusID: primaryFocusID,
                secondaryFocusID: secondaryFocusID,
            }
        }
    });
}