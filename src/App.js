// src/App.js
import React, { PureComponent } from 'react'
import RecipesContainer from './recipes/RecipesContainer'
import './App.css';

const recipes = [
  {
    _id: 'abcd123',
    title: 'Spanish Omelette',
    summary: 'A traditional dish from Spanish cuisine called tortilla española or tortilla de patatas. It is an omelette made with eggs and potatoes, sometimes also with onion and/or chives or garlic; fried in oil and often served cold as an appetizer.',
    vegan: false,
    vegetarian: true,
    pescatarian: false,
    photo: 'http://cd.sseu.re/spanish-omelette.jpg',
    liked: false,
  },
  {
    _id: 'abcd124',
    title: 'Paella',
    summary: 'This is the dramatic seafood paella that looks stunning, with crustaceans and shellfish. You can vary the quantities of seafood and also use crab, crayfish, etc.',
    vegan: false,
    vegetarian: false,
    pescatarian: true,
    photo: 'http://cd.sseu.re/mixed-seafood-paella.jpeg',
    liked: true,
  },
  {
    _id: 'abcd125',
    title: 'Spare ribs',
    summary: 'Spare ribs are a variety of pork ribs cooked and eaten in various cuisines around the world. They are cut from the lower portion of the pig specifically the belly and breastbone, behind the shoulder, and include 11 to 13 long bones.',
    vegan: false,
    vegetarian: false,
    pescatarian: false,
    photo: 'http://cd.sseu.re/spare-bbq2.jpg',
    liked: false,
  },
  {
    _id: 'abcd126',
    title: 'Agedashi Tofu',
    summary: 'Agedashi Tofu is one of those magical dishes where a few simple ingredients come together in a harmonizing synergy that elevates the dish from humble to divine. It is made with blocks of soft tofu that are coated in a thin layer of potato starch before being lightly fried.',
    vegan: true,
    vegetarian: true,
    pescatarian: false,
    photo: 'http://cd.sseu.re/agedashi-tofu.jpg',
    liked: true,
  },
]

class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      recipes: recipes
    }
  }
  onChange(id){
    this.setState({
      recipes : this.state.recipes.map( (item) => {

        if(item._id === id) {

           return { ...item , liked : !item.liked }
        }else{
           return { ...item }
        }

      })
    })

  }
  render() {
     const { recipes } = this.state

     return (
       <div className="app">
         <RecipesContainer recipes={ recipes } onChange={this.onChange.bind(this)}/>
       </div>
     )
   }
}

export default App
