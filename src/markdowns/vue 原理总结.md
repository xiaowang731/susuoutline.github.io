## Vue 原理分成两部分


+  响应式原理：数据变化导致 render 函数重新执行 
+  渲染原理: render 函数重新执行导致视图更新 



Vue 是个 MVVM（model view viewModel） 框架，数据驱动框架



为什么叫 viewModel？可以在 js 中，直接修改视图结构



常见的 MVVM 框架：Vue2/3，React，Angular，svelte，solid.js



Vue 用了劫持，React 直接发布变更（setState），Angular 事件驱动（zone.js 代理全部浏览器异步 api），svelte 没有虚拟 dom，solid.js (`const [state, setState] = createSignal()`)像 react，但是有 Vue 的数据劫持，下一代前端框架，大量视图更新时，采用 innerHTML



MVVM 框架，就是前端框架的主流，因为 MVC 有 xss 缺陷，编译要消耗性能，操作繁琐



## 响应式原理


响应式原理的核心 `Object.defineProperty`/`Proxy` , Proxy 是浏览器原生的



原理是，修改 this.xxx 之后，调用了 data 代理对象的 set 函数（数据劫持），set 函数调用之后，会异步地触发 render 函数（性能优化方式，防止次次渲染），get 函数调用后，会进入 watch/deps 队列（依赖收集），如果调用了 set，没有调用 get，组件不更新（鱿鱼须用来吐槽 react 性能差的点）



修改属性，defineProperty, 调用 set，触发 render，调用 get，依赖收集



## 渲染原理


render 函数调用后，生成虚拟 dom 树，虚拟节点叫 VNode，应用 diff 算法，对比新旧节点，找出变更 —— 只对比同级节点，该新增新增，该删除删除，该修改修改，如果 tag 不相同，直接替换，children 需要对比 key，事件和样式都需要单独处理—— diff 算法完成后，触发生命周期（updated/mounted）和 watch，最后丢到页面上展示（patch）



render 调用，生成 VNode，应用 diff，同级比较，tag 不同，直接替换，children 需要对比 key，事件样式单独处理，触发 watch，页面 repatch



## 生命周期


**(created 创建实例，mounted 首次渲染)** 修改属性，defineProperty, 调用 set，**（beforeUpdate）**触发 render，调用 get，依赖收集,render 调用，生成 VNode，应用 diff，同级比较，tag 不同，直接替换，children 需要对比 key，事件样式单独处理，触发 watch，**（updated）**页面 repatch，组件销毁**（mounted）**



整个流程由数据变化发起，只需要 watch 就能实现所有功能了，Vue2 的 watch 替代不了生命周期功能，Vue3 的 watch 可以



## watch


watch 是异步的



**数据副作用**：修改属性的时候，我们的目的是修改属性，属性被修改 —— 正作用 effect，但是属性的修改导致了视图的更新 —— 副作用 side effect



## computed


异步更新时，缓存计算的值



## Vue 写法


单文件组件（.vue，sfc single file component）选项式 api，组合式 api



在 js 文件里 defineComponent - jsx, `defineComponent(()=>()=><div></div>)`



## 通往 react 的大门


jsx，框架原理（Vue 原理中，去掉 defineProperty 就是 React 原理）



数据不变性：react 拦路虎



> 自己思考，直接 setState，会有什么问题
>

