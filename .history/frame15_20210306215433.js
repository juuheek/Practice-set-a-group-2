document.querySelector("#heading").innerHTML += HeaderText("Have you experienced any of these symptoms?")
document.querySelector("#whitebg").innerHTML += whiteUI(" • Regularly eat too much food <br> •  Sometimes re-chewed  <br> and swallowed or spit out <br> •May eat quickly or more food <br>than intended  <br> • Feelings of guilt, shame", "1.4","10px")
document.querySelector("#yesbutton").innerHTML += NoButtonUI("Yes")
document.querySelector("#nobutton").innerHTML += NoButtonUI()
document.querySelector("#backarrow").innerHTML += BackArrowUI()
document.querySelector('#smile').innerHTML += smileItem()