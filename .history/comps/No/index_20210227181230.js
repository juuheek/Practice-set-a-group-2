function NoButtonUI(){
  return `<div style='
  background-color:#FFF;
  border: black solid 1px;
  border-radius:15px 15px;
  min-height:54px;
  min-width:144px;
  display:inline-flex;
  justify-content:center;
  align-items:center;
  transition:opacity 1s;
  opacity:1;
  '
  onclick='NoButtonUI.HandleClick(this)'
  >
  No
  </div>`
}

NoButtonUI.HandleClick = (el) => {
  el.style.opacity = 0.5;
}

// export const NoButton = NoButtonUI();