import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Token from "./Token";
import SingleFocusHeader from "../headers/SingleFocusHeader";
import typography from "../../config/typography";
import colors from "../../config/colors";

// TODO: fix issue with word length.
// - make compatable string set
// - have an algorithm wrap text
// TODO: The Logos Need to be properly Sized
// TODO: The Icons Need recoloring
// TODO: Decrease Token Size

/*
 * Data Model:
 * [
 *     {
 *         serviceID: string,
 *         areLinked: bool
 *     },...
 * ]
 */

export default function TokenSet({style, services, primaryAction, secondaryAction, title, focusID}) {

    return(
        <FlatList
            style={[style]}
            data={services}
            renderItem={({item}) => renderToken(item, primaryAction, secondaryAction)}
            keyExtractor={item => item.serviceID}
            ListEmptyComponent={() => errorOnEmpty()}
            numColumns={2}
            ListHeaderComponent={() => renderHeader(focusID, title)}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1}}/>
    );
}

function renderToken(item, primaryAction, secondaryAction) {

    const props = {
        style: styles.token,
        text: typography.getTokenFormatedServiceName(item.serviceID), // need system here
        logoImage: typography.getLogo(item.serviceID),
        palette: colors.getTokenPalette(item.serviceID), 
        ...(item.areLinked)? {
            action: () => primaryAction(item.serviceID),
            iconName: 'pen',
        }:{
            action: secondaryAction,
            iconName: 'plus',
        }
    };

    return(
        <Token 
            {...props}/>
    );
}

function renderHeader(serviceID, title) {
    return(
        <SingleFocusHeader
            style={[styles.header]}
            focusLogo={typography.getLogo(serviceID)}
            focusName={typography.getServiceName(serviceID)}
            headerTitle={title}/>
    );
}

function errorOnEmpty() {
    throw `The Token Set Component should never have no data to display` // Make Templates for these
}

const styles = StyleSheet.create({
    token: {
        margin: 24,
        marginBottom: 8,
    },
    header: {
        marginLeft: 16,
        marginBottom: 0
    }
});