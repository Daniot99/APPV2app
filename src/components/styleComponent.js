import { StyleSheet } from "react-native";

const styleComponent = StyleSheet.create({
// SEARCH BAR
container: {
    marginLeft: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
},
searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
},
searchBar__clicked : {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    height: 40,
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
},
input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
},
// newContact
newContactcontainer: {
    marginTop: 50,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
},
label : {
    color: '#2A0431',
    fontSize: 14,
    fontWeight: 'bold',
    margin: 5,
},
// HEADER
header: {
    backgroundColor: '#A020F0',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: 'row',
}
});

export default styleComponent;