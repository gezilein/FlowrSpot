import React, { Component } from "react";
import { Font } from "expo";
import { StyleSheet, Text, View } from "react-native";
import { Container } from "./Components/Container/Index";

export default class FlowrSpot extends Component {
	state = {
		ready: false
	};

	componentWillMount() {
		this._loadAssetsAsync();
	}

	async _loadAssetsAsync() {
		try {
			await Font.loadAsync({
				"Ubuntu-Regular": require("./Assets/Fonts/Ubuntu-Regular.ttf")
			});
			this.setState({ ready: true });
		} catch (e) {
			Log.error(e);
		} finally {
			console.info(
				"Font 'Ubuntu-Regular' loaded? ",
				Font.isLoaded("Ubuntu-Regular")
			);
			this.setState({ ready: true });
		}
	}

	render() {
		return this.state.ready ? (
			<Container>
				<View>
					<Text>
						Open up App.js to start working on your app!
					</Text>
				</View>
			</Container>
		) : (
			<Text>Getting ready...</Text>
		);
	}
}
