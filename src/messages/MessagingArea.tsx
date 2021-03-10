import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  Dimensions,
  NativeSyntheticEvent,
  TextInputKeyPressEventData
} from 'react-native';
import {useTheme, ActivityIndicator} from 'react-native-paper';
import {re_weburl} from '../utils/UrlRegex';
import {getLinkPreview, getPreviewFromContent} from 'link-preview-js';
import {createMessagingAreaStyles} from './styles';
import {Message} from '../models/Message';
import {MessageStatus} from '../models/MessageStatus';
import {Image} from 'react-native-expo-image-cache';
import {linkPreviewContainer} from '../utils/LinkPreviewSaver';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width} = Dimensions.get('window');

const MessagingArea: React.FC = () => {
  const theme = useTheme();
  const styles = createMessagingAreaStyles(width, theme);

  const [displayBanner, setDisplayBanner] = useState<boolean>(false);
  const [firstLink, setFirstLink] = useState<string | undefined>(undefined);
  const [fetchDone, setFecthDone] = useState<boolean>(false);

  const [message, setMessage] = useState<Message>({
    userMessage: '',
    containsLink: false,
    linkPreview: {},
    status: MessageStatus.SENT,
    senderId: '1',
    recieverId: '1',
  });

  const onKeyPress = ({nativeEvent}: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    if(nativeEvent.key === "Backspace"){
      setFecthDone(false)
    }
  }

  const onChangeText = (text: string) => {
    setMessage({...message, userMessage: text});
    const link = text.match(re_weburl);

    if(firstLink === undefined && link?.[0]) setFirstLink(link?.[0])

    if (link?.[0]) {
      setDisplayBanner(true)

      if (linkPreviewContainer.get(link?.[0])) {
        setMessage({
          ...message,
          linkPreview: linkPreviewContainer.get(link?.[0]),
        });
        setFecthDone(true);
      } else {
        getLinkPreview(link?.[0])
          .then((response) => {
            linkPreviewContainer.set(link?.[0], response);
            setMessage({...message, linkPreview: response});
            setFecthDone(true);
            setDisplayBanner(false)
          })
          .catch((_) => {
            setFecthDone(true);
            setDisplayBanner(false);
            setMessage({...message, linkPreview: undefined})
          });
      }

    }else{
      setFecthDone(false);
      setDisplayBanner(false);
    }
  };

  const fetchFromMessage = (message: string) => {
    const normalizedMessage = message.toLowerCase().replace(/\/$/i, '');
    return getLinkPreview(normalizedMessage);
  };

  return (
    <View>
      {displayBanner && (
        <View style={styles.linkPreviewContainer}>
          {fetchDone ? (
            <Image
              uri={message.linkPreview?.images[0]}
              style={styles.previewImage}
            />
          ) : (
            <View style={styles.placeHolderImage}>
              <ActivityIndicator color={'white'}
                style={{
                  transform: [{translateY: 15}],
                }} />
            </View>
          )}

          <View style={styles.linkInformationContainer}>
            {fetchDone ? (
              <Text numberOfLines={1} style={styles.title}>
                {message.linkPreview?.siteName ?? message.linkPreview?.url}
              </Text>
            ) : (
              <View
                style={{
                  flexGrow: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.placeHolderText}>
                  Requesting information...
                </Text>
              </View>
            )}

            {fetchDone && (
              <Text numberOfLines={2}>
                {message.linkPreview?.description}
              </Text>
            )}
          </View>
        </View>
      )}

      <View style={styles.messagingArea}>
        <TextInput
          onKeyPress={onKeyPress}
          onChangeText={(text) => onChangeText(text)}
          blurOnSubmit={true}
          placeholder={'Type a message'}
          style={styles.input}
        />
        <Icon name={"sticker-emoji"} size={25} color={theme.colors.messagingIcons}/>
        <Icon name={"paperclip"} size={25} color={theme.colors.messagingIcons}/>
        <Icon name={"send"} size={25} color={theme.colors.messagingIcons}/>
      </View>
    </View>
  );
};

export default MessagingArea;
