import React, {useEffect, useState} from 'react';
import {NavigationProp, useFocusEffect} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  StyleSheet,
  Pressable,
  Image as SimpleImage,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {ParameterList} from '../models/StackNavigationParameterList';
import {CacheManager, Image} from 'react-native-expo-image-cache';
import { TapGestureHandler, TapGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedGestureHandler } from 'react-native-reanimated';

const IMAGE_URL: string =
  'https://i.pinimg.com/564x/36/bc/ef/36bcef6923d85e324244f0066e78df1f.jpg';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  thumbail: {
    width: width * 0.6,
    height: 300,
    margin: 10,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 8,
    height: undefined,
    width: undefined,
    backgroundColor: 'lightblue',
    resizeMode: 'cover',
  },
});

interface Props {
  navigation: StackNavigationProp<ParameterList>;
}

const ImageMessagePreview: React.FC<Props> = ({
  navigation,
}) => {
  const [path, setPath] = useState<string | undefined>(undefined);
  const [isVisible, setIsVisible] = React.useState<boolean>(true);

  const goToFullScreen = (): void => {
    navigation.navigate('FullScreenImage', {imageUrl: IMAGE_URL, imageName: "Husky selfie"});
  };

  const printer = () => {
    setIsVisible(false);
    navigation.navigate("FullScreenImage", {imageUrl: IMAGE_URL, imageName: "Husky selfie"})
  }

  const onGestureEvent = useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
    onActive: () => {
      runOnJS(printer)()
    }
  })

  useEffect(() => {
    (async () => {
      const newPath = await CacheManager.get(IMAGE_URL, {}).getPath();
      setPath(newPath);
    })();
  });

  useFocusEffect(() => {
    setIsVisible(true);
  });

  return (
    <TapGestureHandler 
      onGestureEvent={onGestureEvent}
      minPointers={1}
      numberOfTaps={1}

    >
      <Animated.View style={styles.thumbail}>
        <SharedElement id={IMAGE_URL} style={{flex:1}}>
          <Image
              style={[styles.image,{opacity: isVisible ? 1 : 0}]}
              uri={IMAGE_URL}
          />
        </SharedElement>
      </Animated.View>
    </TapGestureHandler>
  );
};

export default ImageMessagePreview;
