import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import Link from "../Links/Link";
import typography from "../../config/typography";

/**
 * Data Model:
 * [
 *     {
 *         serviceID: string,
 *         inUse: bool
 *     },...
 * ]
 */
export default function LinkSet({style, data, headerText, primaryHighlightColor, primaryIconColor, primaryAction, secondaryHighlightColor, secondaryIconColor, secondaryAction}) {
    return (
        <FlatList
            style={[style]}
            data={data}
            renderItem={({item}) => renderLink(item, primaryHighlightColor, primaryIconColor, primaryAction, secondaryHighlightColor, secondaryIconColor, secondaryAction)}
            keyExtractor={item => item.serviceID}
            ListEmptyComponent={() => errorOnEmpty()}
            ListHeaderComponent={() => renderHeader(headerText)}
            />
    );
}

function renderLink(item, primaryHighlightColor, primaryIconColor, primaryAction, secondaryHighlightColor, secondaryIconColor, secondaryAction) {
    
    const props = {
        text: typography.getServiceName(item.serviceID),
        imageURL: typography.getLogo(item.serviceID),
        ...(item.inUse)? {
            action: () => primaryAction(item.serviceID),
            iconName: 'chevron-right',
            iconColor: primaryIconColor,
            highlightColor: primaryHighlightColor
        }:{
            action: secondaryAction,
            iconName: 'plus',
            iconColor: secondaryIconColor,
            highlightColor: secondaryHighlightColor
        }
    };

    return (
        <Link
            {...props}/>
    );
}

function renderHeader(text) {
    return(
        <Text style={[styles.header]}>
            {text}
        </Text>
    );
}

function errorOnEmpty() {
    throw `The Service Set Component should never have no data to display`
}

const styles = StyleSheet.create({
    header: {
        fontFamily: 'Raleway-Bold',
        fontSize: 48,
        color: 'black',
        marginLeft: 24
    }
});
