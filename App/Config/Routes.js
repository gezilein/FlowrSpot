import { createStackNavigator } from "react-navigation";

import HomeScreen from "../Screens/Home";

const HomeStack = createStackNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				header: () => null,
				headerTitle: "Home"
			}
		}
	},
	{
		initialRouteName: "Home",
		headerMode: "screen"
	}
);

export default createStackNavigator(
	{
		Home: {
			screen: HomeStack
		}
	},
	{
		mode: "card",
		headerMode: "none"
	}
);
