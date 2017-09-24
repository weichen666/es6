//ES6 将其视为一个模块，里面用export命令对外部输出了三个变量。
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;

//方式二(有限考虑)
export {firstName, lastName, year};

//除了输出变量，还可以输出函数或类（Class）
export function mutiply(x, y){
	return x * y;
};

//export 输出的变量就是未来的名字，但是可以使用as关键字重名名
function v1(){}
function v2(){}

export{
	v1 as streamV1,
	v2 as streamV2,
	v2 as streamLatestVersion
}

//export 命令规定的是对外的接口，必须与模块内部的变量建立一一对应的关系
/**错误写法
export 1
var m = 1;
export m;
**/
//正确写法(在接口名与模块内部变量之间，建立了一一对应的关系)
//1 
export var m = 1;
//2
var m = 1;
export {m};
//3
var n = 1;
export {n as m};

//function 和 class的输出
/** 报错
function f(){}
export f;
**/

//正确
//1
export function f(){};
//2
function f(){}
export {f};

//export 语句输出的接口，与其对应的值是动态绑定关系，即通过接口，可接口取到模块内部的实时值
export var foo = 'bar';
setTimeout(()=> foo = 'baz', 500);

//export 命令可以出现在模块的任何地方，只要处于模块顶层就可以了。
//如果处于快级作用域，就会报错，因为处于条件代码中，就没法静态优化了。

function foo(){
	export default 'bar' //SyntaxError
}
foo();









