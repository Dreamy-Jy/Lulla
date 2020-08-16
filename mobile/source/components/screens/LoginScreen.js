import React,{ Component } from "react";
import { View, Text, Alert, Dimensions, SafeAreaView, Platform, StyleSheet } from "react-native";
import SignatureButton from "../items/SignatureButton";
import colors from "../../config/colors";
import typography from "../../config/typography";
import TextLink from "../TextLink/TextLink";

export default class LoginScreen extends Component {
    render() {
        return(
            <SafeAreaView style={[styles.screen, {width: Dimensions.get('window').width}]}>
                <View
                    style={[styles.container]}>
                    <Text style={{...typography.TITLE_STYLE, marginTop: Dimensions.get('window').height/ 4}}>
                        <TextLink 
                            action={()=>{}}
                            color={'#FF9100'}
                            highlightColor={'#FFB85C'}
                            >Login</TextLink>
                        <Text>{'\nor\n'}</Text>
                        <TextLink 
                            action={()=> {}}
                            color={'#FF9100'}
                            highlightColor={'#FFB85C'}>Sign Up</TextLink>
                    </Text>
                </View>
                <SignatureButton
                    style={styles.signature}
                    colors={colors.signatureGradient}
                    action={()=>{}}/>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.background
    },
    container:{
        width: '100%',
        marginLeft: 24,
    },
    signature:{
        alignSelf: 'flex-start',
        marginLeft: 16,
        ...Platform.select({
            android: {marginBottom: 24},
        })
    }
});