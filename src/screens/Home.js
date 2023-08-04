import {
	SafeAreaView,
	Text,
	Image,
	View,
	Button,
	TouchableOpacity,
} from "react-native";
import {styles} from "../globalstyles";
import Logo from "../../assets/files/logo.jpg";
import {Ionicons} from "@expo/vector-icons";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const Home = ({navigation}) => {
	return (
		<SafeAreaView style={styles.safearea}>
			<View style={styles.container}>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginVertical: 20,
					}}>
					<Image source={Logo} style={{height: 40, width: 40}} />
					<Ionicons name="settings-outline" size={24} color="black" />
				</View>
				<View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							marginBottom: 30,
						}}>
						<View
							style={{
								flexDirection: "column",
							}}>
							<Text
								style={{
									fontFamily: "inter-bold",
									fontSize: 22,
									marginBottom: 5,
								}}>
								Hello Andre,
							</Text>
							<Text>Your available balance</Text>
						</View>

						<Text style={{fontFamily: "inter-extrabold", fontSize: 30}}>
							$15,901
						</Text>
					</View>
				</View>

				<View
					style={{
						backgroundColor: "#4CD07F",
						marginBottom: 30,
						flexDirection: "row",
						justifyContent: "space-around",
						paddingVertical: 20,
						borderRadius: 10,
					}}>
					<View>
						<MaterialCommunityIcons
							name="bank-transfer-in"
							size={24}
							color="black"
						/>
						<Text>Transfer</Text>
					</View>
					<View>
						<MaterialCommunityIcons
							name="bank-transfer-in"
							size={24}
							color="black"
						/>
						<Text>Transfer</Text>
					</View>
					<View>
						<MaterialCommunityIcons
							name="bank-transfer-in"
							size={24}
							color="black"
						/>
						<Text>Transfer</Text>
					</View>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginBottom: 30,
					}}>
					<Text
						style={{
							fontFamily: "inter-bold",
							fontSize: 22,
							marginBottom: 5,
						}}>
						Payment List
					</Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginBottom: 30,
					}}>
					<Text
						style={{
							fontFamily: "inter-bold",
							fontSize: 22,
							marginBottom: 5,
						}}>
						Promo & Discount
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Home;
