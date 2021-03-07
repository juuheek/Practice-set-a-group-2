function whiteUI(text=" •  Extremely restrictive eating <br> •  Intensive/ excessive exercise •  Extreme thinness •  Fear of gaining weight "){
  return `<div style='
    background-color: #FFFFFF;
    width: 350px;
    height: 226px;
    box-shadow: inset 0px 4px 4px rgba(0,0,0,0.25);
    border-radius: 2%;
    font-size:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    line-height: 1.6; 
  '>

 ${text}


  </div>
  `
}

//export const WhiteBG = whiteUI();
