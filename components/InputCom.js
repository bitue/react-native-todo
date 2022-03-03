import React, {useState} from 'react';

import {View, TextInput, Button, StyleSheet} from 'react-native'

const InputCom = ({addGoal}) => {
    const [text, setText ] =useState('')

    const handleChange =(userInput) => {
                setText(userInput) ;
                
      }
  


    return (
      
        <View style={styles.root}>
            <TextInput onChangeText={handleChange}   style={styles.textInput} placeholder='Enter the course task'></TextInput>
            <Button title='ADD' onPress={ ()=> addGoal(text)}/>
        </View>

            
   
    );
};

const styles = StyleSheet.create({
    root: {
        padding:50
      },
      textInput : {borderBottomColor:'black' , padding:10, borderBottomWidth:2, marginBottom:10},
      text: {
        padding:20 , backgroundColor:'red', margin:10, borderRadius:15 
      },
})

export default InputCom;