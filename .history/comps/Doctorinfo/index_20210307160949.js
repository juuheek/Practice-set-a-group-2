function DoctorsUI(){
  return `<div style='
        display: flex;
        flex-direction: row;
        border-radius: 5px;
        background-color: rgba(140, 198, 62, 0.43);
        width: 368 px;
        height: 80 px;
        left: 19 px;
        top: 595 px;
        margin: 30px;
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
    'src="https://placekitten.com/50/50" />
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
    Kelty Eating Disorders</div>

    <div style='
    color: #777370;
    line-height: 20px;
    '>
    4500 Oak Street, Vancouver, BC V6H 3N1</div>

    <div style='
    color: #777370;
    line-height: 20px;
    '>( 604 ) - 875 - 2084</div>
  </div>
</div>` 
}

//export const Doctors = DoctorsUI();
