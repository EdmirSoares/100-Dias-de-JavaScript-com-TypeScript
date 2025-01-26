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
        const regex: RegExp = /^[aeiou]+$/i;
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

        console.log(numberOfVogals > 0 ? `O total de vogais presentes na palavra ${stringPrompt} é: ${numberOfVogals}` : `A palavra ${stringPrompt} não possui vogais!`)

    }

    const changeWord = () => {
        const phrasePrompt: string | null = prompt("Informe a frase: ")
        const replacedWordPrompt: string | null = prompt("Informe a palavra presente na frase, que deseja substituir: ")
        const wordToReplacePrompt: string | null = prompt("Agora informe a nova palavra: ")

        const arrString: string[] = phrasePrompt.split(" ")

        arrString.forEach((value: string, index: number) => {
            if (arrString[index] === replacedWordPrompt) {
                arrString[index] = wordToReplacePrompt
            }
        })

        const changedPhrase: string = arrString.join(" ")

        console.log(changedPhrase)
    }

    const reversedWord = () => {
        const wordToReversPrompt: string | null = prompt("Informe a palavra que deseja reverter: ")

        const reversedWord: string = wordToReversPrompt.split("").reverse().join("")
        console.log(reversedWord)
    }

    const wordCount = () => {
        const phrasePrompt: string | null = prompt("Informe a frase ou texto que deseja verificar: ");
        if (phrasePrompt === null || phrasePrompt === "") {
            console.log("Operação cancelada pelo usuário");
            return;
        }
    
        const cleanedPhrase = phrasePrompt.replace(/[^\w\sà-úÀ-Úâ-ûÂ-Ûã-õÃ-Õä-üÄ-Üá-úÁ-ÚçÇ]/g, "");
    
        const arrPhrase = cleanedPhrase.split(" ").filter(word => word.length > 0);
    
        const numberOfWords = arrPhrase.length;
    
        console.log(`O total de palavras na frase é: ${numberOfWords}`);
    }

    return {
        palindromeString,
        convertToCapitalizeString,
        countVogals,
        changeWord,
        reversedWord,
        wordCount
    }

}