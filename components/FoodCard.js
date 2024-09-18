import { View, Text, Image } from 'react-native'
import React from 'react'

export default function FoodCard({item}) {
  return (
    <View className="m-2 p-2 bg-white rounded-lg shadow-lg">
        <View className="flex-row justify-center">
          <Image source={item.image} 
          style={{ height: 250, width: 250 }}  
          className="rounded-lg"
           resizeMode="contain"  />
        </View>
    </View>
  )
}