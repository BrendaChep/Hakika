import React from 'react';
import { 
    StyleSheet, 
    View,
} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import {
  createStackNavigator,
} from 'react-navigation';

import Screen1 from './app/components/screen1/Screen1';

const StackNavigator = createStackNavigator({
    Screen1: { 
        screen: Screen1,
        navigationOptions: {
            title: false,
            header: null,
        }
    },
},{ headerMode: 'screen' });

export default class App extends React.Component {
    render() {
        return (
		  <PaperProvider>
            <View style={styles.container}>
                <StackNavigator />
            </View>
		 </PaperProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});