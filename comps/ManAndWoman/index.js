function ManAndWomanUI(ninety="90%", of="of the", ca="cases are", fem="females", img="./imgs/woman.png" ) {
    return `
    <h1 style=
    '
    color: #ff6464;
    text-align: center;
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    '
    ><span style=
    '
    color: #26325b;
    '
    >${ninety}</span> <br> ${of} <br> ${ca} <br> ${fem} </h1>

    <img src="${img}"/>
    `
}

//export const ManAndWoman = ManAndWomanUI();