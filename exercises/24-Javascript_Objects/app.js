//Objeto1, también es un array
var person = {
    name: "John",                //String
    lastName: "Doe",
    age: 35,                     //Number
    gender: "male",
    luckyNumbers: [7, 11, 13, 17], //Array
    significantOther: person2   //Object, yes, the same variable/object defined after
};
//Objeto2, también es un array
var person2 = {
    name: "Jane",
    lastName: "Doe",
    age: 38,
    gender: "female",
    luckyNumbers: [2, 4, 6, 8],
    significantOther: person
};
//Objeto 3, también es un array
var person3 = {
    name: "Jimmy",
    lastName: "Doe",
    age: 13,
    gender: "male",
    luckyNumbers: [1, 2, 3, 4],
    significantOther: null
}
//Objeto family, también es un array
var family = {
    lastName: "Doe",
    members: [person, person2,person3]
};

//Funcion de otra forma: const addAllFamilyLuckyNumbers = (anArray) => {}
//Recuerda que aunque sean objetos en realidad son arrays también. Sumamos familyLuckyNumbers de cada objeto
//aunque diga anArray.
function addAllFamilyLuckyNumbers(anArray){
  let sumOfAllLuckyNumbers = 0; 
  //Primero recorremos cada objeto, person, person2, person3:
  for(let i=0; i<anArray.length; i++) {
    //Segundo recorremos las propiedades de cada objeto: name, lastName...
    //Recuerda anArray es el objeto, anArray[i] es la propiedad de cada objeto.
    //Haremos el bucle en la propiedad luckyNumbers, en toda su longitud: anArray[i].luckyNumbers.length
    for(let j=0; j<anArray[i].luckyNumbers.length; j++) {
        //Añadimos a la suma total cada elemento de luckyNumbers:
        sumOfAllLuckyNumbers += anArray[i].luckyNumbers[j];
    }

  }
  
  return sumOfAllLuckyNumbers;
}

//1ª instrucción, cambiar el 4º número de la suerte de Jonh Doe:
person.luckyNumbers[3] = 33;


//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 
