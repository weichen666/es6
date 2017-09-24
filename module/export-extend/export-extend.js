//模块之间也可以继承。

export * from 'circle';
export var e = 2.71828182846;
export default function(x){
	return Math.exp(x);
}

//上面代码中的export *，表示再输出circle模块的所有属性和方法。
//注意，export *命令会忽略circle模块的default方法。
///然后，上面代码又输出了自定义的e变量和默认方法。
//这时，也可以将circle的属性或方法，改名后再输出。
export { area as circleArea } from 'circle';

//加载上述模板
import * as math from 'circleplus';
import exp from 'circleplus';
console.log(exp(math.e));


//跨模块常量
//const声明的常量只在当前代码块有效。如果想设置跨模块的常量（即跨多个文件），
//或者说一个值要被多个模块共享，可以采用下面的写法。

// constants.js 
export const A = 1;
export const B = 3;
export const C = 4;

//test1.js
import * as constants from './constants';
console.log(constants.A);

//test2.js
import {A, B} from './constants';
console.log(A); // 1
console.log(B); // 3


//如果要使用的常量非常多，可以建一个专门的constants目录，
//将各种常量写在不同的文件里面，保存在该目录下。

// constants/db.js
export const db = {
  url: 'http://my.couchdbserver.local:5984',
  admin_username: 'admin',
  admin_password: 'admin password'
};

// constants/user.js
export const users = ['root', 'admin', 'staff', 'ceo', 'chief', 'moderator'];

//然后，将这些文件输出的常量，合并在index.js里面。
export {db} from './db';
export {users} from './users';

//使用时
import {db, users} from './index';

