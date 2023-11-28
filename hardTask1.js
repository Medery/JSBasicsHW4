'use srtict'

// const gcd = (a, b) => {
//     while (b !== 0) {
//       let t = b;
//       b = a % b;
//       a = t;
//     }
//     return a;
// }

// самый оптимальный на мой взгляд метод, но while мы еще не прошли... 
//пришлось хорошенько подумать

const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
}  

//хотя рекурсию мы тоже не проходили...

console.log(gcd(121, 66)); 
  