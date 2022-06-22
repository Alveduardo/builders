


import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Routes from "./routes";

export default () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        </SafeAreaProvider>
    );
};
