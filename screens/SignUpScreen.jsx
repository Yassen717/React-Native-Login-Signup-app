import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { s } from 'react-native-wind'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'

const SingUpScreen = () => {
  const Navigation = useNavigation()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

    const HandleSubmit = async () => {
      if (email && password) {
        try {
          await createUserWithEmailAndPassword(auth,email,password)
        } catch (error) {
          console.log('Error: ', error.message)
        }
      }
    }

  return (
    <View style={[s`flex-1`, { backgroundColor: '#7b70f9' }]}>
      <SafeAreaView style={s`flex`}>
        <View style={s`flex-1 flex-row justify-start`}>
          <TouchableOpacity style={[s`p-2`]} onPress={() => Navigation.goBack('Welcome')}>
            <ArrowLeftIcon size={30} strokeWidth={2} color={'white'} />
          </TouchableOpacity>
        </View>
        <View style={s`flex-row justify-center`}>
          <Image
            source={require('../assets/images/signUp.png')}
            style={{ width: 200, height: 200, borderRadius: 10, marginTop: 50, }}
          />
        </View>
      </SafeAreaView>
      <View style={[s`flex-1 bg-white px-8 pt-8 mt-3`, { borderTopLeftRadius: 50, borderTopRightRadius: 50 }]}>
        <View style={s`form`}>
          <Text style={s`text-gray-700 ml-4`}>Full Name</Text>
          <TextInput
            style={s`bg-gray-100 rounded-xl text-gray-700 p-3 mb-3`}
            value='Ahemd'
            placeholder='Enter Your name'
          />
          <Text style={s`text-gray-700 ml-4`}>Email Adress</Text>
          <TextInput
            style={s`bg-gray-100 rounded-xl text-gray-700 p-3 mb-3`}
            value={email}
            onChangeText={value=> setEmail(value)}
            placeholder='Enter email'
          />
          <Text style={s`text-gray-700 ml-4`}>Password</Text>
          <TextInput
            style={s`bg-gray-100 rounded-xl text-gray-700 p-3 mb-5`}
            value={password}
            onChangeText={value=> setPassword(value)}
            placeholder='Enter Password'
            secureTextEntry

          />
          <TouchableOpacity style={[s`py-3 rounded-xl mt-7`, { backgroundColor: '#7b70f9' }]}>
            <Text style={s`text-white text-lg text-center `}
            onPress={HandleSubmit}
            >
              SignUp
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={s`text-xl font-bold text-gray-700 text-center py-5`}>Or</Text>
        <View style={s`flex-row  justify-center m-5 `}>
          <TouchableOpacity style={s`bg-gray-100 rounded-2xl p-2 `}>
            <Image
              style={[s`w-10 h-10`]}
              source={require("../assets/images/Google_Icons-09-512.webp")}
            />
          </TouchableOpacity>
          <View style={s`mx-10`}></View>
          <TouchableOpacity style={s`bg-gray-100 rounded-2xl p-2 `}>
            <Image
              style={[s`w-10 h-10`]}
              source={require("../assets/images/png-transparent-apple-logo-apple-logo-computer-wallpaper-silhouette.png")}
            />
          </TouchableOpacity>
          <View style={s`mx-10`}></View>
          <TouchableOpacity style={s`bg-gray-100 rounded-2xl p-2`}>
            <Image
              style={[s`w-10 h-10`]}
              source={require("../assets/images/Facebook_Logo_2023.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={s`flex-row justify-center mb-7`}>
          <Text style={s`font-semibold text-gray-500`}>Already have an account?</Text>
          <TouchableOpacity onPress={() => Navigation.navigate('LogIn')}>
            <Text style={s`font-bold text-gray-800`}>  logIn </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SingUpScreen