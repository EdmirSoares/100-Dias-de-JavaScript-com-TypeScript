import promptSync from 'prompt-sync';

export default function PartTwo() {

    const prompt = promptSync({ sigint: true });

    const palindromeString = () => {
        console.log("Verifique se uma palavra é um Palíndromo")
        const stringPrompt: string | null = prompt("Insira a palavra que deseja verificar ou aperte Enter para cancelar: ")

        if (stringPrompt === null || stringPrompt === "") {
            console.log("Operação cancelada pelo usuário")
            return
        }

        const arrString: string[] = stringPrompt.split("")
        const reverseArrString: string[] = arrString.slice().reverse()

        const result = arrString.some((value: string, index: number) => { return value === reverseArrString[index] ? true : false })

        console.log(result ? `A palavra ${stringPrompt} é um Palíndromo! Possui os mesmos caracteres em ambos sentidos!` : `A palavra ${stringPrompt} não é um Palíndromo!`)
    }

    const convertToCapitalizeString = () => {
        const stringPrompt: string | null = prompt("Insira a frase que deseja converter ou pressiona Enter para cancelar: ")

        if (stringPrompt === null || stringPrompt === "") {
            console.log("Operação cancelada pelo usuário")
            return
        }

        const arrPhrase: string[] = stringPrompt.split(" ").map((value: string) => value.charAt(0).toUpperCase() + value.slice(1))
        console.log(`frase Convertida:\n${arrPhrase.join(" ")}`)
    }

    const countVogals = () => {
        const stringPrompt: string | null = prompt("Informe a palavra que deseja verificar: ")
        const regex = /^[aeiou]+$/i;
        let numberOfVogals = 0

        if (stringPrompt === null || stringPrompt === "") {
            console.log("Operação cancelada pelo usuário");
            return
        }

        const arrString: string[] = stringPrompt.split("")

        arrString.forEach((value) => {
            if (regex.test(value)) {
                numberOfVogals++
            }
        })

        console.log(numberOfVogals > 0 ? `O total de vogais presentes na palavra ${stringPrompt} é: ${numberOfVogals}`: `A palavra ${stringPrompt} não possui vogais!`)
        
    }

    return {
        palindromeString,
        convertToCapitalizeString,
        countVogals
    }

}