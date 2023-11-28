'use strict';

const totalAmount = 35000;
const itemsCount = 11;
const promoCode = "METHED";

const calculate = (total, itemCount, promoCode) => {
    if (itemCount > 10) {
      total *= 0.97; 
    }
  
    if (total > 30000) {
      total -= (total - 30000) * 0.15; 
    }
  
    if (promoCode === "METHED") {
      total *= 0.90; 
    } else if (promoCode === "G3H2Z1" && total > 2000) {
      total -= 500; 
    }
  
    return total;
  }
  

  const finalTotal = calculate(totalAmount, itemsCount, promoCode);
  
  console.log(`Итоговая сумма корзины: ${finalTotal} руб.`);
  