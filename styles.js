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
        color: '#ff6666',
        margin: 20
    },
    textInput: {
        marginBottom: 5,
        padding: 5,
        color: '#ff6666',
        borderBottomColor: '#ffe5e5',
        borderBottomWidth: 1
    },
    submit: {
        width: 200,
        marginRight: 60,
        marginLeft: 60,
        marginTop: 50,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ffe5e5'
    },
    submitText: {
        color: '#ff6666',
        textAlign: 'center',
    }
});

export default Styles;