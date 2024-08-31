import { View, Text, StatusBar, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { s } from 'react-native-wind'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
  const Navigation = useNavigation();
  return (
    <SafeAreaView style={[s`flex-1 `, { backgroundColor: '#7b70f9' }]}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#7b70f9'} />
      <View style={s`flex-1 justify-around my-4`}>
        <Text style={s`text-white text-4xl font-bold text-center`}>Let's Get Started!</Text>
      </View>
      {/* <View style={s`flex-row justify-center mb-20`}>
        <Image
          style={{ width: 300, height: 300, borderRadius: 10, }}
          source={require('../assets/images/Welcome.png')}
        />
      </View> */}
      <View style={styles.spaceY4}>
        <TouchableOpacity style={s`py-3 mx-7 bg-amber-400 rounded-full p-4 m-9 `}
        onPress={() => Navigation.navigate('SignUp')}
        >
          <Text style={s`text-white font-bold text-xl text-center`}>SingUp</Text>
        </TouchableOpacity>
        <View style={s`flex-row justify-center mb-7`}>
          <Text style={s`font-semibold text-white`}>Already have an account?</Text>
          <TouchableOpacity onPress={() => Navigation.navigate('LogIn')}>
            <Text style={s`font-bold text-amber-300`}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  spaceY4: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});