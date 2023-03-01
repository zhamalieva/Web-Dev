export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  link:string;
  linkImage:string;
  rating:Number;
  like:number;
  category:string;
}

export const products = [
  {
    id: 1,
    name: 'AIRPODS 3',
    price: 799,
    description: 'Наушники Apple AirPods 3 белый',
    link:'https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/?c=750000000#!/item',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h12/h12/46719106023454/apple-airpods-3-belyj-102667744-1.jpg',
    rating: 5.0,
    like:0,
    category:'Headphones'
  },
  {
    id: 2,
    name: 'IPhone 13 Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    link:'https://kaspi.kz/shop/p/apple-iphone-13-mini-128gb-chernyi-102298500/?c=750000000#!/item',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9e/h7e/46392722817054/apple-iphone-13-mini-128gb-cernyj-102298500-1-Container.jpg',
    rating: 4.2,
    like:0,
    category:'Phones'
  },
  {
    id: 3,
    name: 'Блендер Fresh Juice Blend12 белый',
    price: 299,
    description: 'Блендер Fresh Juice Blend12 белый',
    link:'https://kaspi.kz/shop/p/fresh-juice-blend12-belyi-105722831/?c=750000000#!/item',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha5/h51/69222679281694/fresh-juice-portable-blender-stakan-blend12-belyi-prozrachnyi-105722831-1.jpg',
    rating: 3.4,
    like:0,
    category:'Household products'
  },
  {
    id: 4,
    name: 'Блендер Proliss PRO-2908 черный, серебристый',
    price: 239,
    description: 'Блендер Proliss PRO-2908 черный, серебристый',
    link:'https://kaspi.kz/shop/p/proliss-pro-2908-chernyi-serebristyi-101850732/?c=750000000#!/item',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h23/haf/34436267999262/proliss-pro-2908-cernyj-101850732-1-Container.jpg',
    rating: 4.5,
    like:0,
    category:'Household products'
  },
  {
    id: 5,
    name: 'Клавиатура X-Game XK-200UB черный',
    price: 179,
    description: 'Клавиатура X-Game XK-200UB черный',
    link:'https://kaspi.kz/shop/p/x-game-xk-200ub-chernyi-9200601/?c=750000000#!/item',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h75/31943918518302/x-game-xk-200ub-black-9200601-1-Container.jpg',
    rating: 4.6,
    like:0,
    category:'Computers'
  },
  {
    id: 6,
    name: 'Клавиатура M-SOL Mini i8 черный',
    price: 149,
    description: 'Клавиатура M-SOL Mini i8 черный',
    link:'https://kaspi.kz/shop/p/m-sol-mini-i8-chernyi-105310635/?c=750000000#!/item',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hff/h66/51548057763870/m-sol-mini-i8-cernyj-105310635-1.jpg',
    rating: 4.2,
    like:0,
    category:'Computers'
  },
  {
    id: 7,
    name: 'Монитор Sanc M2442PH серый',
    price: 499,
    description: 'Монитор Sanc M2442PH серый',
    link:'https://kaspi.kz/shop/p/sanc-m2442ph-seryi-108213498/?c=750000000#!/item',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h92/67278437777438/sanc-m2442ph-seryi-108213498-1.jpg',
    rating: 4.7,
    like:0,
    category:'Computers'
  },
  {
    id: 8,
    name: 'Монитор Sanc M2742PH черный',
    price: 129,
    description: 'Монитор Sanc M2742PH черный',
    link:'https://kaspi.kz/shop/p/sanc-m2742ph-chernyi-105749898/?c=750000000#!/item',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd6/hed/52702617075742/sanc-m2742ph-cernyj-105749898-1.jpg',
    rating: 4.5,
    like:0,
    category:'Computers'
  },
  {
    id: 9,
    name: 'Смартфон Xiaomi Redmi Note 11 Pro 8 ГБ/128 ГБ серый',
    price: 349,
    description: 'Смартфон Xiaomi Redmi Note 11 Pro 8 ГБ/128 ГБ серый',
    link:'https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386/?c=750000000#!/item',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386-1.jpg',
    rating: 5.0,
    like:0,
    category:'Phones'
  },
  {
    id: 10,
    name: 'Смартфон Samsung Galaxy A33 5G 6 ГБ/128 ГБ черный',
    price: 399,
    description: 'Смартфон Samsung Galaxy A33 5G 6 ГБ/128 ГБ черный',
    link:'https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-chernyi-104398547/?c=750000000#!/item',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h56/h8c/49894748160030/samsung-galaxy-a33-5g-6-gb-128-gb-cernyj-104398547-1.jpg',
    rating: 4.5,
    like:0,
    category:'Phones'
  },
  {
    id: 11,
    name: 'Ароматическая свеча STELLA FRAGRANCE ',
    price: 11.16,
    description: 'Ароматическая свеча STELLA FRAGRANCE 89090949 коричневый',
    link:'https://kaspi.kz/shop/p/aromaticheskaja-svecha-stella-fragrance-89090949-korichnevyi-1-sht-107316946/?c=750000000&sr=2&qid=9979c174ca2b855bedebc274c7e9c248&ref=shared_link',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcf/h90/65008736665630/aromaticheskaya-svecha-stella-fragrance-89090949-korichnevyi-1-sht-107316946-1.jpg',
    rating: 5.0 ,
    like:0,
    category:'Household products'
  },
  {
    id: 12,
    name:'Seven Art зеркало ',
    price: 88.95,
    description:'Seven Art зеркало 000045 70x161 см, настенное, напольное',
    link:'https://kaspi.kz/shop/p/seven-art-zerkalo-000045-70x161-sm-nastennoe-napol-noe-104177078/?c=750000000&sr=1&qid=9248e4be7cdc71e69ab16ec52561a6e8&ref=shared_link',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf8/hf5/49459498352670/profi-decor-zerkalo-000045-70x161-sm-nastennoe-napol-noe-104177078-1.jpg',
    rating: 4.8,
    like:0 ,
    category:'Household products'
  },
  {
    id: 13,
    name:'Смартфон Apple iPhone 14 Pro Max',
    price: 1553.37,
    description:'Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый',
    link:'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000&sr=1&qid=0101407ad3623a396a727f7d26900924&ref=shared_link',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
    rating: 4.9 ,
    like:0,
    category:'Phones'
  },
  {
    id: 14,
    name:'Смартфон Apple iPhone 13 Pro',
    price:1524.59,
    description:'Смартфон Apple iPhone 13 Pro 256Gb зеленый',
    link:'https://kaspi.kz/shop/p/apple-iphone-13-pro-256gb-zelenyi-104079046/?c=750000000&sr=1&qid=5f00871ae74df5938f037e9941fe3f28&ref=shared_link',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h57/h60/49319350337566/apple-iphone-13-pro-256gb-zelenyj-104079046-1.jpg',
    rating: 5.0,
    like:0,
    category:'Phones'
  },
  {
    id: 15,
    name:'Ноутбук Apple MacBook Air 13 ',
    price:1402.54,
    description:'Ноутбук Apple MacBook Air 13 MLXW3 серый',
    link:'https://kaspi.kz/shop/p/apple-macbook-air-13-mlxw3-seryi-105933794/?c=750000000&sr=4&qid=841fde8b02db5b3189227a631f942ba7&ref=shared_link',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/he9/52679187890206/noutbuk-apple-macbook-air-m2-8-cpu-8-gpu-256gb-space-gray-105933794-1.jpg',
    rating: 4.7,
    like:0,
    category:'Computers'
  },
  {
    id: 16,
    name:'Наушники Marshall ',
    price:291.03,
    description:'Наушники Marshall Major IV черный',
    link:'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/?c=750000000&sr=1&qid=f38dcc40e55e7f4c30689adfcd777521&ref=shared_link',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/h84/44876124127262/marshall-major-iv-102138144-1-Container.jpg',
    rating:5.0 ,
    like:0,
    category:'Headphones'
  },
  {
    id: 17,
    name:'Наушники Apple AirPods',
    price:134.41,
    description:'Наушники Apple AirPods with Charging Case белый',
    link:'https://kaspi.kz/shop/p/apple-airpods-with-charging-case-belyi-4804056/?c=750000000&sr=2&qid=84ea4c67faf347fc266adcd74ec08f07&ref=shared_link',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb6/h3d/46637140508702/apple-airpods-2-with-charging-case-belyj-4804056-2-Container.jpg',
    rating:4.6 ,
    like:0,
    category:'Headphones'
  },
  {
    id: 18,
    name:'Наушники Apple EarPods',
    price:134.41,
    description:'Наушники Apple EarPods Lightning белый',
    link:'https://kaspi.kz/shop/p/apple-earpods-lightning-belyi-4801876/?c=750000000&sr=1&qid=00edb480b1593ae7136557c49adbf7fa&ref=shared_link',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7b/h9c/31582164451358/apple-earpods-lightning-belyj-4801876-1-Container.jpg',
    rating:4.5 ,
    like:0,
    category:'Headphones'
  },
  {
    id: 19,
    name:'Наушники Apple AirPods Max',
    price:831.96,
    description:'Наушники Apple AirPods Max серебристый',
    link:'https://kaspi.kz/shop/p/apple-airpods-max-serebristyi-100949286/?c=750000000&sr=8&qid=84ea4c67faf347fc266adcd74ec08f07&ref=shared_link',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0f/h18/33524667154462/apple-airpods-max-serebristyj-100949286-1-Container.jpg',
    rating:5.0,
    like:0,
    category:'Headphones'
  },
  {
    id: 20,
    name:'FOR YOU Этажерка ',
    price:12.88,
    description:'FOR YOU Этажерка для косметики',
    link:'https://kaspi.kz/shop/p/for-you-etazherka-dlja-kosmetiki-105642806/?c=750000000&referrer=desktop_QR&ref=shared_link',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h8b/52144754655262/etazerka-dla-kosmetiki-105642806-1.jpg',
    rating:4.9,
    like:0,
    category:'Household products'
  }


 
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/