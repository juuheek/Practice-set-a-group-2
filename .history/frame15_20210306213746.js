document.querySelector("#heading").innerHTML += HeaderText("Have you experienced any of these symptoms?")
document.querySelector("#whitebg").innerHTML += whiteUI(" • Regularly eat too much food <br> •  Sometimes re-chewed  <br> and swallowed or spit out <br> • Reflux disorder/other gastrointestinal problems <br> • Severe dehydration <br> • Electrolyte imbalance", "1.4")
document.querySelector("#yesbutton").innerHTML += NoButtonUI("Yes")
document.querySelector("#nobutton").innerHTML += NoButtonUI()
document.querySelector("#backarrow").innerHTML += BackArrowUI()
document.querySelector('#smile').innerHTML += smileItem()