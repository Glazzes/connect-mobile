import {useVector} from "react-native-redash";
import {vec} from 'react-native-redash/lib/module/v1';
import {useAnimatedGestureHandler, useAnimatedStyle, useSharedValue} from "react-native-reanimated";
import {PinchGestureHandlerGestureEvent} from "react-native-gesture-handler";
import {Dimensions} from "react-native";

const {width, height} = Dimensions.get("window");

const useFullScreenPinchHandler = () => {
    const gestureScale = useSharedValue(1);
    const focal = useVector(0, 0);
    const CENTER = useVector(width/2, height/2);
    const adjustedFocal = vec.sub(focal, CENTER)
    const translate = useVector(0, 0);
    const pinch = useVector(0, 0);

    const pinchHandler = useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({

    })

    const pinchAnimatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {scale: gestureScale.value},
                {translateY: translate.y.value},
                {translateX: translate.x.value}
            ]
        }
    })

    return {
        pinchHandler,
        pinchAnimatedStyles
    }
}

export default useFullScreenPinchHandler;