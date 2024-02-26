/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/

function keityklaUSD(){
    return a * kursasUSD
}
let kursasUSD = 1.08
let a = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
console.log(`turimus ${a} EUR iskeitus i doleri su kursu ${kursasUSD} gausime - ${keityklaUSD().toFixed(2)} USD`)

/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/

function keityklaEUR(){
    return b * kursasEUR
}
let kursasEUR = 0.92
let b = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
console.log(`turimus ${b} USD iskeitus i eurus su kursu ${kursasEUR} gausime - ${keityklaEUR().toFixed(2)} EUR`)


/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/

function bmi(a,b) {
    return a / b**2
}
console.log(`Gautas BMI yra ${bmi(94.2,1.96).toFixed(2)}
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
`)


/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/

function amziusSekundemis(amzius) {
    return amzius * 31536000
}
function amziusMinutemis(amzius) {
    return amzius * 525600
}
function amziusValandomis(amzius) {
    return amzius * 8760
}
function amziusDienomis(amzius) {
    return amzius * 365
}

const amzius = 29
const sekundes = amziusSekundemis(amzius)
const minutes = amziusMinutemis(amzius)
const valandos = amziusValandomis(amzius)
const dienos = amziusDienomis(amzius)

console.log(`mano amzius yra ${amzius} metai`)
console.log(`mano amzius sekundemis yra ${sekundes} sekundziu`)
console.log(`mano amzius minutemis yra ${minutes} minuciu`)
console.log(`mano amzius valandomis yra ${valandos} valandu`)
console.log(`mano amzius dienomis yra ${dienos} dienu`)

/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/

function isFiC(a) {
    let vertimas = (a - 32) * 0.5556
    return vertimas
}
console.log(`ivestas farenheitu skaicius atitinka ${isFiC(50).toFixed(0)} laipnsius pagal celsiju`)

function isCiF(a) {
    let vertimas = (a *1.8) + 32
    return vertimas
}
console.log(`ivestas Celsiju skaicius atitinka ${isCiF(10).toFixed(0)} laipnsius pagal Farenheita`)

/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/

let seka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(seka.join('-'))

/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/
for (let i = 1; i <= 5; i++) {
    let zvaigzde = ''
    for (let y = 0; y < i; y++) {
        zvaigzde += '*'
    }
    console.log(zvaigzde)
}

/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/




/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/

let vardai = ['Tomas', 'Dainius','Paulius','Jonas']

console.log(vardai.join(','))
console.log(vardai.join('+'))

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/
