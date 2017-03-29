import request from 'superagent'

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

export function UrbanDictionApi (term, cb) {
  const url = `https://mashape-community-urban-dictionary.p.mashape.com/define?term=${term}`
  .get(url)
      .set("X-Mashape-Key", "")
      .set("Accept", "text/plain")
      .end(function (err, res) {
        if (err || !res.ok) {
          alert('Oh dear! An error occurred')
        } else {
          callback(null, res.body)

}
