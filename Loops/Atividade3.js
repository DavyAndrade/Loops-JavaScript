// Solicitar a idade de várias pessoas e imprimir: 
// Total de pessoas com menos de 21 anos. 
// Total de pessoas com mais de 50 anos.
// O programa termina quando idade for =-99. (WHILE)


 var jovem = 0
 var faustao = 0

 while (idade != -99) {
    var idade = Number(prompt("Digite a Idade: \nDigite -99 para Sair do Programa!"))
    if (idade <= 21){
        jovem++
    }
    else if (idade >= 50){
        faustao++
    }
 }

 alert(`Total de Pessoas com Menos de 21 Anos: ${jovem}\nTotal de Pessoas com Mais de 50 Anos: ${faustao}`)

 
