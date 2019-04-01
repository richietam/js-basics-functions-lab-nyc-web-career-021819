// Code your solution in this file!

function distanceFromHqInBlocks(num) {
   let blocks = 0

   if (num > 42) {
     blocks = num - 42
   } else if (num < 42) {
     blocks = 42 - num
   }
   return blocks
}

function distanceFromHqInFeet(num) {
  let feet = 0

  feet = distanceFromHqInBlocks(num) * 264

  return feet
}

function distanceTravelledInFeet(start, end) {
  let feet = 0

  feet = Math.abs((start - end) * 264)
  return feet
}

function calculatesFarePrice(start, end) {
  let fare = 0
  let distance = distanceTravelledInFeet(start, end)

  if (distance < 400) {
    fare = 0
  } else if (distance > 400 && distance < 2000) {
    fare = (distance - 400) * .02
  } else if (distance > 2000 && distance < 2500) {
    fare = 25
  } else if (distance > 2500) {
    return "cannot travel that far"
  }
  return fare
}
