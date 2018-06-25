(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{50:function(n,e,a){"use strict";a.r(e);var t=a(0),r=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运算符","aria-hidden":"true"}},[n._v("#")]),n._v(" 运算符")]),a("h2",{attrs:{id:"运算符优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运算符优先级","aria-hidden":"true"}},[n._v("#")]),n._v(" 运算符优先级")]),a("p",[n._v("下面是运算符优先级表，从高到低：")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v(".\n[]\n!~+-\nis defined\n** * / %\n+ -\n... ..\n<= >= < >\nin\n== is != is not isnt\nis a\n&& and || or\n?:\n= := ?= += -=\nnot\nif unless\n")])]),a("h2",{attrs:{id:"一元表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一元表达式","aria-hidden":"true"}},[n._v("#")]),n._v(" 一元表达式")]),a("p",[n._v("下面是一些可用的一元运算符，"),a("code",[n._v("!")]),n._v(","),a("code",[n._v("not")]),n._v(","),a("code",[n._v("-")]),n._v(","),a("code",[n._v("+")]),n._v(",and"),a("code",[n._v("～")]),n._v("。")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("!0\n// => true\n\n!!0\n// => false\n\n!1\n// => false\n\n!!5px\n// => true\n\n-5px\n// => -5px\n\n--5px\n// => 5px\n\nnot true\n// => false\n\nnot not true\n// => true\n")])]),a("p",[n._v("逻辑符"),a("code",[n._v("not")]),n._v("的优先级较低，因此")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("a = 0\nb = 1\n\n!a and !b\n// => false\n//parsed as: (!a) and (!b)\n")])]),a("p",[n._v("看下面")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("not a or b\n// => false\n// parse as :not (a or b)\n")])]),a("p",[n._v("##　二元运算符")]),a("p",[n._v("下标运算符允许我们去通过索引获取表达式内部值(从零开始)，负值可以从表达式中最后的元素开始。")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("list = 1 2 3\nlist[0]\n// => 1\n\nlist[-1]\n// => 3\n")])]),a("p",[n._v("括号表达式可以充当元组(例如"),a("code",[n._v("(15px,15px),(1,2,3)")]),n._v("):")]),a("p",[n._v("下面这个例子是一个使用元组的错误处理(并展示结构的多功能)")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("add(a,b)\n    if a is a 'unit' and b is a 'unit'\n        a + b\n    else\n        (error 'a and b must be units!)\n\nbody\n    padding add(1,'5')\n    // => padding:error \"a and b must units\"\n\n    padding add(1,'5')[0]\n    // => padding:error;\n\n    padding add(1,'5')[0] == error\n    // => padding:true;\n\n    padding add(1,'5')[1]\n    // => padding:\"a and b must units\"\n")])]),a("p",[n._v("这是一个更复杂的例子.现在我们执行内置函数"),a("code",[n._v("error()")]),n._v("，当标识符(传入的第一个值)等于"),a("code",[n._v("error")]),n._v("时返回错误信息。")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("if(val = add(1,'5'))[5] == error\n    error(val[1])\n")])]),a("h2",{attrs:{id:"范围运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#范围运算符","aria-hidden":"true"}},[n._v("#")]),n._v(" 范围运算符 .. ...")]),a("p",[n._v("同事提供这包括(开放)范围运算符("),a("code",[n._v("..")]),n._v(")和排除(闭合)范围运算符("),a("code",[n._v("...")]),n._v(")去扩展表达式:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("1..5\n// => 1 2 3 4 5\n\n1...5\n// => 1 2 3 4\n\n5..1\n// => 5 4 3 2 1\n")])]),a("h2",{attrs:{id:"加减运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加减运算符","aria-hidden":"true"}},[n._v("#")]),n._v(" 加减运算符: + -")]),a("p",[n._v("二元加减运算符会在运算中将单位进行转换，或使用默认字面值。例如"),a("code",[n._v("5s-2px")]),n._v("结果是"),a("code",[n._v("3s")]),n._v("。")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('15px -5px\n// => 10px\n\n5-2\n// => 3\n\n5in - 50mm\n// => 3.3031in\n\n5s - 1000ms\n// => 4s\n\n20mm + 5in\n// => 121.6in\n\n"foo " + "bar"\n// => "foo bar"\n\n"num " + 15\n// => "num 15"\n')])]),a("h2",{attrs:{id:"乘法运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#乘法运算符","aria-hidden":"true"}},[n._v("#")]),n._v(" 乘法运算符: / * %")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("2000ms + (1s * 2)\n// => 4000ms\n\n5s/2\n// => 2.5s\n\n4%2\n// => 0\n")])]),a("p",[n._v("当使用"),a("code",[n._v("/")]),n._v("在一个属性值中，你需要用括号包住它，否则"),a("code",[n._v("/")]),n._v("会按字面含义进行处理(支持 CSS"),a("code",[n._v("line-height")]),n._v("):")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("font: 14px/1.5\n")])]),a("p",[n._v("但是下面等同于"),a("code",[n._v("14px")]),n._v("÷ "),a("code",[n._v("1.5")]),n._v(":")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("font: (14px/1.5);\n")])]),a("p",[n._v("这仅在"),a("code",[n._v("/")]),n._v("运算符时需要.")]),a("h2",{attrs:{id:"指数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指数","aria-hidden":"true"}},[n._v("#")]),n._v(" 指数: **")]),a("p",[n._v("下面是指数运算符:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("2 ** 8\n// => 256\n")])]),a("h2",{attrs:{id:"相等和关系运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相等和关系运算符","aria-hidden":"true"}},[n._v("#")]),n._v(" 相等和关系运算符 : == != >= <= ><")]),a("p",[n._v("相等运算符可以用在等同的单位，颜色，字符串甚至标识符上。这是一个强大的概念，甚至任意的标识符(像"),a("code",[n._v("wahoo")]),n._v(")可以被当做原子使用。方法可能返回"),a("code",[n._v("yes")]),n._v("或"),a("code",[n._v("no")]),n._v("来代替"),a("code",[n._v("true")]),n._v("和"),a("code",[n._v("false")]),n._v("(但这是不建议的).")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("5 == 5\n// => true\n\n10 > 5\n// => true\n\n#fff == #fff\n// => true\n\ntrue == false\n// => false\n\nwahoo == yay\n// => false\n\nwahoo == wahoo\n// => true\n\n\"test\" == \"test\"\n// => true\n\ntrue is true\n// => true\n\n'hey' is not 'bye'\n// => true\n\n'hey' isnt 'bye'\n// => true\n\n(foo bar) == (foo bar)\n// => true\n\n(1 2 3) == (1 2 3)\n// => true\n\n(1 2 3) == (1 1 3)\n// => false\n")])]),a("p",[n._v("只有精确地值才可以匹配.例如,"),a("code",[n._v("0 == false")]),n._v(" 和 "),a("code",[n._v("null = false")]),n._v(" 都是 "),a("code",[n._v("false")]),n._v(".")]),a("p",[n._v("别名:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("== is\n!= is not\n!= isnt\n")])]),a("h2",{attrs:{id:"真实性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#真实性","aria-hidden":"true"}},[n._v("#")]),n._v(" 真实性")]),a("p",[n._v("在 Stylus 中几乎大多数都会被解析成"),a("code",[n._v("true")]),n._v(",包括单位后缀，甚至"),a("code",[n._v("0%")]),n._v(","),a("code",[n._v("0px")]),n._v(",等都将会被解析为"),a("code",[n._v("true")]),n._v("(因为这在 Stylus 的混合书写和函数中认为单位是有效的是很常见的)")]),a("p",[n._v("然而,"),a("code",[n._v("0")]),n._v("本身在算数中就是"),a("code",[n._v("false")]),n._v("。")]),a("p",[n._v("表达式(或者列表)长度大于 1 时，被认为是真。")]),a("p",[a("code",[n._v("true")]),n._v("的例子:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("0%\n0px\n1px\n-1\n-1px\nhey\n'hey'\n(0 0 0)\n(\" \")\n")])]),a("p",[a("code",[n._v("false")]),n._v("的例子:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("0\nnullfalser\n''\n")])]),a("h2",{attrs:{id:"逻辑运算符-and-or"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逻辑运算符-and-or","aria-hidden":"true"}},[n._v("#")]),n._v(" 逻辑运算符: && || and or")]),a("p",[n._v("逻辑运算符"),a("code",[n._v("&&")]),n._v("和"),a("code",[n._v("||")]),n._v("的别名是"),a("code",[n._v("and")]),n._v("和"),a("code",[n._v("or")]),n._v(",它们优先级相同.")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("5 && 3\n// => 3\n\n0 || 5\n// => 5\n\n0 && 5\n// => 0\n\n#fff is a 'rgba' and 15 is 'unit'\n// => true\n")])]),a("h2",{attrs:{id:"存在运算符-in"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存在运算符-in","aria-hidden":"true"}},[n._v("#")]),n._v(" 存在运算符: in")]),a("p",[n._v("检查运算符左边的内容是否存在于运算符右边的表达式中.")]),a("p",[n._v("简单的例子:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("nums = 1 2 3\n1 in nums\n// => true\n\n5 in nums\n// => false\n")])]),a("p",[n._v("一些未定义的标识符:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("words = foo bar baz\nbar in words\n// => bar\n\nHEY in words\n// => false\n")])]),a("p",[n._v("同样可以用在元组中:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("vals = (error 'one')(error 'two')\nerror in vals\n// => false\n\n(error 'one') in vals\n// => true\n\n(error 'two') in vals\n// => true\n\n(error 'something') in vals\n// => false\n")])]),a("p",[n._v("在混合书写中的例子:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("pad(types = padding,n=5px)\n    if padding in types\n        padding n\n    if margin in types\n        margin n\n\nbody\n    pad()\n\nbody\n    pad(margin)\n\nbody\n    pad(padding margin,10px)\n")])]),a("p",[n._v("解析为:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("body{\n    padding:5px;\n}\n\nbody{\n    margin:5px;\n}\nbody{\n    padding:10px;\n    margin:10px;\n}\n")])]),a("h2",{attrs:{id:"条件赋值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件赋值","aria-hidden":"true"}},[n._v("#")]),n._v(" 条件赋值 ?= :=")]),a("p",[n._v("条件赋值运算符"),a("code",[n._v("?=")]),n._v("（别名是"),a("code",[n._v(":=")]),n._v(")，让我们定义变量不需要去破坏原来的值(如果存在的话)。这个操作运算符可以扩展为三元中的一个"),a("code",[n._v("is defined")]),n._v("的二元操作。")]),a("p",[n._v("例如,下面是相等的：")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("color:=white\ncolor?=white\ncolor = color is denfind ? color : white\n")])]),a("p",[n._v("当使用"),a("code",[n._v("=")]),n._v("时，可以简单的赋值:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("color = white\ncolor = black\n\ncolor\n// => black\n")])]),a("p",[n._v("但是当使用"),a("code",[n._v("?=")]),n._v("时，我们第二行就没有效果了(当变量已经被定义):")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("color = white\ncolor ?= black\n\ncolor\n// => black\n")])]),a("h2",{attrs:{id:"实例检查-is-a"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例检查-is-a","aria-hidden":"true"}},[n._v("#")]),n._v(" 实例检查: is a")]),a("p",[n._v("Stylus 提供一个二元操作符是"),a("code",[n._v("is a")]),n._v("用于类型检测。")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("15 is a 'unit'\n// => true\n\n#fff is a 'rgba'\n// => true\n\n15 is a `rgba'\n// => false\n")])]),a("p",[n._v("或者我们可以使用内置函数"),a("code",[n._v("type()")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("type(#fff) == `rgba`\n// => true\n")])]),a("p",[n._v("注意:"),a("code",[n._v("color")]),n._v("是唯一的特殊情况，运算符左侧是"),a("code",[n._v("RGBA")]),n._v("或"),a("code",[n._v("HSLA")]),n._v("时，他都为"),a("code",[n._v("true")]),n._v(".")]),a("h2",{attrs:{id:"变量定义-is-defined"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量定义-is-defined","aria-hidden":"true"}},[n._v("#")]),n._v(" 变量定义: is defined")])])}],!1,null,null,null);e.default=r.exports}}]);