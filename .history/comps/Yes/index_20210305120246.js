function YesButtonUI(){
    return `
    <div style=
    '
    background-color:#FFF;
    border: black solid 1px;
    border-radius:15px 15px;
    min-height:54px;
    min-width:144px;
    display:inline-flex;
    justify-content:center;
    align-items:center;
    font-family:'GmarketSansMedium';
    transition:1s;
    '
    onclick='YesButtonUI.HandleClick(this)'
    >
    Yes
    </div>
    `
  }
  
  YesButtonUI.HandleClick = (el) => {
    el.style.backgroundColor = "#E0E0E0";
  }

  //export const YesButton = YesButtonUI();