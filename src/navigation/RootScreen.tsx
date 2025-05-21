import { View } from "react-native"
import React from "react";
import { AuthStack } from "./AuthStack";


const RootScreen:React.FC = () =>{
    return(
        <View>
            <AuthStack/>
        </View>
    )
};

export default RootScreen;