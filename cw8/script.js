const stala = 29;
let zmienna = 29;


zmienna = 10;

console.log("stala: " + stala);
console.log("zmienna: " + zmienna);

const text = "można tu coś wpisać"
console.log(text);

const object = {"name":"John"};
console.log(object);

const arr = [1,2,3];

console.log(arr);



const imgs = [
    {
        id: 1,
        src : "1.jpg"
    },
    {
        id: 2,
        src : "2.jpg"
    }
]

console.log(document)

const container = document.querySelector(".container");

container.innerHTML = "cont";

function przyklad(){
    console.log("dziala");
}

przyklad();

function razyDwa(liczba){
    console.log(liczba*2);
    return liczba*2;
}

const zwrot = razyDwa(2);
console.log(zwrot);