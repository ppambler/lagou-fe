### ✍️ Tangxt ⏳ 2021-11-02 🏷️ FAQ

# FAQ

### <mark>1）关于 Gulp 的一些使用场景？</mark>

- [使用 gulp 构建微信小程序开发工作流 - 掘金](https://juejin.cn/post/6844904100849680398)
- [对比 webpack，你更应该先掌握 gulp【10 分钟教你彻底掌握 gulp】 - 掘金](https://juejin.cn/post/6917069979913289736)
- [★小程序 gulp 构建优化之道 - 掘金](https://juejin.cn/post/6937944767548358693)

### <mark>2）zce-pages 的升级版 x-pages？</mark>

这就是在看别人项目的源码

➹：[x-pages/package.json at master · zce/x-pages](https://github.com/zce/x-pages/blob/master/package.json)

### <mark>3）Commitlint？</mark>

提交是有规范的，格式是这样的（冒号后面有空格）：

``` js
<type>: <subject>
```

常用的 type 类别：
* upd：更新某功能（不是 feat, 不是 fix）
* feat：新功能（feature）
* fix：修补 bug
* docs：文档（documentation）
* style： 格式（不影响代码运行的变动）
* refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
* test：增加测试
* chore：构建过程或辅助工具的变动

例子：

``` bash
git commit -m 'feat: 增加 xxx 功能'
git commit -m 'bug: 修复 xxx 功能'
```

`subject` 是 `commit` 目的的简短描述，可以做一些配置，如最大长度限制 -> 配置文件是`commitlint.config.js`

➹：[前端代码风格自动化系列（二）之 Commitlint - SegmentFault 思否](https://segmentfault.com/a/1190000017790694)

### <mark>4）Husky？哈士奇？</mark>

``` json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}
```

Git Hooks -> Git 使用的钩子

> 如同其他许多的版本控制系统一样，Git 也具有在特定事件发生之前或之后执行特定脚本代码功能（从概念上类比，就与监听事件、触发器之类的东西类似）。Git Hooks 就是那些在 Git 执行特定事件（如 commit、push、receive 等）后触发运行的脚本，挂钩是可以放置在挂钩目录中的程序，可在 git 执行的某些点触发动作。没有设置可执行位的钩子将被忽略。

`pre-commit`就是一个钩子

Husky：

> husky 是一个 Git Hook 工具。husky 其实就是一个为 Git 客户端增加 hook 的工具。将其安装到所在仓库的过程中它会自动在`.git/`目录下增加相应的钩子 -> 实现在 `pre-commit` 阶段就执行一系列流程保证每一个 commit 的正确性。

示例：

``` json
{
  "scripts": {
    "lint": "eslint src"
  },
  "husky": {
    "hooks": {
      "pre-commit": "npm run lint"
    }
  },
}
```

这表示在后续的每一次`git commit` 之前，都会执行一次对应的 hook 脚本`npm run lint` 。其他 hook 同理

➹：[GitHook 工具 —— husky 介绍及使用](https://www.cnblogs.com/jiaoshou/p/12222665.html)

➹：[【工具推荐】使用 husky 避免糟糕的 git commit - 知乎](https://zhuanlan.zhihu.com/p/35913229)

### <mark>5）关于模块化？</mark>

➹：[Javascript 模块化编程（一）：模块的写法 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2012/10/javascript_module.html)

➹：[如何理解 es6 中的 import 是静态编译执行的？（一说是编译期执行的）？ - 知乎](https://www.zhihu.com/question/265631914)

➹：[一起来看 Dynamic Import 和 Top-level await - 知乎](https://zhuanlan.zhihu.com/p/129909021)

➹：[require，import 区别？ - 知乎](https://www.zhihu.com/question/56820346)

➹：[ES6 模块和 CommonJS 模块有哪些差异？ · Issue #43 · YvetteLau/Step-By-Step](https://github.com/YvetteLau/Step-By-Step/issues/43)

➹：[node.js 学习笔记（四）module 系统和 node 中的深拷贝、浅拷贝_treblez's blog-CSDN 博客](https://blog.csdn.net/treblez/article/details/103641583)

➹：[commonjs 的导出是值拷贝吗？- 掘金](https://juejin.cn/post/6844904052841512973)