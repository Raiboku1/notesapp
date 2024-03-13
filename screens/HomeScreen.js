import { Button, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import AddNoteScreen from './AddNoteScreen'

const HomeScreen = ({ setScreen }) => {
    return (
        <SafeAreaView>
            <Header></Header>
            <View style={styles.container}>
                <Pressable style={styles.buttonStyle}
                    onPress={() => { setScreen('AddNotes') }}>
                    <Text style={styles.textStyle}>Add Notes</Text>
                </Pressable>
            </View>
            <View style={styles.container}>
                <Pressable style={styles.buttonStyle}
                    title='View All'
                    onPress={() => { setScreen('AllNotes') }}>
                    <Text style={styles.textStyle}>View All</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    buttonStyle: {
        width: 370,
        backgroundColor: '#76ABAE',
        padding: 10,
        margin: 3,
        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
        borderColor: 'black'
        
    },
    textStyle: {
        color: 'white'
    }
})