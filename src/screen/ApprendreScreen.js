// ApprendreScreen.js
import React from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity,Button,SafeAreaView } from 'react-native';
import { AntDesign } from "@expo/vector-icons";




const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:"green",
    backgroundColor: "#B6DDDA",
  },
  
  header: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: 'row',
  },
 
  content: {
    color: "green",
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop:20,
    marginBottom: 10, 
  },
  
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: 'black',
    marginTop: 15,
    },
});


const ApprendreScreen = ({ navigation }) => {
  return (

    
      
   
      
<View style={styles.container}>
<View style={styles.header}>
        <TouchableOpacity >
          
        </TouchableOpacity>
        
 </View>

              <Text style={styles.title}>Liste des leçons Trading</Text>   

    <ScrollView contentContainer Style={styles.content}>
      <Button 
        title="INTRODUCTION AU MARCHER FINANCIERS"
        onPress={() => navigation.navigate('IntroductionAuTradingDetail')}
      />
      <Button 
        title="ECONOMIE ET MARCHER FINANCIERS "
        onPress={() => navigation.navigate('BasesDeTradingDetail')}
      />

      <Button 
        title="CIBLER SON PROCHE "
        onPress={() => navigation.navigate('BasesDeTradingDetail')}
      />

      <Button 
        title="LA DERNIER SELECTION"
        onPress={() => navigation.navigate('BasesDeTradingDetail')}
      />

      <Button 
        title="LA LECTURE DU BILAN "
        onPress={() => navigation.navigate('BasesDeTradingDetail')}
      />

      <Button 
        title="LES RATIOS DU BILAN "
        onPress={() => navigation.navigate('BasesDeTradingDetail')}
      />

      <Button 
        title="LE COMPTE DE RESULTAT "
        onPress={() => navigation.navigate('BasesDeTradingDetail')}
      />

      <Button 
        title="LES RATIOS DE COMPTE DE RESULTAT"
        onPress={() => navigation.navigate('BasesDeTradingDetail')}
      />
      <Button 
        title="L'ANALYSE BOURSIERE "
        onPress={() => navigation.navigate('BasesDeTradingDetail')}
      />

      <Button 
        title="LES CALCUL D'INTERET "
        onPress={() => navigation.navigate('BasesDeTradingDetail')}
      />

      <Button 
        title="EVALUER UNE SOCIETE partie 1 "
        onPress={() => navigation.navigate('BasesDeTradingDetail')}
      />
      <Button 
        title="EVALUER UNE SOCIETE partie 2 "
        onPress={() => navigation.navigate('BasesDeTradingDetail')}
      />



      
      </ScrollView>
    
    <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <AntDesign name="home" style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Apprendre')}>
          <AntDesign name="book" style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Trade')}>
          <AntDesign name="swap" style={styles.footerIcon} />
        </TouchableOpacity>
        
    </View>
</View> 

  );
};


export default ApprendreScreen;