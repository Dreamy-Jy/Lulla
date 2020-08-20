/**
 * Props
 * -> Primary Subject ID
 * -> Secondary Subject ID
 * -> Data: items[{question, type, response}]
 * -> primary color 
 * -> secondary color
 * 
 * color id?
 * Idea: ID System
 * Idea: Asset Control
 * 
 * # Data Shape
 * 
 * ## Header {}
 * 
 * ## Form items [
 *  {
 *      Question: String,
 *      Type: ENUM,
 *      Response: {}
 *  },
 * ]
 * 
 * 
 * itemView (ChipSet) : {
 *  Data: Response,
 *  Title: Questions
 * }
 */

import React, { Component } from 'react';
import { 
    View,
    FlatList,
    Platform, 
    TouchableWithoutFeedback,
    SafeAreaView,
    Animated,
} from 'react-native';
import ChipSet from "../Chips/ChipSet";
import DualFocusHeader from '../headers/DualFocusHeader';
import typography from '../../config/typography';

export default class InteractionForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {primaryFocusID, secondaryFocusID, data} = this.props;
        return(
            <FlatList
                contentContainerStyle={this.props.style}
                data={data}
                renderItem={({item}) => renderFormItem(item, this.props.color, this.props.highlightColor, this.props.modifyFormAction)}
                keyExtractor={item => item.question}
                ListEmptyComponent={() => errorOnEmpty()}
                ListHeaderComponent={() => renderHeader( primaryFocusID, secondaryFocusID )}/>
        );
    }
}

function renderFormItem(item, color, highlightColor, modifyFormAction) {
    const {id, question, type, response} = item;
    
    switch (type) {
        case "one2many":
            return (
                <ChipSet
                    style={{
                        marginBottom: 32
                    }}
                    color={color}
                    highlightColor={highlightColor}
                    data={response}
                    headerText={question}
                    addChipAction={() => {modifyFormAction(id, type+"_add", {})}}
                    removeChipAction={(removeID) => {modifyFormAction(id, type+"_remove", {removeID: removeID})}}/>
            );
        default:
            return null;
    }
}

function renderHeader(primaryFocusID, secondaryFocusID) {
    return(
        <DualFocusHeader
            style={{
                marginBottom: 64
            }}
            primaryFocusLogo={typography.getLogo(primaryFocusID)}
            primaryFocusName={typography.getServiceName(primaryFocusID)}
            secondaryFocusLogo={typography.getLogo(secondaryFocusID)}
            secondaryFocusName={typography.getServiceName(secondaryFocusID)}
            headerTitle={'Interaction'}
        />
    );
}