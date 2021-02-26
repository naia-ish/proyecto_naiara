window.addEventListener("load",
    ()=>{
        let hola=document.querySelector("button");
        hola.addEventListener("click",
            (evento)=>{
                evento.preventDefault();
                alert("Hola");
            });
    });
