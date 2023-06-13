export const postData = async (body: {
    principal: number;
    annualInterestRate: number;
    termOfLoan: number;
}): Promise<{ monthlyPayment: number }> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/mortgageCalculation`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
};
