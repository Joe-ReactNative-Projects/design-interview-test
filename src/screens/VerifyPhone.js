import {
	SafeAreaView,
	Text,
	View,
	TextInput,
	Image,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import {styles} from "../globalstyles";

const EnterNumber = ({navigation}) => {
	return (
		<SafeAreaView style={styles.backgreen}>
			<View style={styles.container}>
				{/* Here comes the logo */}

				<View style={{flex: 0.7, justifyContent: "center"}}>
					<Text style={styles.textwhite}>
						Enter the code sent to (489)555-0103
					</Text>

					<Text style={styles.textwhite}>
						Didn't receive any code? <Text>Resend code</Text>
					</Text>

					{/* Number */}
					<TextInput
						style={styles.input}
						placeholder="Enter your number"
						// value={number}
						keyboardType="numeric"
						placeholderTextColor="white"

						// onChangeText={(newText) => setText(newText)}
					/>

					{/* Button */}
					<TouchableOpacity
						style={styles.btn_primary}
						onPress={() => navigation.navigate("Home")}>
						<Text style={styles.btn_pritext}> Continue </Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default EnterNumber;
