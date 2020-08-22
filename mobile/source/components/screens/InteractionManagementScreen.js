import React,{ Component } from "react";
import { SafeAreaView, Platform, StyleSheet, Alert } from "react-native";
import { Navigation } from "react-native-navigation";
import LinkSet from "../Links/LinkSet";
import SignatureButton from "../items/SignatureButton";
import colors from "../../config/colors";
import typography from "../../config/typography";
import { BLACKBOARD_ID, GOOGLE_CALENDAR_ID, MICROSOFT_TODO_ID, TODOIST_ID } from "../../config/values";

export default class InteractionMangementScreen extends Component {
    render() {
        return(
            <SafeAreaView 
                style={styles.screen}>
                    <LinkSet
                        data={data}
                        headerText={typography.LINK_SET_HEADER}
                        primaryHighlightColor={colors.LinkPrimaryIconColor}
                        primaryIconColor={colors.LinkPrimaryIconColor}
                        primaryAction={(serviceID) => selectNavProps(serviceID, this.props.componentId)}
                        secondaryHighlightColor={colors.LinkSecondaryHighlightColor}
                        secondaryIconColor={colors.LinkSecondaryIconColor}
                        secondaryAction={()=>{
                            Alert.alert("implement a secondary action");
                        }}/>
                    <SignatureButton
                        style={styles.signature}
                        colors={colors.signatureGradient}
                        action={()=>{
                            Alert.alert("implement a signature page");
                        }}/>
            </SafeAreaView>
        );
    }
}

function selectNavProps(serviceID, componentID) {
    Navigation.push(componentID, {
        component: {
            name: "Services Screen",
            passProps: {
                focusID: serviceID
            }
        }
    });
}

const data = [
    {
        serviceID: BLACKBOARD_ID,
        inUse: true,
    },{
        serviceID: GOOGLE_CALENDAR_ID,
        inUse: true,
    },{
        serviceID: MICROSOFT_TODO_ID,
        inUse: false,
    },{
        serviceID: TODOIST_ID,
        inUse: false,
    },
];

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: 48,
        backgroundColor: colors.background
    },
    signature: {
        alignSelf: 'flex-start',
        marginLeft: 16,
        ...Platform.select({
            android: {marginBottom: 24},
        })
    }
});