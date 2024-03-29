import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, SafeAreaViewBase, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AddNoteScreen from './screens/AddNoteScreen';
import AllNoteScreen from './screens/AllNoteScreen';
import { useState, useEffect } from 'react';
import * as SQLite from 'expo-sqlite'

export default function App() {
  const [db, setDb] = useState(SQLite.openDatabase('example2.db')); // getter setter sa sql
  const [screen, setScreen] = useState('Home') // getter setter sa screen display
  const [allNotes, setAllNotes] = useState([]); // getter setter para sa display ug adding data
  const [noteId, setNoteId] = useState(' ');

  const onSetScreen = (val) => {
    setScreen(val)
  }

  const screenType = {
    home: 'Home',
    addNote: 'AddNotes',
    allNote: 'AllNotes'
  }

  const onSetList = (val) => { // data display and adding
    console.log({ val })
    let copyAllNotes = [...allNotes]
    let data = { id: Date.now(), note: val }
    // copyAllNotes.unshift(data)
    copyAllNotes.push(data)
    setAllNotes(copyAllNotes)
    createNoteDB(data)
  }

  const updateNote = (noteData, dataId) => { // dire magkuha sa item ID for update ug mag set sa table sa updated value
    let copyAllNotes = [...allNotes]
    let _index = copyAllNotes.findIndex((item) => {
      return item.id == dataId
    })
    let newObj = {
      id: dataId,
      note: noteData
    }
    console.log({newObj, _index}, dataId)
    if (_index > -1) {
      copyAllNotes.splice(_index, 1, newObj)
      console.log(copyAllNotes)
      updateNoteDB(newObj)
      setAllNotes(copyAllNotes)
    }
  }

  const deleteNote = (data) => { // data deletion okay nani
    let copyAllNotes = [...allNotes]
    let _index = copyAllNotes.findIndex((item) => {
      return item.id == data.id
    })
    if (_index > -1) {
      copyAllNotes.splice(_index, 1) // splice(index or asa mag start ug delete, pila ang gusto i delete)
      setAllNotes(copyAllNotes)
      deleteNoteDB(data.id)
    }
  }

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY, note TEXT)')
    });
  }, [db]);

  useEffect(() => {
    readAllNotesDB()
  }, [])

  const createNoteDB = async (data) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO notes (id,note) values (?,?)',
        [data.id, data.note],
        (txObj, resultSet) => { console.log({ resultSet }) },
        (txObj, error) => { console.log(error) }
      );
    });
  }

  const readAllNotesDB = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM notes',
        null,
        (txObj, resultSet) => {
          console.log({ resultSet: resultSet.rows._array })
          setAllNotes(resultSet.rows._array)
        },
        (txObj, error) => { console.log(error) }
      );
    });
  }

  const updateNoteDB = async (data) => {
    db.transaction(tx => {
      tx.executeSql('UPDATE notes SET note = ? WHERE id = ?', [data.note, data.id],
        (txObj, resultSet) => { console.log({ resultSet }) },
        (txObj, error) => { console.log(error) }
      );
    });
  }

  const deleteNoteDB = async (id) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM notes WHERE id = ?',
        [id],
        (txObj, resultSet) => { onsole.log({ resultSet }) },
        (txObj, error) => { console.log(error) }
      );
    });
  }


  return (
    <SafeAreaView style={styles.container}>
      {screen == screenType.home && <HomeScreen setScreen={onSetScreen}></HomeScreen>}
      {screen == screenType.addNote && <AddNoteScreen setScreen={onSetScreen} addToList={onSetList}></AddNoteScreen>}
      {screen == screenType.allNote && <AllNoteScreen setScreen={onSetScreen} list={allNotes} deleteNote={deleteNote} updateToList={updateNote} ></AllNoteScreen>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
    flex: 1
  }
});
