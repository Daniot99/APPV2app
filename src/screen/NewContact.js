import React from "react";
import { Button, Text, View, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "../style/styles";
import styleComponent from "../components/styleComponent";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function NewContact({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#B6DDDA', }}>
      {/* Header */}
      <View style={styleComponent.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={24} color="#fff" style={{ marginLeft: 20 }} />
            </TouchableOpacity>
        </View>
      {/* Body (Scrollable) */}
      <ScrollView style={{ flex: 1 }}>
        <StatusBar style='auto' />
        <Text style={style.title}>
          Add new contact
        </Text>
        <View style={{ margin: 10, }}>
          <View>
            <Text style={styleComponent.label}>Name :</Text>
            <TextInput
              style={[style.inputcontact, styleComponent.container]} 
              placeholder='Enter contact name...'
            />
          </View>
          <View>
            <Text style={styleComponent.label}>Number :</Text>
            <TextInput
              style={[style.inputcontact, styleComponent.container]} 
              placeholder='Enter contact number...'
            />
          </View>
          <View>
            <Text style={styleComponent.label}>E-mail :</Text>
            <TextInput
              style={[style.inputcontact, styleComponent.container]} 
              placeholder='Enter e-mail...'
            />
          </View>
          <View>
            <Text style={styleComponent.label}>Categories :</Text>
            <TextInput
              style={[style.inputcontact, styleComponent.container]} 
              placeholder='Enter categories...'
            />
          </View>
          <View>
            <Text style={styleComponent.label}>Notes :</Text>
            <TextInput
              style={[style.inputcontact, styleComponent.container]} 
              placeholder='Enter notes...'
            />
          </View>
          <TouchableOpacity style={styles.button0}>
            <Text style={{ textAlign: 'center', fontSize: 16, color: 'white', padding: 10 }}>Add new contact</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={style.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <AntDesign name="home" style={style.footerIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Organisation')}>
                <AntDesign name="profile" style={style.footerIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <AntDesign name="barschart" style={style.footerIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('NewContact')}>
                <AntDesign name="adduser" style={style.footerIcon} />
            </TouchableOpacity>
        </View>
    </View>
  );
}

export default NewContact;

const style = StyleSheet.create({
  inputcontact:
  {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#2A0431',
    padding: 10,
    marginTop: 5,
    backgroundColor: '#c5ddd6'
  },
  title: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2A0431'
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
})
