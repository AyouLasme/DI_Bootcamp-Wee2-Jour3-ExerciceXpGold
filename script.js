/**
 * @author: LASME Ayou Emeline
 * @description: verification de la divisibilité des element d'un tableau  par 3
 */

// Exercice1
let numbers = [123, 8409, 100053, 333333333, 7]
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    /* if (element % 3 == 0) {
        console.log(true);
    }else{
        console.log(false);
    }*/
    let b = (element % 3 == 0);
    console.log(b);
}


/**
 * @author: LASME Ayou Emeline
 * @description: Affichage des elements d'un objet
 */

// Exercice2
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}

let etudiant = prompt("Donnez votre nom")
if (etudiant in guestList ){
    console.log("Salut je m'appelle " + etudiant + " et je vis à" + guestList[etudiant])
}else{
    console.log("je suis un invité")
}


/**
 * @author: LASME Ayou Emeline
 * @description: Addition des elements d'un tableau
 */

// Exercice3
let age = [20,5,12,43,98,55];
let somme = 0;
for (let i = 0; i < age.length; i++) {
    somme = somme + age[i];
}
console.log(somme);