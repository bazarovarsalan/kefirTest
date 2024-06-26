export function wordHelper(quantity: number, words: string[]): string {
    quantity = Math.abs(quantity) % 100;
    let num = quantity % 10;
    if (quantity > 10 && quantity < 20)
        return quantity.toString() + " " + words[2];
    if (num > 1 && num < 5) return quantity.toString() + " " + words[1];
    if (num === 1) return quantity.toString() + " " + words[0];
    return quantity.toString() + " " + words[2];
}
