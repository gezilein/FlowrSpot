import { StyleSheet, Platform, StatusBar } from "react-native";
import Colors from "../../Config/Colors";

export default StyleSheet.create({
	Container: {
		flexDirection: "row",
		marginTop: StatusBar.currentHeight,
		height: 45,
		alignItems: "center"
	},
	MenuTouch: {
		position: "absolute",
		top: 0,
		left: 0,
		paddingHorizontal: 20
	},
	MenuText: {
		fontFamily: "Ubuntu-Bold",
		fontSize: 28,
		letterSpacing: 2,
		color: Colors.$coolGrey
	},
	Logo: {
		flex: 1,
		fontFamily: "Ubuntu-Bold",
		fontSize: 18,
		textAlign: "center",
		color: Colors.$pinkishTan
	}
});
