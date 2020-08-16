// Data = [  ];

// InputAction = [  ];
import React from 'react';
import ChipListModal from './ChipListModal';
import { storiesOf } from '@storybook/react-native';
import { View, Dimensions, Alert } from 'react-native';

const data = [
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
];

storiesOf('Chip List Modal', module)
    .add('Expected', () => <View style={{
                                flex: 1,
                                width: Dimensions.get('window').width,
                                backgroundColor: 'rgba(0,0,0, .54)',
                                justifyContent: 'center',
                                alignItems: 'center'
                                }}>
                                <ChipListModal
                                    title={'Calendar'}
                                    options={data}
                                    closingAction={()=>{Alert.alert('Closing Button Pressed')}}/>
                            </View>);