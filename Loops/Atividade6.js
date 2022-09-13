// Escrever um programa que receba vários números inteiros no teclado. 
// E no final imprimir a média dos números múltiplos de 3.
// Para sair digitar 0 (zero).(DO...WHILE)


var media
var soma = 0

do {
  
  var num = Number(prompt("Digite 0 Para Sair!\nDigite um Número: "))
  soma += num
  media = soma / 3

} while (num != 0)

  alert(`A média dos números digitados é: ${Math. round(media * 100) / 100}`)
  console.log(`A média dos números é: ${Math. round(media * 100) / 100}`)
