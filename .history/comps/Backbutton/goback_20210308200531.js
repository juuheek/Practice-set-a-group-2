function backButton (text="GO BACK", src) {
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
    // transtion:opacity 1s;
    // opacity:1;

    '
    // onmouseover="backButton.HandleClick(this)"
    type="button"> ${text} </button>
    </div>
    </a>
`
}
// backButton.HandleClick = (el) =>{
//     el.style.opacity = 0.5;
// }

// export const Button2 = backButton(); 