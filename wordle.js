$.get("https://random-word-api.herokuapp.com/word?length=5", function(data){
    answer = data[0]
    console.log(answer)
    document.getElementById("instruction").innerHTML="Type Your Guess"
  });

  function checkGuess(guess){
    for(var i=0; i<5; i++){
        if(answer.slice(i,i+1)==guess[i].innerHTML){
            guess[i].style.backgroundColor="green"
        } else {
            for(var i2=0; i2<5; i2++){
                if(answer.slice(i2,i2+1)==guess[i].innerHTML){
                    guess[i].style.backgroundColor="rgb(200, 200, 16)"
                }
            }
        }
    }
  }

  numberofGuesses=0;

  document.addEventListener('keydown', function(event) {
    document.getElementById("guess"+(numberofGuesses+1)).innerHTML+="<h1 id={"+document.getElementById("guess"+(numberofGuesses+1)).children.length+"+'h1'}>"+event.key+"</div>"
    if(document.getElementById("guess"+(numberofGuesses+1)).children.length==5){
        checkGuess(document.getElementById("guess"+(numberofGuesses+1)).children)
        numberofGuesses++;
    }
});     