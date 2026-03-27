function averageRainfall() {
  let rainfall = [120, 85, 200, 60, 175, 140];
  let total = 0;

  // Add all values
  for (let i = 0; i < rainfall.length; i++) {
    total += rainfall[i];
  }

  // Calculate average
  let average = total / rainfall.length;

  console.log(average);
}

averageRainfall();
