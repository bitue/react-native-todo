import { View, Text , StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function TouchAbleGoal({ele, all , setList}) {

  const filterGoal =(goals) => {
      setList((prev) => prev.filter(ele => ele.id !== goals))


  }
  return (
    <TouchableOpacity onPress={()=> filterGoal(ele.id)} >
      <Text style={Style.text}> id :{ele.id}  {ele.goal}</Text>
    </TouchableOpacity>
  )
}

const Style = StyleSheet.create({
    text:{
      padding:20, backgroundColor:'#4287f5', borderRadius:15, justifyContent:'center', alignItems:'center', margin:10
  
    }
  })