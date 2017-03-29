import request from 'superagent'
import {apikey} from '../apikey/urbandictionary'

export function fetchPostsApi (subreddit, cb) {
  request
    .get(`http://www.reddit.com/r/${subreddit}.json`)
    .end((err, res) => {
      if (err) {
        cb(err)
        return
      }
      cb(null, res.body.data.children)
    })
}

export function fetchDefinitionApi (term, cb) {
  console.log(term)
  request
    .get('https://mashape-community-urban-dictionary.p.mashape.com/define')
    .query({term: term})
    .set('X-Mashape-Key', apikey)
    .set('Accept', 'text/plain')
    .end(function (err, res) {
      if (err || !res.ok) {
        console.error('Oh dear! An error occurred')
      } else {
        console.log(res)
        cb(null, res.body.list)
      }
    }
  )
}
