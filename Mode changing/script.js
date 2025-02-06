let modeBtn= document.querySelector("#mode");
let body=document.querySelector("#mode");
let currMode="light";//dark

modeBtn.addEventListener("click", ()=>{
    if(currMode==="light"){
        currMode="dark";
        body.classList.add("dark");
    }
    else{
        currMode="light";
        body.classList.add("light");
    }
    console.log(currMode);
});