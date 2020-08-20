import React from "react";
import { View, Image, Text, StyleSheet } from 'react-native';

export default function DualFocusHeader({style, primaryFocusLogo, primaryFocusName, secondaryFocusLogo, secondaryFocusName, headerTitle}) {
    return(
        <View style={[styles.container, style]}>
            <Image 
                source={primaryFocusLogo}
                style={[
                    styles.focusLogo, 
                    {
                        alignSelf: 'flex-start', 
                        transform: [{translateY: -6.5}]
                    }
                ]}/>
            <View style={[styles.subContainer]}>
                <Text style={[styles.focusText, {alignSelf: 'flex-start'}]}>{primaryFocusName}</Text>
                <Text style={[styles.headerText, {alignSelf: 'center'}]}>{headerTitle}</Text>
                <Text style={[styles.focusText, {alignSelf: 'flex-end'}]}>{secondaryFocusName}</Text>
            </View>
            <Image 
                source={secondaryFocusLogo}
                style={[
                    styles.focusLogo, 
                    {
                        alignSelf: 'flex-end', 
                        transform: [{translateY: 6.5}]
                    }]}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 6.5
    },
    subContainer: {
        marginHorizontal: 4,
    },
    focusText: {
        fontFamily: 'Raleway-Italic',
        fontSize: 16
    },
    focusLogo: {
        aspectRatio: 1,
        resizeMode: 'contain',
        width: 32
    },
    headerText: {
        fontFamily: 'Raleway-Bold',
        fontSize: 48
    }
});