class book{
    constructor(
        title = "None"
    ){
        this.title = title;
    }
}
const books = [];
var count = 0;

const addbook = document.querySelector("#addbook_btn");
const pop = document.querySelector("#popu");
const overlay = document.querySelector("#overlay");
const sub = document.querySelector("#book_btn");
const title = document.querySelector("#title");
const mainbox = document.querySelector("#mainbox");

function popup() {
    pop.classList.add('active');
    overlay.classList.add('active');
    console.log("one eh");
}

function closepopup(){
    pop.classList.remove('active');
    overlay.classList.remove('active');
    console.log("two eh");
}

function addstuff(){
    const x = new book();
    console.log("this yo");
    x.title = title.value;
    books[count] = x;
    count +=1;

    const con = document.createElement('div');
    const til = document.createElement('p');
    const but = document.createElement('button');
    but.type = 'button';
    but.innerHTML = 'Remove';
    til.textContent = x.title;
    con.appendChild(til);
    con.appendChild(but);
    mainbox.appendChild(con);
    but.addEventListener('click', () => {mainbox.removeChild(con);});
}

function removestuff(){

}

addbook.addEventListener('click', () => {popup();});
overlay.addEventListener('click', () => {closepopup();});
sub.addEventListener('click', () => {addstuff();closepopup()});