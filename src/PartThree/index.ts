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

        const randomNumber = Math.floor((Math.random()) * 10) + 1
        console.log(`Seu palpite foi :${numberUserPrompt}, o número gerado foi: ${randomNumber}`)

        if(numberUserPrompt !== randomNumber){
            console.log("Que pena, você errou! Boa sorte na próxima.")
            await new Promise((resolve) => setTimeout(resolve, 500));
            console.log("HAHAHAHA")
        } else {
            console.log("Você acertou! Seu palpite foi certeiro, parabéns! Apesar disso ser pura sorte...")
        }
    }

    return {
        loginSystemSimulation,
        randomNumberGuesser
    };
}
