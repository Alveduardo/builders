


import React, { useEffect, useState } from "react";
import { Appearance, ColorSchemeName, StatusBar, StatusBarProps, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Routes from "./routes";

export default () => {
    const [scheme, setScheme] = useState<ColorSchemeName>(useColorScheme());

    const statusBarProps: Pick<StatusBarProps, 'translucent' | 'backgroundColor' | 'barStyle'> = {
        translucent: true,
        backgroundColor: "transparent",
        barStyle: scheme === 'dark' ? 'dark-content' : 'light-content',
    }

    useEffect(() => {
        const subscriber = Appearance.addChangeListener(({ colorScheme }) => setScheme(colorScheme));
        return () => subscriber.remove();
    }, []);

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <StatusBar  {...statusBarProps} />
                <Routes />
            </NavigationContainer>
        </SafeAreaProvider>
    );
};
