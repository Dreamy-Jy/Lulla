/**
 * @format
 */
import { Navigation } from "react-native-navigation";
import StorybookUIRoot from './storybook';

import ServicesScreen from './source/components/screens/ServicesScreen';
import LoginScreen from './source/components/screens/LoginScreen';
import InteractionMangementScreen from './source/components/screens/InteractionManagementScreen';
import IntegrationsScreen from './source/components/screens/IntegrationsScreen';
import AuthScreen from './source/components/screens/AuthScreen';
import App from "./App";

Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.registerComponent("StoryBooks", () => StorybookUIRoot);

Navigation.registerComponent("Interaction Mangement Screen", () => InteractionMangementScreen);
Navigation.registerComponent("Services Screen", () => ServicesScreen);
Navigation.registerComponent("Integrations Screen", () => IntegrationsScreen);

Navigation.registerComponent("Login Screen", () => LoginScreen);
Navigation.registerComponent("Auth Screen", () => AuthScreen);

const authNavPathRoot = {
    root: {
        stack: {
            children: [{
                component: {
                    name: "Login Screen",
                },
            }],
            options: {
                topBar: {
                    visible: false,
                },
            },
        },
    },
};

const mainNavPathRoot = {
    root: {
        stack: {
            children: [{
                component: {
                    name: "Interaction Mangement Screen",
                }
            }],
            options: {
                topBar: {
                    visible: false,
                }
            },
        },
    },
};


Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot(mainNavPathRoot);
});
