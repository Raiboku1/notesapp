import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <SafeAreaView style={styles.headContainer}>
      <View>
      <Text style={styles.headText}>Notes Application</Text>
      </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
  headContainer: {
    backgroundColor: '#31363F',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    height: 70,

  },
  headText: {
    color: 'white',
    fontSize: 24,
  },
})