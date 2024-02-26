import { View, Text, TouchableOpacity, PermissionsAndroid, Image, Touchable } from 'react-native'
import React, { useState, useEffect } from 'react'

const SearchProduct = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{
                backgroundColor: "skyblue",
                height: 50,
                justifyContent:'center'
            }}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: 'black'
                }}>
                    Kết quả
                </Text>
            </View>
        </View>
    )
}
export default SearchProduct;