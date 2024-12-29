export function numberToPrice(number: number): string {
    const price = (number/100).toFixed(2);
    return `${price}€`;
}