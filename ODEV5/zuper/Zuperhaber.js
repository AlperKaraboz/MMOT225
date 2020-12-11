import React from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class NewsItem extends React.Component{

  render (){

    const konu= this.props.type;
    let arkaplan ;

    if (konu=='sağlık'){
      arkaplan = 'pink';
    } 
    else if (konu=='spor') {
      arkaplan = 'grey';
    } 
    else if (konu=='oyun') {
      arkaplan = 'blue';
    } 


    const baslik= this.props.title;
    const haber= this.props.description;

    return(
      <View style={{backgroundColor:arkaplan}}>
        <Text style={{color:'white',fontSize: 25,}}>{baslik}</Text>
        <Text style={{color:'white',fontSize: 20, padding:25,}}>{haber}</Text>
      </View>
    ) 
  }
}

