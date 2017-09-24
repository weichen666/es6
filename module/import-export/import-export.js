//如果在一个模块之中，先输入后输出同一个模块，import语句可以与export语句写在一起。

export {foo, bar} from 'my_mudule';

//等价于
import {foo, bar} from 'my_module';
export {foo, bar}

//模块的接口改名和整体输出，也可以采用这种写法。
export {foo as myFoo} from 'my_module';

//整体输出
export * from 'my_module';

//默认接口
export { default } from 'foo';

//具体名接口更改为默认接口
export {es6 as default} from './someModule';
//等同于
import {es6} from './someModule';
export default es6;

//默认接口更改为具体名接口
export {default as es6} from './someModule';



