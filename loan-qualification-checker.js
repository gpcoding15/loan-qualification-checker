const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;
const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;
const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

const getLoanMessage = (annualIncome, creditScore) => {
    if(annualIncome >= minIncomeForDuplex && creditScore >= minCreditScoreForDuplex) {
        return "You qualify for a duplex, condo, and car loan."
    } else if(annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
        return "You qualify for a condo and car loan."
    } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
        return "You qualify for a car loan."
    } else  {
        return "You don't qualify for any loans."
    }
};

module.exports = {
    getLoanMessage
}