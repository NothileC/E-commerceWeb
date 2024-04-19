import product1 from "./assets/p1.png";
import product2 from "./assets/p2.png";
import product3 from "./assets/p3.png";
import product4 from "./assets/p4.png";
import product5 from "./assets/p5.png";
import product6 from "./assets/p6.png";
import product7 from "./assets/p7.png";
import product8 from "./assets/p8.png";

/* This code exports a constant named AppleStoreItems, which is an array 
containing objects representing different products. Each product is defined 
by properties such as id, productName, color, briefdescription, price, and productImage*/

/*  
Here's a breakdown of the properties for each product:

- id: A unique identifier for the product.
- productName: The name or title of the product.
- color: The color variant or option for the product.
- briefdescription: A brief description or summary of the product.
- price: The price of the product.
- productImage: The imported image file associated with the product.
*/

export const AppleStoreItems = [
  {
    id: 1,
    productName: "Apple Watch",
    color: "Series 5 SE",
    briefdescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
    price: 529.99,
    productImage: product1,
  },
  {
    id: 2,
    productName: "Sony ZX330BT",
    color: "Light Grey",
    briefdescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
    price: 39.99,
    productImage: product2,
  },
  {
    id: 3,
    productName: "Iphone 11",
    color: "Serious Black",
    briefdescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
    price: 619.99,
    productImage: product3,
  },
  {
    id: 4,
    productName: "Iphone 11",
    color: "Subway Blue",
    briefdescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
    price: 619.99,
    productImage: product4,
  },
  {
    id: 5,
    productName: "Iphone 11",
    color: "Product RED",
    briefdescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
    price: 619.99,
    productImage: product5,
  },
  {
    id: 6,
    productName: "Iphone 11",
    color: "Milky White",
    briefdescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
    price: 619.99,
    productImage: product6,
  },
  {
    id: 7,
    productName: "Iphone 13",
    color: "Product RED",
    briefdescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
    price: 619.99,
    productImage: product7,
  },
  {
    id: 8,
    productName: "Iphone 14",
    color: "Product RED",
    briefdescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
    price: 619.99,
    productImage: product8,
  },
];
