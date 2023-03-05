
const splashes =
    ["The website <u>is</u> real",
    "<p style='color:yellow'>Have you ever played Minecraft?</p>",
    "Undefined",
    "Have a nice day",
    "I prefer regular Java",
    "Under Construction"]
function resize(){
    //let i = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    let i = window.visualViewport.height;

    i = i - (document.getElementById("head").offsetHeight);

    //i = i - (document.getElementById("foot").offsetHeight);


    i = i.toString() + "px";
    document.getElementById("mainContent").style.height = i;


}
function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function generateSplash(){
    let a = randomIntFromInterval(0, splashes.length-1)
    document.getElementById("splash").innerHTML = splashes[a]

}