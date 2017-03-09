let Nightmare = require('nightmare');
let nightmare = Nightmare({show: true});

let url = 'http://qiita.com/popular-items';

nightmare
    .goto(url)
    .evaluate(function(){
        return Array.from(document.querySelectorAll(".popularItem_articleTitle_text"),  e => {return e.href;})
    })
    .end()
    .then(function (result) {
        console.log('result', result)
    })
    .catch(function (error) {
        console.error('Search failed:', error);
    });
