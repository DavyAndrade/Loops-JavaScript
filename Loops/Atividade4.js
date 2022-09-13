// Uma empresa desenvolveu uma pesquisa para saber as características psicológicas dos indivíduos de uma região.
//  Para tanto, a cada uma das pessoas era perguntado: 
//  idade, sexo (1-feminino / 2-masculino / 3-Outros), 
//  e as opções (1, se a pessoa era calma; 2, se a pessoa era nervosa e 3, se a pessoa era agressiva).
//   Pede-se para elaborar um sistema que permita ler os dados de 150 pessoas, calcule e mostre: (WHILE)

// o número de pessoas calmas; 
// o número de mulheres nervosas; 
// o número de homens agressivos; 
// o número de outros calmos;
// o número de pessoas nervosas com mais de 40 anos
// o número de pessoas calmas com menos de 18 anos.

    var jovem = 0
    var faustao = 0
    var totalCalmas = 0
    var mulheresNervosas = 0
    var outrosCalmos = 0
    var homensAgressivos = 0
    var abaixo18 = 0
    var i = 0

   while (i <= 5){
    var idade = Number(prompt("Digite a Idade: "))
    var sexo = Number(prompt("Informe o seu Sexo: \n1 - Masculino\n2 - Feminino\n3 - Outros"))
    var temperamento = Number(prompt("Informe o seu Temperamento: \n1 - Calmo\n2 - Nervoso\n3 - Agressivo"))

    if (idade <= 18 && temperamento == 1) { // calmos abaixo de 18
       abaixo18++
       totalCalmas++
    }
    if (idade >= 40 && temperamento == 2) { // nervosos acima de 40
        faustao++
    }
    if (sexo == 2 && temperamento == 2) { // mulheres nervosas
        mulheresNervosas++
    }
    if (temperamento == 1){ // total calmas
        totalCalmas++
    }
   if (sexo == 3 && temperamento == 1){ // Outros calmos
    outrosCalmos++
    totalCalmas++
   }
   if (sexo == 1 && temperamento == 3) { // homens agressivos
    homensAgressivos++
   }

    i++
  

   }

   alert(`Números de Pessoas Calmas: ${totalCalmas}
   \nNúmero de Mulheres Nervosas: ${mulheresNervosas}
   \nNúmero de Homens Agressivos: ${homensAgressivos}
   \nNúmero de Outros Calmos: ${outrosCalmos}
   \nPessoas Nervosas Acima de 40: ${faustao}
   \nPessoas Calmas Abaixo de 18: ${abaixo18}`) 