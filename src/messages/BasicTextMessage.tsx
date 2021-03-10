import React, {useContext, useState} from 'react';
import {View, Text} from 'react-native';
import AutoLink from 'react-native-autolink';
import {createBasicMessageStyles} from './styles';
import {Avatar, useTheme} from 'react-native-paper';
import {GlobalContext} from '../authentication/Store';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  myNumber: number;
}

const BasicTextMessage: React.FC<Props> = ({myNumber}) => {
  const [messageSender, setMessageSender] = useState<any | null>(null);
  const {globalState, setGlobalState} = useContext(GlobalContext);

  const someThing = true;

  const theme = useTheme();
  const styles = createBasicMessageStyles(theme);

  if (someThing) {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.messageContainer}>
          <AutoLink
            text={'React native is killing me'}
            linkStyle={styles.link}
            style={[styles.commonMessage, styles.message]}
          />
          <View style={styles.timeStamp}>
            <Text style={styles.timeStampText}>3:00</Text>
            {someThing && (
              <Icon name={'check-all'} size={20} style={styles.checkSeen} />
            )}
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.frienMessageContainer}>
          <View style={styles.avatarMessage}>
            {
                "abc" === "abc" ? (
                    <Avatar.Image
                        style={styles.avatar}
                        source={{uri: 'https://randomuser.me/api/portraits/women/57.jpg'}}
                        size={35}/>
                ) : (
                    <Avatar.Icon 
                        icon={"plus"}
                        style={{backgroundColor: "transparent", marginRight: 5}}
                        size={35}
                    />
                )
            }
            <AutoLink
                text={
                'Flutter is gonna kill react native'
                }
                linkStyle={styles.link}
                style={[styles.commonMessage, styles.friendMessage]}
            />
          </View>
          <View style={styles.friendTimeStamp}>
            <Text style={styles.timeStampText}>3:00</Text>
          </View>
        </View>
      </View>
    );
  }
};

export default BasicTextMessage;