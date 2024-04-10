import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../components/Header'
import AddNoteScreen from './AddNoteScreen'
import { Button } from 'react-native-paper';

import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser } from '../app/slice/currentUserSlice';

const HomeScreen = ({ setScreen }) => {

    const currentUser = useSelector((state) => state.currentUser.value)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log({ currentUser });
    }, [currentUser]);

    const updateCurrentUser = () => {
        dispatch(setCurrentUser({ firstName: 'John2', lastName: "Doe2", username: "j_doe2", email: "john.doe2@gmail.com" }))
    }

    return (
        <SafeAreaView>
            <Header title={'Notes Application'}></Header>
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
            <Button icon="camera" mode="contained" onPress={() => updateCurrentUser()}>
                Press me
            </Button>
            <View>
                <Text>
                    {`${currentUser.firstName} ${currentUser.lastName}`}
                </Text>
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