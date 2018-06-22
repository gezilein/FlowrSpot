import { StyleSheet } from "react-native";
import Colors from "../../Config/Colors";

export default StyleSheet.create({
	Container: {
		flexDirection: "column",
		alignItems: "center",
		height: 315,
		paddingVertical: 60
	},
	BackgroundImage: {
		position: "absolute",
		top: 0,
		left: 0,
		height: 315
	},
	TitleWrap: {
		alignItems: "center",
		flexDirection: "column"
	},
	Title: {
		color: "#FFFFFF",
		fontFamily: "Ubuntu-Regular",
		fontSize: 24
	},
	Description: {
		color: "#FFFFFF",
		fontSize: 15,
		paddingVertical: 30
	},
	InputArea: {
		backgroundColor: "#FFFFFF",
		flexDirection: "row",
		alignItems: "center",
		width: "85%",
		height: 48,
		borderRadius: 3
	},
	Input: {
		paddingHorizontal: 20,
		flex: 1,
		color: Colors.$coolGrey,
		fontSize: 14,
		fontFamily: "Ubuntu-Regular"
	},
	SearchIcon: {
		marginHorizontal: 20,
		width: 20,
		height: 20
	}
});
