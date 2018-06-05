const app = "I don't do much.";
const token = '6f7d718125a001255edf6e2b2f1685ec6f11f4c7'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
