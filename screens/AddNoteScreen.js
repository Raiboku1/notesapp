import { Button, StyleSheet, Text, TextInput, TextInputBase, View } from 'react-native'
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
        <View style = {styles.Screen}>
            <View>
                <Header></Header>
            </View>
            <View>
                <Button
                    title="Back"
                    onPress={() => { setScreen('Home') }}
                    ></Button>
            </View>
            <View>
                <Text>Note:</Text>
                <TextInput
                    style={styles.input}
                    value={setNote}
                    placeholder="Type Note Here..."
                    onChangeText={onNoteChange} />
                <Button
                    style={styles.buttonStyle}
                    title='Add'
                    onPress={() => {list(note), setScreen('AllNotes')} }></Button>
            </View>
        </View>
    )
}

export default AddNoteScreen

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

})