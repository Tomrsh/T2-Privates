let btn = document.querySelector("#Btn");
const vido = document.querySelector("#vid");
const video = "/home/kali/Documents/FavFolder/Images/VN20240725_215442.mp4"

function Playing() {
    console.log("Succesfull !");
    
    vido.style.visibility = "visible";
    vido.play();
}
btn.addEventListener('click', () => {
    Playing();
   
});
