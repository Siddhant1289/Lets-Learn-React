import React from 'react'

import PropTypes from 'prop-types'

import './testimonial-card1.css'

const TestimonialCard1 = (props) => {
  return (
    <div
      className={`testimonial-card1-testimonial-card ${props.rootClassName} `}
    >
      <div className="testimonial-card1-testimonial">
        <span className="testimonial-card1-text">{props.quote}</span>
        <span className="testimonial-card1-text1">{props.name}</span>
        <img
          alt={props.picture_alt}
          src={props.picture_src}
          className="testimonial-card1-image"
        />
      </div>
    </div>
  )
}

TestimonialCard1.defaultProps = {
  rootClassName: '',
  role: '',
  quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In',
  picture_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
  picture_alt: 'profile',
  name: 'Jane Doe',
}

TestimonialCard1.propTypes = {
  rootClassName: PropTypes.string,
  role: PropTypes.string,
  quote: PropTypes.string,
  picture_src: PropTypes.string,
  picture_alt: PropTypes.string,
  name: PropTypes.string,
}

export default TestimonialCard1
