const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]
    
    // Hier komt jouw functie
    const findSpiderMan = superheroes.find((superhero) => {
        return superhero.name === 'Spiderman'
    })

    console.log(findSpiderMan) 
    // Find Spiderman
    // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

    // SPIDERMAN OPDRACHT A
    const doubleArrayValues = (array) => {
        return array.map(number => number * 2);
        
    }

    let doubledResult = 
    doubleArrayValues([1, 2, 3]); 

    console.log(doubledResult);
    // result should be [2, 4, 6]
    //OPDRACHT B


   const containsNumberBiggerThan10 = (array) => {
       return array.some(number => number > 10);
   }
   
   let doubledResult2 =
    containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]);
    
    console.log(doubledResult2);
    // result should be true
     


   const containsNumberBiggerThan102 = (array) => {
       return array.some(number => number == 10);
   }

   let doubledResult3 =
    containsNumberBiggerThan102([1,2,1,2,1,2]);

   console.log(doubledResult3)
  // result should be false
  // OPDRACHT C

   const isItalyInTheGreat7 = (array) => {
       return array.some(string => string === 'Italy');
   }

   let doubledResult4 =
  isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']) 

  console.log(doubledResult4)
  // result should be true
   // OPDRACHT D


  const tenfold = [1, 4, 3, 6, 9, 7, 11];

      tenfold.forEach(number => console.log(number * 10));
  // result should be [10, 40, 30, 60, 90, 70, 110]
 // OPDRACHT E







  const isBelow100 = (array) => {
      return array.some( number => number === 100);
  }

  console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
  // result should be: false
  // OPDRACHT F






  const bigSum = (array) => {
      return array.reduce((accumulator, currentValue) => accumulator + currentValue)
  }
    console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
  // result should be 1118