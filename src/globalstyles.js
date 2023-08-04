import React from "react";
import {StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
	safearea: {
		backgroundColor: "white",
		flex: 1,
	},
	container: {
		flex: 1,
		paddingHorizontal: 20,
		// justifyContent: "space-between",
	},
	backgreen: {
		backgroundColor: "#0E5C38",
		flex: 1,
	},
	image: {
		// flex: 1,
		alignItems: "center",
		resizeMode: "contain",
		marginBottom: 30,
	},
	textwhite: {
		fontSize: 18,
		color: "white",
		lineHeight: 25,
		// fontFamily: "mulish-black",
	},
	textcenter: {
		textAlign: "center",
	},
	// bold: {
	// 	fontSize: 18,
	// 	color: "#444444",
	// 	lineHeight: 25,
	// 	textAlign: "left",
	// 	marginBottom: 20,
	// 	fontFamily: "satoshi-bold",
	// },
	input: {
		marginTop: 15,
		marginBottom: 15,
		height: 50,
		borderBottomWidth: 0.2,
		fontSize: 16,
		fontFamily: "inter-light",
	},
	btn_primary: {
		backgroundColor: "#4CD07F",
		borderColor: "none",
		padding: 15,
		borderRadius: 8,
		marginVertical: 5,
	},
	btn_second: {
		backgroundColor: "white",
		borderWidth: 1,
		borderColor: "blue",
		padding: 15,
		borderRadius: 8,
		marginVertical: 5,
		justifyContent: "center",
	},
	btn_pritext: {
		fontSize: 16,
		color: "white",
		textAlign: "center",
		fontFamily: "inter-medium",
	},
	btn_sectext: {
		fontSize: 16,
		color: "black",
		fontFamily: "inter-medium",
	},
	pay: {flex: 1, paddingHorizontal: 20, justifyContent: "center"},
});

export {styles};
