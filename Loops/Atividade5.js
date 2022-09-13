// Crie um programa que leia um número do teclado até que encontre
// um número igual a zero. No final, mostre a soma dos números digitados.(DO...WHILE)


  var soma = 0

  do {
    
    var num = Number(prompt("Digite um Número: "))
    soma += num

  } while (num != 0)
    alert(`A soma dos números é: ${soma}`)
    console.log(`A soma dos números é: ${soma}`)
  