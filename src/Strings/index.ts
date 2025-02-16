import promptSync from "prompt-sync";

//Manipulação de Strings

export default function Strings() {
    const prompt = promptSync({ sigint: true });

    const palindromeString = () => {
        console.log("Verifique se uma palavra é um Palíndromo");
        const stringPrompt: string | null = prompt(
            "Insira a palavra que deseja verificar ou aperte Enter para cancelar: "
        );

        if (stringPrompt === null || stringPrompt === "") {
            console.log("Operação cancelada pelo usuário");
            return;
        }

        const arrString: string[] = stringPrompt.split("");
        const reverseArrString: string[] = arrString.slice().reverse();

        const result = arrString.some((value: string, index: number) => {
            return value === reverseArrString[index] ? true : false;
        });

        console.log(
            result
                ? `A palavra ${stringPrompt} é um Palíndromo! Possui os mesmos caracteres em ambos sentidos!`
                : `A palavra ${stringPrompt} não é um Palíndromo!`
        );
    };

    const convertToCapitalizeString = () => {
        const stringPrompt: string | null = prompt(
            "Insira a frase que deseja converter ou pressiona Enter para cancelar: "
        );

        if (stringPrompt === null || stringPrompt === "") {
            console.log("Operação cancelada pelo usuário");
            return;
        }

        const arrPhrase: string[] = stringPrompt
            .split(" ")
            .map(
                (value: string) =>
                    value.charAt(0).toUpperCase() + value.slice(1)
            );
        console.log(`frase Convertida:\n${arrPhrase.join(" ")}`);
    };

    const countVogals = () => {
        const stringPrompt: string | null = prompt(
            "Informe a palavra que deseja verificar: "
        );
        const regex: RegExp = /^[aeiou]+$/i;
        let numberOfVogals = 0;

        if (stringPrompt === null || stringPrompt === "") {
            console.log("Operação cancelada pelo usuário");
            return;
        }

        const arrString: string[] = stringPrompt.split("");

        arrString.forEach((value) => {
            if (regex.test(value)) {
                numberOfVogals++;
            }
        });

        console.log(
            numberOfVogals > 0
                ? `O total de vogais presentes na palavra ${stringPrompt} é: ${numberOfVogals}`
                : `A palavra ${stringPrompt} não possui vogais!`
        );
    };

    const changeWord = () => {
        const phrasePrompt: string | null = prompt("Informe a frase: ");
        const replacedWordPrompt: string | null = prompt(
            "Informe a palavra presente na frase, que deseja substituir: "
        );
        const wordToReplacePrompt: string | null = prompt(
            "Agora informe a nova palavra: "
        );

        const arrString: string[] = phrasePrompt.split(" ");

        arrString.forEach((value: string, index: number) => {
            if (arrString[index] === replacedWordPrompt) {
                arrString[index] = wordToReplacePrompt;
            }
        });

        const changedPhrase: string = arrString.join(" ");

        console.log(changedPhrase);
    };

    const reversedWord = () => {
        const wordToReversPrompt: string | null = prompt(
            "Informe a palavra que deseja reverter: "
        );

        const reversedWord: string = wordToReversPrompt
            .split("")
            .reverse()
            .join("");
        console.log(reversedWord);
    };

    const wordCount = () => {
        const phrasePrompt: string | null = prompt(
            "Informe a frase ou texto que deseja verificar: "
        );

        if (phrasePrompt === null || phrasePrompt === "") {
            console.log("Operação cancelada pelo usuário");
            return;
        }

        const cleanedPhrase = phrasePrompt.replace(
            /[^\w\sà-úÀ-Úâ-ûÂ-Ûã-õÃ-Õä-üÄ-Üá-úÁ-ÚçÇ]/g,
            ""
        );

        const arrPhrase = cleanedPhrase
            .split(" ")
            .filter((word) => word.length > 0);

        const numberOfWords = arrPhrase.length;

        console.log(`O total de palavras na frase é: ${numberOfWords}`);
    };

    const findEmailDomain = () => {
        const emailPrompt: string | null = prompt(
            "Informe o email que deseja verificar: "
        );
        if (
            emailPrompt === null ||
            emailPrompt === "" ||
            !emailPrompt.includes("@")
        ) {
            console.log("Operação cancelada pelo usuário");
            return;
        }

        const emailDomain: string = emailPrompt.split("@")[1];
        console.log(`O domínio do email informado é ${emailDomain}`);
    };

    const replaceSpacesWithHyphen = () => {
        const phrasePrompt: string | null = prompt(
            "Informe a frase que contém os espaços que deseja verificar: "
        );
        if (
            phrasePrompt === null ||
            phrasePrompt === "" ||
            !phrasePrompt.includes(" ")
        ) {
            console.log("Operação cancelada pelo usuário");
            return;
        }

        const replacedPhrase: string = phrasePrompt.replace(/ /g, "-");
        console.log(`A frase informada foi: ${phrasePrompt}`);
        console.log(
            `Substituindo os espaços por hífen, o resultado é: ${replacedPhrase}`
        );
    };

    const cpfVerification = () => {
        const cpfPrompt: string | null = prompt(
            "Informe o cpf que deseja verificar: "
        );
        if (cpfPrompt === null || cpfPrompt === "") {
            console.log("Operação cancelada pelo usuário");
            return;
        }

        const clearCPF: string[] = cpfPrompt
            .replace(/\./g, "")
            .replace(/\D/g, "")
            .split("");
        const arrVerification: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2];

        let firstDigit = 0;
        let secondDigit = 0;

        for (let i = 0; i < clearCPF.length; i++) {
            firstDigit += Number(clearCPF[i]) * arrVerification[i];
        }

        firstDigit = firstDigit % 11 >= 2 ? 11 - (firstDigit % 11) : 0;

        clearCPF.push(String(firstDigit));
        arrVerification.unshift(11);

        for (let i = 0; i < clearCPF.length; i++) {
            secondDigit += Number(clearCPF[i]) * arrVerification[i];
        }
        secondDigit = secondDigit % 11 >= 2 ? 11 - (secondDigit % 11) : 0;
        clearCPF.push(String(secondDigit));

        const maskedCPF = clearCPF
            .join("")
            .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        console.log(maskedCPF);
    };

    const phoneNumberFormatter = () => {
        //(XX) X XXXX-XXXX
        const phoneNumberPrompt: string | null = prompt(
            "Informe com DDD o número do telefone que deseja formatar: "
        );
        if (phoneNumberPrompt === null || phoneNumberPrompt === "") {
            console.log("Operação cancelada pelo usuário");
            return;
        }

        const regex = /[^\d]/g;
        const clearPhoneNumber: string = phoneNumberPrompt.replace(regex, "");

        if (!/^\d+$/.test(clearPhoneNumber)) {
            console.log("Insira somente números!");
            return;
        }

        if (clearPhoneNumber.length !== 11) {
            console.log("Informe os onze dígitos do número, incluindo o DDD!");
            return;
        }

        const maskedNumber: string = clearPhoneNumber.replace(
            /(\d{2})(\d{1})(\d{4})(\d{4})/,
            "($1) $2 $3-$4"
        );
        console.log(`Número formatado ${maskedNumber}`);
    };

    return {
        palindromeString,
        convertToCapitalizeString,
        countVogals,
        changeWord,
        reversedWord,
        wordCount,
        findEmailDomain,
        replaceSpacesWithHyphen,
        cpfVerification,
        phoneNumberFormatter,
    };
}
