// 1 Задание:
// Es5
function makePercentPrice() {
    let percentPrice = this.price / 100 * 25;
    let price = this.price - percentPrice;
    console.log(price);
}

function Product(name, price) {
    this.name = name;
    this.price = price;
    this.make25PercentDiscount = makePercentPrice;
}

let apple = new Product('Apple', 359);
apple.make25PercentDiscount();
console.log(apple);


//Es6 
class Product1 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.make25PercentDiscount = makePercentPrice;
    }
}

function makePercentPrice() {
    let percentPrice = this.price / 100 * 25;
    let price = this.price - percentPrice;
    console.log(price);
}

let orange = new Product1('Orange', 480);
orange.make25PercentDiscount();

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
