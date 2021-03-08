function pinkButton (text="continue") {
	return `
    <div 
    style='
    justify-content: center;
    align-items: center;
    display: flex;
    '
    class="wrapper">
    <button 
    style= '    
    display: flex;
    width: 275px;
    height: 70px;
    background: #E67571;
    text-align: center;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    color: #FFF;
    font-family: 'Segoe UI','Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    border: #FFF;'

    type="button">${text}</button>
    </div>
`
}

// export const Button = pinkButton(); 