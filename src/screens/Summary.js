import {
	SafeAreaView,
	ScrollView,
	Text,
	View,
	TextInput,
	SectionList,
	FlatList,
	Image,
	Button,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import {datastyles} from "../data/datastyles";
import {styles} from "../globalstyles";
import Logo from "../../assets/files/logo.jpg";
import Starbucks from "../../assets/files/starbucks.png";

const Summary = () => {
	return (
		<View style={styles.backgreen}>
			<View style={styles.container}>
				<View
					style={{flex: 0.7, justifyContent: "center", alignItems: "center"}}>
					<View
						style={{
							alignItems: "center",
							justifyContent: "center",
							height: 90,
							width: 90,
							backgroundColor: "#4CD07F",
							borderRadius: 10,
						}}>
						<Image source={Starbucks} style={{height: 70, width: 70}} />
					</View>
					<Text
						style={{
							fontFamily: "inter-bold",
							fontSize: 24,
							textAlign: "center",
							color: "white",
						}}>
						Starbucks Coffee
					</Text>
					<Text
						style={{
							fontFamily: "inter-bold",
							fontSize: 12,
							textAlign: "center",
							color: "white",
							marginTop: 10,
						}}>
						Payment on Dec 2, 2020
					</Text>
				</View>

				<View>
					<Text
						style={{
							fontFamily: "inter-bold",
							fontSize: 36,
							textAlign: "center",
							color: "white",
						}}>
						$15.00
					</Text>
					<View
						style={{
							backgroundColor: "#286D4D",
							padding: 20,
							marginTop: 20,
							borderRadius: 10,
						}}>
						<Text
							style={{
								fontFamily: "inter-medium",
								fontSize: 12,
								color: "white",
							}}>
							Payment fee $2 has been applied
						</Text>
					</View>
				</View>
			</View>

			<View
				style={{
					flex: 0.5,
					justifyContent: "flex-end",
					backgroundColor: "white",
					borderTopEndRadius: 30,
					borderTopStartRadius: 30,
				}}>
				<View style={styles.pay}>
					<Text style={datastyles.title}>Choose Cards</Text>
					<View
						style={{
							height: 60,
							alignItems: "center",
							backgroundColor: "#F2F3F3",
							borderRadius: 10,
							flexDirection: "row",
							gap: 20,
							padding: 20,
							marginBottom: 10,
						}}>
						<Image source={Logo} style={{height: 30, width: 50}} />
						<View style={{flexDirection: "column"}}>
							<Text>Wally Virtual Card</Text>
							<Text>0318-1608-2105</Text>
						</View>
					</View>
					<TouchableOpacity
						style={styles.btn_primary}
						onPress={() => navigation.navigate("VerifyPhone")}>
						<Text style={styles.btn_pritext}> Proceed to Pay </Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default Summary;
