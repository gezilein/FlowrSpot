import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import Styles from "./Styles";

const Header = () => (
	<View style={Styles.Container}>
		<Text style={Styles.Logo}>FlowrSpot</Text>
		<TouchableOpacity style={Styles.MenuTouch}>
			<Text style={Styles.MenuText}>...</Text>
		</TouchableOpacity>
	</View>
);

export default Header;
