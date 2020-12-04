import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  
} from 'react-native';



let marmara = [
  { name: 'İstanbul', nufus:'16 Milyon',plaka:'34'},
  { name: 'Yalova', nufus:'262 Bin',plaka:'77'},
  { name: 'Tekirdağ', nufus:'1 Milyon',plaka:'59'},
  { name: 'Sakarya', nufus:'1 Milyon',plaka:'54'},
  { name: 'Kocaeli', nufus:'1,9 Milyon',plaka:'41'},
  { name: 'Kırklareli', nufus:'360 Bin',plaka:'39'},
  { name: 'Edirne', nufus:'180 Bin',plaka:'22'},
  { name: 'Çanakkale', nufus:'540 Bin',plaka:'17'},
  { name: 'Bursa', nufus:'3 Milyon',plaka:'16'},
  { name: 'Bilecik', nufus:'223 Bin',plaka:'11'},
  { name: 'Balıkesir', nufus:'1,2 Milyon',plaka:'10'},
];

let ege = [
  {name: 'İzmir', nufus:'4,4 Milyon',plaka:'35'},
  { name: 'Manisa', nufus:'1,4 Milyon',plaka:'45'},
  { name: 'Aydın', nufus:'1,1 Milyon',plaka:'09'},
  { name: 'Denizli', nufus:'1 Milyon',plaka:'20'},
  { name: 'Muğla', nufus:'983 Bin',plaka:'48'},
  { name: 'Afyonkarahisar', nufus:'725 Bin',plaka:'03'},
  { name: 'Kütahya', nufus:'577 Bin',plaka:'43'},
  { name: 'Uşak', nufus:'367 Bin',plaka:'64'},


];

let karadeniz = [
  {name: 'Karabük', nufus:'257 Bin',plaka:'78'},
  {name: 'Amasya', nufus:'337 Bin',plaka:'05'},
  {name: 'Artvin', nufus:'174 Bin',plaka:'08'},
  {name: 'Bartın', nufus:'199 Bin',plaka:'74'},
  {name: 'Bolu', nufus:'311 Bin',plaka:'14'},
  {name: 'Gümüşhane', nufus:'162 Bin',plaka:'29'},
  {name: 'Trabzon', nufus:'807 Bin',plaka:'61'},
  {name: 'Samsun', nufus:'1,3 Milyon',plaka:'55'},
  {name: 'Sinop', nufus:'219 Bin',plaka:'57'},
  {name: 'Zonguldak', nufus:'213 Bin',plaka:'67'},
  {name: 'Tokat', nufus:'612 Bin',plaka:'60'},
  {name: 'Rize', nufus:'348 Bin',plaka:'53'},
  {name: 'Ordu', nufus:'771 Bin',plaka:'52'},
  {name: 'Çorum', nufus:'536 Bin',plaka:'19'},
  {name: 'Kastamonu', nufus:'383 Bin',plaka:'37'},
  {name: 'Giresun', nufus:'453 Bin',plaka:'28'},

];

let akdeniz = [
  {name: 'Adana', nufus:'2,22 Milyon',plaka:'01'},
  {name: 'Antalya', nufus:'2,4 Milyon',plaka:'07'},
  {name: 'Burdur', nufus:'269 Bin',plaka:'15'},
  {name: 'Hatay', nufus:'1,6 Milyon',plaka:'31'},
  {name: 'Isparta', nufus:'441 Bin',plaka:'32'},
  {name: 'Osmaniye', nufus:'534 Bin',plaka:'80'},
  {name: 'Mersin', nufus:'1,6 Milyon',plaka:'33'},  



];

let icanadolu = [
  {name: 'Ankara', nufus:'5,5 Milyon',plaka:'06'},
  {name: 'Konya', nufus:'2,2 Milyon',plaka:'42'},
  {name: 'Kayseri', nufus:'1,3 Milyon',plaka:'38'},
  {name: 'Eskişehir', nufus:'871 Bin',plaka:'26'},
  {name: 'Sivas', nufus:'646 Bin',plaka:'58'},
  {name: 'Yozgat', nufus:'424 Bin',plaka:'66'},
  {name: 'Aksaray', nufus:'412 Bin',plaka:'68'},
  {name: 'Niğde ', nufus:'364 Bin',plaka:'51'},
  {name: 'Nevşehir', nufus:'298 Bin',plaka:'50'},
  {name: 'Kırıkkale', nufus:'286 Bin',plaka:'71'},
  {name: 'Karaman', nufus:'251 Bin',plaka:'70'},
  {name: 'Kırşehir', nufus:'241 Bin',plaka:'40'},
  {name: 'Çankırı', nufus:'216 Bin',plaka:'18'},



];


let doguanadolu = [
  {name: 'Van', nufus:'1,2 Milyon',plaka:'65'},
  {name: 'Malatya', nufus:'797 Bin',plaka:'44'},
  {name: 'Erzurum', nufus:'767 Bin',plaka:'25'},
  {name: 'Elazığ', nufus:'595 Bin',plaka:'23'},
  {name: 'Ağrı', nufus:'539 Bin',plaka:'04'},
  {name: 'Muş', nufus:'407 Bin',plaka:'49'},
  {name: 'Bitlis', nufus:'349 Bin',plaka:'13'},
  {name: 'Kars', nufus:'288 Bin',plaka:'36'},
  {name: 'Hakkari', nufus:'286 Bin',plaka:'30'},
  {name: 'Bingöl', nufus:'282 Bin',plaka:'12'},
  {name: 'Erzincan', nufus:'236 Bin',plaka:'24'},
  {name: 'Iğdır', nufus:'197 Bin',plaka:'76'},
  {name: 'Ardahan', nufus:'98 Bin',plaka:'75'},
  {name: 'Tunceli', nufus:'88 Bin',plaka:'62'},
  
];

let guneydoguanadolu = [
  {name: 'Gaziantep', nufus:'2 Milyon',plaka:'27'},
  {name: 'Şanlıurfa', nufus:'2 Milyon',plaka:'63'},
  {name: 'Diyarbakır', nufus:'1,7Milyon',plaka:'21'},
  {name: 'Mardin', nufus:'829 Bin',plaka:'47'},
  {name: 'Adıyaman', nufus:'624 Bin',plaka:'02'},
  {name: 'Batman', nufus:'599 Bin',plaka:'72'},
  {name: 'Şırnak', nufus:'197 Bin',plaka:'76'},
  {name: 'Siirt', nufus:'331 Bin',plaka:'56'},
  {name: 'Kilis', nufus:'142 Bin',plaka:'79'},

];

let liste = [];




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listele: liste };
  }

  Marmara() {
    this.setState({listele:marmara});
  }
  Ege() {
    this.setState({listele:ege});
  }
 Karadeniz() {
    this.setState({listele:karadeniz});
  }
  Akdeniz() {
    this.setState({listele:akdeniz});
  }
  Icanadolu() {
    this.setState({listele:icanadolu});
  }
  Doguanadolu() {
    this.setState({listele:doguanadolu});
  }
  Guneydoguanadolu() {
    this.setState({listele:guneydoguanadolu});
  }

  render(){

  return (
    <>
      
        <View style={{width: 400, height: 300, backgroundColor: 'pink',marginBottom: 270}}>
          <TouchableOpacity onPress={() => this.Marmara()}>
            <Text style = {{fontSize:25}}>Marmara Bölgesi</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.Ege()}>
            <Text style = {{fontSize:25}}>Ege Bölgesi</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.Karadeniz()}>
            <Text style = {{fontSize:25}}>Karadeniz Bölgesi</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.Akdeniz()}>
            <Text style = {{fontSize:25}}>Akdeniz Bölgesi</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.Icanadolu()}>
            <Text style = {{fontSize:25}} >İç Anadolu Bölgesi</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.Doguanadolu()}>
            <Text style = {{fontSize:25}} >Doğu Anadolu Bölgesi</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.Guneydoguanadolu()}>
            <Text style = {{fontSize:25}}>GüneyDoğuAnadolu Bölgesi</Text>
          </TouchableOpacity>
        </View>

      
        <View  style={{width:400,height: 270, backgroundColor: 'gray',marginTop:-270 }}>
          <FlatList
            data={this.state.listele}
            keyExtractor={(item) => item.plaka}
            renderItem={({item}) => (
              <ScrollView>
              <View>
                <Text style = {{fontSize:19}} >Şehir:{item.name} Nufusu:{item.nufus} Plaka:{item.plaka}</Text>
              </View>
              </ScrollView>
              )}
          />  
        </View>
      
    </>
  );
}
};


export default App;