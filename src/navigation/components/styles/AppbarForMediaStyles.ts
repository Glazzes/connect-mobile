import { StyleSheet } from "react-native";

const createAppbarForMediaStyles = (theme: ReactNativePaper.Theme) => {
    const {colors} = theme;

    return StyleSheet.create({
        appbar: {
            backgroundColor: "rgba(0,0,0,0.1)",
        }
    })
}

export default createAppbarForMediaStyles;