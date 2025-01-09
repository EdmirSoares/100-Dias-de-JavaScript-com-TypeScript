
import promptSync from 'prompt-sync';

const prompt = promptSync({ sigint: true });

const ExercicioUm = () => {
    //Calcule a média de três números fornecidos pelo usuário.

    let numbers: number[] = []

    for (let i = 0; i < 3; i++) {

        const numberInput: string | null = prompt(`Digite o ${i + 1}º número: `);

        if (numberInput === null) {
            console.error('Entrada Cancelada')
            return
        }

        const valueNumber: number = parseFloat(numberInput)

        if (isNaN(valueNumber)) {
            console.error("entrada inválida! Insira um número")
            return
        }

        numbers.push(valueNumber)

    }

    const total = numbers.reduce((acc: number, value :number)=>{
        return acc + value
    },0)

    console.log(`A média dos números é de: ${(total/numbers.length).toFixed(1)}`)

}

export default ExercicioUm;