//使用export命令定义了模块的对外接口，其他js文件就可以使用import 命令加载这个模块

//main.js
import {firstName, last, year} from '../export/profile'

//大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同
function setName(element){
	element.textContent = firstName + ' ' + lastName;	
}

//重新名称
import {lastName as surName} from '../profile';


//from 指定模块文件的位置，可以是相对位置，也可以是绝对位置。
//.js后缀可以省略。
//如果只是模块名，不带路径，那么碧玺·有配置文件。告诉js引擎该模块位置
import {myMethod} from 'util';


//import 命令具有提升效果，会提升到整个模块头部，首先执行
//不会报错，因为improt是编辑阶段执行的，在代码运行之前。
foo();
import {foo} from 'my_module';


//由于import 是静态执行，所以不能使用表达式和变量。这些只能在运行中才能得到结果的语法结构

//报错
import {'f' + 'oo'} from 'my_module';

//报错
let module = 'my_module';
import {foo} from module;

//报错
if(x === 1){
	import {foo} from 'module1'
}else{
	import {foo} from 'module2'
}

//import语句会执行所加载的模块，
//上面代码仅仅执行lodash模块，但是不输入任何值
import 'lodash'; 

//如果多次重复执行同一个import 语句，那么只会执行一次，而不会多次执行
import 'lodash';
import 'lodash';


//下面语句，对应的是同一个my_module实例。也就是import 语句是Singleton模式。
import {foo} from 'my_module';
import {bar} from 'my_module';


//模块的整体加载
// circle.js
export function area(radius){
	return Math.PI * radius * radius;
}

export function circumference(radius){
	return 2 * Math.PI * radius;
}

//main.js
//逐一指定要加载的方法。
import {area, circumference} from './circle';

console.log('圆面积：' + area(4));
console.log('圆周长：' + circumference(14));

//整体加载
//模块整体加载所在的那个对象（circle），应该是可以静态分析的，所以不运行运行时改变。
import * as circle from './circle';
console.log('圆面积：' + circle.area(4));
console.log('圆周长：' + circle.circumference(14));

import * as circle from './circle';
// 下面两行都是不允许的
circle.foo = 'hello';
circle.area = function () {};