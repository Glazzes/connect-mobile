import React from 'react';
import { View, Text } from 'react-native';
import { Avatar, useTheme } from 'react-native-paper';
import createChatroomInfoStyles from './styles/ChatroomInfoStyles';

const ChatRoomAvatarInfo: React.FC = () => {
    const theme = useTheme()
    const styles = createChatroomInfoStyles(theme);

    return (
        <View style={styles.container}>
            <Avatar.Image
                style={{ marginRight: 10 }}
                source={{ uri: 'https://randomuser.me/api/portraits/women/57.jpg' }}
                size={40}
            />
            <View>
                <Text style={styles.username}>
                    Ivanuwu is gay
                </Text>
                <Text style={styles.onlineStatus}>Online</Text>
            </View>
        </View>
    );
};

export default ChatRoomAvatarInfo;