import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SignIn from "./src/screens/SignIn";
import Home from "./src/screens/Home";
import EnterNumber from "./src/screens/EnterNumber";
import VerifyPhone from "./src/screens/VerifyPhone";
import Notification from "./src/screens/Notification";
import Summary from "./src/screens/Summary";
import BottomTabs from "./src/navigation/BottomTabs";
import {ROUTES} from "./src/constants";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const getFonts = () => {
	return Font.loadAsync({
		"inter-light": require("./assets/fonts/Inter-Light.ttf"),
		"inter-regular": require("./assets/fonts/Inter-Regular.ttf"),
		"inter-medium": require("./assets/fonts/Inter-Medium.ttf"),
		"inter-bold": require("./assets/fonts/Inter-Bold.ttf"),
		"inter-black": require("./assets/fonts/Inter-Black.ttf"),
		"inter-extrabold": require("./assets/fonts/Inter-ExtraBold.ttf"),
	});
};

const Stack = createNativeStackNavigator();

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	if (!fontsLoaded) {
		return (
			<AppLoading
				startAsync={getFonts}
				onFinish={() => setFontsLoaded(true)}
				onError={console.warn}
			/>
		);
	}

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Group
					screenOptions={{headerStyle: {backgroundColor: "papayawhip"}}}
					// screenOptions={({navigation}) => ({
					// 	presentation: "modal",
					// 	headerLeft: () => <CancelButton onPress={navigation.goBack} />,
					// })}
				>
					{/* <Stack.Screen name={ROUTES.SignIn} component={SignIn} /> */}

					{/* <Stack.Screen name={ROUTES.EnterNumber} component={EnterNumber} /> */}
					{/* <Stack.Screen name={ROUTES.VerifyPhone} component={VerifyPhone} /> */}
					<Stack.Screen name={ROUTES.Home} component={BottomTabs} />
					{/* <Stack.Screen
						name={ROUTES.Home}
						component={BottomTabs}
						options={{headerShown: false}}
					/> */}
					<Stack.Screen name={ROUTES.Notification} component={Notification} />

					<Stack.Screen name={ROUTES.Summary} component={Summary} />
				</Stack.Group>

				{/* <Stack.Screen name="EnterNumber" component={EnterNumber} /> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
