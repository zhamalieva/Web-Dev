export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  link:string;
  linkImage:string;
  rating:Number;
}

export const products = [
  {
    id: 1,
    name: 'AIRPODS 3',
    price: 799,
    description: 'Наушники Apple AirPods 3 белый',
    link:'https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/?c=750000000#!/item',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h12/h12/46719106023454/apple-airpods-3-belyj-102667744-1.jpg',
    rating: 5.0
  },
  {
    id: 2,
    name: 'IPhone 13 Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    link:'https://kaspi.kz/shop/p/apple-iphone-13-mini-128gb-chernyi-102298500/?c=750000000#!/item',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9e/h7e/46392722817054/apple-iphone-13-mini-128gb-cernyj-102298500-1-Container.jpg',
    rating: 4.2
  },
  {
    id: 3,
    name: 'Блендер Fresh Juice Blend12 белый',
    price: 299,
    description: 'Блендер Fresh Juice Blend12 белый',
    link:'https://kaspi.kz/shop/p/fresh-juice-blend12-belyi-105722831/?c=750000000#!/item',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha5/h51/69222679281694/fresh-juice-portable-blender-stakan-blend12-belyi-prozrachnyi-105722831-1.jpg',
    rating: 3.4
  },
  {
    id: 4,
    name: 'Блендер Proliss PRO-2908 черный, серебристый',
    price: 299,
    description: 'Блендер Proliss PRO-2908 черный, серебристый',
    link:'https://kaspi.kz/shop/p/proliss-pro-2908-chernyi-serebristyi-101850732/?c=750000000#!/item',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h23/haf/34436267999262/proliss-pro-2908-cernyj-101850732-1-Container.jpg',
    rating: 4.5
  },
  {
    id: 5,
    name: 'Клавиатура X-Game XK-200UB черный',
    price: 299,
    description: 'Клавиатура X-Game XK-200UB черный',
    link:'https://kaspi.kz/shop/p/x-game-xk-200ub-chernyi-9200601/?c=750000000#!/item',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h75/31943918518302/x-game-xk-200ub-black-9200601-1-Container.jpg',
    rating: 4.6
  },
  {
    id: 6,
    name: 'Клавиатура M-SOL Mini i8 черный',
    price: 299,
    description: 'Клавиатура M-SOL Mini i8 черный',
    link:'https://kaspi.kz/shop/p/m-sol-mini-i8-chernyi-105310635/?c=750000000#!/item',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hff/h66/51548057763870/m-sol-mini-i8-cernyj-105310635-1.jpg',
    rating: 4.2
  },
  {
    id: 7,
    name: 'Монитор Sanc M2442PH серый',
    price: 299,
    description: 'Монитор Sanc M2442PH серый',
    link:'https://kaspi.kz/shop/p/sanc-m2442ph-seryi-108213498/?c=750000000#!/item',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h92/67278437777438/sanc-m2442ph-seryi-108213498-1.jpg',
    rating: 4.7
  },
  {
    id: 8,
    name: 'Монитор Sanc M2742PH черный',
    price: 299,
    description: 'Монитор Sanc M2742PH черный',
    link:'https://kaspi.kz/shop/p/sanc-m2742ph-chernyi-105749898/?c=750000000#!/item',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd6/hed/52702617075742/sanc-m2742ph-cernyj-105749898-1.jpg',
    rating: 4.5
  },
  {
    id: 9,
    name: 'Смартфон Xiaomi Redmi Note 11 Pro 8 ГБ/128 ГБ серый',
    price: 299,
    description: 'Смартфон Xiaomi Redmi Note 11 Pro 8 ГБ/128 ГБ серый',
    link:'https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386/?c=750000000#!/item',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386-1.jpg',
    rating: 5.0
  },
  {
    id: 10,
    name: 'Смартфон Samsung Galaxy A33 5G 6 ГБ/128 ГБ черный',
    price: 299,
    description: 'Смартфон Samsung Galaxy A33 5G 6 ГБ/128 ГБ черный',
    link:'https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-chernyi-104398547/?c=750000000#!/item',
    linkImage:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h56/h8c/49894748160030/samsung-galaxy-a33-5g-6-gb-128-gb-cernyj-104398547-1.jpg',
    rating: 4.5
  }
 
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/