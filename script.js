// Autor: Americo Cornelio Baltazar
// Fecha: 30/04/2022

// Funcion para parpadear el titulo
function parpadear(){
    let red=Math.floor(Math.random()*256); 
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);

    document.getElementById("titulo").style.color="rgb("+red+","+green+","+blue+")";
}
setInterval(parpadear, 1000);

function title(){
    let red=Math.floor(Math.random()*256); 
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);

    document.getElementById("title").style.color="rgb("+red+","+green+","+blue+")";
}
setInterval(title, 1000);

// Funcion para mostrar la fecha
function dia(){
	var f=new Date();
	document.querySelector('#fecha').innerText="Date: "+f.getDate()+"/"+(f.getMonth()+1)+"/"+f.getFullYear();
}

// Funcion para mostrar la hora
function hora(){
    let fecha=new Date();
    let h=fecha.getHours();
    let m=fecha.getMinutes();
    let s=fecha.getSeconds();

    if(h<10){h='0'+h;}
    if(m<10){m='0'+m;}
    if(s<10){s='0'+s;}

    document.getElementById("hora").innerHTML="Hour: "+h+":"+m+":"+s;
    setTimeout(hora, 1000);
}
//Funcion para aparecer y desaparecer imagenes
function desaparecer(e){
	e.style.opacity=0;
	e.style.transition="all 3s ease";
}

function aparecer(e){
	e.style.opacity=1;
	e.style.transition="all 3s ease";
}

for(element of document.getElementsByClassName("imgblok")){
	element.setAttribute("onmouseover","desaparecer(this)");
	element.setAttribute("onmouseout","aparecer(this)");
}

document.body.setAttribute("onload","dia(); hora();");