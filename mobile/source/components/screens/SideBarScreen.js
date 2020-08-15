import React, { useRef } from 'react';
import { 
    View, 
    Platform, 
    TouchableWithoutFeedback,
    SafeAreaView,
    Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function SideBarScreen ({color, highlightColor, action, iconName, style, children}) {
    const componentBackgroundColor = useRef(new Animated.Value(1)).current;
    
    const componentBackgroundColorRange = componentBackgroundColor.interpolate({
        inputRange: [0,1],
        outputRange: [highlightColor, color]
    });
    
    return(
        <Animated.View
            style={
                [
                    {
                        flex: 1,
                        backgroundColor: componentBackgroundColorRange,
                        flexDirection: 'row'
                    },
                ]
            }>
            <TouchableWithoutFeedback
                onPressIn={()=>{
                    Animated.timing(componentBackgroundColor, {
                        toValue: 0,
                        duration: 65.5
                    }).start();
                }}
                onPressOut={()=>{
                    Animated.timing(componentBackgroundColor, {
                        toValue: 1,
                        duration: 500
                    }).start();
                    action();
                }}>
                <View
                    style={
                        [
                            {
                                width:24,
                                justifyContent:'center',
                                alignItems: 'center'
                            }
                        ]
                    }>
                        <Icon
                            name={iconName}
                            size={24}
                            color={'#FFFFFF'}/>
                    </View>
            </TouchableWithoutFeedback>
            <View
                style={[
                    {
                        backgroundColor: '#FAFAFA',
                        flex:1,
                        ...Platform.select({
                            ios:{
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 3 },
                                shadowOpacity: 0.16,
                                shadowRadius: 16,
                            },
                            android: {
                                elevation: 16
                            }
                        })
                    },
                    ]}>
                    <SafeAreaView style={
                            [
                                {flex: 1},
                                style
                            ]
                        }>
                        {children}
                    </SafeAreaView>
                </View>
        </Animated.View>
    );
}