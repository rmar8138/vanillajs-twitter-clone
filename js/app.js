const url = "http://localhost:3000/";
let tweets = axios
  .get(url + "tweets")
  .then(({ data }) => {
    let tweetList = document.querySelector("#tweetList");
    data.forEach(tweet => {
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
