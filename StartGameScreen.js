

import React, {useState} from 'react';
import {View, Text,StyleSheet,TextInput,Button,
TouchableWithoutFeedback,Keyboard} from 'react-native';

import Card from '../Card';
import colors from '../../constants/colors';
import Input from '../Input';


const StartGameScreen = props => {

const [enteredValue,setEnteredValue] = useState('');

const numberInputHandler = inputText => {
   setEnteredValue(inputText.replace(/[^0-9]/g,''));

};


return(

     <TouchableWithoutFeedback onPress={()=>{
         Keyboard.dismiss();
     }}>
    <View style={styles.screen}>

        <Text style={styles.title}> Start a New Game! </Text>

            <Card style={styles.inputContainer}> 

           <Text> Select A Number </Text> 
            
            <Input style={ styles.input}
              blurOnSubmit
              autoCapitalize='none'
              keyboardType="numeric"
              maxLength={2}
              onChangeText={numberInputHandler}
               value={enteredValue} />


            <View style = {styles.buttonContainer}> 
              <View style={styles.button}><Button title="Reset" onPress={() =>{}} color={colors.black} /></View>         
              <View style={styles.button}><Button title="Confirm" onPress={() =>{}} color={colors.green}/></View>       
              
             </View>


                 </Card>
       

     </View> 
     </TouchableWithoutFeedback>

);

};


const styles = StyleSheet.create({

screen: {
    flex:1,
    padding:10,
    alignItems:'center',
    
},

title: {

    fontSize:20,
    marginVertical:10,
},


buttonContainer: {
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between',
    paddingHorizontal:15
    

},
inputContainer: {
    
    width:300,
    maxWidth:'80%',
    alignItems:'center',

},
button: {
width:110,
}, 
input: {
width:200,
textAlign:"center",



}

});

export default StartGameScreen;