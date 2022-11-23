(function (window, t) {
    var wcU = decodeURIComponent(window.location.href)
    var wcD = Date.now()
    var wcS = document.getElementsByTagName('HTML')[0].outerHTML.length
    console.log('url', wcU)
    console.log('date', wcD)
    console.log('size', wcS)
})(this)
