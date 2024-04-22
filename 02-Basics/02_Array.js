const marvel_heros = ['thor','IronMan','Hulk','Captain America','Black Widow','Hawkeye']
const DC_heros = ['Superman','Batman','Wonder','Flash','Green Lantern','Aquaman']

//marvel_heros.push(DC_heros) //It will add the DC_heros array as a single element in the marvel_heros array
console.log(marvel_heros)

const allHeros =  marvel_heros.concat(DC_heros) 

const all_new_Heros = [...marvel_heros,...DC_heros] 
console.log(all_new_Heros)

const another_array = [1,2,3, [4,5,6],7,[8,9,[10,11,12]]]
const real_array = another_array.flat(Infinity)
console.log(real_array)

console.log(Array.from("Harsh Khaiwal"))
console.log(Array.from({name: "Harsh"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
