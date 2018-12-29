---
title: vue风格指南摘录
date: 2019-01-24 10:14:24
tags:
- vue
categories: vue
description: 摘录自官方的 Vue 特有代码的风格指南。如果在工程中使用 Vue，为了回避错误、小纠结和反模式，该指南是份不错的参考。
coypright: false
---
### 必要的规范

1. 组件名为多个单词  
    这样做**可以避免跟现有的以及未来的 HTML 元素相冲突**，因为所有的 HTML 元素名称都是单个单词的。
    ``` js
    // 反例
    Vue.component('todo', {
    })
    export default {
    name: 'Todo',
    }

    // 好的
    Vue.component('todo-item', {
    })
    export default {
    name: 'TodoItem',
    }
    ```

2. 组件的 data 必须是一个函数  
    当在组件中使用 data 属性的时候 (除了 new Vue 外的任何地方)，它的值**必须是返回一个对象的函数**。
    这样做的原因是: 当 data 的值是一个对象时，它会在这个组件的所有实例之间共享。所以需要使用函数包裹, 来避免对象引用的问题。
    ``` js
    // 反例
    Vue.component('some-comp', {
    data: {
        foo: 'bar'
    }
    })
    export default {
    data: {
        foo: 'bar'
    }
    }

    // 好的
    Vue.components('some-comp', {
    data: function() {
        return {
        foo: 'bar'
        }
    }
    })
    export default {
    data: function() {
        return {
        foo: 'bar'
        }
    }
    }

    // 在一个 Vue 的根实例上使用对象是可以的, 因为只存在一个这样的实例
    new Vue({
    data: {
        foo: 'bar'
    }
    })
    ```

3. Prop 定义应该尽量详细  
    细致的 prop 定义有两个好处：

    * 它们写明了组件的 API，所以很容易看懂组件的用法；
    * 在开发环境下，如果向一个组件提供格式不正确的 prop，Vue 将会告警，以帮助你捕获潜在的错误来源。
    ``` js
    // 反例
    props: ['status']

    // 好的
    props: {
    status: string
    }

    // 更好的
    props: {
    status: {
        type: string,
        required: true,
        validator: function(value) {
        return [
            'syncing',
            'synced',
            'version-conflict',
            'error'
        ].indexOf(value) > -1
        }
    }
    }
    ```

4. 为 v-for 设置键值, 总是用 key 配合 v-for  
    在组件上总是**必须用 key 配合 v-for**，以便**维护内部组件及其子树的状态**。
    ``` js
    // 反例
    <ul>
    <li v-for="tode in todos">
        {{ todo.text }}
    </li>
    </ul>

    // 好的
    <ul>
    <li 
        v-for="todo in todos"
        :key="todo.id"
    >
        {{ todo.text }}
    </li>
    </ul>
    ```

5. 避免 v-if 和 v-for 用在一起  
    这样做的原因是: 当 Vue 处理指令时，**v-for 比 v-if 具有更高的优先级**
    ``` js
    <ul>
        <li
            v-for="user in users"
            v-if="user.isActive"
            :key="user.id"
        >
        {{ user.name }}
        </li>
        </ul>
        <ul>
        <li 
            v-for="user in users"
            v-if="shouldShowUsers"
            :key="user.id"
        >
        {{ user.name }}
        </li>
        </ul>
        
        // 好的
        <ul>
        <li 
            v-if="user in activeUsers"
            :key="user.id"
        >
            {{ user.name }}
        </li>
        </ul>
        
        <ul v-if="shouldShowUsers">
        <li
            v-for="user in users"
            :key="user.id"
        >
            {{ user.name }}
        </li>
    </ul>
    ```

6. 为组件样式设置作用域  
    对于应用来说，顶级 App 组件和布局组件中的样式可以是全局的，但是**其它所有组件都应该是有作用域的**。  
    **这条规则只和单文件组件有关。**  
    对于组件库，我们应该更倾向于选用基于 class 的策略而不是 scoped 特性。  
    ``` html
    <!-- 反例 -->
    <template>
    <button class="button button-close">X</button>
    </template>
    <style>
    .button-close{
    background-color: red;
    }
    </style>

    <!-- 好的 -->
    <template>
    <button class="button btn-close">X</button>
    </template>
    <!-- 使用 scoped 特性 -->
    <style scoped>
    .button{
    border: none;
    border-radius: 2px;
    }
    .button-close{
    background-color: red;
    }
    </style>

    <template>
    <button :class="[$style.button, $style.buttonClose]">X</button>
    </template>
    <!-- 使用 CSS Modules -->
    <style>
    .button {
    border: none;
    border-radius: 2px;
    }
    .button-close{
    background-color: red;
    }
    </style>

    <template>
    <button class="c-Button c-Button--close">X</button>
    </template>
    <!-- 使用 BEM 约定 -->
    <style>
    .c-Button{
    border: none;
    border-radis: 2px;
    }
    .c-Button-close {
    background-color: red;
    }
    </style>
    ```

7. 私有属性名  
    **在插件、混入等扩展中始终为自定义的私有属性使用 $_ 前缀。并附带一个命名空间以回避和其它作者的冲突。**  
    Vue 使用 _ 前缀来定义其自身的私有属性，所以使用相同的前缀 (比如 _update) 有覆写实例属性的风险。即便你检查确认 Vue 当前版本没有用到这个属性名，也不能保证和将来的版本没有冲突。  
    对于 $ 前缀来说，其在 Vue 生态系统中的目的是暴露给用户的一个特殊的实例属性，所以把它用于私有属性并不合适。  
    ``` js
    // 反例
    var myGreatMixin = {
    methods: {
        update: function(){
        }
    }
    }

    var myGreatMixin = {
    methods: {
        _update: function (){
        }
    }
    }

    var myGreatMixin = {
    methods: {
        $update: function () {

        }
    }
    }
    var myGreatMixin = {
    methods: {
        $_update: function () {

        }
    }
    }

    // 好的
    var myGreatMixin = {
    methods: {
        $_myGreatMixin_update: function () {

        }
    }
    }
    ```

### 强烈推荐的规范  

1. 组件文件  
    **只要有能够拼接文件的构建系统，就把每个组件单独分成文件。**  
    当你需要编辑一个组件或查阅一个组件的用法时，可以更快速的找到它。  
    ``` js
    // 反例
    Vue.components('TodoList', {
    })
    Vue.components('TodoItem', {
    })

    // 好的
    components/
    |- TodoList.js
    |- TodoItem.js
    components/
    |- TodoList.vue
    |- TodoItem.vue
    ```

2. 单文件组件文件的大小写  
    **单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)**。  
    单词大写开头对于代码编辑器的自动补全最为友好，因为这使得我们在 JS(X) 和模板中引用组件的方式**尽可能的一致**。  
    然而，**混用文件命名方式有的时候会导致大小写不敏感的文件系统出现问题**，这也是横线连接命名同样完全可取的原因。  
    ```
    // 反例
    componets/
    |- mycomponent.vue

    components/
    |- myComponent.vue

    // 好的
    componets/
    |- MyComponent.vue

    components/
    |- my-component.vue
    ```

3. 基础组件名
    **应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头**。  
    这样做的几个好处： 

    * 当你在编辑器中以字母顺序排序时，你的应用的基础组件会全部列在一起，这样更容易识别。  
    * 因为组件名应该始终是多个单词，所以这样做可以避免你在包裹简单组件时随意选择前缀 (比如 MyButton、VueButton)。  
    * 因为这些组件会被频繁使用，所以你可能想把它们放到全局而不是在各处分别导入它们。  
    ```
    // 反例
    components/
    |- myButton.vue
    |- VueTable.vue
    |- Icon.vue

    // 好的
    components/
    |- BaseButton.vue
    |- BaseTable.vue
    |- BaseIcon.vue

    components/
    |- AppButton.vue
    |- AppTable.vue
    |- AppIcon.vue

    components/
    |- VButton.vue
    |- VTable.vue
    |- VIcon.vue
    ```

4. 单例组件名
    **只应该拥有单个活跃实例的组件应该以 The 前缀命名，以示其唯一性。**    
    这不意味着组件只可用于一个单页面，而是每个页面只使用一次。这些组件永远不接受任何 prop，因为它们是为你的应用定制的，而不是它们在你的应用中的上下文。如果你发现有必要添加prop，那就表明这实际上是一个可复用的组件，只是目前在每个页面里只使用一次。  
    ```
    // 反例
    components/
    |- heading.vue
    |- MySidebar.vue

    // 好的
    components/
    |- TheHeading.vue
    |- TheSidebar.vue
    ```

5. 紧密耦合的组件名  
    **和父组件紧密耦合的子组件应该以父组件名作为前缀命名。**  
    如果一个组件只在某个父组件的场景下有意义，这层关系应该体现在其名字上。因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起。 
    ```
    // 反例
    components/
    |- TodoList.vue
    |- TodoItem.vue
    |- TodoButton.vue

    components/
    |- SearchSidebar.vue
    |- NavigationForSearchSIdebar.vue

    // 好的
    components/
    |- TodoList.vue
    |- TodoItem.vue
    |- TodoListItemButton.vue

    components/
    |- SearchSidebar.vue
    |- SearchSidebarNavgation.vue
    ```

6. 组件名中的单词顺序  
    **组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。**  
    编辑器通常会按字母顺序组织文件，所以现在组件之间的重要关系一目了然。而如果使用多级目录的话  

    * 在多级目录间找来找去，要比在单个 components 目录下滚动查找要花费更多的精力。  
    * 存在组件重名 (比如存在多个 ButtonDelete 组件) 的时候在编辑器里更难快速定位。  
    * 让重构变得更难，因为为一个移动了的组件更新相关引用时，查找/替换通常并不高效。  
    ```
    // 反例
    components/
    |- clearSearchButton.vue
    |- ExcludeFromSearchInput.vue
    |- launchOnStartupCheckbox.vue
    |- RunSearchButton.vue
    |- SearchInput.vue
    
    // 好的
    components/
    |- SearchButtonClear.vue
    |- SearchButtonRun.vue
    |- SearchInputQuery.vue
    |- SearchInputExcludeGlob.vue
    |- SettingsCheckboxTerms.vue
    |- SettingsCheckboxLaunchOnStartup.vue
    ```

7. 自闭合组件
    在单文件组件、字符串模板和 JSX 中没有内容的组件应该是自闭合的——但**在 DOM 模板里永远不要这样做。**  
    自闭合组件表示它们不仅没有内容，而且刻意没有内容。其不同之处就好像书上的一页白纸对比贴有“本页有意留白”标签的白纸。而且没有了额外的闭合标签，你的代码也更简洁。  
    不幸的是，**HTML 并不支持自闭合的自定义元素**——只有官方的“空”元素。所以上述策略仅适用于进入 DOM 之前 Vue 的模板编译器能够触达的地方，然后再产出符合 DOM 规范的 HTML。  
    ```
    <!-- 反例 -->
    <!-- 在单文件组件/字符串模板和JSX中 -->
    <MyComponent></MyComponent>

    <!-- 好的 -->
    <!-- 在单文件组件/字符串模板和JSX中 -->
    <MyComponent />
    <!-- 在 DOM 模板中 -->
    <my-component></my-component>
    ```

8. 模板中的组件名大小写  
    对于绝大多数项目来说，在单文件组件和字符串模板中组件名应该总是 PascalCase 的——但是**在 DOM 模板中总是 kebab-case 的。**  
    PascalCase 相比 kebab-case 有一些优势：  

    * 编辑器可以在模板里自动补全组件名，因为 PascalCase 同样适用于 JavaScript。  
    * <mycomponent> 视觉上比 <my-component>更能够和单个单词的 HTML 元素区别开来，因为前者的不同之处有两个大写字母，后者只有一个横线。  
    如果你在模板中使用任何非 Vue 的自定义元素，比如一个 Web Component，PascalCase 确保了你的 Vue 组件在视觉上仍然是易识别的。  
    不幸的是，由于 **HTML 是大小写不敏感的**，在 DOM 模板中必须仍使用 kebab-case。  
    ``` html
    <!-- 反例 -->
    <!-- 在单文件组件和字符串模板中 -->
    <mycomponent />
    <!-- 在单文件组件和字符串模板中 -->
    <myComponent/>
    <!-- 在 DOM 模板中 -->
    <MyComponent></MyComponent>

    <!-- 好的 -->
    <!-- 在单文件组件和字符串模板中 -->
    <MyComponent/>
    <!-- 在 DOM 模板 或者 所有地方 -->
    <my-component></my-component>
    ```

9. JS/JSX 中的组件名大小写  
    **JS/JSX 中的组件名应该始终是 PascalCase 的。**  
    在 JavaScript 中，PascalCase 是类和构造函数 (本质上任何可以产生多份不同实例的东西) 的命名约定。  
    Vue 组件也有多份实例，所以同样使用 PascalCase 是有意义的。额外的好处是，在 JSX (和模板) 里使用 PascalCase 使得代码的读者更容易分辨 Vue 组件和 HTML 元素。  
    ```
    // 反例
    Vue.component('MyComponent', {
    })
    import myComponent from './MyComponent.vue'
    export default {
    name: 'MyComponent'
    }
    export default {
    name: 'my-component'
    }

    // 好的
    Vue.component('My-Component', {
    })
    Vue.component('my-component',  {
    })
    import MyComponent from './MyComponent.vue'
    export default {
    name: 'MyComponent'
    }
    ```

10. 完整单词的组件名
    **组件名应该倾向于完整单词而不是缩写。**
    编辑器中的自动补全已经让书写长命名的代价非常之低了，而其带来的明确性却是非常宝贵的。不常用的缩写尤其应该避免。
    ```
    // 反例
    components/
    |- SdSettings.vue
    |- UProfOpts.vue

    // 好的
    components/
    |- StudentDashboradSettings.vue
    |- UserProfileOptions.vue
    ```

11. Prop 名大小写
    **在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case。**
    我们单纯的遵循每个语言的约定。在 JavaScript 中更自然的是 camelCase。而在 HTML 中则是 kebab-case
    ``` js
    // 反例
    props: {
    'greeting-text': String
    }
    ```
    ``` html
    <WelcomeMessage greeting="hi" />
    ```
    ``` js
    // 好的
    props: {
    greetingText: String
    }
    ```
    ``` html
    <WelcomeMessage greeting-text="hi" />
    ```

12. 多个特性的元素  
    **多个特性的元素应该分多行撰写，每个特性一行。**  
    在 JavaScript 中，用多行分隔对象的多个属性是很常见的最佳实践，因为这样更易读。模板和 JSX 值得我们做相同的考虑。  
    ``` html
    <!-- 反例 -->
    <img src="..." alt="Vue Logo">
    <MyComponent foo="a" bar="b" baz="c" />

    <!-- 好的 -->
    <img 
    src="..."
    alt="Vue Logo"
    >
    <MyComponent
    foo="a"
    bar="b"
    baz="c"
    />
    ```

13. 模板中简单的表达式
    **组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。**
    复杂表达式会让你的模板变得不那么声明式。我们应该尽量描述应该出现的是什么，而非如何计算那个值。而且计算属性和方法使得代码可以重用。
    ``` html
    <!-- 反例 -->
    {{
    fullName.split(' ').map(function (word) {
        return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
    }}

    <!-- 好的 -->
    <!-- 在模板中 -->
    {{ normalizedFullName }}

    <!-- 复杂表达式已经移入一个计算属性 -->
    computed: {
    normaalizedFullName: function() {
        return this.fullName.split(' ').map(function(word) {
        return word[0].toUpperCase() + word.slice(1)
        }).join(' ')
    }
    }
    ```

14. 简单的计算属性  
    **应该把复杂计算属性分割为尽可能多的更简单的属性。**  
    更简单、命名得当的计算属性是这样的：  

    * 易于测试  
    当每个计算属性都包含一个非常简单且很少依赖的表达式时，撰写测试以确保其正确工作就会更加容易。  
    * 易于阅读  
    简化计算属性要求你为每一个值都起一个描述性的名称，即便它不可复用。这使得其他开发者 (以及未来的你) 更容易专注在他们关心的代码上并搞清楚发生了什么。  
    * 更好的“拥抱变化”  
    任何能够命名的值都可能用在视图上。举个例子，我们可能打算展示一个信息，告诉用户他们存了多少钱；也可能打算计算税费，但是可能会分开展现，而不是作为总价的一部分。  
    小的、专注的计算属性减少了信息使用时的假设性限制，所以需求变更时也用不着那么多重构了。  
    ``` js
    // 反例
    computed: {
    price: function() {
        var basePrice = this.manufactureCost / (1 - this.profitMargin)
        return (
        basePrice - 
        basePrice * (this.discountPercent || 0)
        )
    }
    }

    // 好的
    computed: {
    basePrice: function() {
        return this.manufactureCost / (1 - this.profitMargin)
    },
    discount: function() {
        return this.basePrice * (this.discountPercent || 0)
    },
    finalPrice: function (){
        return this.basePrice - this.discount
    }
    }
    ```

15. 带引号的特性值  
    **非空 HTML 特性值应该始终带引号 (单引号或双引号，选你 JS 里不用的那个)。**  
    在 HTML 中不带空格的特性值是可以没有引号的，但这鼓励了大家在特征值里不写空格，导致可读性变差。  
    ``` html
    <!-- 反例 -->
    <input type="text">
    <Appsidebar :style={width:sidebarWidth + 'px'}>

    <!-- 好的 -->
    <input type="text">
    <AppSidebar :style="{width: sidebarWidth + 'px'}">
    ```

16. 指令缩写  
    **指令缩写 (用 : 表示 v-bind: 和用 @ 表示 v-on:) 应该要么都用, 要么都不用。**  
    ``` html
    <!-- 反例 -->
    <input
    v-bind:value="newTodoText"
    :placeholder="newTodoInstructrious"
    >
    <input
    v-on:input="onInput"
    @focus="onFocus"
    >
    <!-- 好的 -->
    <input
    :value="newInTodoText"
    :placeholder="newTodoInstructions"
    >
    <input 
    v-bind:value="newTodoText"
    v-bind:placeholder="newTodoInstructions"
    >
    <input
    @input="onInput"
    @focus="onFocus"
    >
    <input
    v-on:input="onInput"
    v-on:focus="onFocus"
    >
    ```

### 推荐的规范

1. 组件/实例的选项的顺序  
    **组件/实例的选项应该有统一的顺序。**   
    * 推荐的组件选项默认顺序:  
        1. 副作用 (触发组件外的影响)  
            * el  
        2. 全局感知 (要求组件以外的知识)  
            * name  
            * parent  
        3. 组件类型 (更改组件的类型)  
            * functional  
        4. 模板修改器 (改变模板的编译方式)
            * delimiters
            * comments
        5. 模板依赖 (模板内使用的资源)
            * components
            * directives
            * filters
        6. 组合 (向选项里合并属性)
            * extends
            * mixins
        7. 接口 (组件的接口)
            * inheritAttrs
            * model
            * props/propsData
        8. 本地状态 (本地的响应式属性)
            * data
            * computed
        9. 事件 (通过响应式事件触发的回调)
            * watch
            * 生命周期
            * beforeCreate
            * created
            * beforeMount
            * mouted
            * beforeUpdate
            * updated
            * activated
            * deactivated
            * beforeDestory
            * destoryed
        10. 非响应式的属性 (不依赖响应系统的实例属性)
            * methods
        11. 渲染 (组件输出的声明式描述)

            * template / render
            * renderError

2. 元素特性的顺序  
    **元素 (包括组件) 的特性应该有统一的顺序。**  
    * 组件选项推荐的默认顺序:
        1. 定义 (提供组件的选项)
            * is
        2. 列表渲染 (创建多个变化的相同元素)
            * v-for
        3. 条件渲染 (元素是否渲染/显示)
            * v-if
            * v-else-if
            * v-else
            * v-show
            * v-cloak
        4. 渲染方式 (改变元素的渲染方式)
            * v-pre
            * v-once
        5. 全局感知 (需要超越组件的知识)
            * id
        6. 唯一的特性 (需要唯一值的特性)
            * ref
            * key
            * slot
        7. 双向绑定 (把绑定和事件结合起来)
            * v-model
        8. 其它特性 (所有普通的绑定或未绑定的特性)
        9. 事件 (组件事件监听器)
            * v-on
        10. 内容 (覆写元素的内容)
            * v-html
            * v-text

3. 组件/实例选项中的空行  
    **你可能想在多个属性之间增加一个空行，特别是在这些选项一屏放不下，需要滚动才能都看到的时候。**  
    ``` js
    props: {
    value: {
        type: String,
        required: true
    },

    focused: {
        type: Boolean,
        default: false
    }
    label: String,
    icon: String
    },

    computed: {
    formattedValue: function() {
    },

    inputClasses: function
    }

    props: {
    value: {
        type: String,
        required: true
    },
    focused: {
        type: Boolean,
        default: false
    },
    label: String,
    icon: String
    },
    computed: {
    formattedValue: function(){
    },
    inputClasses: function () {
    }
    }
    ```

4. 单文件组件的顶级元素的顺序
    单文件组件应该**总是让 &lt;script&gt;、&lt;template&gt; 和 &lt;style&gt; 标签的顺序保持一致**。且 **&lt;style&gt;
    要放在最后**，因为另外两个标签至少要有一个。

    ``` html
    <!-- 反例 -->
    <style>/* ... */</style>
    <script>/* ... */</script>
    <template> ... </template>

    <!-- ComponentA.vue -->
    <script>/* .... */ </script>
    <template> ... </template>
    <style>/* ... */</style>

    <!-- ComponentB.vue -->
    <template> ... </template>
    <style>/* .... */</style>
    <script>/* ... */</script>

    <!-- 好的 -->
    <!-- ComponentA.vue -->
    <script>/* ... */</script>
    <template> ... </template>
    <style>/* ... */</style>

    <!--- ComponentB.vue -->
    <script>/* .... */</script>
    <template> ... </template>
    <style>/* ... */</style>

    <!-- ComponentA.vue -->
    <template>/* ... */</template>
    <script>/* ... */</script>
    <style>/* ... */</style>

    <!-- CompomemtB.vue -->
    <template> ... </template>
    <script>/* ... */</script>
    <style>/* ... */</style>
    ```

### 不推荐的 谨慎使用 (有潜在危险的模式)

1. 没有在 v-if/v-else-if/v-else 中使用 key
    **如果一组 v-if + v-else 的元素类型相同，最好使用 key (比如两个 &lt;div&gt; 元素)。**  
    默认情况下，Vue 会尽可能高效的更新DOM。这意味着其在**相同类型的元素之间切换时，会修补已存在的元素**，而不是将旧的元素移除然后在同一位置添加一个新元素。如果本不相同的元素被识别为相同，则会出现**意料之外的副作用**。  
    ``` html
    <!-- 反例 -->
    <div v-if="error">
    错误: {{ error }}
    </div>
    <div v-else>
    {{ results }}
    </div>

    <!-- 好的 -->
    <div 
    v-if="error"
    key="search-status"
    >
    错误: {{ error }}
    </div>
    <div 
    v-else
    key="search-results"
    >
    {{ results }}
    </div>

    <p v-if="error">
    错误: {{ error }}
    </p>
    <div v-else>
    {{ results }}
    </div>
    ```

2. scoped 中的元素选择器  
    **元素选择器应该避免在 scoped 中出现。**  
    在 scoped 样式中，类选择器比元素选择器更好，因为大量使用元素选择器是很慢的。  
    为了给样式设置作用域，Vue 会为元素添加一个独一无二的特性，例如 data-v-f3f3eg9。然后修改选择器，使得在匹配选择器的元素中，只有带这个特性才会真正生效 (比如 button[data-v-f3f3eg9])。  
    问题在于大量的元素和特性组合的选择器 (比如 button[data-v-f3f3eg9]) 会比类和特性组合的选择器慢，所以应该尽可能选用类选择器。  
    ``` html
    <!-- 反例 -->
    <template>
    <button>X</button>
    </template>
    <style scoped>
    button{
    backgroud-color: red;
    }
    </style>

    <!-- 好的 -->
    <template>
    <button class="btn btn-close">X</button>
    </template>
    <style scoped>
    .btn-close{
    backgroud-color: red;
    }
    </style>
    ```

3. 隐性的父子组件通信  
    **应该优先通过 prop 和事件进行父子组件之间的通信，而不是 this.$parent 或改变 prop。**  
    一个理想的 Vue 应用是 **prop 向下传递，事件向上传递**的。遵循这一约定会让你的组件更易于理解。然而，在一些边界情况下 prop 的变更或 this.$parent 能够简化两个深度耦合的组件。  
    问题在于，这种做法在很多简单的场景下可能会更方便。但请当心，不要为了一时方便 (少写代码) 而牺牲数据流向的简洁性 (易于理解)。  
    ``` js
    // 反例
    Vue.component('TodoItem', {
    props: {
        todo: {
        type: Object,
        required: true
        }
    },
    template: '<input v-model="todo.text">'
    })

    Vue.component("TodoItem", {
    props: {
        todo: {
        type: Object,
        required: true
        }
    },
    methods: {
        removeTodo () {
        var vm = this 
        vm.$parent.todos = vm.$parent.todos.filter(function (todo){
            return todo.id !== vn.todo.id
        })
        }
    },
    template: `
        <span>
        {{ todo.text }}
        <button @click="removeTodo">
            X
        </button>
        </span>
    `
    })
    ```
    ``` js
    // 好的
    Vue.component('TodoItem', {
    props: {
        todo: {
        type: Object,
        required: true
        }
    },
    template: `
    <input 
        :value="todo.text"
        @input="$emit('input', $event.target.value)"
    >
    `
    })
    Vue.component('TodoItem', {
    props: {
        todo: {
        type: Object,
        required: true
        }
    },
    template:`
    <span>
        {{ todo.text }}
        <button @click="$emit('delete')">
        X
        </button>
    </span>
    `
    })
    ```

4. 非 Flux 的全局状态管理  
    **应该优先通过 Vuex 管理全局状态，而不是通过 this.$root 或一个全局事件总线。**  
    通过 this.$root 和/或全局事件总线管理状态在很多简单的情况下都是很方便的，但是并不适用于绝大多数的应用。  
    Vuex 提供的不仅是一个管理状态的中心区域，还是**组织、追踪和调试状态变更的好工具**。  
    ``` js
    // 反例
    new Vue({
    data: {
        todos: []
    },
    created: function(){
        this.$on('remove-todo', this.removeTodo)
    },
    methods: {
        removeTodos: function (todo) {
        var todoIdRemove = todo.id
        this.todos = this.todos.filter(function(todo){
            return todo.id !== todoIdRemove
        })
        }
    }
    })
    ```
    ``` js
    // 好的
    export default {
    state: {
        list: []
    },
    mutations: {
        REMOVE_TODO (state, todoId) {
        state.list = state.list.filter(function (todo) {
            return todo.id !== todoId
        })
        }
    },
    actions: {
        removeTodo({ commit, state }, todo){
        commit("REMOVE_TODO", todo.id)
        }
    }
    }
    ```
    ``` html
    <!-- TodoItem.vue -->
    <template>
    <span>
        {{ todo.text }}
        <button @click="removeTode(todo)">
        X
        <button>
    </span>
    </template>
    <script>
    import { mapActions } from 'vuex'
    export default {
    props: {
        todo: {
        type: Object,
        required: true
        }
    },
    methods: mapActions(['removeTodo'])
    }
    </script>
    ```