import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from "@expo/vector-icons";

const footerStyle = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 10,
    },
    footerIcon: {
        fontSize: 34,
        color: '#2A0431',
    },
});

function FooterBar({ navigation }) {
    return (

        <View style={footerStyle.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <AntDesign name="home" style={footerStyle.footerIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Organisation')}>
                <AntDesign name="profile" style={footerStyle.footerIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <AntDesign name="barschart" style={footerStyle.footerIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('NewContact')}>
                <AntDesign name="adduser" style={footerStyle.footerIcon} />
            </TouchableOpacity>
        </View>
    );
};

export default FooterBar;