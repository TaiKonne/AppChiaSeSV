import { View, Text, TouchableOpacity, PermissionsAndroid, Image, Touchable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

import Icon from 'react-native-vector-icons/FontAwesome5'
import Home from './Tab/Home'
import Chat from './Tab/Chat'
const HomeTab = () => {

    const [sellectedTab, setSellectedTab] = useState(0);
    const [imageData, setImageData] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    return (
        <View style={{
            flex: 1,
        }}>

            {sellectedTab === 0 ? (<Home />) :
                (<Chat />)
            }

            <View style={{
                position: 'absolute',
                bottom: 0,
                height: 60,
                width: '100%',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexDirection: 'row',
                backgroundColor: 'skyblue',
                // marginTop:100,
            }}>
                <TouchableOpacity // icon house
                    style={{
                        width: '20%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} onPress={() => {
                        setSellectedTab(0)
                    }}>
                    <View style={{
                        width: 40,
                        height: 40,
                        backgroundColor: '#f2f2f2',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                    }}>
                        <Image source={require('../Img/Icon/Home.png')}
                            style={{
                                width: 24, height: 24, tintColor: sellectedTab == 0 ? 'orange' : '#8e8e8e'
                            }}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity // icon house
                    style={{
                        width: '20%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} onPress={() => {
                        setSellectedTab(1);
                    }}>
                    <View style={{
                        width: 40,
                        height: 40,
                        backgroundColor: '#f2f2f2',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                    }}>
                        {/* <Image source={require('../front_end/icons/comment.png')}
                            style={{
                                width: 24, height: 24, tintColor: sellectedTab == 1 ? 'orange' : '#8e8e8e'
                            }}/> */}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity // icon house
                    style={{
                        width: '20%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} onPress={() => {
                        setSellectedTab(2);
                    }}>
                    <View style={{
                        width: 40,
                        height: 40,
                        backgroundColor: '#f2f2f2',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                    }}>
                        {/* <Image source={require('../front_end/icons/magnifying-glass.png')}
                            style={{
                                width: 24, height: 24, tintColor: sellectedTab == 2 ? 'orange' : '#8e8e8e'
                            }}
                        /> */}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity // icon house
                    style={{
                        width: '20%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} onPress={() => {
                        setSellectedTab(3);
                    }}>
                    <View style={{
                        width: 40,
                        height: 40,
                        backgroundColor: '#f2f2f2',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                    }}>
                        {/* <Image source={require('../front_end/icons/user.png')}
                            style={{ width: 24, height: 24, tintColor: sellectedTab == 3 ? 'orange' : '#8e8e8e' }}
                        /> */}
                    </View>
                </TouchableOpacity>
            </View >
        </View >
    )
}

export default HomeTab;