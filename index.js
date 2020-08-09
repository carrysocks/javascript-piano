const WHITE_KEYS = ['q','w','e','r','t','y','u','i','o','p'];
const BLACK_KEYS = ['2','3','5','6','7','9','0'];


const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');


keys.forEach(key => {
    key.addEventListener('click', ()=>{
        playNote(key);
    })
})

document.addEventListener('keydown', e =>{
    if(e.repeat) return;
    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);

    if(whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
    if(blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);

})

function playNote(key){
    const noteAudio = document.getElementById(key.dataset.note);
    const clone = noteAudio.cloneNode();
    clone.play();

    setTimeout(() => (clone.volume = 0.8),400);
    setTimeout(() => (clone.volume = 0.6),800);
    setTimeout(() => (clone.volume = 0.4),1200);
    setTimeout(() => (clone.volume = 0.2),1600);
    setTimeout(() => (clone.volume = 0),2000);

    
    key.classList.add("active");
    setTimeout(() => {
        key.classList.remove("active");
    }, 200);
    
}