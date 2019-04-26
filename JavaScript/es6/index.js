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