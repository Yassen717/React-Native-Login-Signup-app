import { View, Text, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import {s} from 'react-native-wind'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'
const HomeScreen = () => {
  const handleLogut = async () => {
    await signOut(auth)
  }
  return (
    <SafeAreaView style={s`flex-1 flex-row items-center justify-center`}>
      <StatusBar backgroundColor={'#f2f2f2'} barStyle={'dark-content'}/>
      <Text style={s`text-lg`}>Home Page -</Text>
      <TouchableOpacity onPress={handleLogut} style={s`p-1 bg-red-400 rounded-lg`}>
        <Text style={s`text-white font-bold text-lg`}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default HomeScreen