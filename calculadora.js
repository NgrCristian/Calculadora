<script>
 // function soma(n1,n2) {
 //   const soma = n1 + n2
 //   return soma
 // }

 // function subtrair(n1,n2) {
 //   const subtracao = n1 - n2
 //   return subtracao
 // }

 // function multiplicaçao(n1,n2) {
 //   const mult = n1 * n2
 //   return mult
 // }

 // function divisao(n1,n2) {
 //   const dividir = n1 / n2
 //   return dividir
 // }

 
 const soma = (n1,n2) => n1+n2
 const subtrair = (n1,n2) => n1-n2
 const multiplicação = (n1,n2) =› n1*n2
 const divisao = (n1, n2) => n1/n2

 const numero1 = Number(prompt("Digite primeiro numero"))
 const numero2 = Number(prompt("Digite segundo numero"))

 alert (`Soma:${soma(numero1, numero2)}`)
 alert(`Subtração:${subtrair(numero1, numero2)}`)
 alert(`Multiplicação:${multiplicaçao(numero1,numero2)}`)
 alert(`Divisão:${divisao(numero1,numero2)}`)


</script>

