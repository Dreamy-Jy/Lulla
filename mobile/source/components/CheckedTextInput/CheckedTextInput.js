import React, { useRef, useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import typography from "../../config/typography";
export default function CheckedTextInput({title, placeholder, text, onTextChange, errorMessage, checker, hideText, style}) {
    return (
        <View style={[{width:"100%"}, style]}>
            <View style={[{
                alignItems: 'center',
                flexDirection: 'row'
            }]}>
                <Text style={[typography.BODY_BOLD_STYLE,]}>
                    {title}
                </Text>
                <Text style={[{
                    fontFamily: 'Raleway-ThinItalic',
                    fontSize: 14,
                    color: '#FF0000',
                }]}>
                    {errorMessage}
                </Text>
            </View>
            <TextInput 
                style={[{
                    borderBottomWidth: 3,
                    borderBottomColor: (text == '')? '#B5B5B5': '#000000',
                    color: (text == '')? '#B5B5B5': '#000000',
                    paddingBottom: 0,
                    paddingLeft: 0,
                    fontSize: 16,
                    fontFamily: 'Raleway-Regular'
                }, ]}
                secureTextEntry={hideText? true: false}
                placeholder={placeholder}
                placeholderTextColor='#B5B5B5'
                value={text}
                onChangeText={(text) => {
                    onTextChange(text);
                    checker(text);
                }}/>
        </View>
    );
}

/**
 * I want to attach the check of input to the changing of state
 */