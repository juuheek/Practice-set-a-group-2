function backButton(text = "GO BACK", src) {
    return `
    <a style="
    text-decoration:none;
    color:black;
    "href="${src}">
    
    <div style='
    justify-content: center;
    align-items: center;
    display: flex;
    '
    class="wrapper">

    <button style = '
    width: 315px;
    height: 55px;
    background-color: #626262;
    text-align: center;
    border-radius: 15px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));;
    color: #FFF;
    font-family: 'Segoe UI','Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;

.button:hover {background-color: #3e8e41}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

    '

    type="button"> ${text} </button>
    </div>
    </a>
`
}


// export const Button2 = backButton(); 