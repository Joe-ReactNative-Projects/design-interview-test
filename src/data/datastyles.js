import React from "react";
import {StyleSheet, Dimensions} from "react-native";

const datastyles = StyleSheet.create({
	heading: {
		fontFamily: "inter-medium",
		color: "#B9BAC4",
		marginVertical: 20,
	},
	mark: {
		color: "#4CD07F",
		fontFamily: "inter-bold",
	},

	title: {
		fontFamily: "inter-bold",
		fontSize: 16,
		marginBottom: 12,
	},
	time: {
		fontSize: 12,
	},
	tag: {
		fontSize: 12,
		color: "#4CD07F",
	},
	box: {
		// flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: 50,
		height: 50,
		backgroundColor: "green",
		borderRadius: 8,
	},
});

export {datastyles};
