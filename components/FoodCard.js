import { View, Text, Image } from 'react-native'
import React from 'react'

export default function FoodCard({item}) {
  return (
    <View>
        <View className="flex-row justify-center">
            <Image source={item.Image} className="h-32 w-32"/>
        </View>
    </View>
  )
}