let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: exportData,
  });
});

function exportData() {
  chrome.storage.sync.get("color", ({ color }) => {
    var button = document.createElement("button");
    button.style.zIndex = 2147483648;
    button.innerHTML = "Export";
    var body = document.getElementsByClassName("zp_34oGO zp_3PA9p")[0];
    body.appendChild(button);

    button.addEventListener("click", (target) => {
      var exportBtn = document.getElementsByClassName(
        "zp-button-label zp_w421R"
      );

      for (var i = 0; i < exportBtn.length; i++) {
        if (exportBtn[i].innerText === "Export") exportBtn[i].click();
      }

      var confirmBtn = document.getElementsByClassName(
        "zp-button-label zp_w421R"
      );
      setTimeout(null, 1000);
      for (var i = 0; i < confirmBtn.length; i++) {
        if (confirmBtn[i].innerText === "Confirm") confirmBtn[i].click();
      }

      var confirmBtn = document.getElementsByClassName(
        "zp_2cHnw"
      );

      for (var i = 0; i < confirmBtn.length; i++) {
        if (confirmBtn[i].innerText === "Start Export") confirmBtn[i].click();
      }

      setInterval(()=>{
        var confirmBtn = document.getElementsByClassName(
            "zp_2cHnw"
          );
        for (var i = 0; i < confirmBtn.length; i++) {
            if (confirmBtn[i].innerText === "Download") confirmBtn[i].click();
          }

      }, 1000);


      const data = {
        api_key: "YC_uAtLOomY_HmeXEjVAPQ",
        "q_keywords": "CEO",
        "sort_by_field": "contact_last_activity_date",
        "sort_ascending": false
      };
    
      fetch("https://api.apollo.io/v1/contacts/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
         
        })
        .catch((error) => {
          console.error("Error:", error);
        });

    });

  });
}
