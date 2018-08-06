import React from 'react';
import {Text,View,Image,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection'
import Button from './Button';


const AlbumDetail=({album})=>{

  const{thumbnail_image,title,artist,image,url}=album;
  const{thumbnailImageStyle,TextStyle,headerTextStyle,thumbnailContainerStyle,imageStyle}=styles;
return(

<Card>
    <CardSection>
        <View style={thumbnailContainerStyle}>

        <Image source={ {uri:thumbnail_image}}
               style={thumbnailImageStyle}
        />    
        </View>   
        <View style={TextStyle}>
    
    <Text style={headerTextStyle}>{title }</Text>
    <Text>{artist}</Text>
    
    </View>
    </CardSection>
    <CardSection>
        <Image source = {{uri:image}}
               style = {imageStyle}         
        />
    </CardSection>
    <CardSection>
     <Button  onPress={()=>Linking.openURL(url)}  >
    
    Buy Now
     </Button>
    </CardSection>
</Card>);
}

const styles={
    TextStyle:{
         flexDirection :'column',
         justifyContent :'space-around'
    },
    thumbnailImageStyle:{
        height:50,
        width:50
    },
    headerTextStyle:{
        fontSize:20
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },
    imageStyle:{
        height:300,
        flex:1,
        width:null


    }
    

}

export default AlbumDetail;