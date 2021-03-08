function HeaderText(color="#26325B", text){
  return `
  <div style='
    width: 369px;
    height: 114px;
  
  '>

  <p style='
    font-size: 36px;
    line-height: 38px;
    text-align: center;
    color: ${color};
    font-weight: 800;
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;


  
  '>
  ${text}
  </p>
  </div>
  `;
}

// export {HeaderText};