var loadJSON = function(path, success, error){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

chrome.extension.getBackgroundPage().studyModeOnValue = false;

loadJSON("https://gist.githubusercontent.com/sri96/b7c4c12a5a64960d8ca9/raw/277e9915eba4b8ba94f8ca73507f929d6e72b696/blocklist.json",
         function(data) {
           chrome.webRequest.onBeforeRequest.addListener(
              function(details) {
                if(data[details.url] === undefined){
                  return {cancel: false};
                }else if(data[details.url] && chrome.extension.getBackgroundPage().studyModeOnValue){
                  return {redirectUrl: "http://slides.com/adhithyan15/deck/fullscreen"};
                }else{
                  return {cancel: false};
                }
              },
              {urls: ["<all_urls>"]},
              ["blocking"]);
         },
         function(xhr) { console.error(xhr); }
);
