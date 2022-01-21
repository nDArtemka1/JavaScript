
// 1 Задание:
// Es5
function makePercentPrice() {
    let percentPrice = this.price / 100 * 25;
    let price = this.price - percentPrice;
    console.log(price);
}



// 2 Задание:
// Es5


function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function () {
    this.text = prompt("Введите текст...");
};

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date)
    this.highlighted = false;

}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;

};


let post1 = new AttachedPost("Ivan", " ", 19.02);
post1.edit();
post1.makeTextHighlighted();
console.log(post1);

//Es6
class Post2 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit2() {
        this.text = prompt("Введите текст...");

    }
}

class AttachedPost2 extends Post2 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;

    }

    makeTextHighlighted2() {
        this.highlighted = true;

    }
}

let post2 = new AttachedPost2("Artem", " ", 09.02);
post2.edit2();
post2.makeTextHighlighted2();
console.log(post2);


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

