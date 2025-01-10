import promptSync from 'prompt-sync';
import Verifications from '../utils/VerifyNullAndNaN';

export default function PartOne() {
    const prompt = promptSync({ sigint: true });
    const { isNullOrNan } = Verifications()

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

    return {
        calcAverage,
        evenOrOdd,
        celciusToFahrenheit,
        primeNumber,
        biggestNumber,
        factorialNumber
    }

}