function whiteUI(text=" •  Extremely restrictive eating <br> •  Intensive/ excessive exercise <br> •  Extreme thinness <br>•  Fear of gaining weight ", lineheight="1.6"){
  return `<div style=
  '
    background-color: #FFFFFF;
    width: 350px;
    height: 226px;
    box-shadow: inset 0px 4px 4px rgba(0,0,0,0.25);
    border-radius: 2%;
    font-size:18px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    line-height: ${lineheight}; 
  '>

 ${text}


  </div>
  `
}

//export const WhiteBG = whiteUI();

