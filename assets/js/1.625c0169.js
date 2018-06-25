(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{52:function(e,t,a){"use strict";a.r(t);var r=a(0),n=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择器","aria-hidden":"true"}},[e._v("#")]),e._v(" 选择器")]),a("h2",{attrs:{id:"缩进"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缩进","aria-hidden":"true"}},[e._v("#")]),e._v(" 缩进")]),a("p",[e._v("Stylus 看起来很神奇(因为缩进).在这里空格尤其重要，因为我们用缩进和减少缩进来替代了 "),a("code",[e._v("{")]),e._v(" 和 "),a("code",[e._v("}")]),e._v(" ,就像下面的代码:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("body\n    color white\n")])]),a("p",[e._v("它会编译成这样：")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("body\n    color:#fff\n")])]),a("p",[e._v("如果你愿意，你也可以使用冒号来分隔属性和值")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("body\n    color:white\n")])]),a("h2",{attrs:{id:"规则集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规则集","aria-hidden":"true"}},[e._v("#")]),e._v(" 规则集")]),a("p",[e._v("Stylus 也和 CSS 一样，允许你使用逗号分隔来为多个选择器定义属性.")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("textarea,input\n    border 1px solid #eee\n")])]),a("p",[e._v("使用新行也是一样")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("textarea\ninput\n    border 1px solid #eee\n")])]),a("p",[e._v("唯一例外的情况是那些看起来像属性的选择器。例如"),a("code",[e._v("foo bar baz")]),e._v("可能是一个属性或是一个选择器")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("foo bar baz\n>input\n    border 1px solid\n")])]),a("p",[e._v("因为这个原因，我们可能需要在结尾加上一个逗号：")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("foo bar baz,\nform input,\n> a\n    border 1px solid\n")])]),a("h2",{attrs:{id:"父集引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#父集引用","aria-hidden":"true"}},[e._v("#")]),e._v(" 父集引用")]),a("p",[a("code",[e._v("&")]),e._v("符号将引用父选择器。下面的例子中，两个选择器("),a("code",[e._v("textarea")]),e._v("和"),a("code",[e._v("input")]),e._v(")会在"),a("code",[e._v(":hover")]),e._v("伪类选择器上都更新"),a("code",[e._v("color")]),e._v("值。")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("textarea\ninput\n    color #A7A7A7\n    &:hover\n        color #000\n")])]),a("p",[e._v("会被编译为：")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("textarea,\ninput{\n    color:#A7A7A7;\n}\n\ntextarea:hover,\ninput:hover{\n    color：#000\n}\n")])]),a("p",[e._v("下面这里例子，将在混合书写中使用父集引用在 IE 浏览器下实现一个"),a("code",[e._v("2px")]),e._v("的边框：")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("box-shadow()\n    -webkit-box-shadow arguments\n    -moz-box-shadow arguments\n    -box-shadow arguments\n    html.ie8 &,\n    html.ie7 &,\n    html.ie6 &\n        border 2px solid arguments[length(arguments)-1]\n\nbody\n    #login\n    box-shadow 1px 1px 3px #eee\n")])]),a("p",[e._v("会变成这个样子：")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("body #login{\n    -webkit-box-shadow: 1px 1px 3px #eee;\n    -moz-box-shadow: 1px 1px 3px #eee;\n    box-shadow: 1px 1px 3px #eee;\n}\n\nhtml.ie8 body #login,\nhtml.ie7 body #login,\nhtml.ie6 body #login {\n    border: 2px solid #eee;\n}\n")])]),a("p",[e._v("如何你不需要"),a("code",[e._v("&")]),e._v("在选择器之外也像一个父引用一样，你可以使用这样来避免:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".foo[title*=‘\\&']\n//=> .foo[title*='&']\n")])]),a("h2",{attrs:{id:"部分引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部分引用","aria-hidden":"true"}},[e._v("#")]),e._v(" 部分引用")]),a("p",[a("code",[e._v("^[N]")]),e._v("出现在选择器的任意位置，"),a("code",[e._v("N")]),e._v("是一个数字，表示一个部分引用。部分引用用法向父集引用一样，但是父引用包含着整个选择器，而部分引用仅包含着嵌套选择器的第"),a("code",[e._v("N")]),e._v("级，所以你可以单独引用潜逃中的某个级别。\n"),a("code",[e._v("^[0]")]),e._v("将获取到第一级选择器，"),a("code",[e._v("^[1]")]),e._v("将获取到第二级选择器元素，以此类推:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".foo\n    &_bar\n        width:10ox\n\n        ^[0]:forver &\n            width:20px\n")])]),a("p",[e._v("这将被渲染为:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".foo_bar{\n    width:10px;\n}\n\n.foo:hover .foo_bar{\n    width:20px;\n}\n")])]),a("p",[e._v("负值将从结尾开始结算,所以"),a("code",[e._v("^[-1]")]),e._v("将返回"),a("code",[e._v("&")]),e._v("链前的最后一个选择器:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".foo\n    &_bar\n        &_baz\n            width:10px\n\n            ^[-1]:hover &\n            width:20px\n")])]),a("p",[e._v("这将被渲染为:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".foo_bar_baz{\n    width:10px;\n}\n.foo_bar:hove .foo_bar_baz{\n    width：20;\n}\n")])]),a("p",[e._v("在回合书写中，当你不知道嵌套级别的时候，负值会是特别有用的用法去帮你找到它。")]),a("p",[a("em",[e._v("请记住部分引用在你给出获取的嵌套级别之前他将包含整个选择器渲染链，而不是选择器的一部分")])]),a("h2",{attrs:{id:"部分引用中的范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部分引用中的范围","aria-hidden":"true"}},[e._v("#")]),e._v(" 部分引用中的范围")]),a("p",[a("code",[e._v("^[N..M]")]),e._v("出现在选择器的任何位置，"),a("code",[e._v("N")]),e._v("和"),a("code",[e._v("M")]),e._v("是一个数字，表示一个部分引用。")]),a("p",[e._v("如果你有这种情况，当你需要去获取选择其中的部分或者获取这个范围的部分程序，你可能需要在部分引用中使用范围。")]),a("p",[e._v("如果范围从正值开始，这结果将不包含先前级别的选择器，你获得的结果中那些级别的选择器会被插入到根部并忽略组合("),a("em",[e._v("翻译的不一定正确")]),e._v(")。")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".foo\n    & .bar\n        width：10px\n\n        ^[0]:hover ^[1..-1]\n            width:20px\n")])]),a("p",[e._v("它将会渲染为:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".foo .bar{\n    width:10px;\n}\n.foo:hover .bar{\n    width:20px;\n}\n")])]),a("p",[e._v("在这范围中一个数据会作为开始位置，另一个是结束位置，注意的是那些数字的顺序其实是无所谓的，他总会被从小到大进行渲染，如"),a("code",[e._v("^[1..-1]")]),e._v("和"),a("code",[e._v("^[-1..1]")]),e._v("是等同的。")]),a("p",[e._v("当两个数字相等时，结果将会仅获取选择气的一级，所以在上个例子中你可以用"),a("code",[e._v("^[-1..-1]")]),e._v("代替"),a("code",[e._v("^[1..-1]")]),e._v("，它们都会返回最后一级选择器，如果在混合书写中使用它你会觉得更加可靠。")]),a("h2",{attrs:{id:"初始引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始引用","aria-hidden":"true"}},[e._v("#")]),e._v(" 初始引用")]),a("p",[a("code",[e._v("~/")]),e._v("符号在选择器的开始会被只想选择器嵌套的开始，可以认为他是"),a("code",[e._v("^[0]")]),e._v("的快捷方式。唯一的缺点就是你仅可以在选择器的开始使用它。")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".block\n    &_element\n        ~/:hover &\n            color:red\n")])]),a("p",[e._v("会被渲染为:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".block:hover .block_element{\n    color:#foo\n}\n")])]),a("h2",{attrs:{id:"相对引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相对引用","aria-hidden":"true"}},[e._v("#")]),e._v(" 相对引用")]),a("p",[e._v("以"),a("code",[e._v("../")]),e._v("符号开始的选择器被认为是一个相对引用，它会指向"),a("code",[e._v("&")]),e._v("符号之前的一层的选择器。你也可以使用嵌套的相对引用:"),a("code",[e._v("../../")]),e._v("来获取更深层次的引用，但是需要注意的是它仅可以被用在选择器的开始位置。")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".foo\n    .bar\n        width:10\n    &,\n    ../ .baz\n        height:10px\n")])]),a("p",[e._v("将会渲染为:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".foo .bar{\n    width:10px;\n}\n\n.foo .bar{\n    width:10px;\n}\n.foo .bar,\n.foo .baz{\n    height:10px;\n}\n")])]),a("p",[e._v("相对引用可以认为是带范围的部分引用的快捷方式类似"),a("code",[e._v("^[0..(N+1)]")]),e._v("这里"),a("code",[e._v("N")]),e._v("相对引用中的数字。("),a("em",[e._v("总觉得不太对有些问题")]),e._v(")")]),a("h2",{attrs:{id:"根引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根引用","aria-hidden":"true"}},[e._v("#")]),e._v(" 根引用")]),a("p",[a("code",[e._v("/")]),e._v("符号出现在选择器的开始被认为是一个根引用，它会引用根上下文，这意味着不会将父选择器添加到它上面(除非你和&一起使用).当你需要为默写嵌套选择器和另外的选择器写入一些样式时，它会很有帮助。")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("textarea\ninput\n    color #A7A7A7\n    &:hover,\n    /.is-hovered\n        color #000\n")])]),a("p",[e._v("编译后:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("textarea,\ninpu{\n    color:#a7a7a7;\n}\n\ntextarea:hover,\ninput:hover，\n.is-hovered{\n    color：#000\n}\n")])]),a("h2",{attrs:{id:"selector-内置函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#selector-内置函数","aria-hidden":"true"}},[e._v("#")]),e._v(" selector() 内置函数")]),a("p",[e._v("你可以使用内置函数"),a("code",[e._v("selector()")]),e._v("去获取当前编译的选择器。可以使用在混合书写中去做检查或者其他有趣的事情。")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".foo\n    selector()\n//=>‘.foo'\n\n.foo\n    &：hover\n        selector()\n//'.foo:hover'\n")])]),a("p",[e._v("这个内置函数可以传入可选的字符串参数,这种情况下它会返回编译好的选择器。注意的是如果没有"),a("code",[e._v("&")]),e._v("符号的话，他将不受当前选择器作用域的影响。")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".foo\n    selector('.bar')\n//=>'.bar'\n\n.foo\n    selector('&:hover')\n//’.foo:hover'\n")])]),a("h2",{attrs:{id:"多参数值的-selector-内置函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多参数值的-selector-内置函数","aria-hidden":"true"}},[e._v("#")]),e._v(" 多参数值的 selector 内置函数")]),a("p",[e._v("selector()内置函数可以通过传入多参数值或逗号分隔的列表去更方便快捷的创建嵌套选择器。")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("{selector('.a','.b','.c,.d')}\n    color:red\n")])]),a("p",[e._v("等同于:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".a\n    .b\n        .c,\n        .d\n            color:red\n")])]),a("p",[e._v("它会被渲染为:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".a .b .c,\n.a .b .d{\n    color:#f00\n}\n")])]),a("h2",{attrs:{id:"selectors-内置函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#selectors-内置函数","aria-hidden":"true"}},[e._v("#")]),e._v(" selectors() 内置函数")]),a("p",[e._v("这个内置函数会返回当前层级的嵌入选择器的逗号列表分隔的内容。")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".a\n    .b\n        &_c\n            content:selectors()\n")])]),a("p",[e._v("编译为:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".a .b_c{\n    content:'.a','& .b','&_c'\n}\n")])]),a("h2",{attrs:{id:"消除分歧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消除分歧","aria-hidden":"true"}},[e._v("#")]),e._v(" 消除分歧")]),a("p",[e._v("像"),a("code",[e._v("margin -n")]),e._v("这样的表达式中"),a("code",[e._v("-n")]),e._v("可能会被解释为一个减法运算，也可能解释成一个一元运算符，为了避免这种分歧，需要用括号包裹住表达式:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pad(n)\n    margin (-n)\n\nbody\n    pad(5px)\n")])]),a("p",[e._v("编译为:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("body{\n    margin:-5px;\n}\n")])]),a("p",[e._v("但是仅在函数中会这样(因为函数用返回值同时扮演着混合和回调)。")]),a("p",[e._v("下面这个例子，就是正常的（和上面一样的结果）:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("body\n    margin -5px\n")])]),a("p",[e._v("如果有 Stylus 无法处理的属性值，那么"),a("code",[e._v("unquote")]),e._v("会帮到你:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("filter unquote('progid:DXImageTransform.Microsoft.BasicImage(rotation=1)')\n")])]),a("p",[e._v("生成为:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("filter progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\n")])])])}],!1,null,null,null);t.default=n.exports}}]);