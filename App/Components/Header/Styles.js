import { StyleSheet, Platform, StatusBar } from "react-native";
import Colors from "../../Config/Colors";

export default StyleSheet.create({
	Container: {
		flexDirection: "row",
		marginTop: StatusBar.currentHeight,
		backgroundColor: "red"
	},
	MenuArea: {
		paddingHorizontal: 5,
		backgroundColor: "yellow",
		paddingBottom: 5
	},
	Menu: {
		fontFamily: "Ubuntu-Regular",
		fontSize: 18,
		letterSpacing: 3,
		color: Colors.$coolGrey,
		backgroundColor: "green"
	},
	Logo: {
		flex: 1,
		fontFamily: "Ubuntu-Regular",
		fontSize: 18,
		letterSpacing: 3,
		textAlign: "center",
		alignSelf: "center",
		color: Colors.$coolGrey
	}
});
