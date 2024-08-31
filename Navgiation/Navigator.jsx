


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import useAuch from '../Hooks/useAuch';



const Stack = createNativeStackNavigator();

function Navigator() {
    const {user }= useAuch()
    if (user) {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }else{
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Welcome'>
                    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}} />
                    <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown:false}} />
                    <Stack.Screen name="LogIn" component={LoginScreen} options={{headerShown:false}} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
   
}

export default Navigator;
