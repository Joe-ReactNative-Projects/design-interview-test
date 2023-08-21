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
import Logo from "../../assets/files/logo.jpg";
import {useState, useEffect} from "react";
import {FontAwesome} from "@expo/vector-icons";
import {AntDesign} from "@expo/vector-icons";
import {auth} from "../../firebase";

const Signin = ({navigation}) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				navigation.navigate("EnterNumber");
			}
		});
		// return unsubscribe;
	}, []);

	const handleSignUp = () => {
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userCredentials) => {
				const user = userCredentials.user;
				console.log(user.email);
			})
			.catch((error) => alert(error.message));
	};

	const handleSignIn = () => {
		auth
			.signInWithEmailAndPassword(email, password)
			.then((userCredentials) => {
				const user = userCredentials.user;
				console.log("Logged in with:", user.email);
			})
			.catch((error) => alert(error.message));
	};

	return (
		<SafeAreaView style={styles.safearea}>
			<View style={styles.container}>
				{/* Here comes the logo */}

				<View style={{flex: 0.7, justifyContent: "center"}}>
					<View style={styles.image}>
						<Image source={Logo} />
					</View>

					{/* Two inputs, Email and password */}

					{/* Email */}
					<TextInput
						style={styles.input}
						placeholder="Your Email"
						value={email}
						onChangeText={(text) => setEmail(text)}
					/>
					{/* Password */}
					<TextInput
						style={styles.input}
						placeholder="Password"
						value={password}
						onChangeText={(text) => setPassword(text)}
						secureTextEntry
					/>

					{/* Button */}
					<TouchableOpacity
						style={styles.btn_primary}
						// onPress={() => navigation.navigate("EnterNumber")}
						onPress={handleSignIn}>
						<Text style={styles.btn_pritext}> Login </Text>
					</TouchableOpacity>

					<Text style={styles.textcenter}>
						New to Wpay? <Text>Sign Up</Text>
					</Text>
				</View>

				<View style={{flex: 0.3, justifyContent: "flex-end"}}>
					{/* Login with socials */}
					<Text style={styles.textcenter}>or continue with</Text>
					<TouchableOpacity style={styles.btn_second}>
						<View
							style={{
								// flex: 1,
								flexDirection: "row",
								gap: "60",
								alignItems: "center",
							}}>
							<View
								style={{
									height: 30,
									width: 30,
									backgroundColor: "#F2F3F3",
									justifyContent: "center",
									alignItems: "center",
									borderRadius: 10,
								}}>
								<FontAwesome name="facebook" size={24} color="blue" />
							</View>

							<Text style={styles.btn_sectext}> Login with Facebook </Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btn_second}>
						<View
							style={{
								// flex: 1,
								flexDirection: "row",
								gap: "60",
								alignItems: "center",
							}}>
							<View
								style={{
									height: 30,
									width: 30,
									backgroundColor: "#F2F3F3",
									justifyContent: "center",
									alignItems: "center",
									borderRadius: 10,
								}}>
								<AntDesign name="google" size={24} color="red" />
							</View>
							<Text style={styles.btn_sectext}> Login with Google </Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

const style = StyleSheet.create({
	container: {
		marginTop: 50,
	},
});

export default Signin;
