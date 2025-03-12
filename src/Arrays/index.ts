import PromptSync from "prompt-sync";

export default function Arrays() {
    const prompt = PromptSync();

    const largestNumberInAnArray = () => {
        const arrNumbers: number[] = [];

        while (true) {
            const inputNumberPrompt: string | null = prompt(
                "Informe um número para inserir no array ou F para finalizar: > "
            );

            if (
                inputNumberPrompt?.toLowerCase() !== "f" &&
                Number(inputNumberPrompt)
            ) {
                arrNumbers.push(Number(inputNumberPrompt));
                continue;
            }

            if (
                inputNumberPrompt?.toLowerCase() === "f" &&
                arrNumbers.length < 2
            ) {
                console.log("Insira ao menos dois números!");
                continue;
            }

            if (inputNumberPrompt?.toLowerCase() === "f") {
                break;
            }
        }

        const largestNumber: number = arrNumbers.reduce((acc, value) => {
            return (acc = acc > value ? acc : value);
        }, 0);

        console.log(
            `Dentre os números informados, o maior é: ${largestNumber}!`
        );
    };

    const sortingAnArray = () => {
        const arrNumberToBeSorted: number[] = [5, 3, 8, 1, 2, 7, 4, 6];
        const arrStringToBeSorted: string[] = [
            "banana",
            "apple",
            "cherry",
            "date",
            "fig",
            "grape",
        ];

        const sortArray = (arr: string[] | number[], ord: number) => {
            if (typeof arr[0] === "number") {
                return ([...arr] as number[]).sort((a, b) =>
                    ord === 0 ? a - b : b - a
                );
            } else {
                return ([...arr] as string[]).sort((a, b) =>
                    ord === 0 ? a.localeCompare(b) : b.localeCompare(a)
                );
            }
        };

        const choicePrompt: number = Number(
            prompt(
                "Informe 1 para ordenar um array de números ou 2 para um array de strings: "
            )
        );

        if (isNaN(choicePrompt) || (choicePrompt !== 1 && choicePrompt !== 2)) {
            console.log("Opção inválida!");
            console.log("Operação cancelada pelo usuário");
            return;
        }

        const direction: number = Number(
            prompt(
                "Para ordenar em ordem crescente, digite 0, para ordem decrescente, digite 1: "
            )
        );

        if (choicePrompt === 1) {
            const sortedNumbers = sortArray(arrNumberToBeSorted, direction);
            console.log("Array sem orndenação:", arrNumberToBeSorted);
            console.log("Array de números ordenado:", sortedNumbers);
        } else if (choicePrompt === 2) {
            console.log("Array sem orndenação:", arrStringToBeSorted);
            const sortedStrings = sortArray(arrStringToBeSorted, direction);
            console.log("Array de strings ordenado:", sortedStrings);
        }
    };

    const removeDuplicatesWithReduce = () => {
        const arrWithDuplicates: string[] = [
            "apple",
            "banana",
            "apple",
            "cherry",
            "banana",
            "date",
            "fig",
            "fig",
            "grape",
        ];
        const arrWithoutDuplicates = arrWithDuplicates.reduce((acc, value) => {
            if (!acc.includes(value)) {
                acc.push(value);
            }
            return acc;
        }, [] as string[]);

        console.log(`Array com duplicatas: ${arrWithDuplicates}`);
        console.log(`Array sem duplicatas: ${arrWithoutDuplicates}`);
    };

    const removeDuplicatesEasyWay = () => {
        const arrWithDuplicates: string[] = [
            "apple",
            "banana",
            "apple",
            "cherry",
            "banana",
            "date",
            "fig",
            "fig",
            "grape",
        ];
        const arrWithoutDuplicates = [...new Set(arrWithDuplicates)];

        console.log(`Array com duplicatas: ${arrWithDuplicates}`);
        console.log(`Array sem duplicatas: ${arrWithoutDuplicates}`);
    };

    const sumValuesArray = () => {
        const arrValues: number[] = [];
        while (true) {
            const valuePrompt: string | null = prompt(
                "Informe um número para incluir no array ou 0 para finalizar!"
            );

            if (valuePrompt === "0" && arrValues.length > 1) {
                console.log("Prosseguindo com a operação...\n");
                break;
            }

            if (valuePrompt === "0" && arrValues.length < 2) {
                console.log(
                    "É necessário dois ou mais valores para prosseguir com a operação!\n"
                );
                continue;
            }

            if (isNaN(Number(valuePrompt)) || valuePrompt === null) {
                console.log("Insira um dado válido!\n");
                continue;
            }
            arrValues.push(Number(valuePrompt));
            console.log(`Valor inserido ${valuePrompt}`);
        }

        const totalSum: number = arrValues.reduce((acc, value) => {
            return (acc += value);
        }, 0);

        console.log(`O valor da soma dos valores informados é de: ${totalSum}`);
    };

    const separeteOddAndEven = () => {
        const arrEven: number[] = []
        const arrOdd: number[] = []

        let limitPrompt: string | null = prompt(
            "Informe um número entre 1 e 100: "
        );

        const convertedLimitPrompt = Number(limitPrompt)

        if (limitPrompt === null || isNaN(Number(limitPrompt))) {
            console.log("Valor inválido!\nFinalizando a operação...")
            return
        }

        for (let i = 0; i <= convertedLimitPrompt; i++) {
            if (i % 2 === 0) {
                arrEven.push(i)
            } else {
                arrOdd.push(i)
            }
        }

        arrEven.shift()

        //exibir todos os valores do array separados por vírgula
        console.log(`Todos os números pares até o limite informado: ${arrEven.join(", ")}`)
        console.log(`Todos os números ímpares até o limite informado: ${arrOdd.join(", ")}`)

    };

    const reverseArray = () => {
        const arrNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const arrStrings: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

        const choicePrompt: string |null = prompt("Informe N para reverter um array de números ou S para um array de strings: ")

        if(choicePrompt.toLowerCase() === "n" ){
            console.log(`Array antes de reverter: ${arrNumbers.join(", ")}`)
            console.log(`Array revertido: ${arrNumbers.reverse().join(", ")}`)
        }

        if(choicePrompt.toLowerCase() === "s" ){
            console.log(`Array antes de reverter: ${arrStrings.join(", ")}`)
            console.log(`Array revertido: ${arrStrings.reverse().join(", ")}`)
        }
    }

    return {
        largestNumberInAnArray,
        sortingAnArray,
        removeDuplicatesWithReduce,
        removeDuplicatesEasyWay,
        sumValuesArray,
        separeteOddAndEven,
        reverseArray
    };
}
