import { View, Text,Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { HeartIcon, PlusIcon, MinusIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';


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
        <View
          className="flex-row justify-between items-center mx-4 h-20 overflow-hidden"
        >
          <Animatable.View 
          delay={180}
          animation="slideInDown"
          className="flex items-center">
            <Image source={require('../assets/calories.png')} className="h-6 w-6"/>
            <Text className="font-semibold">130 cal</Text>
          </Animatable.View>
          <Animatable.View 
          delay={280}
          animation="slideInDown"
          className="flex items-center">
            <Image source={require('../assets/clock.png')} className="h-6 w-6"/>
            <Text className="font-semibold">20 min</Text>
          </Animatable.View>
          <Animatable.View 
          delay={380}
          animation="slideInDown"
          className="flex items-center">
            <Image source={require('../assets/star.png')} className="h-6 w-6"/>
            <Text className="font-semibold">4.5</Text>
          </Animatable.View>
        </View>
        <View className="mx-4 mt-4 space-y-3 h-60">
          <Animatable.Text 
          animation="slideInUp"
          className="text-3xl font-semibold text-gray-800">About Food</Animatable.Text>
          <Animatable.Text 
          delay={180}
          animation="slideInUp"
          className="text-gray-600">{item.desc}</Animatable.Text>
        </View>
        <View className="absolute bottom-0 left-0 right-0 mb-4 mx-4" >
          <TouchableOpacity className="bg-[#556B2F] p-4 px-4 rounded-2xl">
            <Text className=" text-white text-xl font-semibold">Add to card</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}