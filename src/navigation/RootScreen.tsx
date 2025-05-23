import { StatusBar, StyleSheet, View } from "react-native"
import React from "react";
import { AuthStack } from "./AuthStack";
import { colors } from "../constants/colors";


const RootScreen:React.FC = () =>{
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.accent} barStyle="dark-content" />
            <AuthStack/>
        </View>
    )
};

export default RootScreen;

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})