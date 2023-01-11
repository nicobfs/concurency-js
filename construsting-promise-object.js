const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if (isCoffeeMakerReady) {
        resolve("Kopi berhasil dibuat");
    } else {
        reject("Mesin kopi tidak bisa digunakan");
    }
}
 
 
const makeCoffee = () => {
    return new Promise(executorFunction);
}
const coffeePromise = makeCoffee();
console.log(coffeePromise);
 
 
/* output
Promise { 'Kopi berhasil dibuat' }
*/

/*Executor function mengeksekusi resolve() dengan membawa data string “Kopi berhasil dibuat”. 
Jika kita ubah nilai dari variabel isCoffeeMakerReady menjadi false, 
maka executor function akan mengeksekusi reject() dengan 
membawa pesan penolakan “Mesin kopi tidak bisa digunakan”.*/