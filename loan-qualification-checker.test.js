const { getLoanMessage } = require('./loan-qualification-checker');

describe('loan-qualification-checker', () => {
    test("qualifies for duplex, condo, and car when income & credit values are greater than duplex thresholds", () => {
        const annualIncome = 85000;
        const creditScore = 850;

        const result = getLoanMessage(annualIncome, creditScore);

        expect(result).toBe("You qualify for a duplex, condo, and car loan.")
    });

    test("qualifies for duplex, condo, and car when income & credit values are equal than duplex thresholds", () => {
        const annualIncome = 60000;
        const creditScore = 700;

        const result = getLoanMessage(annualIncome, creditScore);

        expect(result).toBe("You qualify for a duplex, condo, and car loan.")
    });

    test("qualifies for a condo, and car when income & credit values are equal when meeting condo thresholds", () => {
        const annualIncome = 65000;
        const creditScore = 690;

        const result = getLoanMessage(annualIncome, creditScore);

        expect(result).toBe("You qualify for a condo and car loan.")
    });

    test("qualifies for a condo, and car when income & credit values are equal when meeting condo thresholds", () => {
        const annualIncome = 45000;
        const creditScore = 680;

        const result = getLoanMessage(annualIncome, creditScore);

        expect(result).toBe("You qualify for a condo and car loan.")
    });

    test("qualifies for a car when income & credit values are greater when meeting car thresholds", () => {
        const annualIncome = 35000;
        const creditScore = 700;

        const result = getLoanMessage(annualIncome, creditScore);

        expect(result).toBe("You qualify for a car loan.")
    });

    test("qualifies for a car when income & credit values are equal when meeting car thresholds", () => {
        const annualIncome = 30000;
        const creditScore = 650;

        const result = getLoanMessage(annualIncome, creditScore);

        expect(result).toBe("You qualify for a car loan.")
    });

    test("does not qualifies for any loan  when income & credit values are less than car thresholds", () => {
        const annualIncome = 25000;
        const creditScore = 600;

        const result = getLoanMessage(annualIncome, creditScore);

        expect(result).toBe("You don't qualify for any loans.")
    });




});