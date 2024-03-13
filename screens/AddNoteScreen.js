import { Button, Pressable, StyleSheet, Text, TextInput, TextInputBase, View } from 'react-native'
import React, { Component, useState } from 'react'
import Header from '../components/Header'
import NoteHeader from '../components/NoteHeader'

const AddNoteScreen = ({ setScreen, list }) => {
    // const [note, setNote] = useState(" ")

    const [note, setNote] = useState(" ")

    const onNoteChange = (Text) => {
        setNote(Text)
    }

    return (
        <View style={styles.Screen}>
            <View>
                <Header></Header>
            </View>
            <View>
                <Text style={styles.normalText}>Note:</Text>
                <TextInput
                    style={styles.input}
                    value={setNote}
                    placeholder="Type Note Here..."
                    onChangeText={onNoteChange} />
                <Pressable
                    style={styles.addButtonStyle}
                    onPress={() => { list(note), setScreen('AllNotes') }}>
                    <Text style={styles.buttonTextStyle}>Add</Text>
                </Pressable>
            </View>
            <View>
                <Pressable
                    style={styles.backButtonStyle}
                    onPress={() => { setScreen('Home') }}>
                    <Text style={styles.buttonTextStyle}>Back</Text>
                </Pressable>
            </View>

        </View>
    )
}

export default AddNoteScreen

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        padding: 10,
        fontSize: 16
    },
    backButtonStyle: {
        width: 90,
        backgroundColor: '#76ABAE',
        padding: 5,
        margin: 10,
        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
        borderColor: 'black',
        top: -175,
        zIndex: 1000
    },
    addButtonStyle: {
        width: 90,
        backgroundColor: '#76ABAE',
        padding: 5,
        left: 300,
        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
        borderColor: 'black',
    },
    buttonTextStyle: {
        color: 'white',
    },
    normalText: {
        fontSize: 24,
        left: 10,
    }
})