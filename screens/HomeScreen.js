import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import AddNoteScreen from './AddNoteScreen'

const HomeScreen = ({ setScreen }) => {
    return (
        <View>
            <Header></Header>
            <View style={styles.container}>
                <Button style={styles.buttonStyle}
                    title='Add'
                    onPress={() => { setScreen('AddNotes') }}></Button>
            </View>
            <View style={styles.container}>
                <Button style={styles.buttonStyle}
                    title='View All'
                    onPress={() => { setScreen('AllNotes') }}></Button>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    buttonStyle: {
        width: 500,
        backgroundColor: '#ACB1D6',
    },
})