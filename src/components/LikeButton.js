import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './LikeButton.css'
import HeartGrey from '../images/heart-grey.svg'
import HeartRed from '../images/heart-red.svg'

class LikeButton extends PureComponent {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    liked: PropTypes.bool.isRequired,
  }

  toggleLike = () =>  {
    this.props.onChange()
  }

  classNames() {
    const { liked } = this.props
    let classes = 'like'

    if (liked) { classes += ' liked' }

    return classes
  }

  render() {
    const { liked } = this.props
    return (
      <p className={ this.classNames() }>
        <button onClick={ this.toggleLike }>
          <img alt="hearth" className="heart" src={ liked ? HeartRed : HeartGrey } />
          <span className="copy">
            <img alt="hearth" className="heart" src={ liked ? HeartRed : HeartGrey } />
          </span>
        </button>
        <span className="likes">{ liked ? 'You like this' : null }</span>
      </p>
    )
  }
}

export default LikeButton
