import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./Splash";
import Login from "./Login";
import Register from "./Register";
import ForgotPass from "./ForgotPass"
import HomeTab from "./HomeTab";
import Home from "./Tab/Home"
import Chat from "./Tab/Chat"
const Stack = createStackNavigator();


const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Splash"
                    component={props => <Splash {...props} />}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={props => <Login {...props} />}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Register"
                    component={props => <Register {...props} />}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ForgotPass"
                    component={props => <ForgotPass {...props} />}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="HomeTab"
                    component={props => <HomeTab {...props} />}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Chat"
                    component={Chat}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator;