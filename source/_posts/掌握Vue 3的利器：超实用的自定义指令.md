---
title: 掌握Vue 3的利器：超实用的自定义指令
date: 2023-05-30 16:51:42
copyright: false
author: 掘金小学生啊
home: https://juejin.cn/user/448256477246702
origin: juejin
url: https://juejin.cn/post/7238806581580251191
tag: 
categories: 
description: 在Vue 3中，创建自定义指令更加简洁和灵活，你可以使用Vue的directive函数来定义自定义指...
---

在Vue 3中，创建自定义指令更加简洁和灵活，你可以使用Vue的`directive`函数来定义自定义指令。下面是一个示例：

```js
js复制代码// 创建自定义指令
app.directive('my-directive', {
  // 指令绑定到元素时触发
  beforeMount(el, binding, vnode) {
    // 执行初始化逻辑
  },
  // 元素更新时触发
  updated(el, binding, vnode) {
    // 执行更新逻辑
  },
  // 指令与元素解绑时触发
  beforeUnmount(el, binding, vnode) {
    // 执行清理逻辑
  }
});
```

在上面的示例中，我们使用`app.directive`函数创建了一个名为`my-directive`的自定义指令。指令对象包含了三个生命周期钩子函数：`beforeMount`、`updated`和`beforeUnmount`，分别在指令绑定到元素、元素更新和指令与元素解绑时触发。你可以根据需要在这些钩子函数中编写逻辑来处理指令的行为。

除了生命周期钩子函数，自定义指令还可以定义其他属性，如`mounted`、`unmounted`、`beforeUpdate`等。你可以根据具体的需求来选择合适的钩子函数和属性。

使用自定义指令时，你可以在模板中通过`v-my-directive`的方式来应用指令，例如：

```html
html复制代码<div v-my-directive></div>
```

你还可以传递参数给指令，并在指令中使用这些参数。例如：

```html
html复制代码<div v-my-directive:arg1="value1" :arg2="value2"></div>
```

在指令定义中，你可以通过`binding.value`来获取参数的值。例如：

```js
js复制代码app.directive('my-directive', {
  beforeMount(el, binding, vnode) {
    const arg1 = binding.arg1; // 获取arg1的值
    const arg2 = binding.arg2; // 获取arg2的值
    // 执行逻辑
  }
});
```

> 总之，Vue 3中的自定义指令提供了更简洁、灵活的方式来扩展Vue的行为。你可以根据具体的需求创建自己的自定义指令，并在其中实现所需的功能和行为。

## 实用自定义指令

当你需要实现一个`v-scroll`指令，用于在元素滚动时触发回调函数时，可以使用Vue 3的自定义指令来完成。下面是一个用Vue 3编写的`v-scroll`指令的示例：

```js
js复制代码<template>
  <div v-scroll="handleScroll">
    <!-- 元素内容 -->
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';

export default {
  directives: {
    scroll: {
      mounted(el, binding) {
        const options = binding.value || {};
        const callback = options.callback || (() => {});

        el._scrollHandler = function () {
          callback(el.scrollTop, el.scrollLeft);
        };

        el.addEventListener('scroll', el._scrollHandler);
      },
      beforeUnmount(el) {
        el.removeEventListener('scroll', el._scrollHandler);
      },
    },
  },
  methods: {
    handleScroll(top, left) {
      // 处理滚动事件的回调函数逻辑
      console.log('滚动事件', top, left);
    },
  },
};
</script>
```

在上面的示例中，我们定义了一个名为`scroll`的自定义指令，并将其注册在组件的`directives`选项中。指令对象包含了`mounted`和`beforeUnmount`两个生命周期钩子函数。

在`mounted`钩子函数中，我们获取指令的值，其中可以包含一个`callback`属性，用于指定滚动事件的回调函数。我们通过`el._scrollHandler`定义一个内部的滚动事件处理函数，它将调用指定的回调函数，并传递当前的滚动位置(`el.scrollTop`和`el.scrollLeft`)。

在`beforeUnmount`钩子函数中，我们移除滚动事件监听器，以防止内存泄漏。

在`handleScroll`方法中，你可以编写自定义的滚动事件回调函数逻辑。这里只是简单地在控制台打印了滚动位置。

在模板中，我们使用`v-scroll`指令将自定义指令应用于一个包含滚动内容的`<div>`元素，并将`handleScroll`方法作为回调函数传递给指令。

使用这个自定义指令，当元素滚动时，指定的回调函数将被触发，并在回调函数中执行自定义的滚动逻辑。你可以根据具体需求进行修改和适配，以满足你的实际需求。

> 当前文档由 [markdown文档下载插件](https://github.com/kscript/markdown-download) 下载, 原文链接: [掌握Vue 3的利器：超实用的自定义指令](https://juejin.cn/post/7238806581580251191)  