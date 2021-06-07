### ✍️ Tangxt ⏳ 2021-06-03 🏷️ faq

# 04-FAQ

1）范畴论和函数式编程？

对一个 object 的认识，可以是看 ta 的组成（细分再细分：分子，原子，原子核，等等。..），这是集合论的思想，但是也可以是看 ta 与其他 object 的关系，这是范畴论的思想。其实这个思想对于中国人而言，倒是真的不陌生，远在唐朝时期， 我们就知道：

下属当然困惑，既然你这不信，那不信，“那当如何断人？” **林右相回答**：

![关系](assets/img/2021-06-03-09-25-52.png)

举例，集合论的观点与范畴学的观点的区别：比如说，中心，这个概念，我们熟悉的定义是， 一个群 G 的中心是：

![群 G](assets/img/2021-06-03-09-29-53.png)

所以说，用范畴学的观点将一件事情说清楚之所以难，就是我们的祖先说的只可意会，不可言传，将意会的东西说清楚，就需要很多很多的铺垫，背景。

> 可以用集合论的思想来看 OOP，而 FP 则可以用范畴论的思想来看！

➹：[范畴学--精神与细节 - 知乎](https://zhuanlan.zhihu.com/p/76517907)

➹：[语言学和范畴论是什么关系？ - 知乎](https://www.zhihu.com/question/294295690)

➹：[怎样学范畴论？ - 知乎](https://www.zhihu.com/question/20448295)

2）什么是函数式编程？

用最简单的术语来说，函数式编程是一种编程形式，你可以将函数作为参数传递给其它函数，也可以将它们作为值返回。在函数式编程中，我们**从函数的角度思考和编写代码**。JavaScript、Haskell、Clojure、Scala 和 Erlang 是实现函数式编程的一些语言。

3）函数是一等公民？

如果你一直在学习 JavaScript，那么你可能听说过 JavaScript 将函数视为一等公民。这是因为在 JavaScript 或任何其它函数式编程语言中，函数都是对象。

在 JavaScript 中，函数是一种特殊类型的对象。它们是 `Function` 对象。例如：

``` js
function greeting() {
  console.log('Hello World');
}

// Invoking the function
greeting();  // prints 'Hello World'
```

为了证明函数在 JavaScript 中是对象，我们可以这样做：

``` js
// We can add properties to functions like we do with objects
greeting.lang = 'English';

// Prints 'English'
console.log(greeting.lang);
```

注意：虽然这在 JavaScript 中是完全有效的，但这被认为是一种有害的做法。你不应该向函数对象添加随机属性，如果有必要，请使用对象。

在 JavaScript 中，任何可以用其它类型（如对象、字符串或数字）做的事情，都可以用函数来做。你可以将它们作为参数传递给其它函数（回调函数），将它们赋值给变量，并传递它们（把函数变量作为参数传递）等等。这就是为什么 JavaScript 中的函数被称为一等公民。

> 这就是为什么……的原因 -> 是病句。
> 
> 这就是 xxx 的原因、这就是为什么 xxx

4）Higher-Order Functions？

高阶函数是对其它函数进行操作的函数，可以将它们作为参数接受，也可以返回它们。**简单地说，高阶函数是一个接收函数作为参数（argument，实参）或返回函数作为输出的函数**。

例如，`Array.prototype.map`, `Array.prototype.filter` 和 `Array.prototype.reduce`是语言中内置的一些高阶函数。

如何学习高阶函数？

- 没有高阶函数时，你是怎么做的？
- 使用了内置的高阶函数后，你又是这么做的？
- 创建我们自己的高阶函数

简而言之，高阶函数是一种可以接收函数作为参数，甚至可以返回函数的函数。高阶函数就像普通函数一样，只是增加了接收其它函数参数的输入能力或返回其它函数的输出能力

➹：[Understanding Higher-Order Functions in JavaScript](https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad)

