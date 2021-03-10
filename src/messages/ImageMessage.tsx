import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// navigation
import {StackNavigationProp} from '@react-navigation/stack'
import {RouteProp} from '@react-navigation/native'
import { ParameterList } from '../models/StackNavigationParameterList'
import { Message } from '../models/Message'
import Autolink from 'react-native-autolink'

interface Props{
    message: Message;
    navigation: StackNavigationProp<ParameterList, "Thumbnail">
    route: RouteProp<ParameterList, "Thumbnail">
}

const ImageMessage: React.FC<Props> = ({message, navigation, route}) => {

    return (
        <View>
            { /* content !== "" || containsUrl &&
                <Autolink 
                    text={content}
                />
            */}
        </View>
    )
}

export default ImageMessage