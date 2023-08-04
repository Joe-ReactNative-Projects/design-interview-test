import {StyleSheet, Text, TouchableOpacity} from "react-native";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./../screens/Home";
import Notification from "../screens/Notification";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
	// const navigation = useNavigation();

	return (
		<Tab.Navigator
			screenOptions={({route}) => ({
				tabBarIcon: ({focused, color, size}) => {
					let iconName;
					let iconColor;

					if (route.name === "Home") {
						iconName = focused ? "home" : "home-outline";
					} else if (route.name === "Notification") {
						iconName = focused ? "stats-chart" : "stats-chart-outline";
					} else if (route.name === "Statistics") {
						iconName = focused ? "notifications" : "notifications-outline";
					} else {
						iconName = focused ? "person" : "person-outline";
					}

					// set the color of the icon based on focused state
					iconColor = focused ? "#007aff" : "#d3d3d3";

					// pass the modified color to the Ionicons component
					return <Ionicons name={iconName} size={size} color={color} />;
				},
			})}>
			<Tab.Screen name="Main" component={Home} options={{headerShown: false}} />

			<Tab.Screen
				name="Notification"
				component={Notification}
				options={{headerShown: false}}
			/>
			<Tab.Screen
				name="Statistics"
				component={Notification}
				options={{headerShown: false}}
			/>

			<Tab.Screen
				name="Profile"
				component={Notification}
				options={{headerShown: false}}
			/>
		</Tab.Navigator>
	);
};

export default BottomTabs;

const styles = StyleSheet.create({});
