const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb+srv://admin:admin1234@practiceapi.us7xhdx.mongodb.net/Node-API?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    })

// mongoose.connect('mongodb://127.0.0.1:27017/E-Commerce')
//     .then(() => {
//         console.log('DB Connected');
//     })

//     .catch((err) => {
//         console.log(err);
//     });



const dummyProducts = [
    {
        name: "iPhone 14",
        image: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907_Full-Bleed-Image.jpg.large.jpg",
        price: 200,
        description: "The iPhone 14 was made available on September 16, 2022, and iPhone 14 Plus was made available on October 7, 2022"
    },
    {
        name: "MacBook Pro",
        image: "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/intro__ewz1ro7xs14y_large.jpg",
        price: 1000,
        description: "Apple 20203 MacBook Pro Laptop M2 Pro chip with 12-core CPU and 19-core GPU: 33.74 cm (16.2-inch), 16GB Unified Memory, 1TB SSD"
    },
    {
        name: "Nike Shoes",
        image: "https://m.media-amazon.com/images/I/71vhbQmz5vL._AC_UY1000_.jpg",
        price: 200,
        description: "Nike shoes offers great comfort and maintain your feet posture every time you walk. Nike is one of the most popular brands of footwear"
    },
    {
        name: "OnePlus TWS",
        image: "https://www.soundguys.com/wp-content/uploads/2021/12/OnePlus-Buds-Z2-hero-2-scaled.jpg",
        price: 80,
        description: "The all-new OnePlus Nord Buds2r with enhanced deep bass and seamless connectivity. Get over a ful day of gaming and jamming"
    },
    {
        name: "Knife Set",
        image: "https://www.tasteofhome.com/wp-content/uploads/2018/04/shutterstock_268029047.jpg",
        price: 50,
        description: "Buy Knife Set Kitchen Knives Online: It depends upon you, which kind of Kitchen... Check Knife Set Kitchen Knives Prices"
    },
    {
        name: "Canon Camera",
        image: "https://shop.sg.canon/media/wysiwyg/eShop_R5_1275x850_.jpg",
        price: 800,
        description: "Discover Canon's line up of Cinema Cameras suitable for every level of production. Explore Canon's range of Cinema Cameras"
    },
    {
        name: "Drone",
        image: "https://cdn.thewirecutter.com/wp-content/media/2022/10/drones-2048px-0661.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
        price: 1500,
        description: "Largest and the best Drone Cameras in India. Latest Models- DJI, Parrot, Autel. Buy Now & Avail Discount!"
    }
]


async function seedData() {
    await Product.create(dummyProducts);
    console.log('DB Seeded Successfully');
}

seedData();