onload = () =>{
    document.body.classList.remove("container");

    var source = "Radiohead - No Surprises.mp3"
    var audio = document.createElement("audio");
    //
    audio.autoplay = true;
    //
    audio.load()
    audio.addEventListener("load", function() { 
        audio.play(); 
    }, true);
    audio.src = source;
}; 