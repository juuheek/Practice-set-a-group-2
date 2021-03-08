function DoctorsUI(src="https://placekitten.com/50/50", doctorheading="Kelty Eating Disorders",location="4500 Oak Street, Vancouver, BC V6H 3N1", bgcolor="rgba(140, 198, 62, 0.43)"){
  return `<div style='
        display: flex;
        flex-direction: row;
        border-radius: 5px;
        background-color: ${bgcolor};
        width: 330 px;
        height: 80 px;
        left: 19 px;
        top: 595 px;
        margin-bottom: 30px;
  '>
  <div style='
        height: 70px;   
        display:inline-flex;
        justify-content: center;
        align-items: center;
        margin: 5px;
  '>
    <img style='
        border-radius: 50%;
        height: 100%;
    'src="${src}" />
  </div>
  
  <div style='
        margin-left: 15px;
  '>
    <div style='
    font-weight: 900;
    font-size: 18px;
    color: #26325B ;
    line-height: 30px;
    
    '>
    ${doctorheading}</div>

    <div style='
    color: #777370;
    line-height: 20px;
    '>
    ${location}</div>

    <div style='
    color: #777370;
    line-height: 20px;
    '>( 604 ) - 875 - 2084</div>
  </div>
</div>` 
}

//export const Doctors = DoctorsUI();
