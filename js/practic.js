
/*
function A(param1) {
    this.param1 = param1;
}

A.prototype.show = function () {
    alert(this.param1);
};

function B(param1, param2) {
    A.call(this, param1);
    this.param2 = param2;
}

B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;

B.prototype.show2 = function () {
    console.log(this.param2);
};

let bObj = new B('text1', 'text2');
bObj.show();
bObj.show2();
*/


/* 22222222

class A {
    constructor(param1) {
        this.param1 = param1;
    }

    show() {
        alert(this.param1);
    }
}
ииа
class B extends A {
    constructor(param1, param2) {
        super(param1);
        this.param2 = param2;
    }

    show2() {
        console.log(this.param2);
    }
}

let bObj = new B('текст1', 'текст2');
bObj.show();
bObj.show2();
*/