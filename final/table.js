  loadingscreen();
  
  var loadingtext;
  
  function loadingscreen() {
    loadingtext = setTimeout(showPage, 6000);
  }

  function showPage() {
    document.getElementById("loadingthetext").style.display = "none";
    document.getElementById("textisloaded").style.display = "block";
  }

$(function () {
  getPoints();

  function getPoints() {

    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://pointsystem-b8ef.restdb.io/rest/name",
      "method": "GET", 
      "headers": {
        "content-type": "application/json",
        "x-apikey": "62091b6a34fd621565858478",
        "cache-control": "no-cache"
      },
    }


    $.ajax(settings).done(function (response) {
      
      let content = "";

      for (var i = 0; i < response.length; i++) {

        content = `${content}
        <tr>
        <td>${response[i].name}</td>
        <td>${response[i].points}</td>
        </tr>`;
        
      }
      $("#point-list tbody").html(content);
    });
  }
  

});
