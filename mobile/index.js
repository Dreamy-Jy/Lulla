/**
 * @format
 * 
 * @cleanThis
 */
import StorybookView from './StorybookView';

import { Navigation } from "react-native-navigation";
import ServicesScreen from './source/components/screens/ServicesScreen';
import LoginScreen from './source/components/screens/LoginScreen';
import InteractionMangementScreen from './source/components/screens/InteractionManagementScreen';
import IntegrationsScreen from './source/components/screens/IntegrationsScreen';
import AuthScreen from './source/components/screens/AuthScreen';
import { BLACKBOARD_ID } from './source/config/values';

/**
 * App Nav Setup
 * 1. Register Screens
 * 2. Set-up navigation objects
 * 3. Set-up paths in Screens
 * 
 * ROTH IRA
 * 12 month emergy fund in High interest saving
 * Max out 401k
 * 
 * App Nav Paths
 * 1. Launch Screen (set root)
 * 2. Auth Path
 * 3. Main Path
 */

Navigation.registerComponent("StoryBooks", () => StorybookView);

Navigation.registerComponent("Interaction Mangement Screen", () => InteractionMangementScreen);
Navigation.registerComponent("Services Screen", () => ServicesScreen);
Navigation.registerComponent("Login Screen", () => LoginScreen);
Navigation.registerComponent("Integrations Screen", () => IntegrationsScreen);
Navigation.registerComponent("Auth Screen", () => AuthScreen);


Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: "Interaction Mangement Screen",
                        },
                    },
                ],
                options: {
                    topBar: {
                        visible: false,
                    },
                },
            },
            
        }
    });
});