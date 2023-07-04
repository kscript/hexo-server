---
title: 使用Markdown输出LaTex数学公式 - 简书
date: 2023-02-14 14:06:17
copyright: false
author: 李东bbsky
home: https://www.jianshu.com/u/bea466a7e67e
origin: jianshu
url: https://www.jianshu.com/p/7f3be154ead4
tag: 
categories: 
description: 现在大数据、人工智能、数据分析等很多技术岗位都对数学有一定的要求，数学越来越重要，很多人也开始尝试学...
---

> 现在大数据、人工智能、数据分析等很多技术岗位都对数学有一定的要求，数学越来越重要，很多人也开始尝试学习数学，脑子里突然就有了结合Python编程来学习数学的想法。在网络上搜索了很多相关资料，看到非常多不错的尝试，但是国内在这方面的资料却比较少，于是就想到开一个技术专栏。

实践出一整套便于互联网传播分享的数学公式跨平台编辑、跨环境显示是非常有必要的，如果还是停留在Word或PDF时代，那数学就会被限制在文档或图片里而无法通过最流行的网页方式进行传播，而且Word、PDF等文件处理软件里的数学公式编辑既麻烦，而且最重要的是与编程脱节。

### 数学公式的编辑与显示

要将学习心得（尤其是数学公式等）写成文档在知乎、简书、微信公众号以及网站的网页上面展示出来，使用Markdown以及LaTex Math的结合我认为是最佳的方法。

**与LaTex文档的比较**  
虽然很多数学学术论文整个文档就像使用Markdown一样是直接使用的LaTex语法来编辑的，但是仔细比对之后发现直接用LaTex语法来写整个文档来，它的效果和Markdown + LaTex Math 方式没有太大的区别。  
但是LaTex的语法、编辑器、配置、中文支持等都要比Markdown要复杂的多，而且也不及Markdown已经非常成熟的生态（包括工具链、社区等）。

**编辑器与插件**  
Markdown的编辑器非常多，对于很多初学者来说，个人比较推荐使用VS Code。

* 一是VS Code汉化比较方便，想让更多人学会使用Python来学数学，有一个中文界面还是比较重要的；而且VS Code是跨平台的，Mac、Windows都可以上手；
* 二是VS Code是一款极为优秀的代码编辑器，说起优秀，应该算是目前最为推荐的编辑器之一（可能没有之一）；要用Python学数学，就不能用纯Markdown软件，代码编辑器是少不了的，使用VS Code编译Python和Markdown都极为舒适；
* 三是VS Code插件丰富，Python的编译、Markdown的编写与预览、LaTex Math的显示等工具链相当完备。比如Python插件，只需要安装插件集合Python Extension Pack，里面就包含了微软官方插件Python、MagicPython、Jupyter等优秀插件；而Markdown插件，推荐安装Markdown All in One，以及Markdown+Math。

### LaTex Math的语法

LaTex Math的语法多且杂，我们是没法完全记住这些语法的，能记住也不提倡吧，我连Markdown语法都没能全记住。查询手册在手，天下我有，这里比较推荐名校莱斯Rice大学的一个语法手册，[莱斯大学LaTex Math在线PDF手册](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.caam.rice.edu%2F%7Eheinken%2Flatex%2Fsymbols.pdf)。

当然安装了上述插件的VS Code也是有LaTex Math语法提示的。用英文字符反斜杠\\就可以为你提示。下面我们就结合这个PDF里LaTex Math的语法在Markdown里面进行实战，以及对这些语法的使用进行一些简单的讲解。

**希腊字母**  
使用`$LaTex希腊字母语法$`，也就是将LaTex的希腊字母语法用两个美元符号围住即可。比如以下案例：

```yaml
$\Gamma$、$\iota$、$\sigma$、$\phi$、$\upsilon$、$\Pi$、$\Bbbk$、$\heartsuit$、$\int$、$\oint$
```

输出的结果就是这样子啦~  
![\Gamma](./使用Markdown输出LaTex数学公式 - 简书/3faac577d345d89572091886ff713eb9)、![\iota](./使用Markdown输出LaTex数学公式 - 简书/a6161faa1dadaa5ef13cde203c92af8f.svg)、![\sigma](./使用Markdown输出LaTex数学公式 - 简书/f6899df7c9d32af8573e072cf87fcec2.svg)、![\phi](./使用Markdown输出LaTex数学公式 - 简书/af4e9189c90e23bbc1c7cf3c2cfce916)、![\upsilon](./使用Markdown输出LaTex数学公式 - 简书/9130bc6322a735c1bb5537bd4423b617)、![\Pi](./使用Markdown输出LaTex数学公式 - 简书/c2e953703180e53de439ac3cf571da94)、![\Bbbk](./使用Markdown输出LaTex数学公式 - 简书/0bd001765e95be7b0d0190aff33fffea)、![\heartsuit](./使用Markdown输出LaTex数学公式 - 简书/8c41b8d5beeb7d7bf33c66df713f04bc)、![\int](./使用Markdown输出LaTex数学公式 - 简书/49b02442e00700e00482dc89ce83498b)、![\oint](./使用Markdown输出LaTex数学公式 - 简书/fec57cf1c7438efa3b6689fabd3b6d43)

值得注意的是希腊字母有大写和小写之分，这个大小写是由LaTex的首字母是否大小写来控制的。

**三角函数、对数、指数**  
三角函数、对数、指数的写法以及其他符号的语法和字母是一样的，也是使用`$LaTex符号$`，也就是将LaTex的希腊字母语法用两个美元符号围住即可，我们来看下面的案例：

```yaml
$\tan$、$\sin$、$\cos$、$\lg$、$\arcsin$、$\arctan$、$\min$、$\max$、$\exp$、$\log$
```

输出的结果如下:  
![\tan](./使用Markdown输出LaTex数学公式 - 简书/55ac5c14bb529437168faa486b69c97c)、![\sin](./使用Markdown输出LaTex数学公式 - 简书/28692e3313ea9b2d971b9767fa3b5364)、![\cos](./使用Markdown输出LaTex数学公式 - 简书/937550616fb88f9a6331981b527dbb22)、![\lg](./使用Markdown输出LaTex数学公式 - 简书/c7bbe8f773d8d09edb269e463f0c6dbf)、![\arcsin](./使用Markdown输出LaTex数学公式 - 简书/85fe1a32150d759d69c62b2bf2ae2583)、![\arctan](./使用Markdown输出LaTex数学公式 - 简书/74c0923e6eabd22b303e4331d0e93aa0)、![\min](./使用Markdown输出LaTex数学公式 - 简书/a4e57cac2b52a7a827ddbb1b424bc2d7)、![\max](./使用Markdown输出LaTex数学公式 - 简书/0df8b2d7626d08eca49e0d929bb741a0)、![\exp](./使用Markdown输出LaTex数学公式 - 简书/ac0fd1a18d40e667824dcf757aa9232c)、![\log](./使用Markdown输出LaTex数学公式 - 简书/0c8488c436e910faa6ba278ee8827647)

**运算符**  
运算符的写法也是如此，不过要注意的是加号、减号、等于号、大于、小于的写法有点不同，是直接用符号即可，这个要注意一下。

```yaml
$+$、$-$、$=$、$>$、$<$、$\times$、$\div$、$\equiv$、$\leq$、$\geq$、$\neq$  
```

输出的结果就是：  
![+](./使用Markdown输出LaTex数学公式 - 简书/d8107175e0208f472ef36f45bbbb56d4)、![-](./使用Markdown输出LaTex数学公式 - 简书/0e7aa0a3a41f716574aa33365e9813ff)、![=](./使用Markdown输出LaTex数学公式 - 简书/62424eff1811cdf2164f41190ff9372f)、![](./使用Markdown输出LaTex数学公式 - 简书/d43e37a58188d928929be5cdf296f1da)" mathimg="1">、![<](./使用Markdown输出LaTex数学公式 - 简书/5f79bf99aa6547be4af9d755af4df9fb)、![\times](./使用Markdown输出LaTex数学公式 - 简书/f045f7b9efee589187a43e11a16e6866)、![\div](./使用Markdown输出LaTex数学公式 - 简书/515552054f877f5bdcbd4ca47a797156)、![\equiv](./使用Markdown输出LaTex数学公式 - 简书/271f133c45ce4e511404e21572ec4606)、![\leq](./使用Markdown输出LaTex数学公式 - 简书/60538d3672808cb40df91aa0fa0508f7)、![\geq](./使用Markdown输出LaTex数学公式 - 简书/d308f49b98c024576b7c41aba74313b4)、![\neq](./使用Markdown输出LaTex数学公式 - 简书/158e0d03602bc6cc8089aaf4e2899cf7)

**集合符号**  
集合是高中数学就会学习的知识，也是非常重要的基础概念，集合的符号也比较多，所以会特地把它们单独列出来，虽然它们的语法和上面没有区别。

```yaml
$\cup$、$\cap$、$\in$、$\notin$、$\ni$、$\subset$、$\subseteq$、$\supset$、$\supseteq$、$\infty$
```

输出的结果就是：  
![\cup](./使用Markdown输出LaTex数学公式 - 简书/e585b78be7502835b91bda13c03b6ef4)、![\cap](./使用Markdown输出LaTex数学公式 - 简书/67224efd965b19ba3e0ffcca4e1cb2d5)、![\in](./使用Markdown输出LaTex数学公式 - 简书/73c9c70fd751100210cbbcb21c5772ab)、![\notin](./使用Markdown输出LaTex数学公式 - 简书/8bc5a0f465a6a83dc3dc24c7d1ba8306)、![\ni](./使用Markdown输出LaTex数学公式 - 简书/8e3f4f4f709246f0d57c7b3a76a3401c)、![\subset](./使用Markdown输出LaTex数学公式 - 简书/577613fb23abc429036ba4d7af4c9f2c)、![\subseteq](./使用Markdown输出LaTex数学公式 - 简书/e905ce032aff644620cd3dcb94f1e730)、![\supset](./使用Markdown输出LaTex数学公式 - 简书/cdd57cb1c696805dded35f32cd2428e3)、![\supseteq](./使用Markdown输出LaTex数学公式 - 简书/0d06dcbfaab95ad91950fc34fe4e4b07)、![\infty](./使用Markdown输出LaTex数学公式 - 简书/443e135c3adf17b553b290b0505c1c9f)

数学符号非常多，这里只是列举了一些常用的符号，更多符号细节既可以查看莱斯大学的PDF。

### 数学公式与Markdown Math

前面只是介绍了单一的数学符号显示问题，但是一段完整的数学公式则包含多个数学符号、数值，在介绍数学公式之前，我们需要先来了解一下内联与块状的概念。  
**内联输出与块状输出**  
前面我们在输出每个符号的时候，都用两个美元符号`$$`，这种方式就是**内联**，所谓内联就是我们可以把数学符号嵌入到文字段落里面，比如：

```yaml
函数式：$f(x)=\frac{P(x)}{Q(x)}$  
```

函数式：![f(x)=\frac{P(x)}{Q(x)}](./使用Markdown输出LaTex数学公式 - 简书/fd354a7e35eb6b0972a4b9fee3114f42) ，我们可以看到这段公式在文字段落里面。  
如果我们需要输出的数学公式比较复杂，或者我们需要凸出并独立显示公式，这个时候我们就需要使用到公式的块状输出，块状输出的语法使用4个美元符号`$$数学公式$$`，我们来看案例。

```yaml
$$f(x)=\frac{P(x)}{Q(x)}$$ 
```

使用块状输出，函数会居中显示，值得一提的是我们在使用块状输出数学公式时，在Markdown里需要换行来写公式。  
![f(x)=\frac{P(x)}{Q(x)}](./使用Markdown输出LaTex数学公式 - 简书/fd354a7e35eb6b0972a4b9fee3114f42)

**简单的四则运算**  
我们先来看简单的四则运算怎么用Markdown Math编写，

```yaml
$2x - 5y =  8$  
$3x + 9y =  -12$
$7x \times 2y \neq 3z$
```

注意这里的`\times`是乘号，`\neq`是不等于，输出的效果如下：  
![2x - 5y = 8](./使用Markdown输出LaTex数学公式 - 简书/c57684275b29bf73c3c3a0c2e53de3dd)  
![3x + 9y = -12](./使用Markdown输出LaTex数学公式 - 简书/0a783d0079cd2bafbeeb92cd9c43d293)  
![7x \times 2y \neq 3z](./使用Markdown输出LaTex数学公式 - 简书/0c4b6e894e156bd214177ddb1cbb920b)

**指数输出**  
Markdown Math的指数运算符是`^`，这个在Python里位运算符，Python的指数运算符是`**`，这个注意区别即可。

```yaml
$x^3+x^9$  
$x^y$  
```

输出的结果为：  
![x^3+x^9](./使用Markdown输出LaTex数学公式 - 简书/850b06de1a41ccf0004eab1457baab32)  
![x^y](./使用Markdown输出LaTex数学公式 - 简书/108b6b5e5a71112ee3f92e63162a4a1e)

**n次方根输出**  
`\sqrt{}`是开平方，注意数值使用大括号{}围住，而开n次方的语法是`\sqrt[n]{}`，n次方的n用中括号\[\]围住，我们来看下面的案例：

```yaml
$\sqrt{3x-1}+\sqrt[5]{2y^5-4}$
```

输出的结果是：  
![\sqrt{3x-1}+\sqrt[5]{2y^5-4}](./使用Markdown输出LaTex数学公式 - 简书/116a4d60819ebb0e39e7fb9291176878)

**三角公式**  
三角公式通常括号、字母、符号、运算符混杂的比较厉害，所以书写的时候要特别注意，我们来看下面的例子：

```yaml
$$\cos (2\theta) = \cos^2 \theta - \sin^2 \theta$$
```

输出的结果如下：  
![\cos (2\theta) = \cos^2 \theta - \sin^2 \theta \quad \text{ for $|q|<1$} \tag{12}.](./使用Markdown输出LaTex数学公式 - 简书/6768077bf4d5de01c87d7191700ac8ae)

**输出分数**  
输出带有分子分母的分数的语法为`\frac{分子}{分母}`，使用大括号把分子、分母都围住。

```yaml
$$\frac{x}{2y} +\frac{x-y}{x+y} $$
```

输出的结果如下：  
![\frac{x}{2y} +\frac{x-y}{x+y}](./使用Markdown输出LaTex数学公式 - 简书/bec939d982a3817584c818de58eed024)

**求和输出**  
求和公式比较复杂，会涉及到上标和下标，在输出指数`^`时我们可以把它看成是上标，使用`_`来输出下标，我们来看具体案例：

```yaml
$$\sum_{n=1}^\infty k$$
```

输出的结果如下：  
![\sum_{n=1}^\infty k](./使用Markdown输出LaTex数学公式 - 简书/7d68c24b8d3ace69acc3ef6ae0ab89f1)

**极限的输出**  
在我们了解了上下标的概念之后，输出极限就会使用到下标，

```yaml
$$\lim\limits_{x \to \infty} \exp(-x) = 0$$
```

输出的结果：  
![\lim\limits_{x \to \infty} \exp(-x) = 0](./使用Markdown输出LaTex数学公式 - 简书/7230ec8e7f434f3aade2176589baf629)

**阶乘的输出**

```ruby
$$\frac{n!}{k!(n-k)!} = \binom{n}{k}$$
```

输出的结果如下：  
![\frac{n!}{k!(n-k)!} = \binom{n}{k}](./使用Markdown输出LaTex数学公式 - 简书/1166e8c5e6aa0d723fad05292771364c)

**Markdown Math输出矩阵**  
使用`\begin{matrix}`和`\end{matrix}`围住即可输出矩阵，矩阵之间用`$`来空格，用`\\`来换行。

```ruby
$$
  \begin{matrix}
   1 & 2 & 3 \\
   4 & 5 & 6 \\
   7 & 8 & 9
  \end{matrix} 
$$
```

输出的结果是：  
![\begin{matrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \end{matrix}](./使用Markdown输出LaTex数学公式 - 简书/56bdf2740ada5ad0091ba45d85263ffb)

### 复杂数学公式

**分段函数的编写**  
分段函数是非常复杂的，这时候会用到LaTex的cases语法，用`\begin{cases}`和`\end{cases}`围住即可，中间则用`\\`来分段，具体我们来看下面的例子。

```ruby
$$
X(m,n)=
\begin{cases}
x(n),\\
x(n-1)\\
x(n-1)
\end{cases}
$$
```

分段函数输出的结果如下：  
![X(m,n)= \begin{cases} x(n),\\\\ x(n-1)\\\\ x(n-1) \end{cases}](./使用Markdown输出LaTex数学公式 - 简书/9c8e73fe26bb65dab5d016224d0c959d)

Markdown Math也就是LaTex语法输出数学公式的基本用法，我们先介绍到这里，后面我们会在学习过程中接触到时再来研究。

### Markdown Math的跨平台显示

让数学公式可以在知乎、简书、公众号等自媒体平台以及网页和博客系统Wordpress上优雅的显示，这样才有利于数学公式的阅读与传播。  
**知乎、简书、掘金上显示数学公式**  
简书的Markdown编辑器可以比较完美的支持Markdown语法以及Markdown Math语法，可以直接把用VS Code写的Markdown文件里的内容复制粘贴过去，然后进行一些简单的修改就可以了。  
而知乎自带数学公式的插入，如果直接导入Markdown文件显示会出现一些问题，需要把数学公式用知乎自带的Tex编辑器重新书写，只需要把`$$`删除即可。

**在网页上显示数学公式**  
由于我们的网页可以不用Markdown，用HTML替换Markdown排版语法就可以，所以我们只需要专注于如何在网页上显示数学公式即可。比较完美的解决方案是使用mathjax，我们只需要在`<head>`标签内插入mathjaxjs即可。  
比如下面的案例，大家只需要把下面的代码复制下来并保存为html文件即可，不过要注意的是内联式的语法会有些不同，不再是`$符号与公式$`，而是：`\(符号与公式\)`

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML" async></script>
</script>
</head>
<body>
<p>
  当 \(a \ne 0\)时,  \(ax^2 + bx + c = 0\) 会有两个解，它们是：
  $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
</p>
</body>
</html>
```

**数学公式在公众号上的显示**  
微信公众号封闭且奇葩，美化微信公众号的排版虽然用的是html和css语法，但是有很多需要注意的地方，因此排版也相对来说比较麻烦，相比知乎、简书等自媒体平台来说，公众号的排版也可以做到更美观。不过要想让数学公式在公众号上显示就比较麻烦，微信公众号是不支持LaTex语法的，所以需要把公式做成图片，其他不支持LaTex的自媒体平台也可以这么处理。

公众号显示数学公式有一个比较简单好用的方法就是[Md2All](https://links.jianshu.com/go?to=http%3A%2F%2Fmd.aclickall.com%2F)，可以直接把VS Code编辑的Markdown文档粘贴到里面，还能进行精美的排版，但是这个方法有两个问题，一个是生成的图片比较模糊，有碍观瞻；第二就是如果数学公式过多，就需要用七牛云的CDN，配置的方法也比较简单，总体来说Md2All综合效果最佳的方案，相比于其他方法更方便，也能一梭子把Markdown文档以及数学公式进行优雅的公众号排版。

![\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)](./使用Markdown输出LaTex数学公式 - 简书/3b5dedebf8a1b1bd66654ae1dc5c313e)

> 当前文档由 [markdown文档下载插件](https://github.com/kscript/markdown-download) 下载, 原文链接: [使用Markdown输出LaTex数学公式 - 简书](https://www.jianshu.com/p/7f3be154ead4)  