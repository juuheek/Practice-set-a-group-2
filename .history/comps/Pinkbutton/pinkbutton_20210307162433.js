function pinkButton (buttontext, website) {
	return `
    <div 
    
    style='
    justify-content: center;
    align-items: center;
    display: flex;
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
    font-family:'GmarketSansMedium';
    font-size: 18px;
    line-height: 18px;
    border: #FFF;
    '
    type="button">${buttontext}</button></a>
    </div>
`
}