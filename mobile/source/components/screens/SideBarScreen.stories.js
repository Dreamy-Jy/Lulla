import React from 'react';
import SideBarScreen from './SideBarScreen';
import { storiesOf } from "@storybook/react-native";
import { Alert } from 'react-native';

const datumOne = [
    {
        serviceID: 'blackboard',
        areLinked: true
    },{
        serviceID: 'g_calendar',
        areLinked: true
    },{
        serviceID: 'ms_todo',
        areLinked: false
    },{
        serviceID: 'todoist',
        areLinked: false
    }
];

storiesOf('Side Bar Screen', module)
    .add('Expected', () => <SideBarScreen 
                                color={'#FF9100'}
                                highlightColor={'#FFB85C'}
                                iconName={'chevron-left'}
                                action={() => {}}/>);