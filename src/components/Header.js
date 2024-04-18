import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styleComponent from './styleComponent';


function Header({ navigation }) {
    return (
        <View style={styleComponent.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={24} color="#fff" style={{ marginLeft: 20 }} />
            </TouchableOpacity>
        </View>
    );
};

export default Header;