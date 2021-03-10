import React from 'react';
import {Image, StyleSheet, View, TouchableWithoutFeedback} from 'react-native'
import { Badge } from 'react-native-paper';
import { User } from '../../models/User';

const styles = StyleSheet.create({
    avatar: {
        flexDirection: "row"
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    bagde: {
        position: "absolute",
        right: -5,
        bottom: 0,
        borderColor: "white",
        borderWidth: 2,
        backgroundColor: "#235DE3"
    }
})

interface Props{
    user: User;
}

const FriendAvatar: React.FC<Props> = ({user}) => {
    return (
        <View style={styles.avatar}>
            <Image 
            style={styles.image}
            source={{uri: "https://randomuser.me/api/portraits/women/57.jpg"}}
            />
            <View>
                <Badge visible={true} size={18} style={styles.bagde}/>
            </View>
        </View>
    )
}

export default FriendAvatar;