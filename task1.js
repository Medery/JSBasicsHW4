'use strict';

const purchaseInEuro = 24; 

const convertEuroToRubles = (euroAmount) => {
    const euroToDollarRate = 1.2; 
    const dollarToRubleRate = 73; 
  
    const rubles = euroAmount * euroToDollarRate * dollarToRubleRate;
  
    return rubles;
}

const purchaseInRubles = convertEuroToRubles(purchaseInEuro);
console.log(`Стоимость покупки в рублях: ${purchaseInRubles}`);
  