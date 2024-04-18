import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    // HOMME SCREEN
    container: {
        flex: 1,
        justifyContent: 'center',
        // marginHorizontal: 16,
        backgroundColor: '#B6DDDA',
        alignItems: 'center',
    },

    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    start: {
        textAlign: 'center',
        fontSize: 50,
        color: '#2A0431',
        fontWeight: 'bold',
        marginTop: 120,
        position: "relative",

    },
    imgCouv: {
        height:250,
        width:300,
        marginLeft: '10%',

        
        marginTop: 40,
        borderRadius: 50,
        justifyContent:"center"
    },

    button0: {
        borderRadius: 50,
        backgroundColor: '#2A0431',
        position: 'relative',
        width: '70%',
        marginLeft: '15%',
        paddingTop: 5,
        paddingBottom: 5,
        top: 80,
        borderWidth: 2,
        borderColor: 'white',
        textAlign: 'center',
        shadowColor: '#000', // Couleur de l'ombre
        shadowOffset: { width: 0, height: 2 }, // Décalage de l'ombre
        shadowOpacity: 0.5, // Opacité de l'ombre
        shadowRadius: 3, // Rayon de l'ombre
        elevation: 7, // Elevation sur Android
    },
    startbdtn: {
        padding: 5,
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
    },

    // DETAILS SCREEN
    details3: {
        // alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'row',
        width: 360,
    },
    inputAddContact: {
        width: '100%',
        borderColor: '#fff',

    },
    //HEADER
    header: {
        backgroundColor: '#A020F0',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 10,
        flexDirection: 'row',
    }
});

export default styles;