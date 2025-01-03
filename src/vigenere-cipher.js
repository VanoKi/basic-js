const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  common(string, key, calculateIndex){
    let ans = ''
    let baseCharCode = 'a'.charCodeAt(0)
    for (let i = 0; i < string.length; i++) {
      if(!string[i].match(/[a-z]/i)) {
        ans += string[i]
        continue
      }
      let keyIndex = key[i % key.length].toLowerCase().charCodeAt(0) - baseCharCode
      let textIndex = string[i].toLowerCase().charCodeAt(0) - baseCharCode
      let newIndex = calculateIndex(textIndex, keyIndex)
      ans += String.fromCharCode(newIndex + baseCharCode).toUpperCase()
    }
    return ans
  }
  encrypt(string, key) {
    return this.common(string, key, (textIndex, keyIndex) => {
      return (textIndex + keyIndex) % 26
    })
  }
  decrypt(string, key) {
    return this.common(string, key, (textIndex, keyIndex) => {
      return (textIndex - keyIndex + 26) % 26;
    });
  }
}

module.exports = {
  VigenereCipheringMachine
};
