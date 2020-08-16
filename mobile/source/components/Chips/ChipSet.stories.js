import React, { useState } from "react";
import ChipSet from "./ChipSet";
import { storiesOf } from "@storybook/react-native";

storiesOf('Chip Set', module)
    .add('Expected', () => <TestComponent/>);

function TestComponent() {
    const [chips, setChips] = useState([
        {
            label: 'Main',
            id: 0,
        },{
            label: 'Side Calendar',
            id: 1,
        },{
            label: 'Home Work',
            id: 2,
        },{
            label: 'Jax',
            id: 3,
        },{
            label: 'Test',
            id: 4,
        },{
            label: 'Side Calendar',
            id: 5,
        },{
            label: 'Test',
            id: 6,
        },{
            label: 'Side Calendar',
            id: 7,
        },{
            label: 'Side Calendar',
            id: 8,
        },{
            label: 'Home Work',
            id: 9,
        },{
            label: 'Jax',
            id: 10,
        }
    ]);

    return(
        <ChipSet
            color={'#FF9100'}
            highlightColor={'#FFB85C'}
            data={chips}
            headerText='Assignments to Calendars'
            addChipAction={() => {
                setChips(chips.concat({
                    label: 'Jax',
                    id: chips[chips.length -1].id +1,
                }));
            }}
            removeChipAction={(removeID)=> {
                setChips(chips.filter(chip => chip.id != removeID))
            }}/>
    );
}