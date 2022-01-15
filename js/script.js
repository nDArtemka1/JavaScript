
// 1 Задание:

for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log(i, "– нулевое число");
    }
    else if (i % 2 == 0) {
        console.log(i, "– четное число");
    }
    else {
        console.log(i, "– нечетное число");
    }
}

// 2 Задание:

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// 3 Задание:

let products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

for (let i = 0; i < products.length; i++) {
    let pricePercent = products[i].price / 100 * 15;
    let priceSell = products[i].price - pricePercent;
    products[i].price = priceSell;
}

console.log(products);

// 4 Задание:

const products1 = [

    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]

    },
    {
        id: 5,
        price: 499,
        photos: []

    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]

    },
    {
        id: 8,
        price: 78,

    },
];

const result = products1.filter(photo => photo.photos >= "0-9");
console.log(result);

products1.sort(function (a, b) {
    return a.price - b.price;
});
console.log(products1);

// 5 Задание:

