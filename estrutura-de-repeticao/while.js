let resultadoDado;
let lancamentos = 0;

while (resultadoDado !== 6) {
    resultadoDado = Math.floor(math.random() *6) + 1; // Gera um  numero aleatorio de 1 a 6
    lancamentos++;
    console.log(`lancamento ${lancamentos}: Resultado do dado: ${resultadoDado}`); 
}

console.log(`Finalmente! O numero 6 foi obtido apos ${lancamentos} lancamentos.`);
