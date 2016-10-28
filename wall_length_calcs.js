function calcWallLengthRolls(len) {
  len = parseInt(len)
  lenPlusFoot = len + 1
  var starter_roll = 0
  var remainder = 1
  var maxRemainder = 1
  while(remainder !== 0) {
    if(remainder < 0) { break; }
    starter_roll += 4
    remainder = (lenPlusFoot - starter_roll) % 6
    var currentRemainder = (len - starter_roll) % 6
    if (currentRemainder > maxRemainder) {
      maxRemainder = currentRemainder
    }
  }

  if(remainder < 0) {
   starter_roll = 0
   while(remainder !== maxRemainder) {
    starter_roll += 4
    remainder = (len - starter_roll) % 6
   }
 }

  if(remainder === 0) { len = lenPlusFoot }

  var fourFooters = starter_roll / 4
  var sixFooters = (len - starter_roll) / 6

  return rolls = {
    fourFooters: fourFooters,
    sixFooters: sixFooters
  }
}
