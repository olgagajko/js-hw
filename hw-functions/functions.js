// Дано натуральное число N. Вычислите сумму его цифр, используя рекурсию (строки, массивы и циклы использовать запрещено).
s=0;
function sumNums(n) {
    if (Math.floor(n/10)>0) {
        s+=(n%10);
        console.log(s);
        n=Math.floor(n/10);
        console.log(n);
    }
    else {
        s+=n;
        console.log(s);
        return s;
    }
}
sumNums(27);
// Напишите функцию, которая в зависимости от переданного в нее целочисленного аргумента count, будет выводить слово «товар» в нужно форме («12 товаров», но «22 товара» и тд).
let numGoods=+prompt("Введите число товаров");
function pasteNums(numGoods) {
if (numGoods%100>10 && numGoods%100<15) {
  console.log(`${numGoods} товаров`);
} else if (numGoods%10>1 && numGoods%10<5) {
  console.log(`${numGoods} товара`);
}
else if (numGoods%10===1){
  console.log(`${numGoods} товар`);
} else {
  console.log(`${numGoods} товаров`);
}
}
pasteNums(numGoods); 

// 2.Написать функцию проверки на спам. Функция принимает на вход текст и спам - слова. Определить по 5ти бальной шкале, насколько часто в тексте встречается спам. Результат вернуть из функции
let spamScale=0;
let text=prompt("Введите текст").toLowerCase();
let spamWords=prompt("Введите спам-слова").toLowerCase();
function searchSpam(){
let arrayText= text.split(' ');
let arraySpam= spamWords.split(' ');
console.log(arrayText);
console.log(arraySpam);
for (let i = 0; i < arrayText.length; i++) {
  for (let j = 0; j < arraySpam.length; j++){
    if (arrayText[i]==arraySpam[j]){
      if (spamScale<5){
        spamScale+=1;
      }
    }
  }
}
console.log(spamScale);
}
searchSpam();
// Напишите функцию, которая принимает на вход 3 аргумета (usersArr, from и to), где usersArr - массив пользователей, from - минимальный возраст и to - максимальный возраст (если to не задан, максимальный возраст не ограничен). Функция возвращает логины пользователей из массива usersArr, возраст которых находится в диапазоне [from; to)

let userArr=[
  {
    login: "first",
    age: 34
  },
    {
    login: "second",
    age: 67
  },
    {
    login: "third",
    age: 30
  },
    {
    login: "fourth",
    age: 22
  },
    {
    login: "fifth",
    age: 16
  },
    {
    login: "sixth",
    age: 82
  },
]
let from= 18;
let to=65;
function ageCheck(userArr, from, to){
  for (let i=0; i<userArr.length; i++){
   if (userArr[i].age>=from && userArr[i].age<=to) {
    console.log(userArr[i].login);
   }
  };
};
ageCheck(userArr, from, to);

