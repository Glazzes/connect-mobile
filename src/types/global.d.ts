import { SQLiteDatabase } from "react-native-sqlite-storage";

declare global{
    namespace NodeJS{
        interface Global{
            sqlite: SQLiteDatabase
        }
    }

    namespace ReactNativePaper{
        interface ThemeColors{
            appbarBackground: string,
            appbarTitle: string,
            appbarOnlineStatus: string,
            onlineIndicator: string,
            messageBg: string,
            messageText: string,
            friendMessageBg: string,
            friendMessageText: string,
            timeStampText: string,
            checkNotSeen: string,
            checkSeen: string,
            url: string,
            previewUrl: string,
            messagingIcons: string,
            messagingArea: string,
        }
    }
}