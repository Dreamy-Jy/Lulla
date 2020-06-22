import React from "react";
import { storiesOf } from "@storybook/react-native";
import AuthScreen from "./AuthScreen";

storiesOf('Authentication Sceen', module)
    .add('Expected', () => <AuthScreen />);