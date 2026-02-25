//Третья практика
class Kachok{
    constructor(name,age,gender,shkaf=null){
        this.name=name,
        this.age=age,
        this.gender=gender,
        this.shkaf=shkaf,
        this.abonement=null,
        this.zapisKTraineru=[];
        this.abonementFreeze=false;//
        this.dateOfFreeze=null;//
    }
}
class Abonement{
    constructor(type,validnost,cost){
        this.type=type,
        this.validnost=validnost,
        this.cost=cost;
    }
}
class Trainer {
    constructor(name, exp, spec, gender) {
        this.name = name;
        this.exp = exp;
        this.spec = spec;
        this.gender = gender;
        this.schedule = [];
    }
    
    isFree(day, time) {
        return !this.schedule.some(booking => 
            booking.day === day && booking.time === time
        );
    }
}
class Zal {
    constructor(name, type, capacity) {
        this.name = name;
        this.type = type;
        this.capacity = capacity;
        this.trainers = [];
    }
    
    addTrainer(trainer) {
        this.trainers.push(trainer);
    }
}
class Poseshchenie {//
    constructor(kachokName,day,time,zalType){
        this.kachokName=kachokName;
        this.day=day;
        this.time=time;
        this.zalType=zalType;
    }
}
class FitnessCenter {
    constructor() {
        this.kachki = [];
        this.trainers = [];
        this.zals = [];
        this.poseshchenia=[];//
        this.initializeCenter();
    }
    
    initializeCenter() {
        const gymTrainers = [
            new Trainer('Алексей Соколов', 8, 'gym', 'male'),
            new Trainer('Дмитрий Морозов', 5, 'gym', 'male'),
            new Trainer('Игорь Петров', 10, 'gym', 'male'),
            new Trainer('Сергей Иванов', 6, 'gym', 'male'),
            new Trainer('Константин Сидоров', 4, 'gym', 'male')
        ];
        
        const danceTrainers = [
            new Trainer('Анна Смирнова', 7, 'dance', 'female'),
            new Trainer('Михаил Козлов', 5, 'dance', 'male')
        ];
        
        const poolTrainers = [
            new Trainer('Елена Волкова', 9, 'pool', 'female')
        ];
        
        this.trainers = [...gymTrainers, ...danceTrainers, ...poolTrainers];
        
        const gymZal1 = new Zal('Тренажерный зал №1', 'gym', 10);
        const gymZal2 = new Zal('Тренажерный зал №2', 'gym', 10);
        const gymZal3 = new Zal('Тренажерный зал №3', 'gym', 5);
        
        const danceZal1 = new Zal('Танцевальный зал №1', 'dance', 6);
        const danceZal2 = new Zal('Танцевальный зал №2', 'dance', 6);
        
        const poolZal1 = new Zal('Бассейн', 'pool', 10);
        
        gymZal1.addTrainer(gymTrainers[0]);
        gymZal1.addTrainer(gymTrainers[1]);
        gymZal2.addTrainer(gymTrainers[2]);
        gymZal2.addTrainer(gymTrainers[3]);
        gymZal3.addTrainer(gymTrainers[4]);
        
        danceZal1.addTrainer(danceTrainers[0]);
        danceZal1.addTrainer(danceTrainers[1]);
        danceZal2.addTrainer(danceTrainers[0]);
        danceZal2.addTrainer(danceTrainers[1]);
        
        poolZal1.addTrainer(poolTrainers[0]);
        
        this.zals = [gymZal1, gymZal2, gymZal3, danceZal1, danceZal2, poolZal1];
    }
    
    writeAbonement(kachok, accessTypes, validnost, cost) {
        const abonement = new Abonement(accessTypes, validnost, cost);
        kachok.abonement = abonement;
        console.log(`\n Абонемент выписан клиенту: ${kachok.name}`);
        console.log(`   Тип доступа: ${accessTypes.join(', ')}`);
        console.log(`   Срок действия: ${validnost}`);
        console.log(`   Стоимость: ${cost} руб.`);
        return abonement;
    }
    
    writeAbonementTo15Clients() {
        const clients = [
            new Kachok('Глеп Рубашенков VIP', 28, 'male', 228),
            new Kachok('Петр Сидоров', 32, 'male', 102),
            new Kachok('Елена Иванова', 25, 'female', 103),
            new Kachok('Ольга Смирнова', 29, 'female', null),
            new Kachok('Дмитрий Козлов', 35, 'male', 104),
            new Kachok('Анна Морозова', 24, 'female', null),
            new Kachok('Сергей Волков', 41, 'male', 105),
            new Kachok('Мария Соколова', 27, 'female', null),
            new Kachok('Алексей Новиков', 33, 'male', 106),
            new Kachok('Наталья Павлова', 31, 'female', null),
            new Kachok('Владимир Федоров', 45, 'male', 107),
            new Kachok('Татьяна Орлова', 26, 'female', null),
            new Kachok('Артем Григорьев', 38, 'male', 108),
            new Kachok('Юлия Васильева', 29, 'female', null),
            new Kachok('Константин Зайцев', 42, 'male', 109)
        ];
        
        this.kachki = clients;

        this.writeAbonement(clients[0], ['gym'], '2025-12-31', 15000);
        this.writeAbonement(clients[1], ['gym'], '2025-12-31', 15000);
        
        this.writeAbonement(clients[2], ['gym'], '2025-12-31', 18000);
        this.writeAbonement(clients[3], ['gym'], '2025-12-31', 18000);
        this.writeAbonement(clients[4], ['gym'], '2025-12-31', 18000);
        
        this.writeAbonement(clients[5], ['gym'], '2025-12-31', 20000);
        
        this.writeAbonement(clients[13], ['dance'], '2025-12-31', 16000);
        
        this.writeAbonement(clients[7], ['gym'], '2025-12-31', 14000);
        this.writeAbonement(clients[8], ['dance'], '2025-12-31', 14000);
        this.writeAbonement(clients[9], ['pool'], '2025-12-31', 14000);
        this.writeAbonement(clients[10], ['gym', 'dance'], '2025-12-31', 22000);
        this.writeAbonement(clients[11], ['gym', 'pool'], '2025-12-31', 22000);
        this.writeAbonement(clients[12], ['dance', 'pool'], '2025-12-31', 22000);
        this.writeAbonement(clients[6], ['gym', 'dance', 'pool'], '2025-12-31', 30000);
        this.writeAbonement(clients[14], ['gym', 'dance', 'pool'], '2025-12-31', 30000);
        
        console.log('Абонементы выданы 15 клиентам');
        
        return clients;
    }
    
    bookInitialTrainers() {
    this.bookToTrainer(this.kachki[0], 'gym', 'Вт', '10:00');
    this.bookToTrainer(this.kachki[0], 'gym', 'Чт', '10:00');
    this.bookToTrainer(this.kachki[1], 'gym', 'Вт', '11:00');
    this.bookToTrainer(this.kachki[1], 'gym', 'Чт', '11:00');
    
    this.bookToTrainer(this.kachki[2], 'gym', 'Пн', '09:00');
    this.bookToTrainer(this.kachki[2], 'gym', 'Ср', '09:00');
    this.bookToTrainer(this.kachki[2], 'gym', 'Пт', '09:00');
    
    this.bookToTrainer(this.kachki[3], 'gym', 'Вт', '16:00');
    this.bookToTrainer(this.kachki[3], 'gym', 'Чт', '16:00');
    this.bookToTrainer(this.kachki[3], 'gym', 'Сб', '12:00');
    
    this.bookToTrainer(this.kachki[4], 'gym', 'Пн', '18:00');
    this.bookToTrainer(this.kachki[4], 'gym', 'Ср', '18:00');
    this.bookToTrainer(this.kachki[4], 'gym', 'Пт', '18:00');
    
    this.bookToTrainer(this.kachki[5], 'gym', 'Пн', '08:00');
    this.bookToTrainer(this.kachki[5], 'gym', 'Вт', '08:00');
    this.bookToTrainer(this.kachki[5], 'gym', 'Чт', '08:00');
    this.bookToTrainer(this.kachki[5], 'gym', 'Пт', '08:00');
    
    this.bookToTrainer(this.kachki[13], 'dance', 'Вт', '14:00');
    this.bookToTrainer(this.kachki[13], 'dance', 'Чт', '14:00');
}
    
    bookToTrainer(kachok, zalType, day, time) {
        if (!kachok.abonement) {
            console.log(`${visitor.name}: нет абонемента`);
            return false;
        }
        
        if (!kachok.abonement.type.includes(zalType)) {
            console.log(`${kachok.name}: нет доступа к залу типа "${zalType}"`);
            return false;
        }
        
        const zals = this.zals.filter(zal => zal.type === zalType);
        
        const availableTrainer = zals
            .map(zal => zal.trainers)
            .flat()         
            .filter((trainer, index, self) => 
                self.findIndex(t => t.name === trainer.name) === index
            )
            .map(trainer => ({
                trainer: trainer,
                isFree: trainer.isFree(day, time)
            }))
            .filter(item => {
                if (zalType === 'dance' && kachok.gender === 'female' && kachok.name.includes('Юлия Васильева')) {
                    return item.isFree && item.trainer.gender === 'female';
                }
                return item.isFree;
            })
            .map(item => item.trainer)[0];
        
        if (!availableTrainer) {
            console.log(`${kachok.name}: нет свободных тренеров на ${day} ${time}`);
            return false;
        }
        
        const booking = { day, time, trainerName: availableTrainer.name };
        availableTrainer.schedule.push({ day, time, clientId: kachok.name });
        
        this.poseshchenia.push(new Poseshchenie(kachok.name,day,time,zalType));//

        console.log(`${kachok.name} записан(а) к тренеру ${availableTrainer.name} (${availableTrainer.spec}) на ${day} ${time}`);
        return true;
    }

    bookToRemainingTrainer() {
    console.log('Запись клиентов из базы к свободным тренерам:');
    this.bookToTrainer(this.kachki[6], 'gym', 'Пн', '20:00');
    this.bookToTrainer(this.kachki[7], 'gym', 'Пн', '19:00');
    this.bookToTrainer(this.kachki[8], 'dance', 'Ср', '17:00');
    this.bookToTrainer(this.kachki[9], 'pool', 'Пт', '15:00');
    this.bookToTrainer(this.kachki[10], 'gym', 'Сб', '14:00');
    this.bookToTrainer(this.kachki[11], 'pool', 'Вт', '12:00');
    this.bookToTrainer(this.kachki[11], 'pool', 'Пт', '12:00');
    this.bookToTrainer(this.kachki[12], 'dance', 'Чт', '18:00');
    this.bookToTrainer(this.kachki[14], 'dance', 'Вс', '11:00');
}
    freezeAbonement(kachokName,freezeValidnost){//
        const kachok = this.kachki.find(k=>k.name===kachokName||this.kachki.indexOf(k)==kachokName);

        if(!kachok){
            console.log(`Клиент: ${kachokName}, - не найден`);
            return false;
        }
        if(!kachok.abonement){
            console.log(`У клиента ${kachok.name} нет абонемента`);
            return false;
        }
        if(kachok.abonementFreeze){
            console.log(`Абонемент клиента ${kachok.name} уже заморожен`);
            return false;
        }
        if(kachokName==='Глеп Рубашенков VIP' || kachokName===0)return console.log('ВИПа невозможжно заморозить');
        kachok.abonementFreeze=true;
        kachok.dateOfFreeze=freezeValidnost;
        console.log(`Абонемент клиента ${kachok.name} заморожен до ${kachok.dateOfFreeze}`);
        
    }
    dayOfZapara(){//
        if(this.poseshchenia.length===0){
            console.log('Нет данных о посещениях');
            return null;
        }
        const KachkovInDay=this.poseshchenia.map(p=>p.day);

        const countByDay={};
        KachkovInDay.forEach(day=>{
            countByDay[day]=(countByDay[day]||0)+1;
        });
        let maxDay=null;
        let maxCount=0;
        
        for(const day in countByDay){
            if(countByDay[day]>maxCount){
                maxCount=countByDay[day];
                maxDay=day;
            }
        }
        console.log(`Самый загруженный день: ${maxDay} (${maxCount} посещений)`);
        return {day: maxDay, count: maxCount};
    }
    kachkiOver30InZapara(){//
        const busyDay=this.dayOfZapara();
        if(!busyDay)return [];

        const kachkiOver30=this.kachki.filter(k=>k.age>30);

        const poseshcheniaInBusyDay=this.poseshchenia.filter(p=>p.day===busyDay.day);

        const kachkiInBusyDay=poseshcheniaInBusyDay.map(p=>p.kachokName);

        const result=kachkiOver30.filter(k=> kachkiInBusyDay.includes(k.name));
        
        console.log(`Клиенты старше 30-ти, посетившие центр в самый загруженный день (${busyDay.day}):`);
        result.forEach(k=>{
            console.log(` - ${k.name}, ${k.age} лет`);
        });
        return result;
    }
    kachkiOfPoolInFriday(){//
        const poseshcheniaOfFriday=this.poseshchenia.filter(p=>p.zalType==='pool' && p.day=== 'Пт');
        if(poseshcheniaOfFriday.length===0){
            console.log('Нет записей в бассейн на пятницу');
            return [];
        }
        const kachkiName=(poseshcheniaOfFriday.map(p=>p.kachokName))

        const result=this.kachki.filter(k=>kachkiName.includes(k.name));

        console.log(`Клиенты записанные в бассейн на пятницу (${poseshcheniaOfFriday.length} записей)`);
        result.forEach(k=>{
            const zapisi = poseshcheniaOfFriday.filter(p=>p.kachokName===k.name);
            zapisi.forEach(z=>{
                console.log(` - ${k.name}, время: ${z.time}`);
            })
        })
        return result;
    }
    FavClient(){
        const maxVisits=0;
        const maxClient=null;

        this.kachki.forEach(k => {
            if(k.Poseshchenie.length()>maxVisits){
                maxVisits=k.Poseshchenie.length();
                maxClient=k.name;
            }
            return console.log(`Самый крутой клиент: ${maxClient}, - ${maxVisits} посещений`)
        });
    }
    showAllVisitors() {
    console.log('='.repeat(50));
    console.log('ВСЕ КЛИЕНТЫ ФИТНЕС-ЦЕНТРА');
    console.log('='.repeat(50));
    this.kachki.forEach(kachok => {
        console.log(`${kachok.name}, ${kachok.age} лет, ${kachok.gender}`);
        console.log(`   Абонемент: ${kachok.abonement ? kachok.abonement.type.join(', ') : 'Нет'}`);
        if (kachok.shkaf) console.log(`   Шкафчик №${kachok.shkaf}`);
        if (kachok.zapisKTraineru.length > 0) {
            console.log('   Записи к тренерам:');
            kachok.zapisKTraineru.forEach(booking => {
                console.log(`     - ${booking.day} ${booking.time}, тренер: ${booking.trainerName}`);
            });
        }
        console.log('');
    });
}
}

const fitnessCenter = new FitnessCenter();

console.log('='.repeat(50));
console.log('Задание 1')
console.log('='.repeat(50));

console.log('Инициализация фитнес-центра');
console.log('   - Созданы тренеры:', fitnessCenter.trainers.length);
console.log('   - Созданы залы:', fitnessCenter.zals.length);
fitnessCenter.zals.forEach(zal => {
    console.log(`     * ${zal.name}, тип: ${zal.type}, вместимость: ${zal.capacity} чел.`);
});

console.log('Выдача 15-ти абонементов');
const clients = fitnessCenter.writeAbonementTo15Clients();
console.log(clients);
console.log('Запись клиентов с фиксированным расписанием:');
fitnessCenter.bookInitialTrainers();

console.log('Функция записи к оставшимся свободными тренерам');
fitnessCenter.bookToRemainingTrainer();

console.log('='.repeat(50));
console.log('Задание 2')
console.log('='.repeat(50));

fitnessCenter.freezeAbonement(0,'2025-03-01');
fitnessCenter.freezeAbonement('Петр Сидоров','2025-03-15');

fitnessCenter.kachkiOver30InZapara();

fitnessCenter.kachkiOfPoolInFriday();

fitnessCenter.FavClient();
fitnessCenter.showAllVisitors(); 

/*Вторая практика
let colors=["Красный","Зеленый","Синий"];
const [firstColor,secondColor]=colors;
colors.push("Желтый");

let car={
    brand:"Labmargambar",
    model:"Bagatata",
    year:"2020"
}
const {brand,model}=car;
car.year="2026";

let owner={
    name:"Ekesbokes-series-ekes",
    age:"3"
}
const {name:ownerName}=owner;

function displayCarInfo(obj){
    const {brand,model,year}=obj;
    console.log("марка-" +brand," модель-" +model," год выпуска-"+year);
}
console.log(firstColor);
console.log(secondColor);
console.log(brand);
console.log(model);
console.log(ownerName);
displayCarInfo(car);
*/
/*Первая практика
let races = ['Человек','Эльф','Каджит','Орк','Вампир','Оборотень'];
function getRace() {

    let vibor=false;
    while(!vibor){
    let input = prompt('Введите вашу расу:\n' + races.join(', '));
    if (input === null) {
        alert("Вы отменили ввод");
        continue;
    }
    input = input.trim();
    if (input === "") {
        alert("Вы ввели пустую строку")
        continue;
    }
    let formattedRace = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    if (races.includes(formattedRace)) {
        return formattedRace;
    } else {
        alert("Вы ввели не существующую расу")
        continue;
    }
}
}
let user1 = {
    name:"",
    race:""
}
user1.name = prompt("Введите имя персонажа");
user1.race = getRace();

let user2 = {
    name:"",
    race:""
}
user2.name = prompt("Введите имя персонажа");
user2.race = getRace();

let user3 = {
    name:"",
    race:""
}
user3.name = prompt("Введите имя персонажа");
user3.race = getRace();
console.log(user1);
console.log(user2);
console.log(user3);
let users=[user1,user2,user3];
let usersCopy=users.slice();
usersCopy.forEach(user =>{
    user.level=1;
});
usersCopy.sort((a,b)=>a.name.localeCompare(b.name));
console.log(usersCopy);
*/

/*let products = [
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
    cart=[];
    console.log('Корзина очищена');
}
function displayCart() {
    if (cart.length === 0) {
        console.log('Корзина пуста');
        return;
    }
    console.log('Содержимое корзины:');
    cart.forEach(item => {
        const product = products.find(p => p.id === item.productId);
        console.log(`${product.name}: ${item.count} шт. × ${product.price} руб. = ${product.price * item.count} руб.`);
    });
    console.log(`Общая сумма: ${getCartTotal()} руб.`);
}
function applyDiscount(total, discountPercent) {
    if (discountPercent < 0 || discountPercent > 100) {
        console.log('Процент скидки должен быть от 0 до 100');
        return total;
    }
    
    const discountAmount = total * (discountPercent / 100);
    const finalPrice = total - discountAmount;
    
    console.log(`Скидка ${discountPercent}%: ${discountAmount} руб.`);
    console.log(`Итоговая цена после скидки: ${finalPrice} руб.`);
    return finalPrice;
}
addToCart(1,1);
addToCart(4,1);
addToCart(4,1);
removeFromCart(1);
updateCount(4,3);
console.log(cart);
console.log(getCartTotal());
console.log(getCartItems());
applyDiscount(3600,2);
displayCart();
clearCart();
displayCart();

конец семестра
*/
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
