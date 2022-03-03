import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInputBase, View,TextInput, ScrollView, FlatList } from 'react-native';
import GoalCom from './components/GoalCom';
import InputCom from './components/InputCom';




export default function App() {

  const [listGoal, setListGoal] =useState([])
 
  const handleAddGoal =(goal) => {
    setListGoal(prev => [...prev, {id:Math.random().toString() , goal:goal}])

    console.log(listGoal)
  }
 

  return (
    <ScrollView >
      <InputCom addGoal={handleAddGoal} />
  
      <GoalCom goal={listGoal} setFuncGoal={setListGoal}/>


    </ScrollView>  
   
  );
}

const styles = StyleSheet.create({

});
