import { StyleSheet, View } from "react-native"
import React from "react";
import { AuthStack } from "./AuthStack";


const RootScreen:React.FC = () =>{
    return(
        <View style={styles.container}>
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