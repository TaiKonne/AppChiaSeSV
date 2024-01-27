import React, { useState } from 'react';
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo'
import { Button } from 'react-native-paper';

const Index = () => {

    const [mail, setMail] = useState()


    return <View>
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
            Press me
        </Button>
    </View>
}

export default Index;