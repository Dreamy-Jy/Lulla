import React, { useRef } from "react";
import { Animated, Text, TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import typography from "../../config/typography";

export default function PillButton({ text, action, color, highlightColor, style, disabled}) {
    const buttonColor = useRef(new Animated.Value(0)).current;

    const buttonColorRange = buttonColor.interpolate({
        inputRange: [0, 1],
        outputRange: [color, highlightColor]
    });
    return (
        <View style={[style]}>
            <TouchableWithoutFeedback 
                onPressIn={() => {
                    Animated.timing(buttonColor, {
                        toValue: 1,
                        duration: 65.5
                    }).start();
                }}
                onPressOut={() => {
                    Animated.timing(buttonColor, {
                        toValue: 0,
                        duration: 500
                    }).start();
                    action();
                }}
                disabled={(disabled)? true: false}>
                <Animated.View style={[{backgroundColor: (disabled)? '#B5B5B5': buttonColorRange},{borderRadius: 16}]}>
                    <Text style={[typography.BODY_BOLD_STYLE, styles.text]}>{text}</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        marginHorizontal: 24,
        marginVertical: 8,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    }

});