console.log(`\n Trabanlhando com Condicionais`);


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,

);


const idadeComprador = 17;
const estaAcompanhada = true;
let  temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
    
let contador = 0;
let destinoExiste = false;
while(contador < 3){
        if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
  
    }

    contador += 1;
}

console.log("Destino existe:", destinoExiste);