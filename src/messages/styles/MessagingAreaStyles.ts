import {StyleSheet} from 'react-native'
import { color } from 'react-native-reanimated';

const createMessagingAreaStyles = (screenWidth:number, theme: ReactNativePaper.Theme) => {
    const {colors} = theme;
    
    return StyleSheet.create({
        linkPreviewContainer: {
            padding: 5,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            overflow: "hidden",
            backgroundColor: "white", 
            height: 60, 
            flexDirection: "row", 
            flexGrow:1
        },
        previewImage:{
            width: 100, 
            height: 55, 
            backgroundColor: colors.messageBg
        },
        placeHolderText: {
            fontSize: 15,
            color: colors.messageBg
        },
        placeHolderImage:{
            width: 100, 
            height: 55, 
            backgroundColor: colors.messageBg
        },
        linkInformationContainer:{
            paddingLeft: 5,
            width: screenWidth - 100
        },
        title: {
            color: colors.messageBg,
        },
        link: {
            color: colors.previewUrl
        },
        messagingArea: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: 10,
            paddingLeft: 10,
            paddingTop: 5,
            paddingBottom: 5
        },
        input: {
            fontSize: 16,
            paddingLeft: 20,
            paddingRight: 20,
            backgroundColor: colors.messagingArea,
            borderRadius: 30,
            width: "65%",
            color: colors.friendMessageText
        },
        icon: {
            color: colors.messagingIcons
        },
    })
}

export default createMessagingAreaStyles;