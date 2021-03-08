function MortalityText(text1, text2, text3){
  return `
  <div style='
    width: 293px;
    height: 187px;
  
  '>

    <div style='
    font-weight: bold;
    font-size: 30px;
    line-height: 39px;  

    '>
    ${text1} </div>

    <div style='
    font-size: 48px;
    line-height: 48px;
    color: white;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-weight: bold;

    '>
    ${text2}
    </div>
    <div style='
    font-weight: bold;
    font-size: 30px;
    line-height: 39px;  
    '>
    ${text3}
    </div>
  </div>
  `;
}

// export {MortalityText};