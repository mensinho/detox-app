import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    button: {
        backgroundColor: '#1976d2',
        height: 60,
        width: '100%',
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },
    text: {
        color: '#FFF',
        fontSize: 20
    },
    title: {
        color: '#1976d2',
        fontSize: 25,
        marginBottom: 20
    },
    content: {
        marginBottom: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
    },
    input: {
        height: 60,
        width: '100%',
        borderWidth: 1,
        borderRadius: 7,
        marginBottom: 10,
        padding: 5,
        borderColor: '#1976d2'
    }
});


export default styles;