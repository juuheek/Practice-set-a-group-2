function pinkButton (buttontext="Learn More", website="./frame2.html", margin) {
	return `
    <div 
    
    style='

    
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom:${margin};
    '
    

    class="wrapper">
    <a href="${website}" style='
    text-decoration: none;
    '>
    <button 
    style= '    
    display: flex;
    width: 315px;
    height: 54px;
    background: #E67571;
    text-align: center;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    color: #FFF;
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-size: 20px;
    line-height: 18px;
    border: #FFF;
    transition: width 2s;
    opacity:1;
    '
    onmouseover='pinkButton.HandleClick(this)'
    type="button">${buttontext}</button></a>
    </div>
`
}
pinkButton.HandleClick = (el) => {
    // el.style.opacity = 0.5;
    el.style.width= 415;
    el.style.height= 64;
  
}
// export const Button = pinkButton(); 
