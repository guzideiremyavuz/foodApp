import { View, Text , Image, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { AdjustmentsHorizontalIcon, Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/solid";
import { categories, foodItems } from '../constants';
import * as Animatable from 'react-native-animatable';
import FoodCard from '../components/FoodCard';

export default function FoodPage() {
  const [activeCategory, setActiveCategory] = useState('Food')
  return (
    
    <View className="flex-1 bg-white">
      {/*tepedeki butonlar*/}
      <View className="flex-row justify-between items center mx-4 mt-8">
        <View className="bg-[#556B2F] rounded-2xl p-3">
           <Bars3CenterLeftIcon size={25} strokeWidth={100} color="black"/>
        </View>
        <View className="flex-row justify-between items center mx-4 mt-2">
          <Text className="bg-[#556B2F] rounded-2xl p-3">location</Text>
        </View>
        <View className="rounded-2xl"style={{backgroundColor:'black',padding:2}}>
          <Image className="h-12 w-12 rounded-2xl" source={require('../assets/avatar.png')} style={{backgroundColor:"#556B2F"}}/>
        </View>
      </View>
      <View>
        {/*search kısmı*/}
        <Text className="text-[#556B2F] text-2xl font-bold mx-4 mt-4">Hi Rinku</Text>
      </View>
      <View>
        <Text className="text-black text-3xl font-bold mx-4">Find your food</Text>
      </View>
      <View className="mx-4 flex-row space-x-0 ">
      <View className="flex-row flex-1 p-4 rounded-2xl "style={{backgroundColor:'rgba(85, 107, 47, 0.5)'}}>
        <MagnifyingGlassIcon stroke={40} color="darkgreen"/>
        <TextInput placeholder='Food' value="Search Food" style={{marginLeft:8, color:'darkgreen',fontSize:16,fontWeight:'500'}}/>
      </View>
      <View className="rounded-2xl p-4" style={{backgroundColor:'rgba(85, 107, 47, 0.5)'}}>
        <AdjustmentsHorizontalIcon size={25} stroke={40} color="darkgreen"/>
      </View>

      </View>
      {/*kategori*/}
      <ScrollView
      className="my-3 py-3 max-h-20"
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal:20}}
      >
        {
          categories.map((category, index)=>{
            let isActive = category == activeCategory;
            let textClass = isActive? 'font-bold':'';
            return(
              <Animatable.View
              delay={index*128}
              animation="slideInDown"
              key={index}>
                <TouchableOpacity
                  className="mr-10"
                  onPress={()=> setActiveCategory(category)}>
                  <Text className={"text-[#006400] text-base tracking-widest" +textClass} >
                    {category}
                  </Text>
                </TouchableOpacity>
              </Animatable.View>
            )
          })
        }
      </ScrollView>
      {/*Yemek kutuları*/}
      <ScrollView
      contentContainerStyle={{paddingHorizontal:20}}
      horizontal showsHorizontalScrollIndicator={false}
      >
        {
          foodItems.map((item, index)=> <FoodCard item={item} key={index}/>)
        }

      </ScrollView>
    </View>
  )
}

