import React from "react";
import styleComponent from "./styleComponent";
import { Button, Keyboard, TextInput, View } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";

const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setClicked }) => {
    return (
        <View style={styleComponent.container}>
            <View
                style={
                    clicked
                        ? styleComponent.searchBar__clicked
                        : styleComponent.searchBar__unclicked
                }
            >
                
                {/* search icon */}
                <Feather
                    name="search"
                    size={20}
                    color="black"
                    style={{ marginLeft: 1 }} />

                {/* input field */}
                <TextInput
                    style={styleComponent.input}
                    placeholder="Search ..."
                    value={searchPhrase}
                    onChangeText={setSearchPhrase}
                    onFocus={() => {
                        // setClicked(true);
                    }}
                />

                {/* Cross icon, depending on wether the search bar is clicked or not */}
                {clicked && (
                    <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={(setSearchPhrase(""))} />
                )}
            </View>

            {/* concel button, depending on whether the search bar is clicked or not */}
            {clicked && (
                <View>
                    <Button
                        title="Cancel"
                        onPress={() => {
                            Keyboard.dismiss();
                            setClicked(false);
                        }}
                    ></Button>
                    </View>
)}
                </View>
            );
};

            export default SearchBar;