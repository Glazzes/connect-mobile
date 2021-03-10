import React from 'react'
import {Appbar, useTheme} from 'react-native-paper'
import { ParameterList } from '../../models/StackNavigationParameterList';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import createAppbarForMediaStyles from './styles/AppbarForMediaStyles'

interface Props{
    navigation: StackNavigationProp<ParameterList>,
    imageName: string;
}

const AppbarForMedia: React.FC<Props> = ({navigation, imageName}) => {
    const theme = useTheme();
    const styles = createAppbarForMediaStyles(theme);

    const goBack = () => {
        if(navigation.canGoBack()) navigation.goBack()
    }

    return (
       <Appbar.Header style={styles.appbar} >
           <Appbar.Action icon={"chevron-left"} onPress={goBack}/>
           <Appbar.Content title={imageName} subtitle={"Some subtitle"} />
           <Appbar.Action icon={"dots-vertical"} />
       </Appbar.Header>
    )
}

export default AppbarForMedia