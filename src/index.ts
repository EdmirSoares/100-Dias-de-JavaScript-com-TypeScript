import PromptSync from "prompt-sync";

import PartOne from "./PartOne";
import PartTwo from "./PartTwo";
import PartThree from "./PartThree";


const prompt = PromptSync({ sigint: true });

const partOne = PartOne()
const partTwo = PartTwo()
const partThree = PartThree()

const functions: Record<string, () => void | Promise<void>> = {
    ...partOne,
    ...partTwo,
    ...partThree
};

const functionsKeys = Object.keys(functions);
const pageSize = 10;

async function Menu(page: number = 0) {
    console.clear();
    console.log("#### Menu Principal ####");

    const startPage = page * pageSize;
    const endPage = startPage + pageSize;
    const currentPage = functionsKeys.slice(startPage, endPage);

    currentPage.forEach((valueKey, index) => {
        console.log(`${index + 1 + startPage} - ${valueKey}`);
    });

    console.log("\n Navegação: ");
    if (page > 0) console.log("P - Página Anterior");
    if (endPage < functionsKeys.length) console.log("N - Próxima Página");
    console.log("S - Sair");
    console.log("\nEscolha uma opção: ");

    const promptChoice = prompt("> ").toLowerCase();

    if (promptChoice === "s") {
        console.log("Saindo...");
    } else if (promptChoice === "p" && page > 0) {
        Menu(page - 1);
    } else if (promptChoice === "n" && endPage < functionsKeys.length) {
        Menu(page + 1);
    } else {

        const selectedIndex = parseInt(promptChoice, 10) - 1;

        if (!isNaN(selectedIndex) && functionsKeys[selectedIndex]) {
            console.clear();
            console.log(`Executando: ${functionsKeys[selectedIndex]}\n`);
            await functions[functionsKeys[selectedIndex]]();
            prompt("\nPressione Enter para continuar...");
            Menu(page);
        } else {
            console.log("Opção inválida, tente novamente.");
            setTimeout(() => Menu(page), 1000);
        }
    }


}

Menu();