import PartOne from "./PartOne";
import PartTwo from "./PartTwo";
import PartThree from "./PartThree";

const Main = () => {
    const {
        calcAverage,
        evenOrOdd,
        celciusToFahrenheit,
        primeNumber,
        biggestNumber,
        factorialNumber,
        fizzAndBuzz,
        secondsToHourFomate,
        numberPalindrome,
        fibonacciSequence,
    } = PartOne();

    const {
        palindromeString,
        convertToCapitalizeString,
        countVogals,
        changeWord,
        reversedWord,
        wordCount,
        findEmailDomain,
        replaceSpacesWithHyphen,
        cpfVerification,
        phoneNumberFormatter
    } = PartTwo()

    const{
        loginSystemSimulation,
        randomNumberGuesser
    } = PartThree()

    randomNumberGuesser();
};

Main();
