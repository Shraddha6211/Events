let Btn1=document.querySelector("#Btn1");
Btn1.onclick = () =>{
    console.log("Btn was clicked");
}
Btn1.ondblclick=() =>{
    let a =19;
    a++;
    console.log("Print the value of :")
    console.log(a);
}
let box1=document.querySelector("#box1")
box1.onmouseover=(evt) =>{
    console.log('You are inside the div of box1 class');
    console.log(evt)
    console.log(evt.type)
    console.log(evt.client)
    console.log(evt.clientX, evt.clientY)
}
box1.onclick=(evt)=>{
    console.log(evt)
    console.log(evt.type)
    console.log(evt.client)
    console.log(evt.clientX, evt.clientY)
}
