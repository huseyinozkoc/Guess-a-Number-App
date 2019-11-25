

import React, {useState} from 'react';
import {View, Text,StyleSheet,TextInput,Button,
TouchableWithoutFeedback,Keyboard,
Alert} from 'react-native';

import Card from '../Card';
import colors from '../../constants/colors';
import Input from '../Input';
import NumberContainer from '../NumberContainer';


const StartGameScreen = props => {

const [enteredValue,setEnteredValue] = useState('');
const [confirmed , setConfirmed] = useState(false);
const [selectedNumber,setSelectedNumber ] = useState();

//////////////////////////////////

const numberInputHandler = inputText => {
   setEnteredValue(inputText.replace(/[^0-9]/g,''));

};


//////////////////////////////////

const resetInputHandler = () => {
setEnteredValue('');
setConfirmed(false);
};


//////////////////////////////////

const confirmInputHandler = () => {

    const chosenNumber = parseInt(enteredValue);
    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber>99) {
     Alert.alert('Invalid Number!','Number has to be a number between 1 and 99.',[{text:'Okay',style:'destructive',onPress: resetInputHandler}])
       return;
    }

    setConfirmed(true);
    setSelectedNumber(parseInt(chosenNumber));
    setEnteredValue('');
    Keyboard.dismiss();
    
};


//////////////////////////////////

let confirmedOutput;

if (confirmed) {

    //Show All output in special place
    confirmedOutput= (

     <Card style={styles.summaryContainer} >

    <Text>  You Selected</Text>

          <View>
             <Text> {selectedNumber} </Text>
         </View>
            
        <NumberContainer> 
           
            {selectedNumber}
    
        </NumberContainer>
        <Button  title="START GAME" onPress={()=> props.onStartGame(selectedNumber)}  />
   
    </Card>

    );
}


//////////////////////////////////

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
              <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={colors.black} /></View>         
              <View style={styles.button}><Button title="Confirm" onPress={confirmInputHandler} color={colors.green}/></View>       
              
             </View>


                 </Card>
                 {confirmedOutput}
       

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
},

summaryContainer : {
marginTop:20,
alignItems:'center'

}

});

export default StartGameScreen;