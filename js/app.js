const url = "http://localhost:3000/";

const getTweets = () => {
  axios
    .get(url + "tweets")
    .then(({ data }) => {
      let tweetList = document.querySelector("#tweetList");
      data
        .sort((a, b) => b.timestamp - a.timestamp)
        .forEach(tweet => {
          let html = `
      <li class="tweet">
        <span class="tweet__author">${tweet.author}</span>
        <p class="tweet__body">${tweet.body}</p>
      </li>
    `;

          tweetList.insertAdjacentHTML("beforeend", html);
        });
    })
    .catch(error => console.log(error));
};

getTweets();

let tweetForm = document.querySelector("#tweetForm");
let tweetBody = document.querySelector("#tweetBody");

tweetForm.addEventListener("submit", event => {
  event.preventDefault();

  let body = event.target.elements.tweetBody.value;
  let author = "Me"; //change this
  let timestamp = Date.now();

  axios
    .post(url + "tweets", {
      body,
      author,
      timestamp
    })
    .then(({ data }) => console.log(data))
    .catch(error => console.log(error));
});
