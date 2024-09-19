import { View, Text,Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { HeartIcon, PlusIcon, MinusIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native';

export default function FoodDetails(props) {
  let item = props.route.params;
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white">
      <Image style={{borderBottomLeftRadius:50, borderBottomRightRadius:50}} source={require('../assets/darkolivegreen.png')}
      className="h-96 w-full absolute"/>
      <SafeAreaView>
        <View className="flex-row justify-between mx-4 items-center">
          <TouchableOpacity onPress={() => navigation.goBack()} className="bg-white rounded-2xl p-3 shadow" style={{marginTop:50}}>
            <ChevronLeftIcon size="23" stroke={50} color="#556B2F"/>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white rounded-2xl p-3 shadow" style={{marginTop:50}}>
            <HeartIcon size="23" color="#556B2F"/>
          </TouchableOpacity>
          </View>
          <View className="flex justify-center items-center">
            <Image className="h-48 w-48" source={item.image}/>
            <Text className="text-black text-xl font-bold mt-4 self-start mx-4 ">{item.name}</Text>
        </View>

        <View className="flex-row justify-between items-center">
         <Text className="text-white text-xl font-bold mt-1 self-start mx-4">{item.price}</Text>
         <View className="flex-row items-center rounded-2xl p-2 bg-[#006400]">
         <TouchableOpacity className="bg-[#006400] rounded-2xl p-2 mx-1">
          <PlusIcon size={24} color="white"/>
         </TouchableOpacity>
         <Text className="text-white text-xl font-bold">1</Text>
          <TouchableOpacity className="bg-[#006400] rounded-2xl p-2 mx-1">
            <MinusIcon size={24} color="white"/>
          </TouchableOpacity>
         </View>

        </View>
      </SafeAreaView>
    </View>
  )
}