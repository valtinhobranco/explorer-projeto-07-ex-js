
let valueOne = Number(prompt("Diga o primeiro valor")) 
let valueTwo = Number(prompt("Diga o segundo valor")) 

let sum = valueOne + valueTwo;
let subtraction = (valueOne - valueTwo).toFixed(0) ;
let multiplication = (valueOne * valueTwo).toFixed(0);
let division = valueOne / valueTwo;

let rest = valueOne % valueTwo;

const evenOrOdd = () => {
    if (sum % 2 === 0) {
      return  `A soma dos números é par: ${sum}`
    } else {
        return  `A soma dos números é impar: ${sum}`
   }
 }










alert(`
A soma entre ${valueOne} e ${valueTwo} é ${sum}
`)

alert(`
A subtração entre ${valueOne} e ${valueTwo} é  ${subtraction}
`)
alert(`
A multiplicação entre ${valueOne} e ${valueTwo} é  ${multiplication}
`)

alert(`
 A divisão entre ${valueOne} e ${valueTwo} é ${division}   
`)

alert(`
O resto entre ${valueOne} e ${valueTwo} é ${rest}
`)

alert(`${evenOrOdd()}`)

alert(`${ valueOne === valueTwo ? `Os valores são iguais ${valueOne} | ${valueTwo}` : `Os valores são diferentes ${valueOne} | ${valueTwo}`}`)








