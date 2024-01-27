import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo'

const Login = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');



    return (
        <View>
            <Text
                style={{
                    alignSelf: 'center',
                    marginTop: 100,
                    fontSize: 20,
                    fontWeight: '800',
                    color: 'red',
                    textAlign: 'center'
                }}>
                TRAO ĐỔI ĐỒ DÙNG TDMU
            </Text>
            <TextInput
                value={email}
                onChange={txt => {
                    setEmail(txt);
                }}
                placeholder="Tài khoản"
                placeholderTextColor={'grey'}
                keyboardType='email-address'
                style={{
                    width: '84%',
                    height: 50,
                    borderRadius: 10,
                    borderWidth: 0.5,
                    alignSelf: 'center',
                    paddingLeft: 15,
                    marginTop: 70,
                    color: 'black',
                }}
            />
            <TextInput
                value={pass}
                onChange={txt => {
                    setPass(txt);
                }}
                placeholder="Mật khẩu"
                placeholderTextColor={'grey'}
                secureTextEntry={true}
                style={{
                    width: '84%',
                    height: 50,
                    borderRadius: 10,
                    borderWidth: 0.5,
                    alignSelf: 'center',
                    paddingLeft: 15,
                    marginTop: 20,
                    color: 'black',
                }}
            />
            <TouchableOpacity
                style={{
                    width: '84%',
                    height: 50,
                    backgroundColor: 'orange',
                    borderRadius: 10,
                    marginTop: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                }}
                onPress={() => {

                }}>
                <Text style={{ fontSize: 20, color: '#000' }}>Đăng nhập</Text>
            </TouchableOpacity>
        </View>
    )

}
export default Login;