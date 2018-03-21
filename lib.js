function randomInt(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
        
function decimalToHex(d) {
    var hex = Number(d).toString(16);
    hex = "000000".substr(0, 6 - hex.length) + hex; 
    return hex;
}