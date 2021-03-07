function HeaderText(text){
  return `
  <div style='
    width: 369px;
    height: 114px;
  
  '>

  <p style='
    font-size: 36px;
    line-height: 38px;
    text-align: center;
    color: #26325B;
    font-weight: 800;
    @font-face {
      font-family: 'GmarketSansMedium';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
}
  
  '>
  ${text}
  </p>
  </div>
  `;
}

// export {HeaderText};