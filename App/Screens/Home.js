import React, { Component } from "react";
import { StatusBar, KeyboardAvoidingView, Text } from "react-native";

import { Container } from "../Components/Container/Index";

class HomeScreen extends Component {
	render() {
		return (
			<Container>
				<StatusBar barStyle="light-content" />
				<KeyboardAvoidingView behavior="padding">
					<Text>home here</Text>
				</KeyboardAvoidingView>
			</Container>
		);
	}
}

export default HomeScreen;
