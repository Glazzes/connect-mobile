import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets } from '@react-navigation/stack';
import { ParameterList } from '../models/StackNavigationParameterList';

// components
import { FullScreenImage } from '../messages';

import NavigationAppbar from './components/NavigationAppbar';
import { BasicTextMessage } from '../messages';
import { ChatRoom, Testingground } from '../views';
import FriendRow from '../views/friendList/FriendRow';

const Stack = createSharedElementStackNavigator<ParameterList>();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={'TestingGround'}
                headerMode={"screen"}
                screenOptions={{
                    cardStyle: { backgroundColor: 'white' },
                    header: ({ previous, navigation, scene }) => (
                        <NavigationAppbar {...{ previous, navigation, scene }} />
                    ),
                    gestureEnabled: false,
                }}
                >
                    
                <Stack.Screen name={'TestingGround'} component={Testingground} />
                <Stack.Screen name={'Message'} component={BasicTextMessage} />

                <Stack.Screen
                    name={'ChatRoom'}
                    component={ChatRoom}
                    options={{
                        ...TransitionPresets.SlideFromRightIOS,
                        cardStyle: { backgroundColor: 'transparent' },
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name={'FullScreenImage'}
                    component={FullScreenImage}
                    sharedElementsConfig={(route) => {
                        return [route.params.imageUrl];
                    }}
                    options={{
                        headerShown: false,
                        cardStyle: {backgroundColor: "rgba(0,0,0,0.05)"}
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;
