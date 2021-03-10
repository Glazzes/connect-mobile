import { DefaultTheme } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        appbarBackground: "#235DE3",
        appbarTitle: "white",
        appbarOnlineStatus: "white",
        onlineIndicator: "#82D02A",
        messageBg: '#235DE3',
        messageText: 'white',
        friendMessageBg: '#F5F6FA',
        friendMessageText: '#5A6181',
        timeStampText: '#52616b',
        checkNotSeen: '#F2F2F4',
        checkSeen: '#235DE3',
        url: '#00e0ff',
        previewUrl: '#1092FF',
        messagingArea: "#F5F6FA",
        messagingIcons: '#C3C6D2',
    },
};

export default theme;