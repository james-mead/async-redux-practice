import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class LoadSubreddit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      subredditName: ''
    }
  }

  handleChange (e) {
    this.setState({ subredditName: e.target.value })
  }

  handleClick () {
    this.props.fetchPosts(this.state.subredditName)
  }

  render () {
    console.log(this.props.loading)
    return (
      <div>
        <input type='text' onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleClick.bind(this)}>Fetch Posts</button>
        {this.props.loading && <h1>Loading</h1>}
        {this.props.loadingError && <h3 id='error'>Sorry, we couldn't find this subreddit. Please try another one (or try removing the spaces between words). </h3>}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: (subreddit) => {
      dispatch(fetchPosts(subreddit))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.subreddits.loading,
    loadingError: state.subreddits.loadingError
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadSubreddit)
