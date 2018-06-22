import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

import Styles from "./Styles/Footer.js";

const Footer = () => (
	<View style={Styles.Container}>
		<TouchableOpacity style={Styles.Button}>
			<Image
				source={require("./Images/favorites_icons.png")}
				style={Styles.Image}
			/>
		</TouchableOpacity>
		<TouchableOpacity style={Styles.Button}>
			<Image
				source={require("./Images/comment_icon.png")}
				style={Styles.Image}
			/>
		</TouchableOpacity>
		<TouchableOpacity style={Styles.Button}>
			<Image
				source={require("./Images/new_sighting_icon.png")}
				style={Styles.Image}
			/>
		</TouchableOpacity>
		<TouchableOpacity style={Styles.Button}>
			<Image
				source={require("./Images/sighting_list_icon.png")}
				style={Styles.Image}
			/>
		</TouchableOpacity>
	</View>
);

export default Footer;
