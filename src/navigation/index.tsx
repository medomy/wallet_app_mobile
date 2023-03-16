import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/home';
import LoginScreen from '../screens/login';
import SendScreen from '../screens/send';
import { NavigationContainer } from '@react-navigation/native';
import { useInitProgram } from '../hooks/useInitProgram';
import { useSelector } from 'react-redux';
import { RootState } from '../store';


const NavigationStack = createNativeStackNavigator();
const Navigation = () => {
    useInitProgram();
    const isSigned = useSelector((state: RootState) => state.user.isSigned);
    return (
        <NavigationContainer>
            <NavigationStack.Navigator initialRouteName={isSigned ? 'Home' : 'Login'} screenOptions={({ }) => (
                {
                    headerShown: false
                }
            )}>
                <NavigationStack.Screen name='Home' component={HomeScreen} />
                {!isSigned && <NavigationStack.Screen name='Login' component={LoginScreen} />}
                <NavigationStack.Screen name='Send' component={SendScreen} />
            </NavigationStack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({})