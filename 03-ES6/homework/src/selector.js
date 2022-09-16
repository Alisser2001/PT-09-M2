var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];
  if (typeof startEl === "undefined") {
    startEl = document.body;
  }
  if(matchFunc(startEl)){
    resultSet.push(startEl);
  }
  
  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  for(let i=0; i<startEl.children.length; i++){
    let elements = traverseDomAndCollectElements(matchFunc, startEl.children[i])
    resultSet = [...resultSet, ...elements];
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0] === '#'){
    return 'id'
  } else if (selector[0] === '.') {
    return 'class'
  } 
  let myArr = selector.split('');
  for(let i=0; i<myArr.length; i++) {
    if(myArr[i]==='.'){
      return 'tag.class'
    }
  }
  return 'tag'
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
   matchFunction = function(el){
    let myIdArr = el.id.split(' ');
    for (let i=0; i<myIdArr.length; i++) {
      myIdArr[i] = '#'+myIdArr[i];
    }
    if(el.id!==null) {
        return myIdArr.includes(selector);
    }
    return false;
   }
  } else if (selectorType === "class") {
    matchFunction = function(el){
      let myClassArr = el.className.split(' ');
      for (let i=0; i<myClassArr.length; i++){
        myClassArr[i] = '.'+myClassArr[i];
      }
      if(el.className !== null) {
        return myClassArr.includes(selector);
      }
   }
  } else if (selectorType === "tag.class") {
    matchFunction = function(el){
      let mySel = selector.split('.')
      if (el.tagName.toLowerCase() === mySel[0]){
        let myClassArr = el.className.split(' ');
        if(el.className !== null) {
          return myClassArr.includes(mySel[1]);
        }
      }
      return false;
    }
  } else if (selectorType === "tag") {
    matchFunction = function(el){
      return el.tagName && (el.tagName.toLowerCase() === selector.toLowerCase())
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
