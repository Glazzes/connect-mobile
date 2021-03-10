import { StyleSheet } from 'react-native';

const createBasicMessageStyles = (theme: ReactNativePaper.Theme) => {
    const { colors } = theme;

    return StyleSheet.create({
        rootContainer: {
            marginBottom: 10,
        },
        messageContainer: {
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
        },
        commonMessage: {
            maxWidth: '80%',
            padding: 10,
            borderRadius: 10,
        },
        message: {
            fontSize: 14.5,
            borderTopRightRadius: 0,
            backgroundColor: colors.messageBg,
            color: colors.messageText,
        },
        frienMessageContainer: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
        },
        avatar: {
            marginRight: 5,
        },
        avatarMessage: {
            flexDirection: 'row',
            alignItems: 'flex-end',
        },
        friendMessage: {
            fontSize: 14.5,
            borderBottomLeftRadius: 0,
            backgroundColor: colors.friendMessageBg,
            color: colors.friendMessageText,
        },
        timeStamp: {
            flexDirection: 'row',
            marginLeft: 10,
            marginRight: 10,
            alignItems: 'baseline',
            justifyContent: 'flex-end',
        },
        timeStampText: {
            fontSize: 12.5,
            marginRight: 5,
            color: colors.timeStampText,
        },
        friendTimeStamp: {
            fontSize: 12.5,
            marginLeft: 45,
            color: colors.timeStampText,
        },
        link: {
            color: colors.url,
            textDecorationLine: 'underline',
        },
        checkNotSeen: {
            color: colors.checkNotSeen,
        },
        checkSeen: {
            color: colors.checkSeen,
        },
    });
};

export default createBasicMessageStyles;
