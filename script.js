//Nome
//function cumprimentar (nome)
const cumprimentar = function(nome) {
    console.log(`Olá, ${nome}`);

}
cumprimentar ("Melyssa");
cumprimentar("Joana"); 
cumprimentar("Ana");
cumprimentar("Lucas"); 

//Analisar Núumero
 function analisarNumero (numero) {
    const ePar = numero % 2 === 0;         
    const soma = numero + 10;               
    const multiplica = numero * numero;
    return  ` O número ${numero} é par? ${ePar}. Somando com 10 é igual a ${soma} e multiplicado por ele mesmo é ${multiplica}`;
    
 }
  console.log(analisarNumero(9));
  

  //Função de login

  function verificarLogin (login, senha) {
    const loginArmazenado = "astrodev"       
    const senhaArmazenada = "bananinha123"              
    
 if (login === loginArmazenado && senha === senhaArmazenada) {
    return true;
  } else {
    return false;
  }
}
 
  // Testes:
  console.log(verificarLogin("astrodev", "bananinha123")); // true
  console.log(verificarLogin("astrodev", "123456"));       // false
  console.log(verificarLogin("usuario", "bananinha123"));  // false
  
  