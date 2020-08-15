import React from "react";
import { SafeAreaView } from "react-native";
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';

import './rn-addons';
import LoginScreen from "../source/components/screens/LoginScreen";
import InteractionMangementScreen from "../source/components/screens/InteractionManagementScreen";
import SideBarScreen from "../source/components/screens/SideBarScreen";



addDecorator(storyFn => <SafeAreaView style={{flex: 1, justifyContent:"center", alignItems:"center"}}>{storyFn()}</SafeAreaView>);


// import stories
configure(() => {
  require('../source/components/screens/IntegrationsScreen.stories');
  require('../source/components/InteractionForm/InteractionForm.stories');
  require('../source/components/screens/AuthScreen.stories');
  require('../source/components/screens/LoginScreen.stories');
  require('../source/components/screens/InteractionManagementScreen.stories');
  require('../source/components/screens/ServicesScreen.stories');
  require('../source/components/screens/SideBarScreen.stories');
  require('../source/components/TextLink/TextLink.stories');
  require('../source/components/CheckedTextInput/CheckedTextInput.stories');
  require('../source/components/PillButton/PillButton.stories');
  require('../source/components/items/IDBar.stories');
  require('../source/components/Links/Link.stories');
  require('../source/components/Chips/Chip.stories');
  require('../source/components/native modules/GradientView.stories');
  require('../source/components/items/SignatureButton.stories');
  require('../source/components/Tokens/Token.stories');
  require('../source/components/items/RoundFlatActionButton.stories');
  require('../source/components/headers/SingleFocusHeader.stories');
  require('../source/components/headers/DualFocusHeader.stories');
  require('../source/components/Links/LinkSet.stories');
  require('../source/components/Tokens/TokenSet.stories');
  require('../source/components/Chips/ChipSet.stories');
  require('../source/components/Modal/Modal.stories');
}, module);


// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.

export default StorybookUIRoot;
