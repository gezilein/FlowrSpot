import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import Styles from "./Styles";

const Header = () => (
	<View style={Styles.Container}>
		<TouchableOpacity style={Styles.MenuArea}>
			<Text style={Styles.Menu}>...</Text>
		</TouchableOpacity>
		<Text style={Styles.Logo}>FlowrSpot</Text>
	</View>
);

export default Header;
