onload = () =>{
    document.body.classList.remove("container");

    document.addEventListener('click', musicPlay);
    function musicPlay() {
        document.getElementById('radio').play();
        document.removeEventListener('click', musicPlay);
    }
}; 