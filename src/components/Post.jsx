import React, {PropTypes} from 'react'
const Timestamp = require('react-timestamp')

const Post = (props) => (
  <div>
    <h3>{props.title}</h3>
    <div>{props.summary}</div>
    <br />
    <div><Timestamp time={props.date} format='date' includeDay /></div>
    <br />
    <br />
  </div>
)

Post.propTypes = {
  title: PropTypes.string.isRequired
}

export default Post
