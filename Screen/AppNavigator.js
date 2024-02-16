import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./Splash";
import Login from "./Login";
import Register from "./Register";
import ForgotPass from "./ForgotPass"
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
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator;