'use strict';


const capitalizeString = (str) => {
    if (!str) return str; 
  
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  
  const originalString = "ВлфывллЛфылвЛЫ ФЛЫЛВЫ ЛЫ";
  const capitalizedString = capitalizeString(originalString);
  
  console.log(capitalizedString); 
  