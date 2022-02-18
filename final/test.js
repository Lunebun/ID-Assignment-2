$(function () {
  
  $("#contact-submit").on("click", function (e) {
    e.preventDefault();
  
    removepoints();
  })
  
  function removepoints() {
    let rewardname = $("#reward-name").val();
    let rewardpoints = $("#reward-points").val();
    let settings = {
      "async": true,
      "crossDomain": true,  
      "url": "https://pointsystem-b8ef.restdb.io/rest/name?q={}&filter=" + rewardname,
      "method": "GET", 
      "headers": {
        "content-type": "application/json",
        "x-apikey": "62091b6a34fd621565858478",
        "cache-control": "no-cache"
      },
    }

    $.ajax(settings).done(function (response) {
      console.log(response);
      console.log(response[0].points);
      userid = response[0]._id
      console.log(userid);
      userpoints = response[0].points
      console.log(userpoints);
      if ( userpoints >= rewardpoints) {
        endpoints = userpoints - rewardpoints
        console.log(endpoints);
      }
      else {
        console.log("Not Enough");
        alert("Not Enough Points");
      }

      let jsondata = {
        "name": rewardname,
        "points": endpoints,
      };
  
      var settings2 = {
        "async": true,
        "crossDomain": true,
        "url": `https://pointsystem-b8ef.restdb.io/rest/name/${userid}`,
        "method": "PUT",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "62091b6a34fd621565858478",
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata)
      }
      
      $.ajax(settings2).done(function (response) {
        console.log(response);
        console.log("Redeem details:")
        console.log(rewardname);
        console.log(rewardpoints);
        console.log("End")
        alert("Rewards redeemed successfully!")
      });

    });

  }

  

})



