function onload() {
  //global onload function, for all code that runs onload for ALL pages
  adjustForScrollbar();
  PlayerData.init();
}
function adjustForScrollbar() {
  //detect size of scrollbar and add padding as necessary to body
}
class Item {
  constructor(data) {
    this.name = data.name;
    this.tags = data.tags;
    this.categories = data.categories;
    this.storage = data.storage;
    this.rarity = data.rarity;
    this.price = data.price;
  }
  displayShop() {

  }
  createElement() {

  }
}
class PlayerData {
  static init() {
    this.inventory = [];
    this.money = 0;
    this.stats = {
      items:{
        sold:0,
        bought:0,
        researched:0
      },
      money:{
        spent:0,
        earned:0
      },
      customersServed:0,
      furnitureBought:0, //eg. self-checkout system, depackager
    }
  }
  static modifyMoney(amount) {
    this.money += amount;

    if (amount < 0) {
      this.stats.money.spent -= amount;
    } else {
      this.stats.money.earned += amount;
    }
  }
}
/*
IDEA:
bigger monitor/similarly stupid upgrade to unlock more order slots
*/
