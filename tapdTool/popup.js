document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('redirect-button');
    button.addEventListener('click', function() {
      chrome.tabs.create({url: "https://www.tapd.cn/my_dashboard"});
    });
  });