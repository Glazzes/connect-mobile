import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {Appbar, useTheme, Provider, Menu} from 'react-native-paper';
import createChatroomAppbarStyles from './styles/ChatroomAppbarStyles';
import ChatRoomAvatarInfo from './ChatRoomAvatarInfo';

interface Props {
  navigation: StackNavigationProp<Record<string, object | undefined>, string>;
}

const ChatroomAppbar: React.FC<Props> = ({navigation}) => {
  const theme = useTheme();
  const styles = createChatroomAppbarStyles(theme);

  const goBack = () => {
    if (navigation.canGoBack()) navigation.goBack();
  };

  return (
    <Appbar.Header style={styles.appbar}>
      <Appbar.Action icon={'chevron-left'} onPress={goBack} />
      <ChatRoomAvatarInfo />
      <Appbar.Action icon={'dots-vertical'} onPress={() => {}} />
    </Appbar.Header>
  );
};

export default ChatroomAppbar;
