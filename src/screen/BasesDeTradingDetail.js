// BasesDeTradingDetail.js
import React from 'react';
import { View, Text,StyleSheet,ScrollView,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const BasesDeTradingDetail = () => {
  return (
    
      <ScrollView>
      <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.title}>ECONOMIE ET MARCHER FINANCIERS</Text>
      </View>
  
      <View style={styles.container}>
        <Text style={styles.containertitle}>Après une brève introduction sur la théorie de l'investissement dans la première leçon,
         nous allons étudier les grands concepts économiques qui gouvernent les marchés financiers.</Text>
  
        <Text style={styles.containertitle}> </Text>
  
        <Text style={styles.containertitle}>Cette leçon qui paraîtra rébarbative aux baroudeurs de la bourse, n'est pourtant pas à négliger par les débutants. 
        La compréhension des mécanismes économiques étant une des clés de l'analyse des marchés.</Text>
      
         <Text style={styles.containertitle}> </Text>
  
      <Text style={styles.containertitle}>Cette partie a pour ambition de vous donner les rudiments économiques nécessaires à la compréhension des informations que vous entendez ou lisez dans les journaux sur la situation mondiale. Pourquoi la réserve fédérale américaine remonte ses taux d'intérêts ? Quel est l'impact de l'inflation sur les cours de bourse ? etc.
       Autant de notions qu'il faut connaître pour aborder au mieux l'étude des marchés financiers.</Text>
  
      <Text style={styles.containertitle}> </Text>

      <Text style={styles.title2}>Des paramètres complexes </Text>

      <Text style={styles.containertitle}> </Text>

      <Text style={styles.containertitle}>Nous pouvons analyser le cours de l'action suivant des facteurs dont la classification est concentrique, tout d'abord il y a les qualités propres de la société qui constitue le premier cercle, le plus rapproché. Ensuite cette société fait partie d'un secteur d'activité spécifique qui influence son comportement.
       Et enfin toutes ces données évoluent en fonction de paramètres économiques nationaux puis internationaux.</Text>
      
       
      <Text style={styles.containertitle}> </Text>


      <Image source={require('../../assets/sary1.png')} style={styles.sary1}/>

      <Text style={styles.containertitle}> </Text>
  
  
      <Text style={styles.containertitle}> </Text>
  
  
      <Text style={styles.containertitle}>La complexité de l'analyse vient du fait que ces facteurs sont tous interdépendants 
      et que la modification de l'un d'entre eux a des répercussions sur l'ensemble de la chaîne. </Text>
  
       <Text style={styles.containertitle}> </Text>
  
      <Text style={styles.containertitle}> Les paragraphes suivants vous proposent donc une vision 
      synthétique des notions économiques élémentaires à connaître pour aborder plus sereinement l'investissement 
      boursier. </Text>
  
      <Text style={styles.containertitle}> </Text>

      <Text style={styles.title2}>Les cycles économiques </Text>

      <Text style={styles.containertitle}> </Text>
  
      <Text style={styles.containertitle}> L'activité économique est caractérisée par une alternance de phases plus ou moins longues d'expansion et de récession, la croissance économique d'un pays n'est pas linéaire. 
      Ces fluctuations économiques constituent des cycles économiques. </Text>
  
      <Text style={styles.containertitle}> </Text>
  
      <Image source={require('../../assets/sary2.png')} style={styles.sary2}/>
  
      <Text style={styles.containertitle}> </Text>
  
      
        </View>
  
  
  
  
  
      </SafeAreaView>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    header: {
      backgroundColor: 'lightblue',
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      alignItems: 'center',
  
    },
    title: {
      fontSize: 15,
      fontWeight: 'bold',
    },
  
    containertitle:{
    fontSize: 15,
    paddingLeft: 8,
    paddingRight: 5,
    },
  
    title2:{
      fontSize: 15,
      color:'blue',
      paddingLeft: 8,
      paddingRight: 5,
    },
  
    imgCouv2: {
      height:250,
      width:400,
      marginLeft: '2%',
  
      
      marginTop: 40,
      borderRadius: 30,
      justifyContent:"center" },

      sary2: {
        height:180,
        width:340,
        marginLeft: '3%',
    
        
        marginTop: 40,
        borderRadius: 50,
        justifyContent:"center" },

        sary1: {
          height:180,
          width:340,
          marginLeft: '3%',
      
          
          marginTop: 40,
          borderRadius: 50,
          justifyContent:"center" }

    
  });

export default BasesDeTradingDetail;