import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function StartPage() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-[#556B2F]">  
    
    <View className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Image
        source={require('../assets/salad4.png')}
        style={{ width: 128, height: 128 }}  
      />
    </View>

      <View className="flex-1 justify-center items-center">
        <Text className="text-white text-xl text-center leading-tight mb-4">Fast delivery at{'\n'} your doorstep</Text>
        <Text className="text-white text-sm text-center leading-tight">Home delivery and online reservation{'\n'} system for restaurants & cafe</Text>
      </View>

      <Pressable 
        className="bg-white py-2 px-6 rounded-full mb-4 self-center"
        onPress={() => navigation.navigate('Food')}
      >
        <Text className="text-green-700 text-lg">Let's Explore</Text>
      </Pressable>

    </View>
  )
}

