import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
	return (
		<View style={styles.headContainer}>
			<Text style={styles.headText}>APP-APP</Text>
		</View>
	)
}

export default Header

const styles = StyleSheet.create({
	headContainer: {
    backgroundColor: '#8294C4',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
  },
	headText: {
    color: 'white',
    fontSize: 24,
    // fontFamily: 'Ravie'
  },
})