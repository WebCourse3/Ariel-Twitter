const tweets = [
    { username: 'Bobo', text: 'hello followers!' },
    { username: 'Elvis', text: 'this exercise is really easy!' },
    { username: 'Mimi', text: 'I want to go to sleep' }
];

function tweet(text) {
    const tweet = {
        text,
        username: 'Ariel',
    }
    tweets.push(tweet);
    clearTweetText();
    loadTweets();
}

function clearTweetText() {
    document.getElementById('tweet-text').value = '';
}

function createTweetElement(tweet) {
    const tweetElement = document.createElement('div');
    tweetElement.setAttribute('class', 'tweet');
    const tweetAvatar = document.createElement('div');
    tweetAvatar.setAttribute('class', 'tweeter-avatar');
    const tweetAvatarImage = document.createElement('img');
    tweetAvatarImage.setAttribute('src', 'images/avatar.png');
    tweetAvatarImage.setAttribute('alt', 'avatar');
    tweetAvatarImage.setAttribute('class', 'avatar');
    tweetAvatar.appendChild(tweetAvatarImage);
    const tweetUserName = document.createElement('div');
    tweetUserName.setAttribute('class', 'tweeter-username');
    tweetUserName.innerText = tweet.username;
    const tweetText = document.createElement('div');
    tweetText.setAttribute('class', 'tweet-text');
    tweetText.innerText = tweet.text;
    tweetElement.appendChild(tweetAvatar);
    tweetElement.appendChild(tweetUserName);
    tweetElement.appendChild(tweetText);
    return tweetElement;
}

function loadTweets() {
    document.getElementById('tweets-section').innerHTML = '';
    for (const tweet of tweets) {
        const element = createTweetElement(tweet);
        document.getElementById('tweets-section').appendChild(element);
    }
}

window.onload = loadTweets;