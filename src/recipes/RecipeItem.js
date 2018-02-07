import React, { PureComponent } from 'react'
import LikeButton from '../components/LikeButton'
import PropTypes from 'prop-types'
import Pescatarian from '../images/pescatarian.svg'
import Vegan from '../images/vegan.svg'
import Vegetarian from '../images/vegetarian.svg'
class RecipeItem extends PureComponent {

  static propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    vegan: PropTypes.bool,
    vegetarian: PropTypes.bool,
    pescatarian: PropTypes.bool,
    _id:PropTypes.string.isRequired,
    onChangeLike: PropTypes.func.isRequired,

  }
  change = () => {
    this.props.onChangeLike(this.props._id);
  }
  render() {


    const { title, summary, vegan, vegetarian, pescatarian ,liked } = this.props

    return(
      <article className="recipe">
        <h1>{ title }</h1>
        <div>
          <p>{ summary }</p>
          <ul>
            { vegan && <li><img src={Vegan} alt="vegan" /></li> }
            { !vegan && vegetarian && <li><img src={Vegetarian} alt="vegetarian" /></li> }
            { pescatarian && <li><img src={Pescatarian} alt="pescatarian" /></li> }
          </ul>
        </div>
        <LikeButton onChange={this.change} liked={liked} />
      </article>
    )
  }
}

export default RecipeItem
