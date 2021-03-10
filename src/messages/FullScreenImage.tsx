import React from 'react';
import Animated from 'react-native-reanimated'
import {StyleSheet, Dimensions} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {ParameterList} from '../models/StackNavigationParameterList';

import {StackNavigationProp} from '@react-navigation/stack';
import {usePinchableImage} from './animations'
import {SharedElement} from "react-navigation-shared-element";
import {PinchGestureHandler} from "react-native-gesture-handler";

const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    height,
    width,
    resizeMode: "cover"
  },
});

interface Props {
  navigation: StackNavigationProp<ParameterList>;
  route: RouteProp<ParameterList, 'FullScreenImage'>;
}

const FullScreenImage: React.FC<Props> = ({route, navigation}) => {
  const {imageUrl} = route.params;
  const {pinchHandler, pinchAnimatedStyles} = usePinchableImage();

  return (
    <SharedElement id={imageUrl}>
      <PinchGestureHandler {...pinchHandler}>
        <Animated.Image
            source={{uri: imageUrl}}
            style={[pinchAnimatedStyles, styles.image]}
        />
      </PinchGestureHandler>
    </SharedElement>
  )
};

export default FullScreenImage;