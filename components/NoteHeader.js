import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NoteHeader = () => {
	return (
		<View style={styles.headContainer}>
			<View style={styles.buttonContainer}>
				<Button style={styles.buttonStyle} title='Back'></Button>
			</View>
			<Text style={styles.headText}>Add Notes</Text>
		</View>
	)
}

export default NoteHeader

const styles = StyleSheet.create({
	headContainer: {
		backgroundColor: '#8294C4',
		height: 50,
		alignItems: 'left',
		justifyContent: 'center',
		marginTop: 22,
	},
	buttonStyle: {
		backgroundColor: '#ACB1D6',
		width: '100',
	},
	headText: {
		color: 'white',
		fontSize: 24,
		textAlign: 'center'
	},
	buttonContainer: {
		alignItems: 'Left',
	}
})