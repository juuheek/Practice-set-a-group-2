function NoButtonUI(text="No"){
  return `<a href="Frame16.html" style="

  a:visited {
    color: black;
    background-color: transparent;
    text-decoration: none;
  }
  a:active {
    color: black;
    background-color: transparent;
    text-decoration: underline;
  }

  ">
  
  <div style='
  background-color:#FFF;
  border: black solid 1px;
  border-radius:15px 15px;
  min-height:54px;
  min-width:144px;
  display:inline-flex;
  justify-content:center;
  align-items:center;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  margin:20px;
  transition:opacity 1s;
  opacity:1;
  '
  onclick='NoButtonUI.HandleClick(this)'
  >
  ${text}
  </div>
  </a>
  `
}

NoButtonUI.HandleClick = (el) => {
  el.style.opacity = 0.5;
}
//export const NoButton = NoButtonUI();