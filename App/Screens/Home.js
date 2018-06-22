import React, { Component } from "react";
import { StatusBar, KeyboardAvoidingView, Image } from "react-native";

import Container from "../Components/Container";
import Search from "../Components/Search";

class HomeScreen extends Component {
	render() {
		return (
			<Container>
				<Search />
			</Container>
		);
	}
}

export default HomeScreen;
