import React from 'react';
import {Text,TouchableOpacity} from 'react-native';


const Button=({onPress,children})=>{

    const {ButtonStyle,TextStyle}=style;
return(
<TouchableOpacity onPress={ onPress }style={ButtonStyle}>
 <Text style={TextStyle}> 
 {children}
</Text>

</TouchableOpacity>
);
};

style={
     ButtonStyle:{
        marginLeft:5,
        marginRight:5,
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#007aaf'
     },
     TextStyle:{
        alignSelf:'center',
        fontSize:16,
        color:'#007aaf',
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10

     }

}


export default Button;