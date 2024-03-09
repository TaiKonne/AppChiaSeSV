import { View, Text, TouchableOpacity, PermissionsAndroid, Image, Touchable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

const Chat = () => {
    return (
        <View>

            <View style={{ flex: 1 }}>
                <View style={{
                    backgroundColor: "skyblue",
                    height: 50,
                    flexDirection: 'row',
                    paddingTop: 7,
                }}>
                    <TouchableOpacity
                        style={{
                            borderWidth: 1,
                            width: '40%'
                        }}
                    >
                        <Text>Đồ dùng hằng ngày</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            borderWidth: 1,
                            width: '40%'
                        }}
                    >
                        <Text>Tài liệu học tập</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default Chat;