window.addEventListener("keydown", handleKeyDownAudio);

function handleKeyDownAudio(event){
    if(event.repeat){return}
    // console.log(event.keyCode);
    var audio =document.querySelector(`audio[data-key="${event.keyCode}"]`).src;
    // console.log(audio);
    audio = new Audio(audio)

         audio.play();
    var key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    key.classList.add("playing");
    setTimeout(() => { key.classList.remove("playing"); }, 100);
    key.classList.add("sound");
    setTimeout(() => { key.classList.remove("sound"); }, 100);

    }







// cherche solution pour record 


    window.addEventListener("keydown", handleRecord);



    function handleRecord(event){
        audio
    }




