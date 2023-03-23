function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42)
  }


  function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    return Math.abs((someValue - 42) * 264)
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }


  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return Math.abs((start - destination) * 264)
  }



  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distance = Math.abs((start - destination) * 264)
    if (distance < 400)
    return 0
    else if (distance > 400, distance < 2000)
    return ((((start - destination) * 264) - 400) * .02)
    else if (distance > 2000, distance < 2500)
    return 25
    else if (distance > 2500)
    return 'cannot travel that far'
  }
