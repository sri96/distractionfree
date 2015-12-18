chrome.storage.sync.get("studyModeOn", function(result){
  var studyModeOnValue = true;
  if(result !== {}){
    studyModeOnValue = !result.studyModeOn;
  }
  chrome.extension.getBackgroundPage().studyModeOnValue = studyModeOnValue;
  if(studyModeOnValue){
    $("#studyModeToggle").removeClass("btn-success");
    $("#studyModeToggle").addClass("btn-primary");
    $("#studyModeToggle").text("Turn Study Mode Off");
  }else{
    $("#studyModeToggle").removeClass("btn-primary");
    $("#studyModeToggle").addClass("btn-success");
    $("#studyModeToggle").text("Turn Study Mode On");
  }
});

$(document).ready(function(){
  $("#studyModeToggle").click(function(){
    chrome.storage.sync.get("studyModeOn", function(result){
      var studyModeOnValue = true;
      if(result !== {}){
        studyModeOnValue = !result.studyModeOn;
      }
      chrome.extension.getBackgroundPage().studyModeOnValue = !studyModeOnValue;
      chrome.storage.sync.set({'studyModeOn': studyModeOnValue}, function() {
        var classList = document.getElementById('studyModeToggle').className.split(/\s+/);
        if(classList.indexOf("btn-success") !== -1){
          $("#studyModeToggle").removeClass("btn-success");
          $("#studyModeToggle").addClass("btn-primary");
          $("#studyModeToggle").text("Turn Study Mode Off");
        }else{
          $("#studyModeToggle").removeClass("btn-primary");
          $("#studyModeToggle").addClass("btn-success");
          $("#studyModeToggle").text("Turn Study Mode On");
        }
      });
    });
  });
});
