function startReading() {
  //Processing text
  var text = document.getElementById('inputText').value;
  for (var i = 0; i < text.length; i++) {
    text = text.replace("\n","</br>");
  }
  var textDiv = document.getElementById('textDiv');
  textDiv.innerHTML = "";
  var wordArray = text.split(" ");
  for (var i = wordArray.length-1; i < -1; i--) {
    if (wordArray[i] == "") {
      wordArray.splice(i,1);
    }
  }
  for (var i = 0; i < wordArray.length; i++) {
    var span = document.createElement("span");
    span.setAttribute("class", "word");
    span.setAttribute("id", "word" +i);
    span.innerHTML = wordArray[i]+" ";
    textDiv.appendChild(span);
  }
  //Start reading
  document.getElementById('inputText').value = "";
  stopPressed = false;
  var textDiv = document.getElementById('textDiv');
  var i = 0;
  var timer = setInterval(readNextWord, delay);
  function readNextWord() {
    if (i>0) {
      unHighlightFunction(textDiv.children[i-1]);
    }
    if (i<textDiv.children.length && !stopPressed) {
      highlightFunction(textDiv.children[i]);
      i++;
    }
    else {
      clearInterval(timer);
    }
  }
}
function stopReading() {
  stopPressed = true;
}
var delay = 500;
document.getElementById('readingDelay').innerHTML = delay;
var stopPressed = true;
function increaseSpeed() {
  delay -= 50;
  document.getElementById('readingDelay').innerHTML = delay;
  stopReading();
}
function decreaseSpeed() {
  if (delay > 50) {
    delay += 50;
    document.getElementById('readingDelay').innerHTML = delay;
    stopReading();
  }
}
function highlightFunction(elt) {
  elt.style.backgroundColor = "yellow";
  elt.style.fontSize = "17px"
}
function unHighlightFunction(elt) {
  elt.style.backgroundColor = "transparent";
  elt.style.fontSize = "16px"
}
