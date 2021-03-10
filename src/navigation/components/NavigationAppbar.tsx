import React from 'react';
import { Appbar, useTheme } from 'react-native-paper';

import { StackNavigationProp } from '@react-navigation/stack';
import { Route } from '@react-navigation/native';
import { Scene } from '@react-navigation/stack/lib/typescript/src/types';
import ChatRoomAvatarInfo from './ChatRoomAvatarInfo';

interface Props {
    navigation: StackNavigationProp<Record<string, object | undefined>, string>;
    previous: Scene<Route<string, object | undefined>> | undefined;
    scene: Scene<Route<string, object | undefined>> | undefined;
}

const NavigationAppbar: React.FC<Props> = ({ navigation, scene, previous }) => {
    const displayMenu =
        scene?.route.name === 'ChatRoom' || scene?.route.name === 'FullScreenImage';

    const theme: ReactNativePaper.Theme = useTheme();

    const goBack = () => {
        if (navigation.canGoBack()) navigation.goBack();
    };

    return (
        <Appbar
            style={{
                backgroundColor: '#F8F8FA',
                elevation: 0,
                justifyContent: 'space-between',
            }}>
            {previous ? (
                <Appbar.Action size={25} icon={'chevron-left'} onPress={goBack} />
            ) : (
                    <Appbar.Action icon={'menu'} />
                )}

            {scene?.route.name === 'ChatRoom' ? (
                <ChatRoomAvatarInfo />
            ) : (
                    <Appbar.Content title={scene?.route.name} />
                )}

            {displayMenu && <Appbar.Action icon={'dots-vertical'} />}
        </Appbar>
    );
};

export default NavigationAppbar;
