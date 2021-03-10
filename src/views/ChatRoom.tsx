import React from 'react';
import { Dimensions, KeyboardAvoidingView } from 'react-native';
import { ParameterList } from '../models/StackNavigationParameterList';
import { useTheme } from 'react-native-paper';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { PanGestureHandler, ScrollView } from 'react-native-gesture-handler';
import {BasicTextMessage, ImageMessagePreview} from '../messages';

import Animated from 'react-native-reanimated';
import MessagingArea from '../messages/MessagingArea';
import useChatRoomSwipe from './animations/useChatRoomSwipe';
import createChatroomAppbarStyles from './styles/ChatroomAppbarStyles';
import ChatroomAppbar from '../navigation/components/ChatroomAppbar';

interface Props {
    navigation: StackNavigationProp<ParameterList>;
    route: RouteProp<ParameterList, 'ChatRoom'>;
}

const { width } = Dimensions.get('window');

const ChatRoom: React.FC<Props> = ({ navigation, route }) => {
    const theme = useTheme();
    const styles = createChatroomAppbarStyles(theme);
    const { gestureHanlder, animatedStyles, goBack } = useChatRoomSwipe(
        width,
        navigation,
    );

    return (
        <PanGestureHandler onGestureEvent={gestureHanlder}>
            <Animated.View
                style={[animatedStyles, { flex: 1, backgroundColor: "white" }]}>
                <ChatroomAppbar navigation={navigation} />

                <KeyboardAvoidingView style={styles.chatArea}>
                    <ScrollView
                        style={{
                            padding: 10,
                            paddingTop: 5,
                            paddingBottom: 10,
                        }}>
                        <BasicTextMessage myNumber={2} />
                        <ImageMessagePreview navigation={navigation} />
                        <BasicTextMessage myNumber={2} />
                    </ScrollView>
                    <MessagingArea />
                </KeyboardAvoidingView>
            </Animated.View>
        </PanGestureHandler>
    );
};

export default ChatRoom;
