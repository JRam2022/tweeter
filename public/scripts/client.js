/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  
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
            <p class="tweet-date">${timeago.format(tweet.created_at)}</p>
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
  let tweetStr = ``
  // loops through tweets
  for (const tweet of tweets) {
    // calls createTweetElement for each tweet
    const $newTweet = createTweetElement(tweet)
    // takes return value and appends it to a temp string
    tweetStr+=$newTweet
  }
  return tweetStr;
  };

  const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET'})
    .then((data) => {
      const renderTweet = renderTweets(data)
      $('#tweets-container').append(renderTweet);
    })
  }
  
  

  $('.tweet-form').submit(function (event){
    event.preventDefault();
    
    const textCount = $(".counter").text()
    if (textCount >= 140 || textCount < 0) {
      alert('ERROR')
      return;
    }
    const serialized = $(this).serialize()
    $.ajax({
      url: '/tweets',
      method: 'post',
      data: serialized,
      complete: loadTweets()
    })
    .catch((error) => {
      console.log("error", error)
    });
    
  })
  loadTweets()
  //res.redirect('/tweet')
});

