import { View, Text, ScrollView , StyleSheet , Touchable } from 'react-native'
import React from 'react'
import TouchAbleGoal from './TouchAbleGoal'

export default function GoalCom({goal, setFuncGoal}) {
  return (
    <View>
      <ScrollView>
        {
          goal.map(ele =>   <TouchAbleGoal key={ele.id}  ele ={ele} all={goal} setList={setFuncGoal} ></TouchAbleGoal>)
        }
      </ScrollView>
       
    </View>
  )
}

