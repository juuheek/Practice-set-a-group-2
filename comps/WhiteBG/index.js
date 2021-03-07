function whiteUI(text=" • Thinness Culture in media <br> • Professionals and careers that promote being thin <br> • Family and childhood traumas <br> • Peer pressure", lineheight="2"){
  return `<div style='
    background-color: #FFFFFF;
    width: 350px;
    height: 226px;
    box-shadow: inset 0px 4px 4px rgba(0,0,0,0.25);
    border-radius: 2%;
    font-size:18px;
    display:flex;
    align-items: center;
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    line-height: ${lineheight}; 
    color:#8A8A8A;
  '>
  ${text}
  </div>
  `
}

//export const WhiteBG = whiteUI();
