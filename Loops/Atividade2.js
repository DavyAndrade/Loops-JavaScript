// Ler 10 números e imprimir quantos são pares e quantos são ímpares. (FOR)


 var par = 0
 var impar = 0

    for (i = 1; i <=10; i++) {
    var num = Number(prompt("Digite um Número: "))
    if (num %2==0) {
        par++   }
    else impar++
    }

    console.log(`${par} dos números são Pares`)
    console.log(`${impar} dos números são Ímpares`)