/**
 * Задание 3
Напиши класс Storage, 
который будет создавать объекты 
для управления складом товаров. 

При вызове будет получать один аргумент 
- начальный массив товаров, 
и записывать его в свойство items.

Добавь методы класса:

getItems() - 
возвращает массив текущих товаров

addItem(item) - 
получает новый товар 
и добавляет его к текущим

removeItem(item) - 
получет товар и, 
если он есть, 
удаляет его из текущих */

class Storage {
  constructor(goods) {
    this.goods = goods;
  }
  getItems() {
    return this.goods;
  }
  addItem(item) {
    // item.quantity = 1;
    this.goods.push(item);
  }
  removeItem(item) {
     for (let i = 0; i < this.goods.length; i += 1) {
       const goods = this.goods[i];
       if (item === goods.name) {
         this.goods.splice(i, 1);
        }
     }
   }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
