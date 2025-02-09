import PromptSync from "prompt-sync";

//Estruturas de Controle

export default function PartThree() {
    const prompt = PromptSync({ sigint: true });

    const loginSystemSimulation = async () => {
        const loginData: {
            firstName: string;
            username: string;
            password: string;
        }[] = [];
        while (true) {
            console.log("Bem-vindo ao sistema!");
            console.log("1. Login");
            console.log("2. Registrar");
            console.log("9. Sair\n");

            const initialMenuPrompt: string | null = prompt(
                "Escolha uma opção: "
            );
            if (initialMenuPrompt === null) {
                console.log("Operação cancelada pelo usuário");
                break;
            }

            const initialMenu: number = parseInt(initialMenuPrompt);

            if (initialMenu === 9) {
                console.log("Fechando a aplicação....");
                break;
            }

            if (isNaN(initialMenu) || !initialMenu) {
                console.log(
                    "Opção inválida! Retornando ao menu principal...\n"
                );
                await new Promise(resolve => setTimeout(resolve, 1000));
                return
            }

            if (initialMenu === 1) {
                console.log("# Login");
                const userNamePrompt: string = prompt("Informe o usuário: ");
                const passwordPrompt: string = prompt("Informe a senha: ");
                let userFirstName = "";

                const findData: boolean = loginData.some((value) => {
                    if (
                        value.username === userNamePrompt &&
                        value.password === passwordPrompt
                    ) {
                        userFirstName = value.firstName;
                        return true;
                    } else {
                        return false;
                    }
                });

                if (findData) {
                    console.log(
                        `Login realizado com sucesso! Bem-vindo ${userFirstName}`
                    );
                    break;
                } else {
                    console.log("\nLogin ou senha incorretos!\n");
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    continue;
                }
            }

            if (initialMenu === 2) {
                console.log("# Registrar");

                const firstName: string = prompt("Qual o seu primeiro nome? ");
                const userNamePrompt: string = prompt(
                    "Informe o usuário que deseja cadastrar: "
                );
                const passwordPrompt: string = prompt(
                    "Informe a senha para este usuário: "
                );

                if (
                    firstName !== "" &&
                    userNamePrompt !== "" &&
                    passwordPrompt !== ""
                ) {
                    loginData.push({
                        firstName: firstName,
                        username: userNamePrompt,
                        password: passwordPrompt,
                    });
                    console.log("\nUsuário cadastrado com sucesso!\n");
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    continue
                }
                console.log("\nForneça todas as informações!\n");
                await new Promise((resolve) => setTimeout(resolve, 1000));
                continue
            }
        }
    };

    const randomNumberGuesser = async () => {
        console.log("Um número aleatório entre 1 e 10 será gerado, tente acerta-lo!")

        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Estamos gerando o número...")

        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Temos um número! Ele é...")

        await new Promise((resolve) => setTimeout(resolve, 500));
        console.log("Segredo!")

        await new Promise((resolve) => setTimeout(resolve, 500));
        const numberUserPrompt: number = Number(prompt("Qual é o seu palpite?: "))

        if (isNaN(numberUserPrompt)) {
            console.log("Operação cancelada pelo usuário, insira um valor numeral entre 1 e 10!")
            return
        }

        const randomNumber = Math.floor(Math.random() * 10) + 1
        console.log(`Seu palpite foi :${numberUserPrompt}, o número gerado foi: ${randomNumber}`)

        if (numberUserPrompt !== randomNumber) {
            console.log("Que pena, você errou! Boa sorte na próxima.")
            await new Promise((resolve) => setTimeout(resolve, 500));
            console.log("HAHAHAHA")
        } else {
            console.log("Você acertou! Seu palpite foi certeiro, parabéns! Apesar disso ser pura sorte...")
        }
    }

    const multiplicationTable = async () => {
        const numberUserPrompt: number | null = Number(prompt("Informe de qual número deseja exibir a tabuada: "))

        if (isNaN(numberUserPrompt) || null) {
            console.log("Informe um valor válido!")
            return
        }
        await new Promise((resolve) => setTimeout(resolve, 500));

        console.log("Calculando...")
        await new Promise((resolve) => setTimeout(resolve, 500));

        console.log(`Tabuada de ${numberUserPrompt}`)
        for (let i = 1; i < 11; i++) {
            console.log(`${numberUserPrompt} x ${i} = ${numberUserPrompt * i}`)
        }
    }

    const twoDiceRow = async () => {
        const firstDicePrompt: number | null = Number(prompt("Informe quantos lados tem o primeiro dado: "))
        let secondDicePrompt: number | null = Number(prompt("Informe quantos lados tem o segundo dado, ou digite 0 para jogar com dois dados iguais"))

        if (isNaN(firstDicePrompt) || isNaN(secondDicePrompt)) {
            console.log("Informe um valor válido!")
            return
        }

        if (secondDicePrompt === 0) {
            secondDicePrompt = firstDicePrompt
        }

        console.log("Rolando os dados...")
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const firstDiceResult = Math.floor(Math.random() * firstDicePrompt) + 1
        const secondDiceResults = Math.floor(Math.random() * secondDicePrompt) + 1

        console.log(`Primeiro dado: ${firstDiceResult}`)
        await new Promise((resolve) => setTimeout(resolve, 500));
        console.log(`Segundo dado: ${secondDiceResults}`)

    }

    const interactiveConsoleMenu = async () => {
        while (true) {
            console.log("Bem-vindo(a)!")
            await new Promise((resolve) => setTimeout(resolve, 1000));


            console.log("#### Menu Principal ####")
            console.log("1-Home\n02-Sobre\n3-Galeria\n4-Contato\n9-Sair")
            await new Promise((resolve) => setTimeout(resolve, 1000));

            const menuChoicePrompt: number | null = Number(prompt("Escolha uma das opções acima: "))

            if (isNaN(menuChoicePrompt) || menuChoicePrompt < 1 || menuChoicePrompt > 4) {
                if (menuChoicePrompt === 9) {
                    console.log("Finalizando aplicação...");
                    break;
                }
                console.log("Escolha uma opção válida!");
                console.log("Retornando ao menu principal...\n");
                continue;
            }

            if (menuChoicePrompt === 1) {
                console.log("Você está na Home Page!")
            } else if (menuChoicePrompt === 2) {
                console.log('Você está na seção "Sobre"!')
            } else if (menuChoicePrompt === 3) {
                console.log('Você está na seção "Galeria"!')
            } else {
                console.log('Você está na seção "Contatos"!')
            }
            await new Promise((resolve) => setTimeout(resolve, 1000));

            const returnToMenuPrompt: number = Number(prompt("Informe 1 para voltar ao menu ou 2 para sair: "))

            if (returnToMenuPrompt === 1) {
                console.log("Retornando ao menu Inicial...")
                continue
            } else {
                console.log("Encerrando a aplicação")
                break
            }

        }
    }

    const upToVote = () => {
        const usernamePrompt: string = prompt("Informe seu primeiro nome: ")
        const agePrompt: number = Number(prompt("Informe seu ano de Nascimento: "))

        if (isNaN(agePrompt)) {
            console.log("Valor inválido!")
            console.log("Cancelando operação...")
            return
        }

        const currentYear = new Date().getFullYear();
        const age = currentYear - agePrompt;

        if (age < 18) {
            console.log(`${usernamePrompt}, você não está ápto a votar! Sua idade é de ${age}, precisa ser maior de 18 anos!`)
        } else {
            console.log(`${usernamePrompt}, você tem ${age}, está ápto a votar!`)
        }
    }

    return {
        loginSystemSimulation,
        randomNumberGuesser,
        multiplicationTable,
        twoDiceRow,
        interactiveConsoleMenu,
        upToVote
    };
}
