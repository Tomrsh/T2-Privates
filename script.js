let btn = document.querySelector("#Btn");
const video = "/home/kali/Documents/FavFolder/Images/VN20240725_215442.mp4"

function Play() {
    console.log("Succesfull !");
    let vido = document.getElementById("vid");
    vido.style.visibility = "visible";
    
}
btn.addEventListener('click', Play);
