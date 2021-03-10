import {
    useSharedValue,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    withSpring,
    runOnJS,
    interpolate,
    Extrapolate,
} from 'react-native-reanimated';
import { StackNavigationProp } from '@react-navigation/stack';
import { snapPoint } from 'react-native-redash';
import { ParameterList } from '../../models/StackNavigationParameterList';

const useFullScreenDragableImage = (
    screenHeight: number,
    navigation: StackNavigationProp<ParameterList>,
) => {
    const translateX = useSharedValue<number>(0);
    const trasnalteY = useSharedValue<number>(0);
    const isAnimationActive = useSharedValue<boolean>(false);

    const goToPreviousRoute = () => {
        navigation.navigate("ChatRoom")
    };

    const animatedImageStyles = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: translateX.value },
                { translateY: trasnalteY.value },
                {
                    scale: interpolate(
                        trasnalteY.value,
                        [0, screenHeight],
                        [1, 0.2],
                        Extrapolate.CLAMP,
                    ),
                },
            ],
            borderRadius: isAnimationActive.value ? withSpring(24) : withSpring(0),
        };
    });

    const onGestureEvent = useAnimatedGestureHandler({
        onStart: () => {
            isAnimationActive.value = true;
        },
        onActive: ({ translationX, translationY, velocityY }) => {
            trasnalteY.value = translationY;
            translateX.value = translationX;

            const endReach = snapPoint(trasnalteY.value, velocityY, [
                0,
                screenHeight,
            ]);

            const topReach = snapPoint(trasnalteY.value, velocityY, [
                0,
                screenHeight * -1
            ])

            if (endReach === screenHeight){
                runOnJS(goToPreviousRoute)();
            }

            if(topReach === (screenHeight * -1)){
                runOnJS(goToPreviousRoute)();
            }
        },
        onEnd: ({ velocityX, velocityY }) => {
            isAnimationActive.value = false;
            trasnalteY.value = withSpring(0, { velocity: velocityY });
            translateX.value = withSpring(0, { velocity: velocityX });
        },
    });

    return {
        onGestureEvent,
        animatedImageStyles,
    };
};

export default useFullScreenDragableImage;