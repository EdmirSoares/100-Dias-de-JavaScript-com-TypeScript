import PartOne from "./PartOne";
import PartTwo from "./PartTwo";

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

    phoneNumberFormatter();
};

Main();
