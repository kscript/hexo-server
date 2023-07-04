---
title: MarkDown插入数学公式
date: 2023-05-30 17:52:48
copyright: false
author: EddieJ
home: https://juejin.cn/user/676954893457630
origin: juejin
url: https://juejin.cn/post/6844903828773421069
tag: 
categories: 
description: 本教程介绍如何在 Markdown 中书写数学公式。 在 Markdown 中插入数学公式的语法是$...
---

本教程介绍**如何在 Markdown 中书写数学公式**。

在 Markdown 中插入数学公式的语法是`$数学公式$`和`?数学公式?`。

**行内公式**是可以让公式在文中与文字或其他东西混编，不独占一行。

* **示例**

  ```ini
  ini复制代码质能方程$E = mc^2$
  ```

* **显示**

  质能方程 ![E = mc^2](./MarkDown插入数学公式/035d238972c52e2f588ff08605b43da5.svg)

**独立公式**使公式单独占一行，不与文中其他文字等混编。

* **示例**

  ```ini
  ini复制代码质能方程?E = mc^2?
  ```

* **显示**

  质能方程 ?E = mc^2?

# 普通公式

普通的加减乘除数学公式的输入方法与平常的书写一样。

* **示例**

  ```ini
  ini复制代码?x = 100 * y + z - 10 / 33 + 10 % 3?
  ```

* **显示**

  ![x = 100 * y + z - 10 / 33 + 10 % 3](./MarkDown插入数学公式/ccf2d741bd64e989b81034483afd6cc6.svg)

# 上下标

使用`^`来表示上标，`_`来表示下标，同时如果上下标的内容多于一个字符，可以使用`{}`来将这些内容括起来当做一个整体。 与此同时，上下标是可以嵌套的。

* **示例**

  ```ini
  ini复制代码?x = a_{1}^n + a_{2}^n + a_{3}^n?
  ```

* **显示**

  ![x = a_{1}^n + a_{2}^n + a_{3}^n](./MarkDown插入数学公式/f79234f6e4ae28ad53fe955c2fafe313.svg)

如果希望左右两边都能有上下标，可以使用`\sideset`语法

* **示例**

  ```css
  css复制代码?\sideset{^1_2}{^3_4}A?
  ```

* **显示**

  ![\sideset{^1_2}{^3_4}A](./MarkDown插入数学公式/1942a187e2f01126e80e0d5c1df640a5.svg)

# 括号

`()`，`[]`和`|`都表示它们自己，但是`{}`因为有特殊作用因此当需要显示大括号时一般使用`\lbrace \rbrace`来表示。

* **示例**

  ```scss
  scss复制代码?f(x, y) = 100 * \lbrace[(x + y) * 3] - 5\rbrace?
  ```

* **显示**

  ![f(x, y) = 100 * \lbrace[(x + y) * 3] - 5\rbrace](./MarkDown插入数学公式/83773e6f871f8c31936219ac1cb041c8.svg)

# 分数

分数使用`\frac{分母}{分子}`这样的语法，不过推荐使用`\cfrac`来代替`\frac`，显示公式不会太挤。

* **示例**

  ```ruby
  ruby复制代码?\frac{1}{3} 与 \cfrac{1}{3}?
  ```

* **显示**

  ![\frac{1}{3} 与 \cfrac{1}{3}](./MarkDown插入数学公式/06a1fa5aa5c45e16ecd26b2b196394f5.svg)

# 开方

开方使用`\sqrt[次数]{被开方数}`这样的语法

* **示例**

  ```arduino
  arduino复制代码?\sqrt[3]{X}?
  ?\sqrt{5 - x}?
  ```

* **显示**

  ![\sqrt[3]{X}](./MarkDown插入数学公式/53cbd0b0057713fc1e614ee20bd155b8.svg)

  ![\sqrt{5 - x}](./MarkDown插入数学公式/f3fd66bd62cc629d1a997c2beb8dfab1.svg)

# 希腊字母

见下表

|代码|大写|代码|小写|
|---|---|---|---|
|`A`|![A](./MarkDown插入数学公式/191119bdc2494554fb23d778d9ac1e3b.svg)|`\alpha`|![\alpha](./MarkDown插入数学公式/3bf7b19e8cd3d1e1e0ad977f1d234bc6.svg)|
|`B`|![B](./MarkDown插入数学公式/250a185b8e5af64a26935920d16efe68.svg)|`\beta`|![\beta](./MarkDown插入数学公式/b1466f9f5ca2a13e4ef7e3fb5afb20e6.svg)|
|`\Gamma`|![\Gamma](./MarkDown插入数学公式/5d4b928ddd452fd461bc93da088f030b.svg)|`\gamma`|![\gamma](./MarkDown插入数学公式/f8e1a5e7741b7a483524b80673736e85.svg)|
|`\Delta`|![\Delta](./MarkDown插入数学公式/9c271d2915bbbad13398808d0a043eab.svg)|`\delta`|![\delta](./MarkDown插入数学公式/3d1bd25ae834b1b827455e3b7114dd90.svg)|
|`E`|![E](./MarkDown插入数学公式/5e13e31b3de8a03a3f25f8a37a8962fc.svg)|`\epsilon`|![\epsilon](./MarkDown插入数学公式/de8534747d4899a0b41aa654cc8b73f1.svg)|
|`Z`|![Z](./MarkDown插入数学公式/68481304a744101c703f2d06b0434b5e.svg)|`\zeta`|![\zeta](./MarkDown插入数学公式/22395b548460a5e9c9e6427cc7bf691f.svg)|
|`H`|![H](./MarkDown插入数学公式/4bd9b14317aab4e13917a975abcfb4a4.svg)|`\eta`|![\eta](./MarkDown插入数学公式/4ddeddea731ff5a9848ab06ca2a9b3e2.svg)|
|`\Theta`|![\Theta](./MarkDown插入数学公式/7d1b278fcfe802a7ea0aa63dc60fefd3.svg)|`\theta`|![\theta](./MarkDown插入数学公式/8922f4629bac2c3dc0049daf33040950.svg)|
|`I`|![I](./MarkDown插入数学公式/2b277331f72156c3d26bbffde1ad0c0e.svg)|`\iota`|![\iota](./MarkDown插入数学公式/e7e4be4b08cf9779d341d9e54fc1dabd.svg)|
|`K`|![K](./MarkDown插入数学公式/901094f59060fde6c558df8613dbbfff.svg)|`\kappa`|![\kappa](./MarkDown插入数学公式/9f6cb4ce1848b4e1dcadc75dbda6d4b1.svg)|
|`\Lambda`|![\Lambda](./MarkDown插入数学公式/a065ef04484f2cffdb73a483ac6d5f23.svg)|`\lambda`|![\lambda](./MarkDown插入数学公式/fda2e89e8dbd46fad676a7bf8a016aee.svg)|
|`M`|![M](./MarkDown插入数学公式/526ca34778ff964febfa3097c0a721bb.svg)|`\mu`|![\mu](./MarkDown插入数学公式/0de6c9c46398f723dafa7160c4ff515f.svg)|
|`N`|![N](./MarkDown插入数学公式/6760cb15e794bf17624ce773ae258e0f.svg)|`\nu`|![\nu](./MarkDown插入数学公式/c5e7234d3bee34af025279666a7ff1c4.svg)|
|`\Xi`|![\Xi](./MarkDown插入数学公式/d3c804c46a52a6b3dee7b19ef502e467.svg)|`\xi`|![\xi](./MarkDown插入数学公式/a8c1ba93c08e184db844797d46efa452.svg)|
|`O`|![O](./MarkDown插入数学公式/c798a7c72fb811e2c808f43b26e48ebd.svg)|`\omicron`|![\omicron](./MarkDown插入数学公式/fec72324b84e151683bac48caa608cb8.svg)|
|`\Pi`|![\Pi](./MarkDown插入数学公式/c533c73d3c012a8576f5dff5560be237.svg)|`\pi`|![\pi](./MarkDown插入数学公式/38b5af80fd66a9eaea67fe84ab10e7b4.svg)|
|`P`|![P](./MarkDown插入数学公式/c3b93809b9d5f30ea93afb8cb2a5893f.svg)|`\rho`|![\rho](./MarkDown插入数学公式/fd207801be912971ccda4b21924ffa49.svg)|
|`\Sigma`|![\Sigma](./MarkDown插入数学公式/336cbdeb44243ce5e82c64f1eb1c3aa9.svg)|`\sigma`|![\sigma](./MarkDown插入数学公式/2b5d4dc1ee6f478a63da963ab9245687.svg)|
|`T`|![T](./MarkDown插入数学公式/085c1d0724d2f0e5e522a68dc9fba270.svg)|`\tau`|![\tau](./MarkDown插入数学公式/9eb1cfa95c1907ee5028309183fe3649.svg)|
|`\Upsilon`|![\Upsilon](./MarkDown插入数学公式/535a85339be00bd874fd70c6388607aa.svg)|`\upsilon`|![\upsilon](./MarkDown插入数学公式/70dd05db990d16e01188021e6bcb347d.svg)|
|`\Phi`|![\Phi](./MarkDown插入数学公式/9d8426384fb10a90bd25d5fea8443acd.svg)|`\phi`|![\phi](./MarkDown插入数学公式/c42b8c2dde20b8a02afd36c12d276df3.svg)|
|`X`|![X](./MarkDown插入数学公式/6ac4678354c740070f9030d2f8bd68e1.svg)|`\chi`|![\chi](./MarkDown插入数学公式/da3d29878ed04c4fe4621fc11207103c.svg)|
|`\Psi`|![\Psi](./MarkDown插入数学公式/da1cf9fde138d744adfe16229e64ecec.svg)|`\psi`|![\psi](./MarkDown插入数学公式/f4d180491abfda48ac7a7db84b0133e1.svg)|
|`\Omega`|![\Omega](./MarkDown插入数学公式/f569c6f5f35da076bb06c98802413321.svg)|`\omega`|![\omega](./MarkDown插入数学公式/7804beb199d398ca2aae904740fd4f1b.svg)|

# 其他字符

## 关系运算符

|符号|代码|
|---|---|
|![\pm](./MarkDown插入数学公式/2917a15bb7913cccfcfee7946c58703a.svg)|`\pm`|
|![\times](./MarkDown插入数学公式/29933ce3da98ebd8469936e8778ebc16.svg)|`\times`|
|![\div](./MarkDown插入数学公式/3d1c1c6c93530f6a95169114d7ea2229.svg)|`\div`|
|![\mid](./MarkDown插入数学公式/86a033ba37d5fdd38b9d88b9e0ff687a.svg)|`\mid`|
|![\nmid](./MarkDown插入数学公式/45984f1598b5d4636104d6877786c57b.svg)|`\nmid`|
|![\cdot](./MarkDown插入数学公式/a00424dba730f063165fcb5192d5fa6c.svg)|`\cdot`|
|![\circ](./MarkDown插入数学公式/e21cd63ff9dd37ce8b256dcb157acecc.svg)|`\circ`|
|![\ast](./MarkDown插入数学公式/6749877c899fc34cc6e297d89de1a683.svg)|`\ast`|
|![\bigodot](./MarkDown插入数学公式/76dfb82461d6705b44cb96b8615e3c60.svg)|`\bigodot`|
|![\bigotimes](./MarkDown插入数学公式/ed27088b9dc64da528e159bdad18d29b.svg)|`\bigotimes`|
|![\bigoplus](./MarkDown插入数学公式/0fcd99f070eeecc2c02b8f5669fc7a83.svg)|`\bigoplus`|
|![\leq](./MarkDown插入数学公式/d78f0dad178349d2053236f5e4e4bb33.svg)|`\leq`|
|![\geq](./MarkDown插入数学公式/1f9a1c8c8de01f3a2e181edb1e49bede.svg)|`\geq`|
|![\neq](./MarkDown插入数学公式/a23075698ef098b3459cc98fa0b9bbef.svg)|`\neq`|
|![\approx](./MarkDown插入数学公式/83d7fdde39cd44d4dc763b7a6af2d447.svg)|`\approx`|
|![\equiv](./MarkDown插入数学公式/2c84dd688a159b84ea1d87728faaf2e3.svg)|`\equiv`|
|![\sum](./MarkDown插入数学公式/94f1e08c136d3ac27868f137c0b887be.svg)|`\sum`|
|![\prod](./MarkDown插入数学公式/74589411cd349936c2631209fff3be3c.svg)|`\prod`|
|![\coprod](./MarkDown插入数学公式/dd801f33fdbcbd48ee3981c65ab58534.svg)|`\coprod`|

## 集合运算符

|符号|代码|
|---|---|
|![\emptyset](./MarkDown插入数学公式/bc7c20472e52dc4f279a730a8f0f4d0d.svg)|`\emptyset`|
|![\in](./MarkDown插入数学公式/0612ee470ca8676f4e83bb5ca3e33522.svg)|`\in`|
|![\notin](./MarkDown插入数学公式/639f038a716e3de3b95ca1cf71fed7df.svg)|`\notin`|
|![\subset](./MarkDown插入数学公式/8e345420bf9c78f132b8ce7500c77aaf.svg)|`\subset`|
|![\supset](./MarkDown插入数学公式/4985bd8f24252f2cb8d11cd20d2eca98.svg)|`\supset`|
|![\subseteq](./MarkDown插入数学公式/7c509e8285cb0f7266af1c8825f7dedf.svg)|`\subseteq`|
|![\supseteq](./MarkDown插入数学公式/c0fdd7b66d6c21c478f525a3933ec363.svg)|`\supseteq`|
|![\bigcap](./MarkDown插入数学公式/c0a4bc12de9003555c7773d867b8577c.svg)|`\bigcap`|
|![\bigcup](./MarkDown插入数学公式/d802d7d45c99cd6a0147cef0a1c62495.svg)|`\bigcup`|
|![\bigvee](./MarkDown插入数学公式/464014b8473f8df672eba2fb41bebbb2.svg)|`\bigvee`|
|![\bigwedge](./MarkDown插入数学公式/fa244a0d020c920b42ca35ab714dfd60.svg)|`\bigwedge`|
|![\biguplus](./MarkDown插入数学公式/c89bc8572cc37cc648579685d21b720c.svg)|`\biguplus`|
|![\bigsqcup](./MarkDown插入数学公式/4acf3afd72799d34357a40bcedb544a5.svg)|`\bigsqcup`|

## 对数运算符

|符号|代码|
|---|---|
|![\log](./MarkDown插入数学公式/5f62e06ed407cb6cc42946ef1c34ee5c.svg)|`\log`|
|![\lg](./MarkDown插入数学公式/4d1c9e87e9f5707f69d561d262d318a0.svg)|`\lg`|
|![\ln](./MarkDown插入数学公式/39e1f84dcb0add6d1494c76dc96dcd64.svg)|`\ln`|

## 三角运算符

|符号|代码|
|---|---|
|![\bot](./MarkDown插入数学公式/49ffa8ea95403c92c75c529b5bfcdb51.svg)|`\bot`|
|![\angle](./MarkDown插入数学公式/3bb81ddb3176caa0e434b8430bd137cd.svg)|`\angle`|
|![\sin](./MarkDown插入数学公式/40e366bd7fbad97e0335bfa69e8c47ca.svg)|`\sin`|
|![\cos](./MarkDown插入数学公式/563d58fadbab265004f9082f017f2a26.svg)|`\cos`|
|![\tan](./MarkDown插入数学公式/1cf36f72524245fa8546520b8f9e2f88.svg)|`\tan`|
|![\cot](./MarkDown插入数学公式/22b58721b4114b1ee42f455a2efcc278.svg)|`\cot`|
|![\sec](./MarkDown插入数学公式/1ff7e8eff915247629789524a48caad4.svg)|`\sec`|
|![\csc](./MarkDown插入数学公式/083dac8d123dad53b6c0d219b07c1b01.svg)|`\csc`|

## 微积分运算符

|符号|代码|
|---|---|
|![\prime](./MarkDown插入数学公式/966b36862a54ced6d30b6e0506084fe7.svg)|`\prime`|
|![\int](./MarkDown插入数学公式/e95309522321238251bb62796bcb8a7b.svg)|`\int`|
|![\iint](./MarkDown插入数学公式/c666503a45406400e1dde1c18e1d47e4.svg)|`\iint`|
|![\iiint](./MarkDown插入数学公式/bc4228b28a4158caca4fde36312fb63d.svg)|`\iiint`|
|![\iiiint](./MarkDown插入数学公式/1cd7f7eacaa86617a9bd9fbc30ae7808.svg)|`\iiiint`|
|![\oint](./MarkDown插入数学公式/15e68b0fb3a9aeb2d49f66c39b31b64c.svg)|`\oint`|
|![\lim](./MarkDown插入数学公式/574921f514b82e6646949e993ebcec3b.svg)|`\lim`|
|![\infty](./MarkDown插入数学公式/44640f6671c0ae6c6c2cab23455b8ccb.svg)|`\infty`|
|![\nabla](./MarkDown插入数学公式/2a20fcdf9e4a9558da4f30985c950109.svg)|`\nabla`|
|![\mathrm{d}](./MarkDown插入数学公式/8a6ba7397cc0461ee603e05adf0e148c.svg)|`\mathrm{d}`|

> 当前文档由 [markdown文档下载插件](https://github.com/kscript/markdown-download) 下载, 原文链接: [MarkDown插入数学公式](https://juejin.cn/post/6844903828773421069)  