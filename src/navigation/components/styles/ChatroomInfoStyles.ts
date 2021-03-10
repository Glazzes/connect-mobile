import {StyleSheet} from 'react-native'

const createChatroomInfoStyles = (theme: ReactNativePaper.Theme) => {
    const {colors} = theme;

    return StyleSheet.create({
        container: { 
            flexDirection: 'row', 
            flexGrow: 1, 
            alignItems: 'center' 
        },
        username: { 
            fontSize: 17,
            fontWeight: '600',
            color: colors.appbarTitle
        },
        onlineStatus: {
            color: colors.appbarOnlineStatus
        }
    })
}

export default createChatroomInfoStyles;