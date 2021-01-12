import React from 'react';
import {FlatList,
     Text, 
     View, 
     ScrollView,
     TouchableOpacity
    } from 'react-native';
export default class ZUP extends React.Component{
    constructor(props){
        super(props);
        this.state={
        listele:[],
        }
    }
    componentDidMount = async ()=>{
        let liste =  await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(r=>r.json());
        
            this.setState({listele:liste})
    };
    handlePress = id =>{
        this.setState({getir:id})
    }
    listem(){
        let render=[];
        this.state.listele.map((v,k)=>{

            if(v.id===this.state.getir){
               render.push(
               <Text style={{minHeight:75, fontSize:17,  marginTop:15}}>
              <Text style={{ color:'pink',fontSize:21}}>Id:</Text> {v.id}
               <Text style={{  color:'pink',fontSize:21}}>{"\n"}Title:</Text>{v.title}
               <Text style={{ color:'pink',fontSize:21,}}>{"\n"}Body:</Text>{v.body}</Text>
               )
            }
        }
        )
        return render
    }
    render(){
        return(
        <View style={{flex:1}}>
            <FlatList style = {{flex:1,minHeight:250,backgroundColor: 'grey'}}
                let data = {this.state.listele}
                
                renderItem={({item})=>{
                    return(
                       <TouchableOpacity onPress={()=>this.handlePress(item.id)} style={{ minHeight: 20, backgroundColor: 'pink',textAlign:'center',}}>
                           <Text style={{color:'black', backgroundColor:'pink',fontSize:21,textAlign:'center'}}>{item.id}</Text>
                       </TouchableOpacity> 
                    )
                }
                }
                />
             <ScrollView style={{flex:1,minHeight:350,backgroundColor:'grey'}}>
                {this.listem()}
                </ScrollView>
            
        </View>
        )
    }
}