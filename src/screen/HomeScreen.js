import React from 'react';
import {TouchableOpacity, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../style/styles';


function HomeScreen({ navigation, route }) {
    return (

        <SafeAreaView style={styles.container}>
           <View style={{ flex: 1, height: 640, width: 360 }}>
                <Text style={styles.start} >SIMULATEUR DU TRADING TUTORIEL</Text>
                <TouchableOpacity onPress={() => {navigation.navigate('Apprendre')}}>
                    <Image source={require('../../assets/Analyse.png')} style={styles.imgCouv}/>
                </TouchableOpacity>
                <View  style={styles.button0}>
             <Text style={styles.startbdtn}  onPress={() => {
                    // 1/accédez à l'itinéraire Details à l'aide de paramètres
                    navigation.navigate('Apprendre', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    });
                }} >Get Started</Text>
                </View>    
            </View>  
        </SafeAreaView>
    );
}

export default HomeScreen;
