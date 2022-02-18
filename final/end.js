$(function () {
  
    $("#saveScoreBtn").on("click", function (e) {
        e.preventDefault();     
        addpoints();
    })

    function addpoints() {
        scorepoints = mostRecentScore
        let scorename = $('#username').val();   
        console.log(scorename); 
        console.log(scorepoints);

    let settings5 = {
        "async": true,
        "crossDomain": true,  
        "url": "https://pointsystem-b8ef.restdb.io/rest/name?q={}&filter=" + scorename,
        "method": "GET", 
        "headers": {
            "content-type": "application/json",
            "x-apikey": "62091b6a34fd621565858478",
            "cache-control": "no-cache"
            },
        }
        console.log(settings5);
        $.ajax(settings5).done(function (response) {
            console.log(response);
            console.log(response[0].points);
            userid = response[0]._id
            console.log(userid);
            usertotalpoints = response[0].points
            console.log(scorepoints);
            
            userendpoints =  parseFloat(usertotalpoints) +  parseFloat(scorepoints)
            let jsondata = {
                "name": scorename,
                "points": userendpoints,
            };

            var settings6 = {
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
            
            $.ajax(settings6).done(function (response) {
                console.log(response);
                alert(scorepoints + " Points added to balance!")
            });
        });
    }
})  
const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    
};


    
