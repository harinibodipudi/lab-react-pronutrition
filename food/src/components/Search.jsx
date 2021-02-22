import React, { Component } from 'react'
import FoodBox from './FoodBox'
import Fuse from "fuse.js";
export default class Search extends Component {
  state={
    names:[{name :"pizza",
    cal : "400",
    img : "https://i.imgur.com/eTmWoAN.png"},
    {name :"orange",
    cal : "200",
    img : "https://img.icons8.com/cotton/2x/orange.png"},
    {name : "Apple",
    cal : "100",
    img : "https://st.depositphotos.com/2046901/4507/v/380/depositphotos_45075345-stock-illustration-red-apple-icon.jpg"}],
    searchTerm:'',
    items:[],
  }
   editSerachTerm= (e)=>{
this.setState({searchTerm: e.target.value})
   }
   searchfoodItem=()=>{
      this.state.names.map(fruitname=>{
       if(fruitname.name==(this.state.searchTerm)){
       <FoodBox name={fruitname.name} cal={fruitname.cal} img={fruitname.img}/>
     }
    });
   }

    render() {
      return (
        <div>
          <form>
                <input type="text" placeholder="Search" onChange={(event)=>this.editSerachTerm(event)} placeholder="type to search"/>
          </form>
          
          {this.searchfoodItem()}
          
        </div>
      );
    }
}

