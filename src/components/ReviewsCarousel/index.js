/* https://reviewsapp123.ccbp.tech */

import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  getReview = reviewsList => {
    const {activeReviewIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      activeReviewIndex
    ]

    return (
      <div className="review-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  onLeft = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
    console.log('clicked on left')
  }

  onRight = () => {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
    console.log(`clicked on right and ${activeReviewIndex}`)
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    console.log(activeReviewIndex)

    return (
      <div className="app-container">
        <button
          data-testid="leftArrow"
          type="button"
          className="btn"
          onClick={this.onLeft}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            className="arrow"
            alt="left arrow"
          />
        </button>
        {this.getReview(reviewsList)}
        <button
          data-testid="rightArrow"
          type="button"
          className="btn"
          onClick={this.onRight}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            className="arrow"
            alt="right arrow"
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
