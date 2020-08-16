import React,{ Component } from "react";
import { Alert, SafeAreaView, Platform, StyleSheet } from "react-native";
import LinkSet from "../Links/LinkSet";
import SignatureButton from "../items/SignatureButton";
import colors from "../../config/colors";
import typography from "../../config/typography";
import { BLACKBOARD_ID, GOOGLE_CALENDAR_ID, MICROSOFT_TODO_ID } from "../../config/values";

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
                        primaryAction={()=>{}}
                        secondaryHighlightColor={colors.LinkSecondaryHighlightColor}
                        secondaryIconColor={colors.LinkSecondaryIconColor}
                        secondaryAction={()=>{}}/>
                    <SignatureButton
                        style={styles.signature}
                        colors={colors.signatureGradient}
                        action={()=>{}}/>
            </SafeAreaView>
        );
    }
}

const data = [
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