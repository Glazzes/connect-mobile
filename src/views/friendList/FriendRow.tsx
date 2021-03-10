import React from "react";
import { View, Text, Vibration } from 'react-native'
import { Badge, TouchableRipple, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import FriendAvatar from "./FriendAvatar";

import {createFriendRowStyles} from './styles/friendRowStyles'

const FriendRow: React.FC = () => {
    const navigation = useNavigation();
    const theme = useTheme();
    const styles = createFriendRowStyles(theme);

    const goToChat = (): void => {
        navigation.navigate("ChatRoom")
    } 

    return (
        <TouchableRipple style={styles.root} onPress={goToChat} onLongPress={() => Vibration.vibrate(80)}>
            <View style={styles.container}>
                <View style={styles.friendAvatar}>
                    <FriendAvatar user={{id: 1, username: "glaze", status: "sos"}}/>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.content}> 
                        <Text style={styles.username}>Ellite lambert</Text>
                        <Text style={styles.time}>Today at 4:200</Text>
                    </View>
                    <View style={styles.content}> 
                        <Text style={styles.message}>Ellite lambert</Text>
                        <Badge visible={true} size={25} style={styles.notSeenBadge}>3</Badge>
                    </View>
                </View>
            </View>
        </TouchableRipple>
    )
}

export default FriendRow;