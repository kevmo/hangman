(function(){

  // create alphabet object, all initially keyed to

  let word;

  function createAlphaObject (){
    const a = 97,
        alphabet = {};
    for (let i = 0; i<26; i++){
      alphabet[String.fromCharCode(a + i)] = false;
    }
    return alphabet;
  };

  const alphabetObj = createAlphaObject();

  console.log(alphabetObj);

  // listen for form submission,
  // --> turn input into ARRAY
  // --> iterate over array
  //      --> turn alphabetObj to true
  //      --> create the word's letters boxes

  // iterate over array to create wordbox
  //

  //document.forms.

  document.forms.wordform.addEventListener("submit", function(e){
    console.log(e);
    word = document.forms.wordform.word.value;
    document.getElementById('game').className="";
    document.getElementById('landing').className="hide";
    e.preventDefault();

    //turn word into array
    word = word.split("");
    console.log("word: ", word);

    //CALL THE VIEWS HERE, ATTACH guess boxes TO PAGE
    for (let i = 0; i < word.length; i++){
      const letter =  wordBox(word[i]);
      document.getElementById("correct").appendChild(letter);
    }

    //letters left to guess

    const lettersLeft = letterDisplay();
    for (let key in lettersLeft){
      document.getElementById('available').appendChild(lettersLeft[key]);
    }

    //incorrect letters

  });

  //LETTER BOXES - use for all views - functional inheritance

  function wordBox(letter){
    const el = document.createElement('div');
    el.className="letter";
    el.setAttribute("data-letter", letter);
    return el;
  }

  //add all of alphabet to choices

  function letterDisplay(){
    const letters = [];
    for (let key in alphabetObj){
      const el = document.createElement("div");
      el.setAttribute('data-letter', key);
      el.setAttribute('class', 'choices')
      el.innerHTML = key;
      //ON CLICK, CHECK TO SEE IF VALUE EXISTS
      //IF YES, FILL CORRECT BOX, DELETE CHOICE
      //IF NO, DRAW HANGMAN, DELETE CHOICE
      el.addEventListener("click", function(e){
        const guess = el.getAttribute('data-letter');
        (word.indexOf(guess) === -1) ? console.log("no") :console.log("yes");

        e.preventDefault();
      })
      letters.push(el);
    };
    return letters;
  };

  function choseWrong(){};

  function choseRight(){};

  function drawHangman(){}




}).call(this);