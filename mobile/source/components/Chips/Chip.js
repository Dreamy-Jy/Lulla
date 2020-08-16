import React, {useRef} from "react";
import { 
    View, 
    Text, 
    TouchableWithoutFeedback, 
    Animated, 
    StyleSheet 
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Chip({action, color, highlightColor, iconName, text, style}) {
    const componentBackgroundColor = useRef(new Animated.Value(1)).current;
    const componentOpacity = useRef(new Animated.Value(1)).current;

    const componentBackgroundColorRange = componentBackgroundColor.interpolate({
        inputRange: [0,1],
        outputRange: [highlightColor, color]
    });
    const componentOpacityRange = componentOpacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });

    return(
        <View style={[style]}>
            <TouchableWithoutFeedback 
                onPressIn={() => {
                    Animated.timing(componentBackgroundColor, {
                        toValue: 0,
                        duration: 65.5
                    }).start();
                }}
                onPressOut={() => {
                    Animated.timing(componentBackgroundColor, {
                        toValue: 1,
                        duration: 500
                    }).start();
                }}>
                <Animated.View 
                    style={[styles.container, {
                        backgroundColor: componentBackgroundColorRange,
                        opacity: componentOpacityRange
                    }]}>
                    <TouchableWithoutFeedback 
                        onPressIn={() => {
                            Animated.timing(componentBackgroundColor, {
                                toValue: 0,
                                duration: 65.5
                            }).start();
                        }}
                        onPressOut={() => {
                            Animated.parallel([
                                Animated.timing(componentBackgroundColor, {
                                    toValue: 1,
                                    duration: 500
                                }),
                                // Animated.timing(componentOpacity, {
                                //     toValue: 0,
                                //     duration: 500
                                // })
                            ]).start();
                            action()
                            
                        }}>
                        <Icon 
                            name={iconName}
                            size={16}
                            color={"#FFFFFF"}
                            suppressHighlighting={true}
                            style={[styles.icon]}/>
                    </TouchableWithoutFeedback>
                    <Text style={[styles.text]}>{text}</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    icon: {
        paddingLeft: 8,
        paddingRight: 8
    },
    text: {
        marginRight: 8,
        marginLeft: 8,
        color: '#FFFFFF',
        fontFamily: 'Raleway-Medium',
        fontSize: 16
    }
});