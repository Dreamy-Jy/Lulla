import React, {Component} from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import Chip from "./Chip";
import RoundFlatActionButton from "../items/RoundFlatActionButton";

export default class ChipSet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data
        };

        this.removeElement = this.removeElement.bind(this);
        this.addElement = this.addElement.bind(this);
    }

    removeElement(removeMeId) {
        this.setState({
            data: this.state.data.filter(x => x.id != removeMeId)
        });
    }

    addElement() {
        console.log(this.state.data[this.state.data.length -1].id + 1);

        this.setState({
            data: this.state.data.concat({
                id: this.state.data[this.state.data.length -1].id + 1,
                label: 'new item'
            })
        });
    }
    
    render() {
        const items = [];

        this.state.data.forEach(element => {
            items.push(
            <Chip
                action={() => {this.removeElement(element.id)}}
                color={this.props.color}
                highlightColor={this.props.highlightColor}
                iconName={'times'}
                text={element.label}
                style={{marginRight: 8, marginBottom: 8}}
                key={element.id}/>
            );
        });

        return(
            <View style={this.props.style}>
                <Text style={{
                        fontFamily: 'Raleway-Bold',
                        fontSize: 24,
                        color: 'black',
                        marginBottom: 8
                    }}>{this.props.headerText}</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        marginBottom: 8
                    }}>
                        {items}
                </View>
                <RoundFlatActionButton
                    color={this.props.color}
                    highlightColor={this.props.highlightColor}
                    iconName='plus'
                    action={this.addElement}
                    style={{
                        alignSelf: 'center'
                    }}/>
            </View>
        );
    }
}