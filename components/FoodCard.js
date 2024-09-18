import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StarIcon, PlusIcon } from 'react-native-heroicons/solid'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'


export default function FoodCard({item, index}) {
  const navigation = useNavigation();
  return (
    <Animatable.View 
    delay={index*120}
    animation="slideInRight"
    className="w-56 h-64 my-5 mr-6 p-3 py-5 rounded-3xl"
    style={{ backgroundColor: 'rgba(85, 107, 47, 0.3)' }}
    >
        <View className="flex-row justify-center"
        >
          <Image source={item.image} 
          style={{ height: 100, width: 200 }}  
          className="rounded-lg"
           resizeMode="contain"  />
        </View>
        <View className="flex-1 px-7 py-2 space-y-2">
          <Text className="text-black text-xl font-medium tracking-wider">{item.name}</Text>
        </View>
        <View className="flex-row justify-between items-center px-4 py-1 space-x-4">
          <Text className="text-white text-medium font-medium tracking-wider">{item.time}</Text>
          <View className="flex-row items-center space-x-1">
            <StarIcon size={20} color="gold"/>
            <Text className="text-white text-medium font-medium tracking-wider">{item.rating}</Text>
          </View>
        </View>
        <View className="flex-row justify-between items-center px-1">
          <Text className="text-black text-xl font-bold tracking-tight">{item.price}</Text>
          <TouchableOpacity 
          onPress={()=>navigation.navigate('FoodDetails',{...item})}
          className="bg-[#556B2F] p-3 rounded-2xl">
            <PlusIcon size={24} color="white"/>
          </TouchableOpacity>
        </View>
    </Animatable.View>
  )
}  