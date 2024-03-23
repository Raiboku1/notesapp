import { Button, Pressable, StyleSheet, Text, TextInput, TextInputBase, View, VirtualizedList } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import NoteHeader from '../components/NoteHeader'

const AllNoteScreen = ({ setScreen, list, deleteNote, updateToList }) => { // wala pa na test ang updateNote ug itemId

    const [note, setNote] = useState(' ');
    const [itemId, setItemId] = useState(' ');

    const clickDelete = (val) => {
        deleteNote(val)
    }
    const clickUpdate = (data) => {
        setItemId(data.id)
        console.log(data.id)
    }
    const clickSave = (note, dataId) => {
        updateToList(note, dataId) // Added Update Note (3/14/24)
        console.log(note, dataId)
        setItemId('')
    }
    const clickCancel = () => {
        setItemId('')
    }
    const onNotesChange = (val) => {
        setNote(val)
    }
    const backButtonClick = (val) => {
        setScreen(val)
    } 

    const renderItem = () => {
        let myLists = []
        console.log({ list });
        for (let i = 0; i < list.length; i++) {
            const element = list[i];
            let content = (
                <View style={styles.Table}>
                    {itemId!=element.id && <View style={styles.fixToText2}>
                        <Text style={styles.mainText}>{element.note}</Text>
                        {/*need nako makuha ang string ani na text feild... pero unsaooooooooon? */}
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

                    {/* make it na sa isa lang ka row mo gawas ang edit save */}
                    <View style={styles.fixToTextSave}>
                        {itemId==element.id && (<View style={styles.fixToText2}>
                            <TextInput
                                style={styles.input}
                                value={setNote}
                                placeholder="Type Note Here..."
                                placeholderTextColor="white"
                                onChangeText={onNotesChange}
                            />
                            <View style={styles.fixToTextInternal}>
                                <Pressable
                                    style={styles.saveButton}
                                    onPress={() => {clickSave(note, element.id)}}>
                                    <Text style={styles.buttonTextStyle}> Save </Text>
                                </Pressable>
                                <Pressable
                                    style={styles.cancelButton}
                                    onPress={() => clickCancel()}>
                                    <Text style={styles.buttonTextStyle}> Cancel </Text>
                                </Pressable>
                            </View>
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
                <Header title={'All Notes'} showBack={true} clickBack={backButtonClick}></Header>
            </View>
            <View>
                <Text style={styles.normalText}>All Notes:</Text>
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
        borderBottomWidth: 1,
        borderColor: 'white',
        padding: 10,
        width: 180,
        color: 'white',
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
    cancelButton: {
        width: 90,
        backgroundColor: '#76ABAE',
        padding: 5,
        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
        borderColor: 'black',
        left: 5
    },
    fixToText: {
        position: "absolute",
        left: 190,
        bottom: -3,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    fixToText2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    fixToTextSave: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        right: 10
    },
    fixToTextInternal: {
        position: 'absolute',
        left: 200,
        bottom: 15,
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
