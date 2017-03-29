import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts, fetchDefinition} from '../actions'

class LoadSubreddit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      subredditName: '',
      urbanDictionaryTerm: ''
    }
  }

  handleChange (e) {
    this.setState({ subredditName: e.target.value })
  }

  handleClick () {
    this.props.fetchPosts(this.state.subredditName)
  }

  updateTerm (e) {
    this.setState({ urbanDictionaryTerm: e.target.value })
  }

  defineTerm () {
    this.props.fetchDefinition(this.state.urbanDictionaryTerm)
  }

  render () {
    console.log(this.props.loading)
    return (
      <div>
        <input type='text' onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleClick.bind(this)}>Fetch Posts</button>
        {this.props.loading && <h1>Loading</h1>}
        {this.props.loadingError && <h3 id='error'>Sorry, we couldn't find this subreddit. Please try another one (or try removing the spaces between words). </h3>}
        <input type='text' onChange={this.updateTerm.bind(this)} />
        <button onClick={this.defineTerm.bind(this)}>Define term</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: (subreddit) => {
      dispatch(fetchPosts(subreddit))
    },
    fetchDefinition: (term) => {
      dispatch(fetchDefinition(term))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.subreddits.loading,
    loadingError: state.subreddits.loadingError,
    definitions: state.urbandictionary.definitions
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadSubreddit)
