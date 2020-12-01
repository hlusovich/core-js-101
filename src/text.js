function removeFirstOccurrences(str, value) {
  let index = str.indexOf(value);
  return str.slice(0, index) + str.slice(index + value.length)
}
console.log(removeFirstOccurrences('I like legends', 'end'  )==='I like legs')
function unbracketTag(str) {
  return  str.slice(1,str.length-1)
}
console.log(unbracketTag(`<div>`))

function extractEmails( str ) {
  return str.split(";") ;
}
console.log(extractEmails('info@gmail.com'));
console.log(String.fromCharCode(110))
function encodeToRot13(string) {
  let newString = '';
  for(let i =0; i<string.length;i++){
    let code = (+string[i].charCodeAt()+13)>123?+string[i].charCodeAt()+13-123+97:+string[i].charCodeAt()+13
    newString+=String.fromCharCode(code)
  }
  return newString
}
console.log(encodeToRot13('hello')==='uryyb')
function getCardId(value) {
  let deck = [`A♣`, '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣',
    'A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦',
    'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥',
    'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠'];
  return deck.indexOf(value)
}
console.log('\'┐\\\\n\'+\n\'')
function getRectangleString(width, height) {
  let top = "┌";
  for(let i = 2; i<width;i++){
    top+="─"
  }
  top+='┐\\n\'+\n';
  for(let i = 2; i< height;i++){
    top+= '|';
    for(let j =2; j<width;j++){
      top+= " ";
    }
    top+='│\\n\'+\n'
  }

  let bottom ='└';
  for(let i = 2; i<width;i++){
    bottom+="─"
  }
  bottom+= '┘\\n\'';
  top+=bottom
  return top;
}


