function calcWallLengthRolls(len) {
  isOdd(len) ? len += 1 : len += 2
  var starter_roll = 0
  var remainder = 1

  while(remainder !== 0) {
    starter_roll += 4
    remainder = (len - starter_roll) % 6
    var currentRemainder = (len - starter_roll) % 6
  }

  var fourFooters = starter_roll / 4
  var sixFooters = (len - starter_roll) / 6

  return rolls = {
    fourFooters: fourFooters,
    sixFooters: sixFooters
  }
}

function isOdd(num) {
  if(num % 2 !== 0) { return true }
}

