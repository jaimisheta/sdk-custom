(function (window, t) {
    var wcU = decodeURIComponent(window.location.href)
    var wcD = new Date(Date.now()).toDateString()
    var wcS = document.getElementsByTagName('HTML')[0].outerHTML.length
    console.log('url', wcU)
    console.log('date', wcD)
    console.log('size in kb', wcS)
})(this)
