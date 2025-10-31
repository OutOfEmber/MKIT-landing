
/*28.10.2025
------------------------------------------
const numbers=[1,2,3,4,5]
function sumArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++)
        sum+=arr[i];
    console.log(sum);
}
console.log(sumArray(numbers));
------------------------------------------
const book={
    title:'Хоббит',
    author:'Толкин',
    year:'1937',
    getInfo: function(){
    return `Название: ${book.title},Автор:${book.author},Год:${book.year}`
}
}
console.log(book.getInfo());
------------------------------------------
let a=+prompt('Введите первое число');
let b=+prompt('Введите второе число');
function findMax(a,b){
    a>b ? console.log(a):console.log(b);
}
console.log(findMax(a,b));
------------------------------------------
let a=prompt('Ваше имя');
function greet(name) {
    name ??= 'Гость';
    name===""?console.log(`Привет,Гость`):console.log(`Привет,${name}`);
}
console.log(greet(a));
------------------------------------------
let a=+prompt('Введите первое число');
function isEven(x) {
    a%2===0 ? console.log('true') : console.log('false');
}
console.log(isEven(a));
------------------------------------------
let a=+prompt('Введите первое число');
let b=+prompt('Введите второе число');
let operator=prompt('Введите оператор +-/*')
function calculator(a,b,operator){
    switch (operator) {
        case '+':
            console.log(a+b);
            break;
        case '-':
            console.log(a-b);
            break;
        case '*':
            console.log(a*b);
            break;
        case '/':
            console.log(a/b);
            break;
        default:console.log('error');
            break;
    }
}
console.log(calculator(a,b,operator));
------------------------------------------
*/

/*27.10.2025
------------------------------------------
let menu={
    title: 'My menu',
    width: 200,
    height:300,
}
function multiplyNumeric(obj){
    for(let key in obj){
    if(typeof obj[key]=='number')
        obj[key]*=2;
    }
}
console.log(multiplyNumeric(menu));
console.log(menu);
------------------------------------------
const salaries={
    Jonh:100,
    Ann:160,
    Pete:130,
}
function isEmpty(obj){
    for(let key in obj){
        return false
    }
    return true
}
function sum(obj){
    let sum=0;
    if(!isEmpty(obj)){
        for(let key in obj){
        sum+= obj[key]
        }
        return sum
    }
    return 0;

}
console.log(sum(salaries));
------------------------------------------
        console.log(key);
        console.log(obj[key]);
------------------------------------------



const user={
    name: "Jonh",
    surname: "Smith",
};

function isEmpty(obj){
    for(let key in user){
        return false
    }
    return true
}
console.log(isEmpty(user));

const user={
    name: "Jonh",
    surname: "Smith",
};
user.name="Pete";
delete user.name;
console.log(user);
------------------------------------------
*/

/*23.10.2025
------------------------------------------
let a=4,b=16;
(b/a)%2==0 ? console.log("Делится") : console.log("Не делится");

------------------------------------------
let a="aasdb"
a.length>1 ? console.log(a[a.length-2]) : console.log(a[0]);
------------------------------------------
let white = 'Белый'
white === 'Белый' ? 'Белый' : 'Не белый'
if(white === 'Белый'){
    'Белый'
}else{
    'Не белый'
}
------------------------------------------

let a=1234;
let b=String (a);
let c=33542;
let d=String (c);
if(b[0]==d[0]){
    console.log("Первые цифры равны");   
}
else{
    console.log("Первые цифры не равны");
}
------------------------------------------


let a=1234;
let b=String (a);
console.log(b[0]);
console.log(b[b.length-1]);
let c=Number (b[0]);
let d=Number (b[b.length-1])
console.log(c-d);

------------------------------------------
let a="лось";
if(a[a.length-1]=='ь'){
    console.log(a[a.length-2]);
}
else{
    console.log(a[a.length-1]);
}

let a="loh" , b="loser";
if (a[0]==b[0]) {
    console.log('Первые буквы совпадают');
}
else{
    console.log('Первые буквы не совпадают');
}
------------------------------------------
let x=prompt('Введите число');
    function Ischet(x) {
        if (x%2==0) {
            console.log("Ваше число четное");
        }
        else{
            console.log("Ваше число нечетное");
            
        }
    }
    Ischet(x); 
 let a='SuperDuperMEgaAlfaGammaSigmaGODID'
console.log(a[a.length-1])
------------------------------------------
let x=prompt('Введите число');
    function IsNegative(x) {
        if (x<0) {
            console.log("Ваше число отрицательное");
        }
        else{
            console.log("Ваше число положительное");
            
        }
    }
    IsNegative(x);
------------------------------------------
*/

/*22.10.2025
    

------------------------------------------
    alert('HELLo World')

------------------------------------------
    let a=prompt('Введите число а');
    let b=prompt('Введите число b');
    Number(a);
    Number(b);
    console.log(Number(a)+Number(b));

------------------------------------------
    const array=[1,2,3,4,5,6];
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
------------------------------------------

    let a = 10,b = 10;

    let key ='*';
    switch (key) {
        case '+':
            console.log(a+b);
            
            break;
        case '-':
            console.log(a-b);
            
            break;
        case '*':
            console.log(a*b);
            
            break;
        case '/':
            console.log(a/b);
            
            break;
    
        default:
            console.log('error');
            
            break;
    }
------------------------------------------
    */
