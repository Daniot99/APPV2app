import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screen/HomeScreen';
import ApprendreScreen from './src/screen/ApprendreScreen';
import TradeScreen from './src/screen/TradeScreen';
import IntroductionAuTradingDetail from './src/screen/IntroductionAuTradingDetail';
import BasesDeTradingDetail from './src/screen/BasesDeTradingDetail'
//import ChartComponent from './src/screen/ChartComponent';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}  options={{headerShown: false}}/>
        <Stack.Screen name='Apprendre' component={ApprendreScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Trade' component={TradeScreen} options={{headerShown: false}}/>
        <Stack.Screen name='IntroductionAuTradingDetail'  component={IntroductionAuTradingDetail} options={{headerShown: false}}/>
        <Stack.Screen name='BasesDeTradingDetail'  component={BasesDeTradingDetail} options={{headerShown: false}}/>
        {/*<Stack.Screen name='ChartComponent'  component={ChartComponent} options={{headerShown: false}}/>*/}
      </Stack.Navigator>
    </NavigationContainer>

  );
}

