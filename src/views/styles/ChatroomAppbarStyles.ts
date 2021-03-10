import { StyleSheet } from "react-native";

const createChatroomAppbarStyles = (theme: ReactNativePaper.Theme) => {
    const {colors} = theme;

    return StyleSheet.create({
        appbar: {
            backgroundColor: colors.appbarBackground,
            elevation: 0,
            justifyContent: "space-between"
        },
        chatArea: {
            flex: 1, 
        }
    })
}

export default createChatroomAppbarStyles;