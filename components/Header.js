import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({ title, showBack, clickBack }) => {

  return (
    <SafeAreaView style={styles.headContainer}>
      <View style={styles.fixToText}>
        {showBack && <View style={styles.headerView}>
          <Pressable
            style={styles.backButtonStyle}
            onPress={() => { clickBack('Home') }}>
            <Text>Back</Text>
          </Pressable>
        </View>}
        <View>
          <Text style={styles.headText}>{title ? title : 'header'}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
  headContainer: {
    backgroundColor: '#31363F',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    height: 70,
  },
  headText: {
    color: 'white',
    fontSize: 24,
  },
  backButtonStyle: {
    position: 'absolute',
    width: 90,
    backgroundColor: '#76ABAE',
    padding: 5,
    margin: 10,
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    borderColor: 'black',
    flex: 1,
    right: 40,
    bottom: -10,
    
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})