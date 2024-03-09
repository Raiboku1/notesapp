import { Button, StyleSheet, Text, TextInput, TextInputBase, View, VirtualizedList } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import NoteHeader from '../components/NoteHeader'

const AllNoteScreen = ({ setScreen, list, deleteNote }) => {

    const clickDelete = (val) => {
        deleteNote(val)
    }

    const renderItem = () => {
        let myLists = []
        console.log({list});
        for (let i = 0; i < list.length; i++) {
            const element = list[i];
            let content = (
                <View style={styles.Table}>
                    <Text>{element.note}</Text>
                    <View>
                        <Button
                            title="Delete"
                            onPress={()=>{clickDelete(element)}}></Button>
                    </View>
                </View>
            )
            myLists.push(content)
        }
        return myLists
    }

    return (
        <View>
            <View>
                <Header></Header>
            </View>
            <View>
                <Button
                    title="Back"
                    onPress={() => { setScreen('Home') }}></Button>
            </View>
            <View>
                <Text>All Notes:</Text>
            </View>
            <View>
                {renderItem()}
            </View>
        </View>
    )
}
export default AllNoteScreen

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    Table: {
        borderWidth: 1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 2,
    },
})