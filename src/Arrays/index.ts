import PromptSync from "prompt-sync";

export default function Arrays() {
    const prompt = PromptSync()

    const largestNumberInAnArray = () => {
        const arrNumbers: number[] = [];

        while (true) {
            const inputNumberPrompt: string | null = prompt("Informe um número para inserir no array ou F para finalizar: > ")

            if (inputNumberPrompt?.toLowerCase() !== "f" && Number(inputNumberPrompt)) {
                arrNumbers.push(Number(inputNumberPrompt))
                continue
            }

            if (inputNumberPrompt?.toLowerCase() === "f" && arrNumbers.length < 2) {
                console.log("Insira ao menos dois números!")
                continue
            }

            if (inputNumberPrompt?.toLowerCase() === "f") {
                break
            }
        }

        const largestNumber: number = arrNumbers.reduce((acc, value) => {
            return acc = acc > value ? acc : value
        }, 0)

        console.log(`Dentre os números informados, o maior é: ${largestNumber}!`)
    }

    const sortingAnArray = () => {
        const arrNumberToBeSorted: number[] = [5, 3, 8, 1, 2, 7, 4, 6];
        const arrStringToBeSorted: string[] = ["banana", "apple", "cherry", "date", "fig", "grape"];
    
        const sortArray = (arr: string[] | number[], ord: number) => {
            if (typeof arr[0] === "number") {
                return ([...arr] as number[]).sort((a, b) => ord === 0 ? a - b : b - a);
            } else {
                return ([...arr] as string[]).sort((a, b) => ord === 0 ? a.localeCompare(b) : b.localeCompare(a));
            }
        };
    
        const choicePrompt: number = Number(prompt("Informe 1 para ordenar um array de números ou 2 para um array de strings: "));
        
        if (isNaN(choicePrompt) || (choicePrompt !== 1 && choicePrompt !== 2)) {
            console.log("Opção inválida!");
            console.log("Operação cancelada pelo usuário");
            return;
        }

        const direction: number = Number(prompt("Para ordenar em ordem crescente, digite 0, para ordem decrescente, digite 1: "))
    
        if (choicePrompt === 1) {
            const sortedNumbers = sortArray(arrNumberToBeSorted, direction);
            console.log("Array sem orndenação:", arrNumberToBeSorted)
            console.log("Array de números ordenado:", sortedNumbers);
        } else if (choicePrompt === 2) {
            console.log("Array sem orndenação:", arrStringToBeSorted)
            const sortedStrings = sortArray(arrStringToBeSorted, direction);
            console.log("Array de strings ordenado:", sortedStrings);
        }
    };

    return {
        largestNumberInAnArray,
        sortingAnArray
    }

}