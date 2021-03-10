import { StackNavigationProp } from '@react-navigation/stack';
import {
    runOnJS,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import { snapPoint } from 'react-native-redash';
import { ParameterList } from '../../models/StackNavigationParameterList';

const useChatRoomSwipe = (
    screenWidth: number,
    navigation: StackNavigationProp<ParameterList>,
) => {
    const translateX = useSharedValue<number>(0);

    const goBack = () => {
        if (navigation.canGoBack()) navigation.goBack();
    };

    const gestureHanlder = useAnimatedGestureHandler({
        onActive: ({ translationX, translationY ,velocityX }) => {
            translateX.value = translationX > 0 ? translationX : 0;

            const willGoBack = snapPoint(translateX.value, velocityX, [
                0,
                screenWidth,
            ]);
            
            if(willGoBack === screenWidth){
                runOnJS(goBack)()
            }
        }, 
        onEnd: ({ velocityX }) => {
            translateX.value = withSpring(0, { velocity: velocityX });
        },
    });

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }],
        };
    });

    return {
        goBack,
        gestureHanlder,
        animatedStyles,
    };
};

export default useChatRoomSwipe;