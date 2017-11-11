import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 150,
        height: 150
    },
    instructionText: {
        color: '#b20000',
        margin: 20
    },
    textInput : {
        marginBottom: 5,
        padding: 5,
        color: '#4c0000',
        borderBottomColor: '#ffe5e5', 
        borderBottomWidth: 1
    }
});

export default Styles;