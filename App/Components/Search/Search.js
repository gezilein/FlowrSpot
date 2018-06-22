import React from "react";
import { View, TextInput, Image, Text, ImageBackground } from "react-native";

import Styles from "./Styles";

const Search = props => {
	return (
		<View style={Styles.Container}>
			<Image
				resizeMode="cover"
				style={Styles.BackgroundImage}
				source={require("./Images/pl_hero.png")}
			/>
			<View style={Styles.TitleWrap}>
				<Text style={Styles.Title}>Discover flowers</Text>
				<Text style={Styles.Title}>around you</Text>
			</View>
			<Text style={Styles.Description}>
				Explore between more than 8.427 sightings
			</Text>
			<View style={Styles.InputArea}>
				<TextInput
					style={Styles.Input}
					underlineColorAndroid="transparent"
					returnKeyType="search"
					placeholder="Looking for something specific?"
				/>
				<Image
					style={Styles.SearchIcon}
					source={require("./Images/pl_icon_search.png")}
				/>
			</View>
		</View>
	);
};

export default Search;
