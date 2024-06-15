alert('Boas vinda ao jogo do número secreto');
let numMax = 10
let numeroSecreto = parseInt(Math.random() * numMax + 1);

console.log(numeroSecreto);

let chute;
let tentativas = 1;


//enquanto o chute não for igual a o numero secreto

while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numMax}`);

    // Se o chute for igual numeroSecreto

    if (chute == numeroSecreto){
        //Para
        break;
    } else{
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }else{
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++; 
    }
}
let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
    alert(`Isso ai!! | VC acertou, o número secreto era, ${numeroSecreto} mesmo, vc precisou de ${tentativas} ${palavratentativa}`);

/*
if(tentativas > 1){
    alert(`Isso ai!! | VC acertou, o número secreto era, ${numeroSecreto} mesmo, vc precisou de ${tentativas} tentativas`);
}else{
    alert(`Isso ai!! | VC acertou, o número secreto era, ${numeroSecreto} mesmo, vc precisou de ${tentativas} tentativa`);
}
*/
