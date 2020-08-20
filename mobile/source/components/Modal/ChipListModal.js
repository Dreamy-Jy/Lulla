import React, { useRef } from 'react'
import { View, Text, FlatList, TouchableWithoutFeedback, Alert, Animated } from 'react-native';
import Chip from "../Chips/Chip";
import Icon from "react-native-vector-icons/FontAwesome5";
import colors from '../../config/colors';

/*
We need a way to extend components for speical use.
*/

export default function ChipListModal({style, chipAction, closingAction, options, title}) {
    const closingButtonColor = useRef(new Animated.Value(1)).current;
    
    const closingButtonColorRange = closingButtonColor.interpolate({
        inputRange: [0, 1],
        outputRange: ['#B5B5B5', '#000000']
    });

    const ColorChangeIcon = Animated.createAnimatedComponent(Icon);


    return(
        <View style={[
            {
                height: 260,
                paddingLeft: 32,
                paddingRight: 8,
                backgroundColor: colors.background,
                borderRadius: 16,
                paddingBottom: 16,
                justifyContent: 'center',
                alignItems: 'flex-start'
            }, style
        ]}>
            <View flex={1}>

                <View style={{
                        width: 250,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginRight: 8,
                        marginTop: 16,
                        paddingBottom: 16
                    }}>
                    <Animated.Text style={
                        {
                            fontSize: 24,
                            fontFamily: 'Raleway-Bold',
                            color:closingButtonColorRange
                        }
                    }>{title}</Animated.Text>
                    <TouchableWithoutFeedback
                        onPressIn={() => {
                            Animated.timing(closingButtonColor, {
                                toValue: 0,
                                duration: 65.5
                            }).start();
                        }}
                        onPressOut={() => {
                            Animated.timing(closingButtonColor, {
                                toValue: 1,
                                duration: 500
                            }).start();
                            closingAction();
                        }}>
                        <ColorChangeIcon 
                            name={'times'}
                            size={32}
                            color={closingButtonColorRange}
                            suppressHighlighting={true}/>
                    </TouchableWithoutFeedback>
                </View>
                <FlatList
                    data={options}
                    renderItem={({item}) => renderChips(item, chipAction)}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={
                        {
                            alignItems: 'flex-start',
                            paddingRight: 32,
                        }
                    }/>
            </View>
        </View>
    );
}

function renderChips(item, action) {
    return(
        <Chip
            iconName='plus'
            action={() => action(item)}
            color={'#4DA835'}
            highlightColor={'#8AE65C'}
            text={item.label}
            style={{
                marginTop: 16
            }}/>
    );
}

/*
So we need to add feeback for the Close button press

Need to improve 
 */