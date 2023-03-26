export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  url: string;
  category: string;
  like: {
    count : number
    liked : boolean
  }
}

export const products = [
  {
    id: 1,
    name: 'Logitech G Pro X Superlight ',
    price: 76985,
    description: 'Connection type: Wireless\n' +
        'Sensor Type: Optical Laser\n' +
        'Interface: USB, ,Radio\n' +
        'channel Design: for right and left hand\n' +
        'Gaming: Yes\n' +
        'Optical sensor resolution: 25600 DPI',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h29/h3d/52239169749022/logitech-g-pro-x-superlight-rozovyj-105681243-1.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/logitech-g-pro-x-superlight-rozovyi-105681243/?c=750000000#!/item',
    category: 'Computers',
    like: {
      count: 5,
      liked: false
    }
  },
  {
    id: 2,
    name: 'Apple iPhone 13 128Gb',
    price: 373090,
    description: 'NFC Technology: Yes\n' +
        'Color: Black\n' +
        'Screen Type: OLED, Super Retina XDR\n' +
        'Diagonal: 6.1 inches\n' +
        'RAM size: 4 GB\n' +
        'Processor: 6-core Apple A15 Bionic\n' +
        'Internal memory: 128 GB\n' +
        'Battery capacity: 3095 match',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item',
    category: 'Phones, Gadgets',
    like: {
      count: 5,
      liked: false
    }
  },
  {
    id: 3,
    name: 'Apple iPhone 14 Pro 256Gb',
    price: 625300,
    description: 'NFC technology: Yes\n' +
        'Color: Purple\n' +
        'Screen type: OLED, Super Retina XDR display with the possibility of constant operation\n' +
        'diagonal: 6.1 inches\n' +
        'RAM size: 6 GB\n' +
        'Processor: 6-core Apple A16 Bionic\n' +
        'Internal memory: 256 GB\n' +
        'Battery capacity: 3125 match',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4d/h62/62948396728350/apple-iphone-14-pro-128gb-fioletovyj-106363319-1.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/?c=750000000#!/item',
    category: 'Phones, Gadgets',
    like: {
      count: 5,
      liked: false
    }
  },
  {
    id: 4,
    name: ' Apple MacBook Air 13 MGN63',
    price: 480550,
    description: 'screen diagonal: 13.3 inch\n' +
        'processor: Apple M1\n' +
        'Video card: Apple M1 7 core\n' +
        'RAM size: 8 GB\n' +
        'Hard disk type: SSD\n' +
        'total storage capacity: 256 GB',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
    category: 'Phones, Gadgets',
    like: {
      count: 5,
      liked: false
    }
  },
  {
    id: 5,
    name: 'Samsung Galaxy A23 6 ГБ/128 ГБ',
    price: 104560,
    description: 'NFC Technology: Yes\n' +
        'Color: Black\n' +
        'Screen type: PLS TFT LCD Touch, multitouch\n' +
        'Diagonal: 6.6 inch\n' +
        'RAM size: 6 GB\n' +
        'Processor: 8-core Snapdragon 680\n' +
        'Internal Memory: 128 GB\n' +
        'Battery capacity: 5000mAh',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000#!/item',
    category: 'Phones, Gadgets',
    like: {
      count: 5,
      liked: false
    }
  },
  {
    id: 6,
    name: 'Apple iPhone 11 64Gb Slim Box',
    price: 156199,
    description: 'NFC Technology: Yes\n' +
        'Color: Black\n' +
        'Screen type: Multi-touch color IPS, Liquid Retina HD\n' +
        'Diagonal: 6.1 inches\n' +
        'RAM size: 4 GB\n' +
        'Processor: 6-core Apple A13 Bionic\n' +
        'Internal memory: 64 GB\n' +
        'Battery capacity: 3110 match',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/hfa/32690571706398/apple-iphone-11-64gb-slim-box-cernyj-100692387-1-Container.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/apple-iphone-11-64gb-slim-box-chernyi-100692387/?c=750000000#!/item',
    category: 'Phones, Gadgets',
    like: {
      count: 5,
      liked: false
    }
  },
  {
    id: 7,
    name: 'Apple iPhone 12 64Gb',
    price:  321780 ,
    description: 'NFC Technology: Yes\n' +
        'Color: Black\n' +
        'Screen Type: Touch, Multi-touch OLED, Super Retina XBE\n' +
        'Diagonal: 6.1 inches\n' +
        'RAM size: 4 GB\n' +
        'Processor: 6-core Apple A14 Bionic\n' +
        'Internal memory: 64 GB\n' +
        'Battery capacity: 2775 match',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfa/h97/33279114575902/apple-iphone-12-64gb-cernyj-100656839-1-Container.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/apple-iphone-12-64gb-chernyi-100656839/?c=750000000#!/item',
    category: 'Phones, Gadgets',
    like: {
      count: 5,
      liked: false
    }
  },
  {
    id: 8,
    name: 'Apple AirPods with Charging Case',
    price: 67840,
    description: 'Type: Headset\n' +
        'Type\n' +
        ': In-channel Connection: Wireless\n' +
        'Type of acoustic design: open\n' +
        'Mount type: without mount\n' +
        'Active noise Reduction system: No\n' +
        'Microphone: Yes',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb6/h3d/46637140508702/apple-airpods-2-with-charging-case-belyj-4804056-2-Container.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/apple-airpods-with-charging-case-belyi-4804056/?c=750000000#!/item',
    category: 'TV, Audio,Video',
    like: {
      count: 5,
      liked: false
    }
  },
  {
    id: 9,
    name: 'Apple AirPods 3',
    price: 96260,
    description: 'Type: Headset\n' +
        'Type\n' +
        ': In-channel Connection: Wireless\n' +
        'Type of acoustic design: open\n' +
        'Mount type: without mount\n' +
        'Active noise Reduction system: No\n' +
        'Microphone: Yes',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h12/h12/46719106023454/apple-airpods-3-belyj-102667744-1.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/?c=750000000#!/item',
    category: 'TV, Audio,Video',
    like: {
      count: 5,
      liked: false
    }
  },
  {
    id: 10,
    name: 'Apple AirPods Pro 2nd generation',
    price: 119495,
    description: 'Type: headphones\n' +
        'Type\n' +
        ': in-channel connection: wireless\n' +
        'type of acoustic design: closed\n' +
        'Type of attachment: without attachment\n' +
        'active noise reduction system: Yes\n' +
        'microphone: Yes',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hba/hf8/62281477259294/apple-airpods-pro-2nd-generation-belyj-106362968-1.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/?c=750000000#!/item',
    category: 'TV, Audio,Video',
    like: {
      count: 5,
      liked: false
    }
  },
  {
    id: 11,
    name: 'Cavio',
    price: 1882000,
    description: 'type: double\n' +
        'bed: 180x200 cm\n' +
        'material: velour\n' +
        'width, cm: 200\n' +
        'length, cm: 220\n' +
        'mattress: without mattress\n' +
        'color: white\n' +
        'country: Italy',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h04/he9/68548128342046/krovat-no-8831-cavio-italiya-200kh150kh220-obivka-tkan-108717691-1.jpg',
    rating: 4.3,
    url: 'https://kaspi.kz/shop/p/cavio-8831-180x200-sm-belyi-108717691/?c=750000000#!/item',
    category: 'Furniture',
    like: {
      count: 5,
      liked: false
    }
  },
  {
    id: 12,
    name: ' SK Trade Dalila',
    price: 1823999,
    description: 'type: double\n' +
        'bed: 180x200 cm\n' +
        'material: MDF\n' +
        'width, cm: 205\n' +
        'length, cm: 228\n' +
        'mattress: without mattress\n' +
        'color: beige\n' +
        'Country: China',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h43/h34/63751384104990/krovat-dalila-180-200-bezhevyi-s-yashchikom-dlya-bel-ya-107114085-1.jpg',
    rating: 4.4,
    url: 'https://kaspi.kz/shop/p/krovat-sk-trade-dalila-gc1726-180beige-storage-180x200-sm-bez-matrasa-bezhevyi-107114085/?c=750000000#!/item',
    category: 'Furniture',
    like: {
      count: 5,
      liked: false
    }
  },
  {
    id: 13,
    name:'Pufi Dinmeca' ,
    price: 20000,
    description:'type: armchair-bag\n' +
        'upholstery/cover material: corduroy\n' +
        'body material: frameless\n' +
        'height: 130 cm\n' +
        'width: 100 cm\n' +
        'color: gray\n' +
        'country: Kazakhstan' ,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h09/h3c/62957049249822/kreslo-mesok-kreslo-grusa-bigbeg-pufik-106723022-1.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/pufi-dinmeca-423-chehol-vel-vet-seryi-106723022/?c=750000000#!/item',
    category: 'Furniture',
    like: {
      count: 5,
      liked: false
    }
  },
  {
    id: 14,
    name: 'Mattress Shop',
    price: 33059,
    description: 'type: mattress\n' +
        'stiffness of side 1: medium\n' +
        'stiffness of side 2: high\n' +
        'spring block: with independent springs\n' +
        'filler: coconut coir, ,felt, ,polyurethane\n' +
        'foam cover material: knitwear, ,jacquard\n' +
        'orthopedic: Yes\n' +
        'color: white\n' +
        'country: Kazakhstan',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3f/hf2/47049630711838/mattress-shop-ortoped-komfort-plus-90h200-102814628-1.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/mattress-shop-ortoped-komfort-plus-90h200-102814628/?c=750000000#!/item',
    category: 'Furniture',
    like: {
      count: 5,
      liked: false
    }
  },
  {
    id: 15,
    name: 'Apple MacBook Air 13 MGN63 ',
    price: 478888,
    description: 'screen diagonal: 13.3 inch\n' +
        'processor: Apple M1\n' +
        'Video card: Apple M1 7 core\n' +
        'RAM size: 8 GB\n' +
        'Hard disk type: SSD\n' +
        'total storage capacity: 256 GB',

    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
    category: 'Computers',
    like: {
      count: 5,
      liked: false
    }
  },
  {
    id: 16,
    name: 'Acer Nitro 5 AN515-45 NH.QB9ER.004',
    price: 370989,
    description: 'screen diagonal: 15.6 inch\n' +
        'processor: AMD Rizen 5 5600H\n' +
        'Video card: NVIDIA GeForce GTX 1650\n' +
        'RAM size: 8 GB\n' +
        'Hard disk type: SSD\n' +
        'total storage capacity: 512 GB',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7b/h65/66626494398494/acer-nitro-5-an515-45-nh-qb9er-004-chernyi-107535784-1.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-45-nh-qb9er-004-chernyi-107535784/?c=750000000#!/item',
    category: 'Computers',
    like: {
      count: 5,
      liked: false
    }
  },
  {
   id: 17,
   name: 'Apple MacBook Pro 14 MKGP3 ',
   price: 986775,
   description: 'screen diagonal: 14.2 inches\n' +
       'Processor: Apple M1 Pro\n' +
       'Graphics card: Apple M1 Pro 14-Core\n' +
       'RAM size: 16 GB\n' +
       'Hard disk type: SSD\n' +
       'Total storage capacity: 512 GB',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h8a/47153374199838/apple-macbook-pro-14-mkgp3-seryj-102866247-1.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?c=750000000#!/item',
    category: 'Computers',
    like: {
      count: 5,
      liked: false
    }
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/