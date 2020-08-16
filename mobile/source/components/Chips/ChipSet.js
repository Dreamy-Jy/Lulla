import React, {Component} from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import Chip from "./Chip";
import RoundFlatActionButton from "../items/RoundFlatActionButton";

export default function ChipSet({data, removeChipAction, addChipAction, color, highlightColor, style, headerText}) {
    
    const chips = [];

    data.forEach(element => {
        chips.push(
        <Chip
            action={() => {removeChipAction(element.id)}}
            color={color}
            highlightColor={highlightColor}
            iconName={'times'}
            text={element.label}
            style={{marginRight: 8, marginBottom: 8}}
            key={element.id}/>
        );
    });

    return(
        <View style={style}>
            <Text style={{
                    fontFamily: 'Raleway-Bold',
                    fontSize: 24,
                    color: 'black',
                    marginBottom: 8
                }}>{headerText}</Text>
            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginBottom: 8
                }}>
                    {chips}
            </View>
            <RoundFlatActionButton
                color={color}
                highlightColor={highlightColor}
                iconName='plus'
                action={addChipAction}
                style={{
                    alignSelf: 'center'
                }}/>
        </View>
    );
}