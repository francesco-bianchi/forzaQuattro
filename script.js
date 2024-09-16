const container = document.querySelector(".container");
let contatore = 0;

function creaTabella(){
    const table = document.createElement("table");
    numTd = 0;
    table.classList.add("table");
    for(let i=0; i<6; i++){
        const tr = document.createElement("tr")
        for(let j=0; j<7; j++){
            const td = document.createElement("elemento");
            td.id = numTd;
            td.addEventListener("click", (listener)=>{
                mostraSelettore(listener.target.id);
            });
            numTd++;
            tr.appendChild(td);
        }
        
        table.appendChild(tr);
    }
    container.appendChild(table)
}
function mostraSelettore(id){
    console.log("click" + id);
    const td = document.querySelectorAll("td");
    td.classList.add("td")
    contatore = contatore + 1;
    if (contatore>0 && contatore%2!=0)
    {
        td.style.backgroundColor = "red";
    }
}


document.addEventListener("DOMContentLoaded", creaTabella);