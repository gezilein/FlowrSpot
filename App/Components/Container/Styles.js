import { StyleSheet } from "react-native";
import Colors from "../../Config/Colors";

export default StyleSheet.create({
	Container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "cyan", // Colors.$primaryBackground,
		justifyContent: "flex-start",
		alignItems: "center"
	},
	Placeholder: {
		flex: 6
	}
});
