import {StyleSheet} from 'react-native'

const createChatroomAppbarStyles = (theme: ReactNativePaper.Theme) => {
    const {colors} = theme;

    return StyleSheet.create({
        appbar: {
            backgroundColor: colors.appbarBackground,
            elevation: 0
        },
        title: {
            color: colors.appbarTitle
        },
    })
}

export default createChatroomAppbarStyles;