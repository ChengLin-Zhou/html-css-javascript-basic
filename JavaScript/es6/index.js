/* 变量、常量声明let和const 
 * let:
 * 只在声明的代码块中有效
 * 不能重复声明同一变量
 * 不存在变量提升
 * *
 * const:
 * 声明后不可更改所以要在声明时就初始化
 * const 其实保证的不是变量的值不变，而是保证变量指向的内存地址所保存的数据不允许改动
 * 
 * 代码块内如果存在 let 或者 const，代码块会对这些命令声明的变量从块的开始就形成一个封闭作用域，如果调用块中跟全局变量同名的变量，须在声明后调用否则会报错
*/
// let m = 2;
if(1) {
    let m = 2;
    console.log(m);     // true
}
//  console.log(m);     error


/**解构赋值
 * 解构赋值是对赋值运算符的扩展
 * 针对数组或者对象进行模式匹配，然后对其中的变量进行赋值
 * 方便了复杂对象中数据字段获取
 * 左边为解构目标，右边为解构源
 * 
 * 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者
 * 对象的解构赋值可以取到继承的属性
 */
// 解构数组
let [a, b, c] = [1, 2, 3];
console.log(a);

// 嵌套
let [e, [f, g]] = [4, [5, 6]];
console.log(e);

// 可忽略
let [h, , i] = [5, 6, 7];
console.log(h);

// 不完全解构
let [ki=1, di] = [];
console.log(ki + "-" + di);

// 剩余运算
let [ai, ...bi] = [1, 2, 3];
console.log(bi);

// 字符串-在数组的解构中，解构的目标若为可遍历对象，皆可进行解构赋值。可遍历对象即实现 Iterator 接口的数据
let [ak, bk, ck] = 'own';
console.log(ak);

// 解构默认值-当解构模式有匹配结果，且匹配结果是 undefined 时，会触发默认值作为返回结果
let [ae, be=2, ce=ae] = [1];
console.log(ae);
console.log(be);
console.log(ce);

let [ar=1, br=2, cr=ar] = [2];
console.log(ar);


//对象模型的解构
let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
// foo = 'aaa'
// bar = 'bbb'
console.log(foo);
console.log(bar);
 
let { baz : fooo } = { baz : 'ddd' };
// fooo = 'ddd'
console.log(fooo);

// 可嵌套可忽略
let obj = {p: ['hello', {y: 'world'}] };
let {p: [x, { y }] } = obj;
console.log(x);
console.log(y);
// x = 'hello'
// y = 'world'
let obj1 = {p1: ['hello', {y1: 'world'}] };
let {p1: [x1, {  }] } = obj1;
console.log(x1);
// x = 'hello'

// 不完全解构
let obj2 = {p2: [{y2: 'world'}] };
let {p2: [{ y2 }, x2 ] } = obj2;
console.log(y2);
console.log(x2);
// x = undefined
// y = 'world'

// 剩余运算符
let {aa, bb, ...rest} = {aa: 10, bb: 20, cc: 30, dd: 40};
console.log(aa);
console.log(bb);
console.log(rest);
// aa = 10
// bb = 20
// rest = {cc: 30, dd: 40}

//解构默认值
let {aaa = 10, bbb = 5} = {aaa: 3};
console.log(aaa);
console.log(bbb);
// a = 3; b = 5;
let {aaaa: aaaa = 10, bbbb: bbbb = 5} = {aaaa: 3};
console.log(aaaa);
console.log(bbbb);
// aa = 3; bb = 5;


/**
 * symbol类型，原始类型
 * 创建一个独一无二的值
 * 最大的用法是用来定义对象的唯一属性名
 * Symbol 值作为属性名时，该属性是公有属性不是私有属性，可以在类的外部访问
 * 但是不会出现在 for...in 、 for...of 的循环中，也不会被 Object.keys() 、 Object.getOwnPropertyNames() 返回
 * 可以通过 Object.getOwnPropertySymbols() 和 Reflect.ownKeys() 取到
 */

let sy = Symbol('order');
console.log(sy);
let sy1 = Symbol('order');
console.log(sy == sy1);

// 用做对象属性名
let symbolObj = {
    [sy1]: 'sex'
};
symbolObj[sy] = 'color';
// symbolObj.sy1 = 'sex';
console.log(symbolObj.sy);
console.log(symbolObj[sy]);
console.log(symbolObj);


// 定义常量 普通类型 不能保证常量唯一性 但是通过Symbol定义就能保证值的唯一性
const COLOR_RED = Symbol("red");
const COLOR_YELLOW = Symbol("yellow");
const COLOR_BLUE = Symbol("blue");
const COLOR_RET = Symbol("red");
 
function getConstantName(color) {
    switch (color) {
        case COLOR_RED :
            console.log("COLOR_RED");
            break;
        case COLOR_YELLOW :
            console.log("COLOR_YELLOW ");
            break;
        case COLOR_BLUE:
            console.log("COLOR_BLUE");
            break;
        default:
            console.log('Can\'t find this color');
    }
}

getConstantName(COLOR_RED);
console.log(COLOR_RED == COLOR_RET);

// Symbol.for()
// 类似单例模式，首先会在全局搜索被登记的 Symbol 中是否有该字符串参数作为名称的 Symbol 值
// 如果有即返回该 Symbol 值，若没有则新建并返回一个以该字符串参数为名称的 Symbol 值，并登记在全局环境中供搜索
let yellow = Symbol("Yellow");
let yellow1 = Symbol.for("Yellow");
console.log(yellow === yellow1);      // false
 
let yellow2 = Symbol.for("Yellow");
console.log(yellow1 === yellow2);     // true


// Symbol.keyFor()
// 返回一个已登记的 Symbol 类型值的 key ，用来检测该字符串参数作为名称的 Symbol 值是否已被登记
let yellow3 = Symbol.for("Yellow");
Symbol.keyFor(yellow3);    // "Yellow"
console.log(Symbol.keyFor(yellow3));


/** 
 * Map和Set
 * Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值
 * Map和Objects的区别：
 * 一个 Object 的键只能是字符串或者 Symbols，但一个 Map 的键可以是任意值
 * Map 中的键值是有序的（FIFO 原则），而添加到对象中的键则不是
 * Map 的键值对个数可以从 size 属性获取，而 Object 的键值对个数只能手动计算
 * Object 都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突
*/

let myMap = new Map();
let keyString = "a string";

myMap.set(keyString, "键值为a string");
console.log(myMap.get(keyString));
console.log(myMap.get("a string"));

let keyObj = {};
let keyFun = function() {};
let keyNan = Number('foo');
let keyNum = 1;

myMap.set(keyObj, '键值是{}');
myMap.set(keyFun, '键值是fun');
myMap.set(keyNan, '键值是Nan');
myMap.set(keyNum, '键值是1');

console.log(myMap.get(keyObj));
console.log(myMap.get({}));// {}不等于keyObj
console.log(myMap.get(keyFun));
console.log(myMap.get(function(){}));
console.log(myMap.get(keyNan));
console.log(myMap.get(NaN));
console.log(myMap.get(keyNum));


// Map迭代
for(var [keyV, valueN] of myMap) {
    console.log('key: ' + keyV + ' - ' + valueN);
}

/* entries 方法返回一个新的 Iterator 对象，它按插入顺序包含了 Map 对象中每个元素的 [key, value] 数组 */
for(var [keyV, valueN] of myMap.entries()) {
    console.log('key: ' + keyV + ' - ' + valueN);
}

/* keys 方法返回一个新的 Iterator 对象， 它按插入顺序包含了 Map 对象中每个元素的键 */
for (var key of myMap.keys()) {
    console.log(key);
}

/* values 方法返回一个新的 Iterator 对象，它按插入顺序包含了 Map 对象中每个元素的值 */
for (var value of myMap.values()) {
    console.log(value);
}

myMap.forEach(function(value, key) {
    console.log(key + " = " + value);
}, myMap)


// Map 与 Array的转换
var kvArray = [["key1", "value1"], ["key2", "value2"]];
 
// Map 构造函数可以将一个 二维 键值对数组转换成一个 Map 对象
var myMap1 = new Map(kvArray);
console.log(myMap1);
 
// 使用 Array.from 函数可以将一个 Map 对象转换成一个二维键值对数组
var outArray = Array.from(myMap1);
console.log(outArray);

// Map 的克隆
var myMap2 = new Map([["key1", "value1"], ["key2", "value2"]]);
var myMap3 = new Map(myMap2);
 
console.log(myMap2 === myMap3); 

// Map 的合并
var first = new Map([[1, 'one'], [2, 'two'], [3, 'three'],]);
var second = new Map([[1, 'uno'], [2, 'dos']]);
 
// 合并两个 Map 对象时，如果有重复的键值，则后面的会覆盖前面的，对应值即 uno，dos， three
var merged = new Map([...first, ...second]);
console.log(merged);