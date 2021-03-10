import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

import {StackNavigationProp} from '@react-navigation/stack';
import {ParameterList} from '../models/StackNavigationParameterList';
import Animated, {
  Easing,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';

import Animation from 'lottie-react-native'

interface Props {
  navigation: StackNavigationProp<ParameterList>;
}

const {width, height} = Dimensions.get('window');

const TestingGround: React.FC<Props> = ({navigation}) => {
  const top = useSharedValue(height);

  const styles = useAnimatedStyle(() => {
    return {
      width,
      height: height,
      position: 'absolute',
      top: top.value,
      backgroundColor: 'orange',
      borderRadius: 30,
    };
  });

  const close = () => {
    'worklet';
    top.value = withTiming(height, {duration: 200});
  };

  const move = () => {
    'worklet';
    top.value = withSpring(height / 3);
  };

  const hanlder = useAnimatedGestureHandler({
    onStart: (_, context:any) => {
      context.originalPosition = top.value;
    },
    onActive: ({translationY}, context) => {
      top.value = -context.originalPosition + (translationY - height)
    },
    onEnd: () => {},
  });

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: "center"}}>
      {/*
        <Button mode={'contained'} onPress={move}>
        Open bottom sheet
      </Button>
      <Button mode={'contained'} onPress={close}>
        Close
      </Button>

      <PanGestureHandler onGestureEvent={hanlder}>
        <Animated.View style={styles} />
      </PanGestureHandler>
      */}
      <Animation 
        style={{height: 200, width: 200}}
        source={require("../assets/lottie/checmark-success.json")}
        autoPlay
        loop
        resizeMode={"cover"}
      />
    </View>
  );
};

export default TestingGround;