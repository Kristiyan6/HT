document.getElementById("head").style.visibility = "hidden";
document.getElementById("body").style.visibility = "hidden";
document.getElementById("left_arm").style.visibility = "hidden";
document.getElementById("right_arm").style.visibility = "hidden";
document.getElementById("left_leg").style.visibility = "hidden";
document.getElementById("right_leg").style.visibility = "hidden";
document.getElementById("dead").style.visibility = "hidden";


let wordList = [];
let hintList = [];
let lives = 7;
var buttons = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
              "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let count = document.getElementById("tries")
count.textContent = "Lives: " + lives;
fetch('words.txt')
  .then(response => response.text())
  .then(data => {
    const words = data.split('\n');

    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    const upperWords = randomWord.toLocaleUpperCase();

    for (let i = 0; i < upperWords.length; i++) {
      let lines = upperWords[i]
      wordList.push(lines)
    };
    function button_clicked(char) {
      for (let i = 0; i < wordList.length; i++) {
        if (wordList[i] === (char)) {
          hintList[i] = char;
        }
      }
      if (!wordList.includes(char) && lives > 0) {
        lives -= 1
      }
      const lives_to_elementsid = {
        6: "head",
        5: "body",
        4: "left_arm",
        3: "right_arm",
        2: "left_leg",
        1: "right_leg",
        0: "dead"
      };
      if (lives in lives_to_elementsid) {
        const elementsid = lives_to_elementsid[lives]
        document.getElementById(elementsid).style.visibility = "visible";
      }
      refresh(hintList);
      document.getElementById("button" + char).disabled = true;
      count.textContent = "Lives: " + lives;
      if (lives === 0) {
        setTimeout(() => {
          window.location.href = "../over/gameover.html";  
        }, 500);
      }
    }
    // alert(wordList)
    function addListeners() {
      buttons.forEach(char => {
        document.getElementById("button" + char).addEventListener("click", function() {button_clicked(char)})
      })
    }
    addListeners()
    hintList = replace(wordList)
    refresh(hintList);
    
  })
  .catch(error => {
    console.error('Fehler beim Lesen der Datei:', error);
  });
function replace(list) {
  let new_list = []
  for (let i = 0; i < list.length -1; i++) {
    new_list.push("-");
  }
  return new_list;
}
function refresh(list) {
  let txt = ""
  for (let i = 0; i < list.length; i++) {
    txt += list[i] + " ";
  }
  let word = document.getElementById("word")
  word.textContent = txt
} 


