function BackArrowUI(backbuttonLink){
    return `
    <div style=
    '
    display:flex;
    '>
    <a href="index2.html" class="arrow down" style='
      border: solid black;
      border-width: 0 3px 3px 0;
      padding: 1px; 
      -webkit-transform: rotate(135deg);
      width:7px;
      height:7px;
    '>
   
    </a>
    <a href="${backbuttonLink}" class="arrow down" style='
      border: solid black;
      border-width: 0 3px 3px 0;
      padding: 1px; 
      -webkit-transform: rotate(135deg);
      width:7px;
      height:7px;
    '>
   
    </a>
    </div>
    `

  }
  
  //export const BackArrow = BackArrowUI();
