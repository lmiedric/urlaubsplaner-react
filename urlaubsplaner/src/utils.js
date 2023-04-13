export default function isLeapYear(year) {
    const isDivisibleByFour = (0 === year % 4);
    const isDivisibleBy100 = (0 === year % 100);
    const isDivisibleBy400 = (0 === year % 400);

    if ((isDivisibleByFour && !isDivisibleBy100)
        || isDivisibleBy400) {
        return true;
    }
    
    return false;
}