import { Button, Pressable, StyleSheet, Text, TextInput, TextInputBase, View, VirtualizedList } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import NoteHeader from '../components/NoteHeader'

const AllNoteScreen = ({ setScreen, list, deleteNote, updateNote }) => {

    const [showUpdateInput, setShowUpdateInput] = useState(clickUpdate ? true : false);
    const [note, setNote] = useState(' ');

    const clickDelete = (val) => {
        deleteNote(val)
    }
    const clickUpdate = (val) => {
        setShowUpdateInput(true)
    }
    const onNotesChange = (val) => {
        setNote([
            { val },
        ])
    }
    const renderItem = () => {
        let myLists = []
        console.log({ list });
        for (let i = 0; i < list.length; i++) {
            const element = list[i];
            let content = (
                <View style={styles.Table}>
                    {!showUpdateInput && <View style={styles.fixToText2}>
                        <Text style={styles.mainText}>{element.note}</Text>
                        <View style={styles.fixToText}>
                            <Pressable
                                style={styles.updateButton}
                                onPress={() => { clickUpdate(element) }}>
                                <Text style={styles.buttonTextStyle}> Update </Text>
                            </Pressable>
                            <Pressable
                                style={styles.deleteButton}
                                onPress={() => { clickDelete(element) }}>
                                <Text style={styles.buttonTextStyle}> Delete </Text>
                            </Pressable>
                        </View>
                    </View>}
                    {/* mao ni ang mo ilis sa update ug delete na buton */}
                    <View style={{ width: '100%' }}>
                        {showUpdateInput &&
                            (
                                <View>
                                    <TextInput
                                        style={styles.input}
                                    />
                                    <Pressable
                                        style={styles.saveButton}
                                        onPress={clickUpdate()}>
                                        <Text> Save </Text>
                                    </Pressable>
                                </View>
                            )
                        }
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
                <Text style={styles.normalText}>All Notes:</Text>
            </View>
            <View>
                <Pressable
                    style={styles.backButtonStyle}
                    onPress={() => { setScreen('Home') }}>
                    <Text style={styles.buttonTextStyle}>Back</Text>
                </Pressable>
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
        marginLeft: 5,
        marginRight: 5,
        marginTop: 2,
        padding: 10,
        width: 400,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#31363F',
    },
    updateButton: {
        width: 90,
        backgroundColor: '#76ABAE',
        padding: 5,
        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
        borderColor: 'black',
    },
    deleteButton: {
        width: 90,
        backgroundColor: '#76ABAE',
        padding: 5,
        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
        borderColor: 'black',
        left: 5
    },
    saveButton: {
        width: 90,
        backgroundColor: '#76ABAE',
        padding: 5,
        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
        borderColor: 'black',
    },
    fixToText: {
        position: "absolute",
        left: 180,
        bottom: -3,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    fixToText2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    mainText: {
        fontSize: 18,
        left: 10,
        color: 'white'
    },
    normalText: {
        fontSize: 24,
        left: 10,
        top: 25
    },
    buttonTextStyle: {
        color: 'white',
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
        top: -80,
        zIndex: 1000
    },
})
