import React, {useState, useRef, useMemo} from 'react'
import { View, Text, FlatList } from 'react-native'
import SockJsClient from 'react-stomp'
import Animated from 'react-native-reanimated'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

const ChatMessages = () => {
    const [messagingTemplate, setMessagingTemplate] = useState<any>(null)

    return (
        <View>
            <Text></Text>

            <SockJsClient 
                url={"some url"}
                topics={["some topics"]}
                ref={(template:any) => setMessagingTemplate(template)}
            />
        </View>
    )
}

export default ChatMessages