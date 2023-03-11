onload = () =>{
    document.body.classList.remove("container");

var play = true;

var myAudio = document.getElementById("leson");

function onKeyDown(event) {
        switch (event.keyCode) {
            case 32: //SpaceBar                    
                if (play) {
                    myAudio.pause();
                    play = false;
                } else {
                    myAudio.play();
                    play = true;
                }
                break;
        }
  return false;
}

window.addEventListener("keydown", onKeyDown, false);
}; 