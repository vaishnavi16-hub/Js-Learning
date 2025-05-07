// console.log(parseInt(Math.random()*200));

// hold into value Form...

const randomNumber = parseInt(Math.random()* 100 + 1);

 const submit = document.querySelector('#subt');
 const userinput = document.querySelector('#guessfield');
 const guessSlot = document.querySelector('.guesses');
 const remaining = document.querySelector('.lastResult');
 const  startOver = document.querySelector('.resultParas');


 const p = document.createElement('p');
  let preGues = [];
  let numGuess = 1;

  let playGame = true;

  if (playGame){
    submit.addEventListener('click',function(e){
      e.preventDefault();
      const guess = parseInt(userInput.value);
      console.log(guess);
      validateGuess(guess);
    })
  }

   function validateGuess(guess){
    //
    if(isNaN(guess)){
      alert('please enter a valid number')
    }else if(guess<1){
      alert('please enter a number more than 1')
    }else if (guess>100){
      alert('please enter a number less then 100')
 }else{
  prevGess.push(guess)
  if(numGuess ===11){
    displayGuess(guess)
    displayMessage('Game Over. random number was ${eandomNumber}')
    endGame()
  }else{
    displayGuess(guess)
    checkGuess(guess)

    }
   }
  }


   function checkGuess(guess){
    if(guess === randomNumber){
      displayMessage('you guesses it right')
      endGame()
    }else if (guess < randomNumber){
      displayMessage('Number is T000 low')
    }else if (guess >randomNumber){
      displayMessage ('Number is T000 high ')
    }

    //
   }

   function displayGuess(guess){

    userInput.value = ''
    guessSlot.innerHTML += '${guess}'
    numGuess++;
    remaining.innerHTML= '${11 -numGuess}'
   }

   function displayMessage(message){
    
     lowOrHi.innerHTML = '<H2>${message}</H2>';
   }

   function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Start new Game</h2>';
    startOver.appendChild(p);
    playGame = false;
    newGame();
    //
   }

   function newGame(){
    const newGameButton = document.querySelector('£newGame')
    newGameButton.addEventListener('click', function(e){
      randomNumber = parseInt(Math.random()+ 100+1);
      prevGuess = []
      newGuess = 1
      guessSlot.innerHTML = ''
      remaining.innerHTML = '${11 - NumGuess}';
      userInput.removeAttribute('disabled')
      startOver
      playGame = true
    })

    //
   }
