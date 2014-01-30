(function(){

  // create alphabet object, all initially keyed to

  var word;

  function createAlphaObject (){
    var a = 97,
        alphabet = {};
    for (var i = 0; i<26; i++){
      alphabet[String.fromCharCode(a + i)] = false;
    }
    return alphabet;
  };

  var alphabetObj = createAlphaObject();

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

    //CALL THE VIEWS HERE, INTERPOLATE DATA
    //correct

    //letters left to guess

    //incorrect letters

  });

  //LETTER BOXES - use for all views

  function wordBox(letter){
    var el = document.createElement('div');
    el.className="letter";
    el.setAttribute("data-letter", letter);
    return el;
  };


  function displayGame(wordArr){

  }


}).call(this);