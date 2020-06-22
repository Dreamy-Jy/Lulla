import React, { Component } from 'react';
import { View, Platform, TouchableWithoutFeedback, Alert, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class SideBarScreen extends Component {
    render() {
        return(
            <View
                style={
                    [
                        {
                            flex: 1,
                            backgroundColor: this.props.backgroundColor,
                            flexDirection: 'row'
                        },
                    ]
                }>
                <TouchableWithoutFeedback
                    onPress={this.props.action}>
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
                                name={this.props.iconName}
                                size={24}
                                color={'#FFFFFF'}/>
                        </View>
                </TouchableWithoutFeedback>
                <View
                    style={
                        [
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
                        ]
                    }>
                        <SafeAreaView style={
                                [
                                    {flex: 1, paddingTop: 48},
                                    this.props.style
                                ]
                            }>
                            {this.props.children}
                        </SafeAreaView>
                    </View>
            </View>
        );
    }
}