let products = [
    {id: 1, name: 'Футболка', price: 500, category: 'clothes'},
    {id: 2, name: 'Телефон', price: 30000, category: 'electronics'},
    {id: 3, name: 'Книга', price: 800, category: 'books'},
    {id: 4, name: 'Джинсы', price: 1200, category: 'clothes'}
  ];
  let cart=[];
function addToCart(productId,count) {
    let product = products.find(item=>item.id == productId); 
    if(!product){
    console.log('Нет такого!');
    return;
    }
    let  card= cart.find(item=>item.productId == productId); 
    if(!card){
        cart.push({productId,count});
        console.log('Товар добавлен');
        return;
    }
    else{
        card.count += count
        console.log('Количество увеличено');
        return;
    }
    //    cart.splice(product,product,cart.count+=count);
}
function removeFromCart(productId) {
    let product = products.find(item=> item.id == productId);
    if(!product){
        console.log('Нет такого!');
        return;
        }  
    let card = cart.find(item => item.productId == productId)
    if(!card){
        console.log('Нет такого!');
        return;
    }else{
        cart.splice(card-1,1);//cart.filter(item=> item.id!==card);
        console.log('Товар удален');
        return;
    }
}
function updateCount(productId,count) {
    let card = cart.find(item => item.productId == productId)
    if(!card){
        console.log('Нет такого в корзине!');
        return;
    }
    else{
        cart.splice(card-1,1);
        cart.push({productId,count});
        console.log('Количество изменено');
        return;
    }
}
function getCartTotal() {
    
    return cart.reduce((total,item)=>{
        let product = products.find(p => p.id == item.productId)
        return total + product.price * item.count
    }, 0)

}
function getCartItems(){
    return cart.map(cartItem=>{
        let product=products.find(p=>p.id===cartItem.productId);
        return{
            product:product,
            count:cartItem.count
        };
    });
}
function clearCart() {
    
}
addToCart(1,1);
addToCart(4,1);
addToCart(4,1);
removeFromCart(1);
updateCount(4,3);
console.log(cart);
console.log(getCartTotal());
console.log(getCartItems());
clearCart();
// removeFromCart(4);
// console.log(cart);
/*06.11.2025
------------------------------------------------------------------------------------
const users = [
    { id: 1, name: "Алексей", age: 25, isActive: true },
    { id: 2, name: "Мария", age: 17, isActive: false },
    { id: 3, name: "Иван", age: 30, isActive: true },
    { id: 4, name: "Ольга", age: 16, isActive: true },
    { id: 5, name: "Петр", age: 22, isActive: false }
  ];
let adult=users.filter(item=>item.age>18);
let actives=users.filter(item=>item.isActive==true)
function findUserByld(id) {
    id=users.filter(item=>item.id==id);
    return id;
}
console.log(adult);
console.log(actives);
console.log(findUserByld(2));
------------------------------------------------------------------------------------
const numbers=[10,-2,7,15,-8,3,0,12];
let sum=0;
function sumPositive(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            sum+=arr[i  ];
        }
    }            
    return sum;
}
let max=0;
function findMax(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }            
    return max;
}
let doubled=numbers.map(function(num) {return num*2});
console.log(doubled); 
console.log(findMax(numbers));
console.log(sumPositive(numbers));
------------------------------------------------------------------------------------
*/

/*05.11.2025
------------------------------------------------------------------------------------
const shoppingList=['Milk','Bread','Apples','Cheese','Fish'];
shoppingList.push('Butter');
shoppingList.unshift('Sugar');
shoppingList.splice(shoppingList.indexOf('Fish'),1);
if(shoppingList.indexOf('Cheese')!=-1){
    let cheeseIndex = shoppingList.indexOf('Cheese');
    shoppingList[cheeseIndex] = 'Chicken';
}
const vegetables=['Carrot','Onion','Potato'];
let combo=shoppingList.concat(vegetables);
combo.sort();
console.log(`Apples in list: ${combo.includes('Apples')}`);
combo.forEach((product,index) => {
    console.log(`Element: ${index}: ${product}`);
})
function addItem(itemName) {
    console.log(`\n -------------------------`);
    
    itemName[0].toUpperCase();
    
    combo.push(itemName);
    combo.sort();

    combo.forEach((product,index) => {
        console.log(`Element: ${index}: ${product}`);
    })
}
function removeItem(itemName){
    combo.splice(combo.indexOf(itemName),1)
}
console.log(addItem("cheto"));
console.log(removeItem("Milk"));
------------------------------------------------------------------------------------*/

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
