import React from 'react';
import { View,Text,StyleSheet} from 'react-native';


const Header = props => {


    return (

        <View style={styles.header}> 
            
            <Text style={styles.headerTitle}> Guess A Number </Text>
           
        </View>

    );


};


const styles = StyleSheet.create({

    header: {
        width:'100%',
        height:90,
        paddingTop:36,
        backgroundColor:'pink',
        alignItems:'center',
        justifyContent:'center',
        


    }, 
    headerTitle: {
        color:'black',
        fontSize:18
    }


});


export default Header;