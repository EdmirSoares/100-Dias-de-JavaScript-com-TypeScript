import promptSync from 'prompt-sync';
import Verifications from '../utils/Verifications';
import BasicFormatters from '../utils/BasicFormatters';

export default function PartOne() {
    const prompt = promptSync({ sigint: true });
    const { isNullOrNan } = Verifications()
    const { padStartFormatter } = BasicFormatters()

    const calcAverage = () => {

        console.log("Digite os 3 números para realizar a operação!")

        let numbers: number[] = []

        for (let i = 0; i < 3; i++) {

            const numberInput: number | null = parseFloat(prompt(`Digite o ${i + 1}º número: `));

            if (isNullOrNan(numberInput)) {
                return
            }

            numbers.push(numberInput)

        }

        const total = numbers.reduce((acc: number, value: number) => {
            return acc + value
        }, 0)

        console.log(`A média dos números é de: ${(total / numbers.length).toFixed(1)}`)
    }

    const evenOrOdd = () => {
        console.log("Verifique se um número é par ou impar!")

        const numberInput: number | null = parseFloat(prompt("Informe o valor que deseja verificar: "))

        if (numberInput === null) {
            console.error("Operação Inválida!")
            return
        }

        if (isNaN(numberInput)) {
            console.error("Informe um número válido!")
            return
        }

        numberInput % 2 !== 0 ? console.log(`O número ${numberInput} é impar!`) : console.log(`O número ${numberInput} é par!`)

    }

    const celciusToFahrenheit = () => {
        const celciusPrompt: number | null = parseFloat(prompt("Insira o valor que deseja "))

        if (isNullOrNan(celciusPrompt)) {
            return
        }

        const fahrenheitValue: number = (celciusPrompt * 1.8) + 32

        console.log(`A temperatura convertida para Fahrenheit é: ${fahrenheitValue}F`)
    }

    const primeNumber = () => {

        const numberInput: number | null = parseFloat(prompt(`Insira o número que deseja verificar: `))
        let valueControl: number = 0

        if (isNullOrNan(numberInput)) {
            return
        }

        for (let i = 1; i <= numberInput; i++) {
            if (numberInput % i === 0) {
                valueControl++
            }
        }

        if (valueControl === 2) {
            console.log(`O número ${numberInput} é primo!`)
        } else {
            console.log(`O número ${numberInput} não é primo!`)
        }
    }

    const biggestNumber = () => {
        let arrNumbers = []
        let result: number = 0

        for (let i = 0; i < 3; i++) {

            const numberInput: number | null = parseFloat(prompt(`Insira o ${i + 1}º Valor: `))


            if (isNullOrNan(numberInput)) {
                console.log("Finalizando Operação...")
                return
            }

            arrNumbers.push(numberInput)
        }

        arrNumbers.map((currentElement: number) => {
            result = currentElement > result ? currentElement : result
        })

        console.log(`O maior número é: ${result}`)
    }

    const factorialNumber = () => {
        const numberInput: number | null = parseInt(prompt("Insira o número que deseja calcular: "))
        let result: number = 1

        if (isNullOrNan(numberInput)) {
            return
        }

        for (let i = numberInput; i > 0; i--) {
            result *= i
        }

        console.log(`O fatorial de ${numberInput} é: ${result}`);
    }

    const fizzAndBuzz = () => {
        const arrItens: string[] = []

        for (let i = 1; i <= 100; i++) {
            arrItens.push(i.toString())
        }
        console.log("Convertando múltiplos de 3 para Fizz, de 5 para Buzz e de 3")
        console.log("Números antes da conversão: \n", arrItens)

        for (let i = 0; i < arrItens.length; i++) {
            if (parseInt(arrItens[i]) % 3 === 0 && parseInt(arrItens[i]) % 5 === 0) {
                arrItens[i] = "FizzBuzz"
            } else if (parseInt(arrItens[i]) % 3 === 0) {
                (arrItens[i]) = "Fizz"
            } else if (parseInt(arrItens[i]) % 5 === 0) {
                arrItens[i] = "Buzz"
            }
        }
        console.log("Números após da conversão: \n", arrItens)
    }

    const secondsToHourFomate = () => {
        const secondsValue: number = 7384;

        const hour: number = Math.floor(secondsValue / 3600)

        const minutesRest: number = (secondsValue % 3600)
        const minutes: number = Math.floor(minutesRest / 60)

        const seconds = minutesRest % 60

        console.log(`O valor 7384 segundos, convertido para horas, resulta em: ${padStartFormatter(hour, 2, "0")}:${padStartFormatter(minutes, 2, "0")}:${padStartFormatter(seconds, 2, "0")}`)
    }

    const numberPalindrome = () => {

        console.log("Verificador Palindromo de números!")
        const numberInput: number | null = parseFloat(prompt("Informe o número que deseja verificar: "))

        if (isNullOrNan(numberInput)) {
            return
        }

        const arrNumbers = String(numberInput).split("")
        const reverseArrNumbers = arrNumbers.slice().reverse()

        for (let i = 0; i < arrNumbers.length; i++) {

            if(arrNumbers[i] !== reverseArrNumbers[i]){
                console.log("O número informado não é um palíndromo!")
                return
            }
        }

        console.log(`O número ${numberInput} é um palindromo!`)

    }

    const fibonacciSequence = ()=>{
        const numberInput: number | null = Number(prompt("Insira o valor alvo para o calculo: "))

        let fibA  = 1, fibB = 1;

        for (let i = 3; i <= numberInput; i++) {
            let fibC = fibA + fibB;
            fibA = fibB;
            fibB = fibC;
        }
        
        console.log(`O número final da sequencia Fibonacci para o número ${numberInput} é: ${fibB}`)
    }

    return {
        calcAverage,
        evenOrOdd,
        celciusToFahrenheit,
        primeNumber,
        biggestNumber,
        factorialNumber,
        fizzAndBuzz,
        secondsToHourFomate,
        numberPalindrome,
        fibonacciSequence
    }

}