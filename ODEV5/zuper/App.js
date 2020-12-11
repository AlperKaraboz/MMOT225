/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
 
} from 'react-native';


import NewsItem from './Zuperhaber';

const App: () => React$Node = () => {
  return (
    <SafeAreaView>
    <View><Text style={{color:'white',fontSize: 45,textAlign:'center',backgroundColor:'#F0592B',}}> Gündem </Text></View>
    <ScrollView>
    <NewsItem type='sağlık' title='Ülkemizde günün corona virüs tablosu' description='Günlük test sayımız 200.000 geçti.Vaka sayımız 32.000.'/>
    <NewsItem type='oyun' title='Cyberpunk 2077 Çıkış tarihi belli oldu' description='Çıkış tarihi 10 aralık olarak açılandı.Oyunun fiyatı ise 250TL olarak steam mağazasında yer alıyor.'/>
    <NewsItem type='sağlık' title='COVID19 Dunya Genelinde Vaka sayısı' description='Dünya Genelinde 70 Milyon vaka ve 1,6 Milyon ölüme ulaştı.'/>
    <NewsItem type='spor' title='Başakşehir sahaya çıkmadı' description='Weboya yapılan ırkçılık sonrası Başakşehir sahaya çıkmama kararı aldı.'/>
    <NewsItem type='oyun' title='Steam İndirimleri' description='Steam BlackFriday indirimleri başladı çoğu oyunda%50 den fazla  indirim başladı.'/> 
    <NewsItem type='spor' title='Haftanın Maçları' description='dsadasdasdsadas'/>
    </ScrollView>
  </SafeAreaView>
  );
};



export default App;