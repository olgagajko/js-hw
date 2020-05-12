prises={
    cat: "Кот",
    book: "Книга",
    car:"Машина",
}
let n = prompt('введите количество строк и столбцов', 3);
let numCell=0
let arrRand=[];
do {
    for (let i=0; i<3; i++){
        let rand = 1 + Math.random() * (n*n);
        arrRand[i]=Math.floor(rand);
        console.log (arrRand[i]);
        }
} while (arrRand[0]==arrRand[1] || arrRand[0]==arrRand[2]|| arrRand[1]==arrRand[2]);

function generateField() {
	let tableArea=document.getElementById("table")
    let table = document.createElement("table");
    table.setAttribute("border", 1);
    for (let i = 0; i < n; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < n; j++) {
            numCell=i*n+j+1;
            let cell= row.insertCell(j);
			console.log (numCell);
            if (numCell==arrRand[0]) {
                cell.setAttribute ("prise", 'cat');
                cell.innerText="cat";
            } else if (numCell==arrRand[1]) {
                cell.setAttribute ("prise", 'book');
                cell.innerText="book";
            } else if (numCell==arrRand[2]) {
                cell.setAttribute ("prise", 'car');
                cell.innerText="car";
            }
        }      
    }
}    
generateField();
tableArea.addEventListener("click", showPrise);