#  前端规范

## 不好命名可以去[这里](https://unbug.github.io/codelf/)

### jquery 1.8.1 + bootstrap 3.* + iconfont



## HTML

- 中划线命名 eg: class="user-list"
- 语义化 易读性 eg: user, list 不要aa,bb,cc类似的
- 少用浮动和定位 :使用的flex
- 行内元素禁止嵌套块级元素，特殊情况除外
- 表格形式的布局尽量用 table
- 列表形式的布局尽量用 ul,li
- 重复的HTMl，写成组件，增加复用性
- 尽量每一个模块都要有注释
- 尽量不用id
- 能用字体的不要使用图片

## CSS

- css选择器最好不要嵌套超过4层
- 多用css3的属性
- 每一个模块尽量注释
- 命名语义化和中划线形式
- 预编译器采用less
- 重复性的样式写成函数
- 组件内部的样式比较多的，写成外部样式，引入

## JavaScript

- js语法统一使用es6的语法
- 变量命名用小驼峰命名 eg：userList
- 组件统一采用大驼峰命名 eg: UserList
- 变量声明用let
- 所用的常量都要用const定义在使用
- 函数使用箭头函数
- 能做成组件的尽量做成组件
- 共同的逻辑写成mixin，函数封装或者是组件的mixin hook
- 语法检测使用eslint规范
- 组件内部少用的dom操作，尽量使用数据驱动
- 组件尽量写的灵活些，可以配置属性的
- 函数参数注释说明
- 代码分块注释（核心逻辑及行注释）