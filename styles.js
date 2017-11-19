import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginTop: 60,
        width: 100,
        height: 100
    },
    containerPicker: { 
        flex: 1, 
        flexDirection: 'row', 
        width: SCREEN_WIDTH - 50 
    },
    containerFormText: {
        flex: 1, 
        width: SCREEN_WIDTH - 50
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
        width: SCREEN_WIDTH - 50,
        marginBottom: 10,
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
    },
    pickerItemStyle: { 
        color: '#ff6666' 
    }
});

export default Styles;