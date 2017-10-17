chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
    var wordsPerMinute = 400;
    	var text = selection[0]
    	var h1 = document.body.appendChild(document.createElement('h1'));
    	var output = new Spritzer(h1);
    	output.render(text, wordsPerMinute);
});
chrome.tabs.executeScript(null, {file: "content.js"});
