/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  
  //const tweetData = {
  //  "user": {
  //    "name": "Newton",
  //    "avatars": "https://i.imgur.com/73hZDYK.png",
  //      "handle": "@SirIsaac"
  //    },
  //  "content": {
  //      "text": "If I have seen further it is by standing on the shoulders of giants"
  //    },
  //  "created_at": 1461116232227
  //}

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]
  
  const createTweetElement = function(tweet) {
    const $tweet = `
      <article class="tweet-card">
          <div class="tweet-header">
            <div class ="user-info">
              <img class="user-img" src=${tweet.user.avatars}> 
              <p class="user-name">${tweet.user.name}</p>
            </div>
            <p class="user-handle">${tweet.user.handle}e</p>
          </div>
            <p class="user-tweet">
              ${tweet.content.text}
            </p>
          <div class="tweet-footer">
            <p class="tweet-date">${tweet.created_at}</p>
            <div class="footer-icon">
              <i class="fa-solid fa-flag"></i>
              <i class="fa-solid fa-retweet"></i>
              <i class="fa-solid fa-heart-circle-check"></i>
            </div>
          <div>
        </article>
    `
    return $tweet;
  };


  const renderTweets = function(tweets) {
    console.log(tweets)
  // loops through tweets
  for (const tweet of tweets) {
    // calls createTweetElement for each tweet
    const $newTweet = createTweetElement(tweet)
    // takes return value and appends it to the tweets container
    $('#tweets-container').append($newTweet);
  }

  };
  
  //const $tweet = createTweetElement(tweetData);
  //
  //console.log($tweet);
  renderTweets(data);
});