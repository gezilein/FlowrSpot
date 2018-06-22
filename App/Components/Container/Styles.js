import { StyleSheet } from "react-native";
import Colors from "../../Config/Colors";

export default StyleSheet.create({
	Container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: Colors.$primaryBackground,
		justifyContent: "flex-start"
	},
	Placeholder: {
		flex: 6
	}
});
