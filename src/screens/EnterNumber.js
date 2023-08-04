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
						Enter a phone number to receive a pin code to sign up
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
						onPress={() => navigation.navigate("VerifyPhone")}>
						<Text style={styles.btn_pritext}> Send Code </Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default EnterNumber;
