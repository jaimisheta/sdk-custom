(function (window, t) {
    var wcU = decodeURIComponent(window.location.href)
    var wcD = new Date(Date.now()).toUTCString()
    var wcS = document.getElementsByTagName('HTML')[0].outerHTML.length
    console.log('url', wcU)
    console.log('date', wcD)
    console.log('size in kb for page', wcS)
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "version": 2,
  "url": "testing.com",
  "source": "Dubai",
  "destination": "Cairo",
  "numberOfHops": 17,
  "monthlyVisitors": 8000,
  "greenHosting": true,
  "renewableEnergyPercent": 4,
  "save": false
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:8000/sdk/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
})(this)
