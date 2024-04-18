// IntroductionAuTradingDetail.js
import React from 'react';
import { View, Text,StyleSheet,ScrollView,Image  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const IntroductionAuTradingDetail = () => {
  return (
    <ScrollView>
    <SafeAreaView>
    <View style={styles.header}>
      <Text style={styles.title}>INTRODUCTION AU MARCHER FINANCIERS</Text>
    </View>

    <View style={styles.container}>
      <Text style={styles.containertitle}>Cette première partie est un panorama des grands principes de la théorie de l'investissement, 
      elle vous permettra de considérer avec plus de recul les décisions d'investissement que vous serez amenés à prendre.</Text>

      <Text style={styles.containertitle}> </Text>

      <Text style={styles.containertitle}>L'investissement boursier peut être effectué à travers une foule de produits différents.
       Ces instruments financiers sont très nombreux et les financiers en inventent en permanence.</Text>
    
       <Text style={styles.containertitle}> </Text>

    <Text style={styles.containertitle}>Néanmoins quel que soit la complexité du produit en termes techniques, tous présentent des similarités qui nous permettent d'évaluer avec pertinence leur intérêt en fonction des perspectives d'investissement de chaque personne. Alors qu'une obligation à pour objet d'engendrer des revenus réguliers par le biais du coupon dont le montant et les dates de détachement sont fixées à l'avance, 
    l'action offre une incertitude sur le montant des dividendes futurs ainsi qu'un risque d'effritement de la valeur d'actif qui lui est attachée.</Text>

    <Text style={styles.containertitle}> </Text>

    <Text style={styles.containertitle}> En fait tous les produits financiers peuvent être caractérisés par deux paramètres importants qui sont le risque et la rentabilité, ce couple est indissociable et très fortement corrélé. 
    Un rendement élevé étant souvent synonyme de risque important et vice versa. </Text>

    <Text style={styles.containertitle}> </Text>

    <Text style={styles.title2}>Pourquoi investir ? </Text>

    <Text style={styles.containertitle}> </Text>


    <Text style={styles.containertitle}>Qu'est-ce qui motive les particuliers ou les entreprises à investir alors qu'ils pourraient dépenser cet argent immédiatement ? Les réponses instantanées à cette question sont l'épargne,
     le sentiment de sécurité, l'envie de transmettre d'une génération à une autre... </Text>

     <Text style={styles.containertitle}> </Text>

    <Text style={styles.containertitle}> Une autre raison est le désir d'accroître son patrimoine, c'est à dire de faire croître cet argent. 
    Cette motivation est réelle dans notre vie, 
    le simple fait d'acheter un ticket de loto augmente (très faiblement) la probabilité d'être riche. </Text>

    <Text style={styles.containertitle}> </Text>

    <Text style={styles.containertitle}> Les décisions d'investissement sont donc multiples, chaque personne ou entité a sa propre motivation. Un grand fonds de pension américain, un retraité ou un jeune actif n'auront pas les mêmes motivations, 
    cependant ils se poseront la même question " quel rendement puis-je attendre en fonction du risque que je prends ? ". </Text>

    <Text style={styles.containertitle}> </Text>

    <Text style={styles.title2}>Définition du rendement </Text>

    <Text style={styles.containertitle}> </Text>

    <Text style={styles.containertitle}> Le rendement est une mesure de la croissance d'un capital, cette valeur est exprimée en pourcentage, ceci afin de faciliter les comparaisons.
     Nous exprimons cette valeur pour une unité de temps donnée, nous parlerons ainsi d'un rendement de x% sur un an. </Text>

     <Text style={styles.containertitle}> </Text>

     <Text style={styles.containertitle}> Rt = (Vt+1 - Vt + Dt) / Vt </Text>
     <Text style={styles.containertitle}> Vt est la valeur de l'investissement en début de période </Text>
     <Text style={styles.containertitle}> Vt+1 est la valeur de ce placement en fin de période
      Dt sont les dividendes versés au cours de la période</Text>

      <Text style={styles.containertitle}> </Text>

      <Text style={styles.title2}>Existence d'une prime de risque </Text>

      <Text style={styles.containertitle}> </Text>

      <Text style={styles.containertitle}> Si vous aviez investi un dollar en 1925 sur une action américaine de l'indice SP500, votre dollar se serait transformé en 889 dollars 70 ans plus tard. 
      Le même dollar investit dans des obligations d'entreprises américaines vous aurait rapporté 40 dollars. </Text>

      <Text style={styles.containertitle}> </Text>

      <Text style={styles.containertitle}> Cette différence qui se révèle énorme est liée à ce que l'on nomme " la prime de risque ", les risques liés aux actions et aux obligations étant totalement différents. Si on observe les deux courbes, l'une (celle des actions SP500) est beaucoup plus heurtée que l'autre, 
      c'est ce qu'on appelle la volatilité d'un actif financier.</Text>

      <Image source={require('../../assets/Analyse.png')} style={styles.imgCouv2}/>

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
    width:300,
    marginLeft: '10%',

    
    marginTop: 40,
    borderRadius: 50,
    justifyContent:"center" }

});
export default IntroductionAuTradingDetail;