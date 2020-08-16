import React from 'react'
import { View, Text, FlatList, TouchableWithoutFeedback, Alert } from 'react-native';
import Chip from "../Chips/Chip";
import Icon from "react-native-vector-icons/FontAwesome5";
import colors from '../../config/colors';

/*
We need a way to extend components for speical use.
*/

export default function ChipListModal({itemAction, closingAction, options, title}) {
    

    return(
        <View style={
            {
                height: 260,
                paddingLeft: 32,
                paddingRight: 8,
                backgroundColor: colors.background,
                borderRadius: 16,
                paddingBottom: 16,
                justifyContent: 'center',
                alignItems: 'flex-start'
            }
        }>
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
                    <Text style={
                        {
                            fontSize: 24,
                            fontFamily: 'Raleway-Bold'
                        }
                    }>{title}</Text>
                    <TouchableWithoutFeedback
                        onPressOut={()=>{closingAction()}}>
                        <Icon 
                            name={'times'}
                            size={24}
                            color={'#000000'}
                            suppressHighlighting={true}/>
                    </TouchableWithoutFeedback>
                </View>
                <FlatList
                    data={options}
                    renderItem={({item}) => renderChips(item)}
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
            action={() => {Alert.alert('List Item '+item.id+' Pressed')}}
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