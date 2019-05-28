// 传统创建对象
var obj = new Object();
obj.name = 'tom';
obj.age = 23;
obj.sayName = function() {
    console.log(this.name);
}
// obj.sayName();
// console.log(obj);

// 工厂模式，简化创建类似对象过程，返回该对象
function obj1(name, age, weight) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.weight = weight;
    o.sayName = function() {
        console.log(this.name);
    }
    return o;
}

var obj2 = obj1('cat', 2, '3');
// obj2.sayName();
// console.log(obj2);

// 构造函数模式, 解决工厂模式无法识别具体引用类型
function Animal(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function() {
        console.log(this.name);
    }
}

var cat = new Animal('cat', 2);
var dog = new Animal('dog', 2);
// cat.sayName();
// console.log(cat);
// console.log(typeof cat);
// console.log(cat instanceof Animal);
// console.log(cat instanceof Object);
// console.log(cat.sayName == dog.sayName);

// 原型模式，解决了构造函数模式不能共享方法的问题
function Person() {}
Person.prototype.name = 'tom';
Person.prototype.sex = 1;
Person.prototype.food = ['ice', 'borad'];
Person.prototype.sayName = function() {
    console.log(this.name);
}

var tom = new Person();
var tom1 = new Person();
// tom.sayName();
// console.log(tom);
// console.log(Person.prototype.isPrototypeOf(tom));
// console.log(Object.getPrototypeOf(tom));
// console.log(tom.sayName == tom1.sayName);

// 组合构造函数和原型模式，解决原型模式引用类型属性共享修改问题
function Lion(name, age) {
    this.name = name;
    this.age = age;
    this.colors = ['yellow'];
}

// Lion.prototype.sayName = function() {
//     console.log(this.name);
// }

// var nm = new Lion('namei', 2);
// nm.weight = '100kg';
// console.log(propIsProtorype('weight', nm));
// console.log(propIsProtorype('sayName', nm));
// console.log('weight' in nm);
// console.log('sayName' in nm);
// nm.sayName();
// console.log(nm);
// for(var prop in nm) { // 返回所有可枚举的值
//     console.log('prop: ' + prop);
// }

// console.log(Object.keys(nm)); // 返回实例所有可枚举的值
// console.log(Object.getOwnPropertyNames(nm)); // 实例所有属性，无论是否可以枚举
// console.log(Object.getOwnPropertyDescriptor(nm, 'weight')); // 
// console.log(Object.getOwnPropertyDescriptors(nm)); // 


// 重写prototype
// Lion.prototype = {
//     constructor: Lion,
//     sayName: function() {
//         console.log(this.name);
//     }
// }

// var nm = new Lion('namei', 2);
// nm.sayName();
// console.log(nm.constructor);
// console.log(nm.__proto__);

// 判断属性是实例属性还是原型属性
function propIsProtorype(prop, obj) {
    return !obj.hasOwnProperty(prop) && (prop in obj);
}

// 动态原型模式
function Fish(color, age) {
    this.color = color;
    this.age = age;
    if(typeof this.sayColor != "function") {
        Fish.prototype.sayColor = function() {
            console.log(this.color);
        }
    }
}

// var f1 = new Fish('yellow', 2);
// f1.sayColor();
// console.log(f1);
// console.log(f1.__proto__);

// 寄生构造函数模式
function ElePhone(name, age) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.sayName = function() {
        console.log(this.name);
    }
    return o;
}

// var el = new ElePhone('xm', 2);
// el.sayName();
// console.log(el);
// console.log(el.__proto__);
// console.log(el.constructor);

// 稳妥构造函数模式
function Pear(color) {
    var o = new Object();
    o.sayColor = function() {
        console.log(color);
    };
    return o;
}

// var p1 = Pear('yellow');
// p1.sayColor();
// console.log(p1);
// console.log(p1.__proto__);
// console.log(p1.constructor);

// 传统创建对象模式 - 工厂模式 - 构造函数模式 - 原型模式 - 构造函数和原型组合模式 - 动态原型模式 - 寄生构造函数模式 - 稳妥构造函数模式


// 继承方式

// 原型继承
function Per1(name, age) {
    this.name = name;
    this.age = age;
}

function Per2(sex) {
    this.sex = sex;
}

Per1.prototype = {
    constructor: Per1,
    sayName: function() {
        console.log(this.name);
    }
}

Per2.prototype = new Per1('lz', 23);

// var lz = new Per2(1);
// lz.sayName();
// console.log(lz);
// console.log(lz.constructor);
// console.log(lz.__proto__);

// 借用构造函数，解决无法向超类型中传递参数，以及共享超类型引用属性问题
// function Per3(name, age) {
//     this.name = name;
//     this.age = age;
//     this.colors = ['yellow'];
// }

// function Per4(name, age, sex) {
//     Per3.call(this, name, age);
//     this.sex = sex;
// }

// Per4.prototype = new Per3('lz', 22);

// var hl = new Per4('hl', 24);
// var ht = new Per4('ht', 28);
// var lz = new Per3('lz', 22);

// hl.colors.push('blue');
// console.log(hl.colors);
// console.log(ht.colors);
// console.log(lz.colors);

// 组合继承-组合借用构造函数和原型继承
function Per3(name, age) {
    this.name = name;
    this.age = age;
    this.colors = ['yellow'];
}

function Per4(name, age, sex) {
    Per3.call(this, name, age);
    this.sex = sex;
}
// Per3.prototype.sayName = function() {
//     console.log(this.name);
// }
Per3.prototype = {
    constructor: Per3,
    sayName: function() {
        console.log(this.name);
    }
};

Per4.prototype = new Per3('lz', 22);

// var hl = new Per4('hl', 24);
// var ht = new Per4('ht', 28);
// var lz = new Per3('lz', 22);

// hl.colors.push('blue');
// hl.sayName.call(hl);
// lz.sayName.call(lz);
// console.log(ht.colors);
// console.log(lz.colors);

// 原型式继承
function Milk(o) {
    function F(){}
    F.prototype = o;
    return new F();
}

var objN = {
    name: 'tom',
    age: 23,
    sayName: function() {
        console.log(this.name);
    }
}

// var mi = Milk(objN);
// var mi2 = Milk(objN);
// mi.name = 'jhon';
// console.log(mi.name);
// mi.sayName();
// console.log(mi2.name);
// mi2.sayName();

// Object.create() 规范了原型式继承
// var mi = Object.create(objN);
// var mi2 = Object.create(objN);
// mi.name = 'jhon';
// console.log(mi.name);
// mi.sayName();
// console.log(mi2.name);
// mi2.sayName();

// 寄生式继承
function Water(o) {
    var clone = Milk(o);
    clone.sayName = function() {
        console.log(this.name);
    }
    return clone;
}

// var w = Water(objN);
// console.log(w);
// w.sayName();


// 寄生组合式继承-最受欢迎最合理的继承方式
function Cf() {

}

function Cs() {
    Cf.call(this);
}

Cf.prototype.sayName = function() {
    console.log(222);
}

inheitPrototype(Cs, Cf);

// 原型赋值
function inheitPrototype(a, b) {
    var prototype = Milk(b.prototype);
    prototype.constructor = a;
    a.prototype = prototype;
}

// var cs1 = new Cs();
// cs1.sayName();


// 原型链继承 - 借用构造函数 - 组合继承 - 原型式继承 - 寄生式继承 - 寄生组合式继承


// 数据属性(configurable/enumerable/writable/value) - 访问器属性(configurable/enumerable/Get/Set)
var obk = {
    _year: 2004,
    edition: 1
};

// Object.defineProperty(ob, 'book', {
//     configurable: true,
//     value: 20
// })

Object.defineProperty(obk, "year", {
    // 不能直接定义
    get: function() {
        return this._year;
    },
    set: function(kv) {
        if(kv > 2004) {
            this._year = kv;
            this.edition += kv - 2004;
            return;
        }
    },
    configurable: true,
    enumerable: true
});

obk.year = 2005;

// Object.defineProperties(ob, {
//     book: {
//         configurable: true,
//         value: 20
//     },
//     name: {
//         configurable: false,
//         value: 'tom'
//     }
// })
// delete ob.book;

// Object.defineProperty(ob, 'book', {
//     value: 22
// })

console.log(obk.edition);
// console.log(ob.book);
// console.log(ob.name);
// console.log(Object.getOwnPropertyDescriptor(ob, 'book'));
// console.log(Object.getOwnPropertyDescriptors(ob));



// 相关方法和操作符

// typeof 判断类型
// in  是否为对象属性(包含原型对象中查找)
// for-in 返回所有可枚举属性(包含原型对象中)
// instanceof 判断引用类型的具体类型
// hasOwnProperty() 是否为对象属性(不包含原型对象中查找)
// Object.defineProperty() 设置内部属性(数据属性和访问器属性)
// obj.__defineGetter__() 设置内部属性(IE8访问器属性)
// obj.__defineSetter__() 设置内部属性(IE8访问器属性)
// Object.defineProperties() 设置内部属性(数据属性和访问器属性)
// Object.getOwnPropertyDescriptor() 返回对象某个属性的特性值对象
// Object.getOwnPropertyDescriptors() 返回某个对象所有属性的特性值对象
// Object.keys() 返回所有实例可枚举属性(不包含原型对象)
// Object.getOwnPropertyNames() 返回所有实例属性，不管是否可枚举(不包含原型对象)
// prototype.isPrototypeOf(obj) 是否为某个实例的原型对象
// Object.getPrototypeOf() 返回某个实例的原型对象的引用
// Object.create() 规范原型式继承， 返回以参数为原型对象的实例对象