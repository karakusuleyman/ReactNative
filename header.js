
import {View,Text} from 'react-native';
import  React  from  'react';

const Header = (props) =>{
    const {textStyle,viewStyle}=styles;
   
    return (
  <View style={viewStyle}>
    <Text style={textStyle}>{props.HeaderText}</Text>
</View>
);

};

const styles={

viewStyle :{
backgroundColor :'#F8F8F8',
justifyContent :'center',
alignItems:'center',
height:60,
paddingTop:20,
shadowColor :'black',
shadowOffset :{width:1, height:4},
shadowOpacity:0.9,
elevation:2,
position :'relative'

},

textStyle :{
   
    fontSize:20
}

};



export default Header;

