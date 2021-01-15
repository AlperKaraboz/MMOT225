import React from 'react';
import {
View,
Text, 
ScrollView,
TouchableOpacity
} from 'react-native';

export default class zuper extends React.Component{
  constructor(props){
    super(props)
    this.state={
      menu:[],
      restorant:null,
      
    }
  }
  componentDidMount(){
    fetch("https://developers.zomato.com/api/v2.1/search?entity_id=84&entity_type=city",{
      method:"GET",
      headers:{
        "user-key":"11f9a42a7e5ccf21b0001e7cffb406bd"
      }
    })
    .then(r=>{
      return r.json();
    })
    .then(res=>{
      this.setState({restorant:res.restaurants});
    })
    .catch(e=>{
      console.warn("error: ", e);
    });
  }
  click(id){
    var str = "https://developers.zomato.com/api/v2.1/dailymenu?res_id="+id; 
    fetch(str,{
      method:"GET",
      headers:{
        "user-key":"11f9a42a7e5ccf21b0001e7cffb406bd"
      }
    })
    .then(r=>{
      return r.json();
    })
    .then(res=>{
      this.setState({menu:res.daily_menus});
    })
    .catch(e=>{
      console.warn("error: ", e);
    });
  }
  render(){
    if (!this.state.restorant){
      return null;
    }
    return(
      <View>
        <Text style={{flex:1,backgroundColor:"red",textAlign:"center",minHeight:40,fontSize:25 ,color:"white"}}>Restoranlar</Text>
        <ScrollView style={{flex:1,minHeight:250,backgroundColor:"grey"}} >
        {
          this.state.restorant.map(v=>{
            return(<TouchableOpacity onPress={()=>this.click(v.restaurant.id)}>
              <Text style={{fontSize:15}} key={v.restaurant.id}>{v.restaurant.name}</Text>
              </TouchableOpacity>)
          })
        }
        </ScrollView>
          <ScrollView style={{backgroundColor:"pink",minHeight:300 ,marginTop:0 }} >
            {this.state.menu.map(v=>{
              return(<Text style={{fontSize:15 ,flex:1}} key={v.daily_menu.daily_menu_id}>Yemeğin Adı:{v.daily_menu.dishes[0].dish.name}{"\n"} Fiyatı:{v.daily_menu.dishes[0].dish.price}{"\n"} Yemeğin Adı:{v.daily_menu.dishes[1].dish.name} 
                {"\n"}Fiyatı:{v.daily_menu.dishes[1].dish.price} </Text>
                        
                )
            })}
          </ScrollView>
         
        </View>
)
  }
}