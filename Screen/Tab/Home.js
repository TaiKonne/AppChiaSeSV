import { View, Text, TextInput, TouchableOpacity, PermissionsAndroid, Image, Touchable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { SearchBar } from 'react-native-screens'
import SearchProduct from './SearchProduct'
import Icon from 'react-native-vector-icons/FontAwesome';


const Home = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{
                backgroundColor: "skyblue",
                height: 50,
                flexDirection: 'row',
                paddingTop: 7,
            }}>

                <View // search
                    style={{
                        borderWidth: 1.5,
                        borderRadius: 20,
                        width: '75%',
                        marginLeft: 10,
                        height: 35,
                        borderColor: 'gray'
                    }}
                >
                    <Image
                        source={require('../../Img/Icon/search.png')}
                        style={{
                            width: 20,
                            height: 20,
                            marginTop: 6,
                            marginLeft: 10,
                        }}
                    />
                </View>
                <View>

                    <Icon.Button
                        name="facebook"
                        backgroundColor="#3b5998"
                        onPress={this.loginWithFacebook}>
                        Login with Facebook
                    </Icon.Button>

                </View>

            </View>
        </View>
    )
}
export default Home;