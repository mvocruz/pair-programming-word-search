const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    let verticalJoin;
    let verticalArray = [];
    
    for (const horLetter of horizontalJoin) {
      if (horLetter.includes(word)) return true;
    }
    
    for (const index in letters[0]) {
      verticalArray.push([]);
      for (let i = 0; i < letters.length; i++) {
        verticalArray[index].push(letters[i][index]);
      }
    }
    
    verticalJoin = verticalArray.map(lss => lss.join(''));
    
    for (const verLetter of verticalJoin) {
      if (verLetter.includes(word)) return true;
    }
    
    return false;
  };
  
  
  
  
  module.exports = wordSearch;