import React, { Component, PropTypes } from 'react';
import Tweet from './Tweet';
import PayloadStates from '../constants/PayloadStates';

@lore.connect(function(getState, props){
  return {
    tweets: getState('tweet.find')
  }
})
class Feed extends Component {

  static propTypes = {
    tweets: PropTypes.object.isRequired
  };

  static defaultProps = (function() {
    const tweet = {
      id: 1,
      cid: 'c1',
      state: 'RESOLVED',
      data: {
        id: 1,
        user: 1,
        text: 'Nothing can beat science!',
        createdAt: '2016-10-04T05:10:49.382Z'
      }
    };

    return {
      tweets: {
        state: 'RESOLVED',
        data: [tweet]
      }
    }
  })();

  renderTweet(tweet) {
    return (
      <Tweet key={tweet.id} tweet={tweet} />
    );
  }

  render() {
    const tweets = this.props.tweets;

    if (tweets.state === PayloadStates.FETCHING) {
      return (
        <h1 className="loading-text">
          Loading...
        </h1>
      )
    }

    return (
      <div className="feed">
        <h2 className="title">
          Feed
        </h2>
        <ul className="media-list tweets">
          {tweets.data.map(this.renderTweet)}
        </ul>
      </div>
    );
  }

}

export default Feed;
