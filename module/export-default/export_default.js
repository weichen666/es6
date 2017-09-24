//使用import命令，用户需要知道所要加载的变量名或函数名，否则无法加载。
//为了给用户提供方便，让他们不用阅读文档就能加载模块，
//就要用到export defualt命令，为模块指定默认输出。

//export-default.js
export default function(){
	console.log('foo');
} 

//其他模块加载该模块时，import 命令可以为该匿名函数指定任意名字。

//可以用任意名称
// import-default.js
// 可以用任何名称指向export-default.js输出的方法，
// 这时就不需要知道原模块输出的函数名，
// 需要注意到是，这时 import 命令后面，不使用大括号。
import customName from './export-default';
customName(); // 'foo'

//export default 用在非匿名函数前，
export default function foo(){
	console.log('foo');
}

//写成
function foo(){
	console.log('foo');
}

// foo函数的函数名foo，在模块外部是无效的。
// 加载的时候，视同匿名函数加载。
export default foo;


//第一组
//第一组是使用export default时，对应的import语句不需要使用大括号；
export default function crc32(){ //输出
	//...
}
import crc32 from 'crc32'; //输入

//第二组
//第二组是不使用export default时，对应的import语句需要使用大括号。
export function crc32(){	//输出

};
import {crc32} from 'crc32'; //输出


//export default命令用于指定模块的默认输出。
//显然，一个模块只能有一个默认输出，因此export default命令只能使用一次。
//所以，import命令后面才不用加大括号，因为只可能对应一个方法。


//本质上，export default就是输出一个叫做default的变量或方法，
//然后系统允许你为它取任意名字。所以，下面的写法是有效的。

// modules.js
function add(x, y) {
  return x * y;
}
export {add as default};
// 等同于
// export default add;

// app.js
import { default as xxx } from 'modules';
// 等同于
// import xxx from 'modules';


//正是因为export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句。
// 正确
export var a = 1;

// 正确
var a = 1;
export default a;

// 错误
export default var a = 1;


//因为export default本质是将该命令后面的值，赋给default变量以后再默认，
//所以直接将一个值写在export default之后。
// 正确
export default 42;

// 报错
export 42;


//有了export default命令，输入模块时就非常直观了，以输入 lodash 模块为例。
import _ from 'lodash';

//如果想在一条import语句中，同时输入默认方法和其他接口，可以写成下面这样。
import _, { each, each as forEach } from 'lodash';

export default function (obj) {
  // ···
}

export function each(obj, iterator, context) {
  // ···
}

export { each as forEach };


