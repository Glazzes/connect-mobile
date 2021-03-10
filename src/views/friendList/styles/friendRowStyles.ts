import { StyleSheet } from "react-native";

export const createFriendRowStyles = (theme: ReactNativePaper.Theme) => {
    return StyleSheet.create({
        root: {
            flexDirection: "row",
            padding: 5
        },
        friendAvatar: {
            marginRight: 10,
        },
        username: {
            fontWeight: "bold",
            fontSize: 17
        },
        time: {
            fontWeight: "bold"
        },
        container: {
            flexGrow: 1,
            flexDirection: "row"
        },
        contentContainer: {
            flexGrow: 1,
            flexDirection: "column"
        },
        content: {
            flexGrow: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        message: {
            fontSize: 16,
            color: theme.colors.messagingIcons
        },
        notSeenBadge: {
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.colors.messageBg
        }
    })
}