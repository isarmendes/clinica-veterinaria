function verificarosinputs(){
    let tutor = document.getElementById("tutor").value;
    let nomedopet = document.getElementById("nomedopet").value;
    let especie = document.getElementById("especie").value;
    let imglink = document.getElementById("imglink").value;
    let date = document.getElementById("date").value;

    console.log(tutor);
    console.log(nomedopet);
    console.log(especie);
    console.log(imglink);
    console.log(date);

    if(tutor == '' || nomedopet == '' || especie == '' || date== '' || imglink == ''){
        console.log("Os dados estão vazios");
    
    
        
     return true;
    } else{
        console.log("Os dados não estão em branco");
        return false;
    }
}

function envieMsg(msg, tipo){
    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = '';

    let msgParaTela = `
    <p class='${tipo}'>${msg}</p>`
    
    msgDiv.innerHTML = msgParaTela;

    setTimeout(function(){
        msgDiv.innerHTML="";
    }, 3000);
}

class ClinicaVeterinaria{
    constructor(tutor, nomedopet, especie, imglink, date){
        this.tutor= tutor;
        this.nomedopet = nomedopet;
        this.especie= especie;
        this.imglink =imglink;
        this.date = date;
        this.niver= this.calculateAge(date)
    }

    calculateAge(niver) {
        const newDateJS = new Date(niver);
        const yearDate = newDateJS.getFullYear();
    
        const todayDate = new Date();
        const nowDate = todayDate.getFullYear();
    
        const age = nowDate - yearDate;
        return age
      }
}



const clinicateste = new ClinicaVeterinaria("oii" ,"tudo", "simm","oii", "24")

console.log(clinicateste);



function limparInout(){
    console.log("passou pela função limpar iputs");
document.getElementById("tutor").value ="";
document.getElementById("nomedopet").value = 
document.getElementById("especie").value="";
document.getElementById("imglink").value = "";
document.getElementById("date").value = "";
}

function comporclinicavt(){
    let tutor = document.getElementById("tutor").value;
    let nomedopet = document.getElementById("nomedopet").value;
    let especie = document.getElementById("especie").value;
    let imglink = document.getElementById("imglink").value;
    let date = document.getElementById("date").value;

    const clinicavt = new ClinicaVeterinaria(tutor, nomedopet, especie, imglink, date);

    console.log(clinicavt);

    Veterinaria.add(clinicavt);
    renderizarConteudo();
    
}


class ListaCVT{
    constructor(){
        this.listaCVT = [];
    }

    add(parametro){
    // this.ListaJogos.push(parametro);
    if(verificarosinputs()){
      envieMsg("preencha todos os campos" , "erro");

    }else{
        this.listaCVT.push(parametro);
        limparInout()
        envieMsg("Cadastrado com sucesso!", "sucesso");
        console.log(this.listaCVT);
    }

    }
}

const Veterinaria = new ListaCVT();

console.log(Veterinaria);


function renderizarConteudo(){
    // Variavel para armazenar o innerHMTL, que é
    // responsavel por renderizar na tela

    const listaHTML = document.getElementById('cvt');
    listaHTML.innerHTML = '';

 
    let array = Veterinaria.listaCVT;

    console.log(array);


    array.forEach(pet => {
       
       const clinicaDiv = `
          
            <div class='jogoDetalhe'>
                <h2>Tutor: ${pet.tutor}</h2>
                <p>Nome do pet: ${pet.nomedopet}</p>
                <p>Espécie: ${pet.especie}</p>
                <p>Date: ${pet.date}</p>
                <p>Idade: ${pet.niver}</p>
                <img src="${pet.imglink}" alt="${pet.nomedopet}">
            </div>
       `;

       listaHTML.innerHTML += clinicaDiv;
    });
}


