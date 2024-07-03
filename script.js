function calculateNearestGrams() {
    const pricePerKg = parseFloat(document.getElementById('pricePerKg').value);
    const totalAmount = parseFloat(document.getElementById('totalAmount').value);
    let desiredKopeck = document.getElementById('desiredKopeck').value;

    if (!pricePerKg || !totalAmount) {
        alert('Будь ласка, введіть всі необхідні дані.');
        return;
    }

    const pricePerGram = pricePerKg / 1000;
    const maxGrams = Math.floor(totalAmount / pricePerGram);

    if (desiredKopeck === "") {
        // Якщо копійки не вказані, використовуєм з totalAmount
        const totalAmountKopeck = Math.round((totalAmount % 1) * 100);
        if (totalAmountKopeck === 0) {
            desiredKopeck = -1; // Флаг для пошуку найближчого цілого числа
        } else {
            desiredKopeck = totalAmountKopeck;
        }
    } else {
        desiredKopeck = parseInt(desiredKopeck, 10);
    }

    let nearestGrams = null;
    let nearestSum = null;

    for (let grams = maxGrams; grams >= 0; grams--) {
        const currentSum = pricePerGram * grams;
        const currentKopeck = Math.round((currentSum % 1) * 100);

        if (desiredKopeck === -1) {
            // Найближче число без копійок
            if (currentKopeck === 0) {
                nearestGrams = grams;
                nearestSum = currentSum;
                break;
            }
        } else {
            // Пошук враховуючи копійки
            if (currentKopeck === desiredKopeck || (desiredKopeck === 0 && currentKopeck % 10 === 0)) {
                if (currentSum <= totalAmount) {
                    nearestGrams = grams;
                    nearestSum = currentSum;
                    break;
                }
            }
        }
    }

    if (nearestGrams !== null && nearestSum !== null) {
        document.getElementById('resultGrams').innerText = `Грам: ${nearestGrams}`;
        document.getElementById('resultSum').innerText = `Сума: ${nearestSum.toFixed(2)}`;
    } else {
        document.getElementById('resultGrams').innerText = `Не знайдено підходящого значення.`;
        document.getElementById('resultSum').innerText = ``;
    }
}
