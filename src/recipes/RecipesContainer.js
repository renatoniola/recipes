import React, { PureComponent } from 'react'
import Title from '../components/Title'
import RecipeItem from './RecipeItem'

class RecipesContainer extends PureComponent {

  renderRecipe = (recipe, index) => {

    return <RecipeItem key={index}  { ...recipe } onChangeLike={this.changeLike} />

  }
  changeLike = (id) => {
    console.log(id);
    this.props.onChange(id);
  }
  render() {
    return(
      <div className="recipes wrapper">
        <header>
          <Title content="Recipes" />
        </header>

        <main>
          { this.props.recipes.map(this.renderRecipe.bind(this)) }
        </main>
      </div>
    )
  }
}

export default RecipesContainer
