import {block, cond, eq, set, useCode, Value, multiply} from "react-native-reanimated";
import {State} from "react-native-gesture-handler";
import {onGestureEvent, translate, vec, pinchBegan, pinchActive} from "react-native-redash/lib/module/v1";
import {Dimensions} from "react-native";

const {width, height} = Dimensions.get("window")
const CANVAS = vec.create(width, height);
const CENTER = vec.divide(CANVAS, 2);

const usePinchableImage = () => {
    const origin = vec.createValue(0, 0);
    const pinch = vec.createValue(0, 0);
    const focal = vec.createValue(0, 0);
    const gestureScale = new Value(1);
    const scaleOffset = new Value(1);
    const scale = new Value(1);
    const offset = vec.createValue(0, 0);
    const state = new Value(State.UNDETERMINED);
    const numberOfPointers = new Value(0);

    const pinchHandler = onGestureEvent({
        numberOfPointers,
        scale: gestureScale,
        state,
        focalX: focal.x,
        focalY: focal.y,
    });

    const adjustedFocal = vec.sub(focal, vec.add(CENTER, offset));
    const translation = vec.createValue(0, 0);

    useCode(
        () =>
            block([
                cond(pinchBegan(state), vec.set(origin, adjustedFocal)),
                cond(pinchActive(state, numberOfPointers), [
                    vec.set(pinch, vec.sub(adjustedFocal, origin)),
                    vec.set(
                        translation,
                        vec.add(pinch, origin, vec.multiply(-1, gestureScale, origin))
                    ),
                ]),
                cond(eq(state, State.END), [
                    vec.set(offset, vec.add(offset, translation)),
                    set(scaleOffset, scale),
                    set(gestureScale, 1),
                    vec.set(translation, 0),
                    vec.set(focal, 0),
                    vec.set(pinch, 0),
                ]),
                set(scale, multiply(gestureScale, scaleOffset)),
            ]),
        [
            adjustedFocal,
            focal,
            gestureScale,
            numberOfPointers,
            offset,
            origin,
            pinch,
            scale,
            scaleOffset,
            state,
            translation,
        ]
    );

    const pinchAnimatedStyles = {
        transform: [
            ...translate(vec.add(translation, offset)),
            {scale}
        ]
    }

    return {
        pinchHandler,
        pinchAnimatedStyles
    }
}

export default usePinchableImage;