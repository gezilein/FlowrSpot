import React from "react";
import { View } from "react-native";
import Styles from "./Styles/Container";
import Header from "./Header";
import Footer from "./Footer";

const Container = ({ children, backgroundColor }) => {
	const containerStyles = [Styles.Container];
	if (backgroundColor) {
		containerStyles.push({ backgroundColor });
	}

	return (
		<View style={containerStyles}>
			<Header />
			<View style={Styles.Placeholder}>{children}</View>
			<Footer />
		</View>
	);
};

export default Container;
