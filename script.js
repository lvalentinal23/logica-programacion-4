function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }
  
  function getFibonacciSeries(n) {
    const series = [0, 1];
  
    for (let i = 2; i < n; i++) {
      const nextNumber = series[i - 1] + series[i - 2];
      series.push(nextNumber);
    }
  
    return series;
  }
  
  function main() {
    let userInput;
    let n;
  
    do {
      userInput = prompt("Ingresa un número");
      if (isNumeric(userInput)) {
        n = parseInt(userInput);
        if (n <= 0) {
          alert("Ingresa un número mayor que 0");
        }
      } else {
        alert("Ingresa un número válido");
      }
    } while (!isNumeric(userInput) || n <= 0);
  
    const fibonacciSeries = getFibonacciSeries(n);
    console.log("Los primeros " + n + " números de la serie de Fibonacci son:");
    console.log(fibonacciSeries);
}
  
  main();