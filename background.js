let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });

});

 

window.addEventListener('DOMContentLoaded', (event) => {
    alert('hi');
});
