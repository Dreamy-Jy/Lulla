import React, {useRef} from "react";
import { 
    Text, 
    TouchableWithoutFeedback, 
    Image, 
    StyleSheet, 
    Animated, 
    View
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import GradientView from "../native modules/GradientView";

export default function Token({action, palette, text, logoImage, iconName, iconColor, style}) {
    const ScalableGradient = Animated.createAnimatedComponent(GradientView);
    const componentScale = useRef(new Animated.Value(0)).current;
    const componentScaleRange = componentScale.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1.2]
    });

    return(
        <View style={[style]}>
            <TouchableWithoutFeedback
                onPressIn={() => {
                    Animated.timing(componentScale, {
                        toValue: 1,
                        duration: 400
                    }).start();
                }}
                onPressOut={() => {
                    Animated.timing(componentScale, {
                        toValue: 0,
                        duration: 400
                    }).start();
                    action();
                }}>
                <ScalableGradient
                    style={[styles.container, {
                        backgroundColor: palette.background,
                        transform: [
                            {scale: componentScaleRange}
                        ]
                    }]}>
                    <View style={[styles.subContainer]}>
                        <Image 
                            source={logoImage}
                            style={[styles.logo]}/>
                        <Text style={[styles.text, {color: palette.type}]}>{text}</Text>
                    </View>
                    <Icon 
                        name={iconName}
                        size={32}
                        color={palette.type}
                        style={[styles.icon]}/>
                </ScalableGradient>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 128,
        height: 192,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 16,
        ...Platform.select({
            ios:{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.16,
                shadowRadius: 16,
            },
            android: {
                elevation: 6
            }
        })
    },
    subContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 48,
        height: 48,
        resizeMode: "contain",
        marginTop: 16,
        marginBottom: 8
    },
    text: {
        fontSize: 24,
        fontFamily: 'Raleway-Bold',
        textAlign: 'center'
    },
    icon: {
        marginBottom: 8
    }
});