/*
  {
    name:"default",
    desc:"default",
    tags:["default"], //special tags that affect gameplay, eg. RESTRICTED, HANDCRAFTED, FORAGED
    categories:["default"], //medical, food, literature, etc.
    storage:"default", //crate, drum, etc.
    rarity:"default", //common, rare, etc.
    price:12345, //per container
  },
*/
var items = [
  {
    name:"default",
    desc:"default",
    tags:["default"],
    categories:["default"],
    storage:"default",
    rarity:"default",
    price:12345
  },
  {
    name:"KALceride",
    desc:"An instant energy drink perfect for the rapid Ielern lifestyle.",
    tags:[".factorymade"],
    categories:["drink"],
    storage:"drum",
    rarity:"common",
    price:150
  },
  {
    name:"Profuse",
    desc:"A chemical mixture designed for *Floral* species consumption.",
    tags:[".factorymade"],
    categories:["drink"],
    storage:"drum",
    rarity:"common",
    price:150
  },
  {
    name:"Rejuvenation Stone",
    desc:"Heals minor injuries once swallowed. Tastes like blood.",
    tags:[".factorymade"],
    categories:["medical"],
    storage:"crate",
    rarity:"uncommon",
    price:200
  },
  {
    name:"Kyne Batteries",
    desc:"Supercompact energy storage that can power a desk lamp for a thousand years.",
    tags:["restricted",".factorymade"],
    categories:["utility"],
    storage:"crate",
    rarity:"uncommon",
    price:750
  },
  {
    name:"Generic Cookies",
    desc:"The unnamed store-brand type.",
    tags:[".factorymade"],
    categories:["food"],
    storage:"crate",
    rarity:"common",
    price:20,
  },
  {
    name:"Mineral Water",
    desc:"Transparent, tasteless. Boring, but familiar.",
    tags:[".aerrth"],
    categories:["drink"],
    storage:"drum",
    rarity:"common",
    price:20,
  },
  {
    name:"Tals Powder Packet",
    desc:"If it's broken, just put on more tals powder. Repairs anything.",
    tags:[".factorymade"],
    categories:["utility"],
    storage:"crate",
    rarity:"common",
    price:30,
  },
  {
    name:"Pheteline",
    desc:"Sueisenki oiro nna.",
    tags:[".factorymade"],
    categories:["medical"],
    storage:"crate",
    rarity:"common",
    price:40,
  },
  {
    name:"Apple Juice",
    desc:"Made from a distant relative of a native Aerrth plant.",
    tags:[".aerrth"],
    categories:["food"],
    storage:"drum",
    rarity:"common",
    price:20,
  },
  {
    name:"Meglumine Cubes",
    desc:"Utterly disgusting, but the *Yama Rockmen* seem to enjoy it.",
    tags:[".aerrth"],
    categories:["food"],
    storage:"crate",
    rarity:"common",
    price:50,
  }
]
