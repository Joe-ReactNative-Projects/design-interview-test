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
import {DATA} from "./../data/data";
import {styles} from "../globalstyles";
import {datastyles} from "../data/datastyles";
import {AntDesign} from "@expo/vector-icons";

const Item = ({title, time, tag}) => (
	<View style={{flexDirection: "row"}}>
		<View
			style={{
				width: "88%",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
			}}>
			<View style={{flexDirection: "column"}}>
				<Text style={datastyles.title}>{title}</Text>
				<Text style={datastyles.time}>{time}</Text>
			</View>
			<View style={{backgroundColor: "#ECFAF3", padding: 5, borderRadius: 5}}>
				<Text style={datastyles.tag}>{tag}</Text>
			</View>
		</View>
	</View>
);

const Notification = () => {
	return (
		<SafeAreaView style={styles.safearea}>
			<ScrollView>
				<View style={styles.container}>
					{/* Today view */}
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
						}}>
						<Text style={datastyles.heading}>TODAY</Text>
						<Text style={datastyles.mark}>Mark as read</Text>
					</View>
					<View
						style={{
							flexDirection: "row",
							gap: "10",
							backgroundColor: "#ECFAF3",
							padding: 10,
							borderRadius: 10,
						}}>
						<View style={datastyles.box}>
							<AntDesign name="meho" size={24} color="white" />
						</View>
						<View>
							<Text style={datastyles.title}>Cashback 50%</Text>
							<Text style={{color: "#B9BAC4", fontSize: 14, marginBottom: 5}}>
								Get 50% cashbback for the next top up%
							</Text>
							<Text
								style={{
									fontSize: 12,
									color: "#4CD07F",
									fontFamily: "inter-bold",
								}}>
								Top Up Now
							</Text>
						</View>
					</View>
					<Text style={datastyles.heading}>YESTERDAY</Text>
					<View>
						<FlatList
							data={DATA}
							renderItem={({item, time}) => (
								<>
									<View
										style={{
											flex: 1,
											flexDirection: "row",
											gap: "20",
											marginBottom: 20,
										}}>
										<View style={datastyles.box}>
											<AntDesign name="meho" size={24} color="white" />
										</View>
										<View>
											<Item
												title={item.title}
												time={item.time}
												tag={item.tag}
											/>
										</View>
									</View>
								</>
							)}
							keyExtractor={(item) => item.id}
						/>
					</View>
					<Text style={datastyles.heading}>LAST 7 DAYS</Text>
					<View>
						<FlatList
							data={DATA}
							renderItem={({item, time}) => (
								<>
									<View
										style={{
											flex: 1,
											flexDirection: "row",
											gap: "20",
											marginBottom: 20,
										}}>
										<View style={datastyles.box}>
											<AntDesign name="meho" size={24} color="white" />
										</View>
										<View>
											<Item
												title={item.title}
												time={item.time}
												tag={item.tag}
											/>
										</View>
									</View>
								</>
							)}
							keyExtractor={(item) => item.id}
						/>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Notification;
