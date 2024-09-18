import { View, Text,Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { HeartIcon } from 'react-native-heroicons/outline'

export default function FoodDetails(props) {
  let item = props.route.params;
  return (
    <View className="flex-1 bg-white">
      <Image style={{borderBottomLeftRadius:50, borderBottomRightRadius:50}} source={require('../assets/darkolivegreen.png')}
      className="h-96 w-full absolute"/>
      <SafeAreaView>
        <View className="flex-row justify-between mx-4 items-center">
          <TouchableOpacity className="bg-white rounded-2xl p-3 shadow" style={{marginTop:50}}>
            <ChevronLeftIcon size="23" stroke={50} color="#556B2F"/>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white rounded-2xl p-3 shadow" style={{marginTop:50}}>
            <HeartIcon size="23" color="#556B2F"/>
          </TouchableOpacity>
          </View>
          <View className="flex justify-center items-center">
            <Image className="h-48 w-48" source={item.image}/>
          
        </View>
      </SafeAreaView>
    </View>
  )
}