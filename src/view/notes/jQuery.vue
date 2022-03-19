<template>
  <div class="jquery">
    <div class="content markdown-body" v-html="markdwon"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      markdwon: `
    <h1>jQuery</h1>
<h2>一、jQuery的概念</h2>
<blockquote>
<p>jQuery是一个快速、简洁的JavaScript</p>
<p>jQuery封装了JavaScript常用的功能代码，优化了DOM操作、事件处理、动画设计和Ajax互交。</p>
<p>学习jQuery本质：就是学习调用这些函数（方法）</p>
<p>jQuery出现的目的是加快前端人员的开发速度，提高开发效率。</p>
</blockquote>
<p><strong>优点</strong>：</p>
<ul>
<li>轻量级。核心文件才几十kb，不影响页面加载速度；</li>
<li>跨浏览器兼容。基本兼容现在主流浏览器；</li>
<li>链式编程、隐式迭代；</li>
<li>对事件、样式、动画支持，大大简化了DOM操作；</li>
<li>支持插件拓展开发。有丰富的第三方的插件；</li>
<li>免费开源；</li>
</ul>
<h2>二、基本使用</h2>
<h3>1.jQuery的入口函数</h3>
<blockquote>
<p>$(function (){</p>
<p>​	...  //此处是页面DOM加载完成的入口</p>
<p>})</p>
</blockquote>
<blockquote>
<p>$(document).ready(function(){</p>
<p>​	...  //此处是页面DOM加载完成的入口</p>
<p>})</p>
</blockquote>
<ul>
<li>等着DOM结构渲染完毕即可执行内部代码，不必等到所有外部资源加载完成，jQuery帮我们完成了封装。</li>
<li>相当于元素JS中的DOMContentLoaded。</li>
<li>不同于原生JS中的load事件是等页面文档、外部的js文件、css文件、图片加载完毕后才执行内部代码。</li>
<li>推荐第一种方式。</li>
</ul>
<pre><code class="language-html">&lt;body&gt;
    &lt;script&gt;
        // $('div').hide();
        // 1. 等着页面DOM加载完毕再去执行js 代码
        // $(document).ready(function() {
        //     $('div').hide();
        // })
        // 2.  等着页面DOM加载完毕再去执行js 代码
        $(function() {
            $('div').hide();

        })
    &lt;/script&gt;
    &lt;div&gt;&lt;/div&gt;

&lt;/body&gt;
</code></pre>
<h3>2.jQuery对象和DOM对象</h3>
<blockquote>
<p>使用原生JS获取来的对象就是DOM对象；</p>
<p>jQuery方式获取的元素就是jQuery对象；</p>
<p>jQuery对象的本质是：利用$对DOM对象进行包装后产生的对象（伪数组形式）；</p>
</blockquote>
<pre><code class="language-html">&lt;body&gt;
    &lt;div&gt;&lt;/div&gt;
    &lt;span&gt;&lt;/span&gt;
    &lt;script&gt;
        // 1. DOM 对象：  用原生js获取过来的对象就是DOM对象
        var myDiv = document.querySelector('div'); // myDiv 是DOM对象
        var mySpan = document.querySelector('span'); // mySpan 是DOM对象
        console.dir(myDiv);
        // 2. jQuery对象： 用jquery方式获取过来的对象是jQuery对象。 本质：通过$把DOM元素进行了包装
        $('div'); // $('div')是一个jQuery 对象
        $('span'); // $('span')是一个jQuery 对象
        console.dir($('div'));
        // 3. jQuery 对象只能使用 jQuery 方法，DOM 对象则使用原生的 JavaScirpt 属性和方法
        // myDiv.style.display = 'none';
        // myDiv.hide(); myDiv是一个dom对象不能使用 jquery里面的hide方法
        // $('div').style.display = 'none'; 这个$('div')是一个jQuery对象不能使用原生js 的属性和方法
    &lt;/script&gt;
&lt;/body&gt;
</code></pre>
<p><strong>jQuery对象和DOM对象的互相转换</strong>：</p>
<p><strong>1.DOM对象转换为jQuery对象：$(DOM对象)</strong></p>
<p><strong>2.jQuery对象转换为DOM对象（两种方式）</strong></p>
<ul>
<li>$('div')[index]   index是索引号</li>
<li>$('div').get(index)   index是索引号</li>
</ul>
<pre><code class="language-html">&lt;body&gt;
    &lt;video src=&quot;mov.mp4&quot; muted&gt;&lt;/video&gt;
    &lt;script&gt;
        // 1. DOM对象转换为 jQuery对象
        // (1) 我们直接获取视频，得到就是jQuery对象
        // $('video');
        // (2) 我们已经使用原生js 获取过来 DOM对象
        var myvideo = document.querySelector('video');
        // $(myvideo).play();  jquery里面没有play 这个方法
        // 2.  jQuery对象转换为DOM对象
        // myvideo.play();
        $('video')[0].play()
        $('video').get(0).play()
    &lt;/script&gt;
&lt;/body&gt;
</code></pre>
<h2>三、jQuery选择器</h2>
<h4>1.基础选择器</h4>
<blockquote>
<p>$(&quot;选择器&quot;)   //里面选择器直接写css选择器即可，但要<strong>加引号</strong>。</p>
</blockquote>
<table>
<thead>
<tr>
<th>名称</th>
<th>用法</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>ID选择器</td>
<td>$(&quot;#id&quot;)</td>
<td>获取指定ID的元素</td>
</tr>
<tr>
<td>全选选择器</td>
<td>$(&quot;*&quot;)</td>
<td>匹配所有元素</td>
</tr>
<tr>
<td>类选择器</td>
<td>$(&quot;.class&quot;)</td>
<td>获取同一类class的元素</td>
</tr>
<tr>
<td>标签选择器</td>
<td>$(&quot;div&quot;)</td>
<td>获取同一类标签的所有元素</td>
</tr>
<tr>
<td>并集选择器</td>
<td>$(&quot;div,p,li&quot;)</td>
<td>选取多个元素</td>
</tr>
<tr>
<td>交集选择器</td>
<td>$(&quot;li.current&quot;)</td>
<td>交集元素</td>
</tr>
</tbody>
</table>
<h4>2.层级选择器</h4>
<table>
<thead>
<tr>
<th>名称</th>
<th>用法</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>子代选择器</td>
<td>$(&quot;ul&gt;li&quot;)</td>
<td>使用&gt;号，获取亲儿子层级的元素；注意，并不会获取孙子层级的元素</td>
</tr>
<tr>
<td>后代选择器</td>
<td>$(&quot;ul li&quot;)</td>
<td>使用空格，代表后代选择器，获取ul下的所有li元素，包括孙子等</td>
</tr>
</tbody>
</table>
<h4>3.筛选选择器</h4>
<table>
<thead>
<tr>
<th>语法</th>
<th>用法</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>:first</td>
<td>$('li:first')</td>
<td>获取第一个li元素</td>
</tr>
<tr>
<td>:last</td>
<td>$('li:last')</td>
<td>获取最后一个li元素</td>
</tr>
<tr>
<td>:eq(index)</td>
<td>$('li:eq(2)')</td>
<td>获取到的li元素，选中索引号为2的元素，索引号index从0开始</td>
</tr>
<tr>
<td>:odd</td>
<td>$('li:oddt')</td>
<td>获取到的li元素中，选择索引号为奇数的元素</td>
</tr>
<tr>
<td>:even</td>
<td>$('li:eveb')</td>
<td>获取到的li元素中，选中索引号为偶数的元素</td>
</tr>
</tbody>
</table>
<pre><code class="language-html">&lt;body&gt;
    &lt;ul&gt;
        &lt;li&gt;多个里面筛选几个&lt;/li&gt;
        &lt;li&gt;多个里面筛选几个&lt;/li&gt;
        &lt;li&gt;多个里面筛选几个&lt;/li&gt;
        &lt;li&gt;多个里面筛选几个&lt;/li&gt;
        &lt;li&gt;多个里面筛选几个&lt;/li&gt;
        &lt;li&gt;多个里面筛选几个&lt;/li&gt;
    &lt;/ul&gt;
    &lt;ol&gt;
        &lt;li&gt;多个里面筛选几个&lt;/li&gt;
        &lt;li&gt;多个里面筛选几个&lt;/li&gt;
        &lt;li&gt;多个里面筛选几个&lt;/li&gt;
        &lt;li&gt;多个里面筛选几个&lt;/li&gt;
        &lt;li&gt;多个里面筛选几个&lt;/li&gt;
        &lt;li&gt;多个里面筛选几个&lt;/li&gt;
    &lt;/ol&gt;
    &lt;script&gt;
        $(function() {
            $(&quot;ul li:first&quot;).css(&quot;color&quot;, &quot;red&quot;);
            $(&quot;ul li:eq(2)&quot;).css(&quot;color&quot;, &quot;blue&quot;);
            $(&quot;ol li:odd&quot;).css(&quot;color&quot;, &quot;skyblue&quot;);
            $(&quot;ol li:even&quot;).css(&quot;color&quot;, &quot;pink&quot;);
        })
    &lt;/script&gt;
&lt;/body&gt;
</code></pre>
<h4>4.筛选方法</h4>
<table>
<thead>
<tr>
<th>语法</th>
<th>用法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>parent()</td>
<td>$(&quot;li&quot;).parent();</td>
<td>查找父级</td>
</tr>
<tr>
<td>children(selector)</td>
<td>$(&quot;ul&quot;).children(&quot;li&quot;)</td>
<td>最近一级（亲儿子）</td>
</tr>
<tr>
<td>find(selector)</td>
<td>$(&quot;ul&quot;).find(&quot;li&quot;)</td>
<td>相当于$(&quot;ul li&quot;),后代选择器</td>
</tr>
<tr>
<td>siblings(selector)</td>
<td>$(&quot;.first&quot;).siblings(&quot;li&quot;)</td>
<td>查找兄弟节点，不包括自己本身</td>
</tr>
<tr>
<td>nextAll([expr])</td>
<td>$(&quot;.first&quot;).nextAll()</td>
<td>查找当前元素之后所有的同辈元素</td>
</tr>
<tr>
<td>prevtAll([expr])</td>
<td>$(&quot;.last&quot;).prevAll()</td>
<td>查找当前元素之前所有的同辈元素</td>
</tr>
<tr>
<td>hasClass(class)</td>
<td>$(&quot;div&quot;).hasClass(&quot;protected&quot;)</td>
<td>检查当前的元素是否含有某个特定的类，如果有，则返回true</td>
</tr>
<tr>
<td>eq(index)</td>
<td>$(&quot;li&quot;).eq(2)</td>
<td>相当于$(&quot;li:eq(2)&quot;),index从0开始</td>
</tr>
</tbody>
</table>
<p><strong>重点记住</strong>：parent() children() find() siblings() eq()</p>
<pre><code class="language-html">&lt;body&gt;
    &lt;div class=&quot;yeye&quot;&gt;
        &lt;div class=&quot;father&quot;&gt;
            &lt;div class=&quot;son&quot;&gt;儿子&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class=&quot;nav&quot;&gt;
        &lt;p&gt;我是屁&lt;/p&gt;
        &lt;div&gt;
            &lt;p&gt;我是p&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;script&gt;
        // 注意一下都是方法 带括号
        $(function() {
            // 1. 父  parent()  返回的是 最近一级的父级元素 亲爸爸
            console.log($(&quot;.son&quot;).parent());
            // 2. 子
            // (1) 亲儿子 children()  类似子代选择器  ul&gt;li
            // $(&quot;.nav&quot;).children(&quot;p&quot;).css(&quot;color&quot;, &quot;red&quot;);
            // (2) 可以选里面所有的孩子 包括儿子和孙子  find() 类似于后代选择器
            $(&quot;.nav&quot;).find(&quot;p&quot;).css(&quot;color&quot;, &quot;red&quot;);
            // 3. 兄
        });
    &lt;/script&gt;
&lt;/body&gt;
</code></pre>
<pre><code class="language-html">&lt;body&gt;
    &lt;ol&gt;
        &lt;li&gt;我是ol 的li&lt;/li&gt;
        &lt;li&gt;我是ol 的li&lt;/li&gt;
        &lt;li class=&quot;item&quot;&gt;我是ol 的li&lt;/li&gt;
        &lt;li&gt;我是ol 的li&lt;/li&gt;
        &lt;li&gt;我是ol 的li&lt;/li&gt;
        &lt;li&gt;我是ol 的li&lt;/li&gt;
    &lt;/ol&gt;
    &lt;ul&gt;
        &lt;li&gt;我是ol 的li&lt;/li&gt;
        &lt;li&gt;我是ol 的li&lt;/li&gt;
        &lt;li&gt;我是ol 的li&lt;/li&gt;
        &lt;li&gt;我是ol 的li&lt;/li&gt;
        &lt;li&gt;我是ol 的li&lt;/li&gt;
        &lt;li&gt;我是ol 的li&lt;/li&gt;
    &lt;/ul&gt;
    &lt;div class=&quot;current&quot;&gt;俺有current&lt;/div&gt;
    &lt;div&gt;俺木有current&lt;/div&gt;
    &lt;script&gt;
        // 注意一下都是方法 带括号
        $(function() {
            // 1. 兄弟元素siblings 除了自身元素之外的所有亲兄弟
            $(&quot;ol .item&quot;).siblings(&quot;li&quot;).css(&quot;color&quot;, &quot;red&quot;);
            // 2. 第n个元素
            var index = 2;
            // (1) 我们可以利用选择器的方式选择
            // $(&quot;ul li:eq(2)&quot;).css(&quot;color&quot;, &quot;blue&quot;);
            // $(&quot;ul li:eq(&quot;+index+&quot;)&quot;).css(&quot;color&quot;, &quot;blue&quot;);
            // (2) 我们可以利用选择方法的方式选择 更推荐这种写法
            // $(&quot;ul li&quot;).eq(2).css(&quot;color&quot;, &quot;blue&quot;);
            // $(&quot;ul li&quot;).eq(index).css(&quot;color&quot;, &quot;blue&quot;);
            // 3. 判断是否有某个类名
            console.log($(&quot;div:first&quot;).hasClass(&quot;current&quot;));
            console.log($(&quot;div:last&quot;).hasClass(&quot;current&quot;));


        });
    &lt;/script&gt;
&lt;/body&gt;
</code></pre>
<h3>隐式迭代（重要）</h3>
<blockquote>
<p>遍历内部DOM元素（伪数组形式存储）的过程就叫做隐式迭代。</p>
<p>简单理解：给匹配到的所有元素进行循环遍历，执行相应的方法，而不用我们再进行循环，简化我们的操作。</p>
</blockquote>
<pre><code class="language-html">&lt;body&gt;
    &lt;div&gt;惊喜不，意外不&lt;/div&gt;
    &lt;div&gt;惊喜不，意外不&lt;/div&gt;
    &lt;div&gt;惊喜不，意外不&lt;/div&gt;
    &lt;div&gt;惊喜不，意外不&lt;/div&gt;
    &lt;ul&gt;
        &lt;li&gt;相同的操作&lt;/li&gt;
        &lt;li&gt;相同的操作&lt;/li&gt;
        &lt;li&gt;相同的操作&lt;/li&gt;
    &lt;/ul&gt;
    &lt;script&gt;
        // 1. 获取四个div元素 
        console.log($(&quot;div&quot;));

        // 2. 给四个div设置背景颜色为粉色 jquery对象不能使用style
        $(&quot;div&quot;).css(&quot;background&quot;, &quot;pink&quot;);
        // 3. 隐式迭代就是把匹配的所有元素内部进行遍历循环，给每一个元素添加css这个方法
        $(&quot;ul li&quot;).css(&quot;color&quot;, &quot;red&quot;);
    &lt;/script&gt;
&lt;/body&gt;
</code></pre>
<h3>链式编程</h3>
<blockquote>
<p>$(this).css('color','red').sibling().css('color','');</p>
<p>链式编程是为了节省代码量，看起来优雅。</p>
</blockquote>
<pre><code class="language-html">&lt;body&gt;
    woshi body 的文字
    &lt;button&gt;快速&lt;/button&gt;
    &lt;button&gt;快速&lt;/button&gt;
    &lt;button&gt;快速&lt;/button&gt;
    &lt;button&gt;快速&lt;/button&gt;
    &lt;button&gt;快速&lt;/button&gt;
    &lt;button&gt;快速&lt;/button&gt;
    &lt;button&gt;快速&lt;/button&gt;
    &lt;script&gt;
        $(function() {
            // 1. 隐式迭代 给所有的按钮都绑定了点击事件
            $(&quot;button&quot;).click(function() {
                // 2. 让当前元素颜色变为红色
                // $(this).css(&quot;color&quot;, &quot;red&quot;);
                // 3. 让其余的姐妹元素不变色 
                // $(this).siblings().css(&quot;color&quot;, &quot;&quot;);
                // 链式编程
                // $(this).css(&quot;color&quot;, &quot;red&quot;).siblings().css(&quot;color&quot;, &quot;&quot;);
                // 我的颜色为红色, 我的兄弟的颜色为空
                // $(this).siblings().css('color', 'red');
                // 我的兄弟变为红色  ,我本身不变颜色
                $(this).siblings().parent().css('color', 'blue');
                // 最后是给我的兄弟的爸爸 body 变化颜色 

            });
        })
    &lt;/script&gt;
&lt;/body&gt;
</code></pre>
<h3>排他思想</h3>
<pre><code class="language-html">&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;script src=&quot;jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;button&gt;快速&lt;/button&gt;
    &lt;button&gt;快速&lt;/button&gt;
    &lt;button&gt;快速&lt;/button&gt;
    &lt;button&gt;快速&lt;/button&gt;
    &lt;button&gt;快速&lt;/button&gt;
    &lt;button&gt;快速&lt;/button&gt;
    &lt;button&gt;快速&lt;/button&gt;
    &lt;script&gt;
        $(function() {
            // 1. 隐式迭代 给所有的按钮都绑定了点击事件
            $(&quot;button&quot;).click(function() {
                // 2. 当前的元素变化背景颜色
                $(this).css(&quot;background&quot;, &quot;pink&quot;);
                // 3. 其余的兄弟去掉背景颜色 隐式迭代
                $(this).siblings(&quot;button&quot;).css(&quot;background&quot;, &quot;&quot;);
            });
        })
    &lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre>
<h3>事件切换</h3>
<blockquote>
<p>hover([over,]out)</p>
<p>over：鼠标移动到元素上要触发的函数（相当于mouseenter）</p>
<p>out：鼠标移出元素要触发的函数（相当于mouseleave）</p>
</blockquote>
<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;style&gt;
        * {
            margin: 0;
            padding: 0;
        }
        
        li {
            list-style-type: none;
        }
        
        a {
            text-decoration: none;
            font-size: 14px;
        }
        
        .nav {
            margin: 100px;
        }
        
        .nav&gt;li {
            position: relative;
            float: left;
            width: 80px;
            height: 41px;
            text-align: center;
        }
        
        .nav li a {
            display: block;
            width: 100%;
            height: 100%;
            line-height: 41px;
            color: #333;
        }
        
        .nav&gt;li&gt;a:hover {
            background-color: #eee;
        }
        
        .nav ul {
            display: none;
            position: absolute;
            top: 41px;
            left: 0;
            width: 100%;
            border-left: 1px solid #FECC5B;
            border-right: 1px solid #FECC5B;
        }
        
        .nav ul li {
            border-bottom: 1px solid #FECC5B;
        }
        
        .nav ul li a:hover {
            background-color: #FFF5DA;
        }
    &lt;/style&gt;
    &lt;script src=&quot;jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;ul class=&quot;nav&quot;&gt;
        &lt;li&gt;
            &lt;a href=&quot;#&quot;&gt;微博&lt;/a&gt;
            &lt;ul&gt;
                &lt;li&gt;
                    &lt;a href=&quot;&quot;&gt;私信&lt;/a&gt;
                &lt;/li&gt;
                &lt;li&gt;
                    &lt;a href=&quot;&quot;&gt;评论&lt;/a&gt;
                &lt;/li&gt;
                &lt;li&gt;
                    &lt;a href=&quot;&quot;&gt;@我&lt;/a&gt;
                &lt;/li&gt;
            &lt;/ul&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;a href=&quot;#&quot;&gt;微博&lt;/a&gt;
            &lt;ul&gt;
                &lt;li&gt;
                    &lt;a href=&quot;&quot;&gt;私信&lt;/a&gt;
                &lt;/li&gt;
                &lt;li&gt;
                    &lt;a href=&quot;&quot;&gt;评论&lt;/a&gt;
                &lt;/li&gt;
                &lt;li&gt;
                    &lt;a href=&quot;&quot;&gt;@我&lt;/a&gt;
                &lt;/li&gt;
            &lt;/ul&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;a href=&quot;#&quot;&gt;微博&lt;/a&gt;
            &lt;ul&gt;
                &lt;li&gt;
                    &lt;a href=&quot;&quot;&gt;私信&lt;/a&gt;
                &lt;/li&gt;
                &lt;li&gt;
                    &lt;a href=&quot;&quot;&gt;评论&lt;/a&gt;
                &lt;/li&gt;
                &lt;li&gt;
                    &lt;a href=&quot;&quot;&gt;@我&lt;/a&gt;
                &lt;/li&gt;
            &lt;/ul&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;a href=&quot;#&quot;&gt;微博&lt;/a&gt;
            &lt;ul&gt;
                &lt;li&gt;
                    &lt;a href=&quot;&quot;&gt;私信&lt;/a&gt;
                &lt;/li&gt;
                &lt;li&gt;
                    &lt;a href=&quot;&quot;&gt;评论&lt;/a&gt;
                &lt;/li&gt;
                &lt;li&gt;
                    &lt;a href=&quot;&quot;&gt;@我&lt;/a&gt;
                &lt;/li&gt;
            &lt;/ul&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
    &lt;script&gt;
        $(function() {
            // 鼠标经过
            // $(&quot;.nav&gt;li&quot;).mouseover(function() {
            //     // $(this) jQuery 当前元素  this不要加引号
            //     // show() 显示元素  hide() 隐藏元素
            //     $(this).children(&quot;ul&quot;).slideDown(200);
            // });
            // // 鼠标离开
            // $(&quot;.nav&gt;li&quot;).mouseout(function() {
            //     $(this).children(&quot;ul&quot;).slideUp(200);
            // });
            // 1. 事件切换 hover 就是鼠标经过和离开的复合写法
            // $(&quot;.nav&gt;li&quot;).hover(function() {
            //     $(this).children(&quot;ul&quot;).slideDown(200);
            // }, function() {
            //     $(this).children(&quot;ul&quot;).slideUp(200);
            // });
            // 2. 事件切换 hover  如果只写一个函数，那么鼠标经过和鼠标离开都会触发这个函数
            $(&quot;.nav&gt;li&quot;).hover(function() {
                $(this).children(&quot;ul&quot;).slideToggle();
            });
        })
    &lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre>
<h2>四、jQuery样式操作</h2>
<h3>1.操作css方法</h3>
<ul>
<li>参数只写属性名，则是放回属性值 <strong>$(this).css(&quot;color&quot;);</strong></li>
<li>参数是属性名，属性值，逗号分隔，是设置一组样式，属性必须加引号，值如果是数字可以不用跟单位和引号**$(this).css(&quot;color&quot;,&quot;red&quot;)**</li>
<li>参数可以是对象形式，方便设置多组样式。属性名和属性值用冒号隔开，属性可以不用加引号 <strong>$(this).css({&quot;color&quot;:&quot;red&quot;,&quot;font-size&quot;:&quot;30px&quot;});</strong></li>
</ul>
<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;script src=&quot;jquery.min.js&quot;&gt;&lt;/script&gt;
    &lt;style&gt;
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
        }
    &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;div&gt;&lt;/div&gt;
    &lt;script&gt;
        // 操作样式之css方法
        $(function() {
            console.log($(&quot;div&quot;).css(&quot;width&quot;));
            // $(&quot;div&quot;).css(&quot;width&quot;, &quot;300px&quot;);
            // $(&quot;div&quot;).css(&quot;width&quot;, 300);
            // $(&quot;div&quot;).css(height, &quot;300px&quot;); 属性名一定要加引号
            $(&quot;div&quot;).css({
                width: 400,
                height: 400,
                backgroundColor: &quot;red&quot;
                    // 如果是复合属性则必须采取驼峰命名法，如果值不是数字，则需要加引号
            })
        })
    &lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre>
<h3>2.设置类样式方法</h3>
<h4>(1)添加类</h4>
<blockquote>
<p>$(&quot;div&quot;).addClass(&quot;current&quot;);</p>
</blockquote>
<h4>(2)移除类</h4>
<blockquote>
<p>$(&quot;div&quot;).removeClass(&quot;current&quot;);</p>
</blockquote>
<h4>(3)切换类</h4>
<blockquote>
<p>$(&quot;div&quot;).toggleClass(&quot;current&quot;);</p>
</blockquote>
<p><strong>类操作与className区别</strong>：</p>
<ul>
<li>元素js中className会覆盖元素原先里面的类名。</li>
<li>jQuery里面操作只是对指定类进行操作，不影响原先的类名。</li>
</ul>
<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;style&gt;
        div {
            width: 150px;
            height: 150px;
            background-color: pink;
            margin: 100px auto;
            transition: all 0.5s;
        }
        
        .current {
            background-color: red;
            transform: rotate(360deg);
        }
    &lt;/style&gt;
    &lt;script src=&quot;jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;div class=&quot;current&quot;&gt;&lt;/div&gt;
    &lt;script&gt;
        $(function() {
            // 1. 添加类 addClass()
            // $(&quot;div&quot;).click(function() {
            //     // $(this).addClass(&quot;current&quot;);
            // });
            // 2. 删除类 removeClass()
            // $(&quot;div&quot;).click(function() {
            //     $(this).removeClass(&quot;current&quot;);
            // });
            // 3. 切换类 toggleClass()
            $(&quot;div&quot;).click(function() {
                $(this).toggleClass(&quot;current&quot;);
            });
        })
    &lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre>
<h2>五、jQuery效果</h2>
<h3>1.显示隐藏效果</h3>
<h4>(1)显示效果</h4>
<p><strong>语法规范</strong>：show([speed,[easing],[fn]])</p>
<p><strong>显示参数</strong>：</p>
<ul>
<li>参数都可以省略，无动画直接显示。</li>
<li>speed：三种预定速度之一的字符串（&quot;slow&quot;,&quot;normal&quot;,&quot;fast&quot;）或表示动画时长的毫秒数值（如：1000）。</li>
<li>easing：（Optional）用来指定切换效果，默认是&quot;swing&quot;,可用参数&quot;linear&quot;。</li>
<li>fn：回调函数，在动画完成时执行的函数，每个元素执行一次。</li>
</ul>
<h4>(2)隐藏效果</h4>
<p><strong>语法规范</strong>：hide([speed,[easing],[fn]])</p>
<p><strong>隐藏参数</strong>：</p>
<ul>
<li>参数都可以省略，无动画直接显示。</li>
<li>speed：三种预定速度之一的字符串（&quot;slow&quot;,&quot;normal&quot;,&quot;fast&quot;）或表示动画时长的毫秒数值（如：1000）。</li>
<li>easing：（Optional）用来指定切换效果，默认是&quot;swing&quot;,可用参数&quot;linear&quot;。</li>
<li>fn：回调函数，在动画完成时执行的函数，每个元素执行一次。</li>
</ul>
<h4>(2)显示隐藏切换效果</h4>
<p><strong>切换语法规范</strong>：hoggle([speed,[easing],[fn]])</p>
<p><strong>切换参数</strong>：</p>
<ul>
<li>参数都可以省略，无动画直接显示。</li>
<li>speed：三种预定速度之一的字符串（&quot;slow&quot;,&quot;normal&quot;,&quot;fast&quot;）或表示动画时长的毫秒数值（如：1000）。</li>
<li>easing：（Optional）用来指定切换效果，默认是&quot;swing&quot;,可用参数&quot;linear&quot;。</li>
<li>fn：回调函数，在动画完成时执行的函数，每个元素执行一次。</li>
</ul>
<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;style&gt;
        div {
            width: 150px;
            height: 300px;
            background-color: pink;
        }
    &lt;/style&gt;
    &lt;script src=&quot;jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;button&gt;显示&lt;/button&gt;
    &lt;button&gt;隐藏&lt;/button&gt;
    &lt;button&gt;切换&lt;/button&gt;
    &lt;div&gt;&lt;/div&gt;
    &lt;script&gt;
        $(function() {
            $(&quot;button&quot;).eq(0).click(function() {
                $(&quot;div&quot;).show(1000, function() {
                    alert(1);
                });
            })
            $(&quot;button&quot;).eq(1).click(function() {
                $(&quot;div&quot;).hide(1000, function() {
                    alert(1);
                });
            })
            $(&quot;button&quot;).eq(2).click(function() {
                    $(&quot;div&quot;).toggle(1000);
                })
                // 一般情况下，我们都不加参数直接显示隐藏就可以了
        });
    &lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre>
<h3>2.滑动效果</h3>
<h4>(1)下滑效果</h4>
<p><strong>下滑效果语法规范</strong>：slideDown([speed,[easing],[fn]])</p>
<p><strong>下滑效果参数</strong>：</p>
<ul>
<li>参数都可以省略，无动画直接显示。</li>
<li>speed：三种预定速度之一的字符串（&quot;slow&quot;,&quot;normal&quot;,&quot;fast&quot;）或表示动画时长的毫秒数值（如：1000）。</li>
<li>easing：（Optional）用来指定切换效果，默认是&quot;swing&quot;,可用参数&quot;linear&quot;。</li>
<li>fn：回调函数，在动画完成时执行的函数，每个元素执行一次。</li>
</ul>
<h4>(2)上滑效果</h4>
<p><strong>上滑效果语法规范</strong>：slideUp([speed,[easing],[fn]])</p>
<p><strong>上滑效果参数</strong>：</p>
<ul>
<li>参数都可以省略，无动画直接显示。</li>
<li>speed：三种预定速度之一的字符串（&quot;slow&quot;,&quot;normal&quot;,&quot;fast&quot;）或表示动画时长的毫秒数值（如：1000）。</li>
<li>easing：（Optional）用来指定切换效果，默认是&quot;swing&quot;,可用参数&quot;linear&quot;。</li>
<li>fn：回调函数，在动画完成时执行的函数，每个元素执行一次。</li>
</ul>
<h4>(3)滑动效果</h4>
<p><strong>滑动切换效果语法规范</strong>：slideToggle([speed,[easing],[fn]])</p>
<p><strong>滑动切换效果参数</strong>：</p>
<ul>
<li>参数都可以省略，无动画直接显示。</li>
<li>speed：三种预定速度之一的字符串（&quot;slow&quot;,&quot;normal&quot;,&quot;fast&quot;）或表示动画时长的毫秒数值（如：1000）。</li>
<li>easing：（Optional）用来指定切换效果，默认是&quot;swing&quot;,可用参数&quot;linear&quot;。</li>
<li>fn：回调函数，在动画完成时执行的函数，每个元素执行一次。</li>
</ul>
<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;style&gt;
        div {
            width: 150px;
            height: 300px;
            background-color: pink;
            display: none;
        }
    &lt;/style&gt;
    &lt;script src=&quot;jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;button&gt;下拉滑动&lt;/button&gt;
    &lt;button&gt;上拉滑动&lt;/button&gt;
    &lt;button&gt;切换滑动&lt;/button&gt;
    &lt;div&gt;&lt;/div&gt;
    &lt;script&gt;
        $(function() {
            $(&quot;button&quot;).eq(0).click(function() {
                // 下滑动 slideDown()
                $(&quot;div&quot;).slideDown();
            })
            $(&quot;button&quot;).eq(1).click(function() {
                // 上滑动 slideUp()
                $(&quot;div&quot;).slideUp(500);


            })
            $(&quot;button&quot;).eq(2).click(function() {
                // 滑动切换 slideToggle()

                $(&quot;div&quot;).slideToggle(500);

            });

        });
    &lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre>
<h3>3.自定义动画animate</h3>
<p><strong>语法</strong>：animate(params,[speed,[easing],[fn])</p>
<p><strong>参数</strong>：</p>
<ul>
<li>
<p>params：想要更改的样式属性，以对象形式传递，必须写。属性名可以不用带引号，如果是符合属性则需要采取驼峰命名法borderLeft。</p>
</li>
<li>
<p>speed：三种预定速度之一的字符串（&quot;slow&quot;,&quot;normal&quot;,&quot;fast&quot;）或表示动画时长的毫秒数值（如：1000）。</p>
</li>
<li>
<p>easing：（Optional）用来指定切换效果，默认是&quot;swing&quot;,可用参数&quot;linear&quot;。</p>
</li>
<li>
<p>fn：回调函数，在动画完成时执行的函数，每个元素执行一次。</p>
</li>
</ul>
<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;script src=&quot;jquery.min.js&quot;&gt;&lt;/script&gt;
    &lt;style&gt;
        div {
            position: absolute;
            width: 200px;
            height: 200px;
            background-color: pink;
        }
    &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;button&gt;动起来&lt;/button&gt;
    &lt;div&gt;&lt;/div&gt;
    &lt;script&gt;
        $(function() {
            $(&quot;button&quot;).click(function() {
                $(&quot;div&quot;).animate({
                    left: 500,
                    top: 300,
                    opacity: .4,
                    width: 500
                }, 500);
            })
        })
    &lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre>
<h3>4.动画队列及其停止排队方法</h3>
<blockquote>
<p>动画或者特效一旦触发就会执行，如果多次触发，就造成多个动画或者效果排队执行。</p>
</blockquote>
<p><strong>停止排队</strong>：stop()</p>
<ul>
<li>stop()方法用于停止动画或效果。</li>
<li>注意：stop()写到动画或者效果的前面，相当于停止结束上一次动画。</li>
</ul>
<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;style&gt;
        * {
            margin: 0;
            padding: 0;
        }
        
        li {
            list-style-type: none;
        }
        
        a {
            text-decoration: none;
            font-size: 14px;
        }
        
        .nav {
            margin: 100px;
        }
        
        .nav&gt;li {
            position: relative;
            float: left;
            width: 80px;
            height: 41px;
            text-align: center;
        }
        
        .nav li a {
            display: block;
            width: 100%;
            height: 100%;
            line-height: 41px;
            color: #333;
        }
        
        .nav&gt;li&gt;a:hover {
            background-color: #eee;
        }
        
        .nav ul {
            display: none;
            position: absolute;
            top: 41px;
            left: 0;
            width: 100%;
            border-left: 1px solid #FECC5B;
            border-right: 1px solid #FECC5B;
        }
        
        .nav ul li {
            border-bottom: 1px solid #FECC5B;
        }
        
        .nav ul li a:hover {
            background-color: #FFF5DA;
        }
    &lt;/style&gt;
    &lt;script src=&quot;jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;ul class=&quot;nav&quot;&gt;
        &lt;li&gt;
            &lt;a href=&quot;#&quot;&gt;微博&lt;/a&gt;
            &lt;ul&gt;
                &lt;li&gt;
                    &lt;a href=&quot;&quot;&gt;私信&lt;/a&gt;
                &lt;/li&gt;
                &lt;li&gt;
                    &lt;a href=&quot;&quot;&gt;评论&lt;/a&gt;
                &lt;/li&gt;
                &lt;li&gt;
                    &lt;a href=&quot;&quot;&gt;@我&lt;/a&gt;
                &lt;/li&gt;
            &lt;/ul&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;a href=&quot;#&quot;&gt;微博&lt;/a&gt;
            &lt;ul&gt;
                &lt;li&gt;
                    &lt;a href=&quot;&quot;&gt;私信&lt;/a&gt;
                &lt;/li&gt;
                &lt;li&gt;
                    &lt;a href=&quot;&quot;&gt;评论&lt;/a&gt;
                &lt;/li&gt;
                &lt;li&gt;
                    &lt;a href=&quot;&quot;&gt;@我&lt;/a&gt;
                &lt;/li&gt;
            &lt;/ul&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;a href=&quot;#&quot;&gt;微博&lt;/a&gt;
            &lt;ul&gt;
                &lt;li&gt;
                    &lt;a href=&quot;&quot;&gt;私信&lt;/a&gt;
                &lt;/li&gt;
                &lt;li&gt;
                    &lt;a href=&quot;&quot;&gt;评论&lt;/a&gt;
                &lt;/li&gt;
                &lt;li&gt;
                    &lt;a href=&quot;&quot;&gt;@我&lt;/a&gt;
                &lt;/li&gt;
            &lt;/ul&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;a href=&quot;#&quot;&gt;微博&lt;/a&gt;
            &lt;ul&gt;
                &lt;li&gt;
                    &lt;a href=&quot;&quot;&gt;私信&lt;/a&gt;
                &lt;/li&gt;
                &lt;li&gt;
                    &lt;a href=&quot;&quot;&gt;评论&lt;/a&gt;
                &lt;/li&gt;
                &lt;li&gt;
                    &lt;a href=&quot;&quot;&gt;@我&lt;/a&gt;
                &lt;/li&gt;
            &lt;/ul&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
    &lt;script&gt;
        $(function() {
            // 鼠标经过
            // $(&quot;.nav&gt;li&quot;).mouseover(function() {
            //     // $(this) jQuery 当前元素  this不要加引号
            //     // show() 显示元素  hide() 隐藏元素
            //     $(this).children(&quot;ul&quot;).slideDown(200);
            // });
            // // 鼠标离开
            // $(&quot;.nav&gt;li&quot;).mouseout(function() {
            //     $(this).children(&quot;ul&quot;).slideUp(200);
            // });
            // 1. 事件切换 hover 就是鼠标经过和离开的复合写法
            // $(&quot;.nav&gt;li&quot;).hover(function() {
            //     $(this).children(&quot;ul&quot;).slideDown(200);
            // }, function() {
            //     $(this).children(&quot;ul&quot;).slideUp(200);
            // });
            // 2. 事件切换 hover  如果只写一个函数，那么鼠标经过和鼠标离开都会触发这个函数
            $(&quot;.nav&gt;li&quot;).hover(function() {
                // stop 方法必须写到动画的前面
                $(this).children(&quot;ul&quot;).stop().slideToggle();
            });
        })
    &lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre>
<h2>六、jQuery属性操作</h2>
<h3>1.设置或获取元素固有属性</h3>
<blockquote>
<p>所谓元素固有属性就是元素本身自带的属性，比如&lt; a&gt;元素里面的href</p>
</blockquote>
<p><strong>获取属性语法</strong>：prop(&quot;属性&quot;)</p>
<p><strong>设置属性语法</strong>：prop(&quot;属性&quot;,&quot;属性值&quot;)</p>
<h3>2.设置或获取元素自定义属性值 attr()</h3>
<p><strong>获取属性语法</strong>：attr(&quot;属性&quot;)  //类似元素getAttribute()</p>
<p><strong>设置属性语法</strong>：attr(&quot;属性&quot;,&quot;属性值&quot;)  //类似元素setAttribute()</p>
<h3>3.数据缓存 data()</h3>
<blockquote>
<p>data()方法可以在指定的元素上存取数据，并不会修改DOM元素结构。一旦页面刷新，之后存放的数据都将被移除。</p>
</blockquote>
<p><strong>附加数据语法</strong>：data(&quot;name&quot;,&quot;value&quot;)  //向被选元素附加数据</p>
<p><strong>获取数据语法</strong>：data(&quot;name&quot;)  //向被选元素获取数据</p>
<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;script src=&quot;jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;a href=&quot;http://www.itcast.cn&quot; title=&quot;都挺好&quot;&gt;都挺好&lt;/a&gt;
    &lt;input type=&quot;checkbox&quot; name=&quot;&quot; id=&quot;&quot; checked&gt;
    &lt;div index=&quot;1&quot; data-index=&quot;2&quot;&gt;我是div&lt;/div&gt;
    &lt;span&gt;123&lt;/span&gt;
    &lt;script&gt;
        $(function() {
            //1. element.prop(&quot;属性名&quot;) 获取元素固有的属性值
            console.log($(&quot;a&quot;).prop(&quot;href&quot;));
            $(&quot;a&quot;).prop(&quot;title&quot;, &quot;我们都挺好&quot;);
            $(&quot;input&quot;).change(function() {
                console.log($(this).prop(&quot;checked&quot;));

            });
            // console.log($(&quot;div&quot;).prop(&quot;index&quot;));
            // 2. 元素的自定义属性 我们通过 attr()
            console.log($(&quot;div&quot;).attr(&quot;index&quot;));
            $(&quot;div&quot;).attr(&quot;index&quot;, 4);
            console.log($(&quot;div&quot;).attr(&quot;data-index&quot;));
            // 3. 数据缓存 data() 这个里面的数据是存放在元素的内存里面
            $(&quot;span&quot;).data(&quot;uname&quot;, &quot;andy&quot;);
            console.log($(&quot;span&quot;).data(&quot;uname&quot;));
            // 这个方法获取data-index h5自定义属性 第一个 不用写data-  而且返回的是数字型
            console.log($(&quot;div&quot;).data(&quot;index&quot;));





        })
    &lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre>
<h2>七、jQuery文本属性值</h2>
<h3>1.普通元素内容 html()</h3>
<blockquote>
<p>相当于元素innerHTML</p>
</blockquote>
<p>html()  //获取元素内容</p>
<p>html(&quot;内容&quot;)  //设置元素内容</p>
<h3>2.普通元素文本内容text()</h3>
<blockquote>
<p>相当于元素innerText</p>
</blockquote>
<p>text()  //获取元素的文本内容</p>
<p>text(&quot;文本内容&quot;)  //设置元素的文本内容</p>
<h3>3.表单的值val()</h3>
<blockquote>
<p>相当于元素value</p>
</blockquote>
<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;script src=&quot;jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;div&gt;
        &lt;span&gt;我是内容&lt;/span&gt;
    &lt;/div&gt;
    &lt;input type=&quot;text&quot; value=&quot;请输入内容&quot;&gt;
    &lt;script&gt;
        // 1. 获取设置元素内容 html()
        console.log($(&quot;div&quot;).html());
        // $(&quot;div&quot;).html(&quot;123&quot;);
        // 2. 获取设置元素文本内容 text()
        console.log($(&quot;div&quot;).text());
        $(&quot;div&quot;).text(&quot;123&quot;);

        // 3. 获取设置表单值 val()
        console.log($(&quot;input&quot;).val());
        $(&quot;input&quot;).val(&quot;123&quot;);
    &lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre>
<h2>八、jQuery元素操作</h2>
<h3>1.遍历元素</h3>
<blockquote>
<p>jQuery隐式迭代是对同一类元素做了同样的操作。如果想要给同一类元素做不同操作，就需要遍历。</p>
</blockquote>
<p><strong>语法1</strong>：$(&quot;div&quot;).sech(function (index, domEle ) {})</p>
<ul>
<li>each()方法遍历比配的每一个元素，只要用DOM处理；</li>
<li>里面的回调函数有2个参数：index是每个元素索引号；demEle是每个DOM元素对象，不是jQuery对象</li>
<li>所有要想使用jQuery方法，需要给这个dom元素转换为jQuery对象$(domEle)</li>
</ul>
<p><strong>语法2</strong>：$.each(object, function (index, element ) {} )</p>
<ul>
<li>$.each()方法可以用于遍历任何对象。主要用于数据处理，比如数值，对象</li>
<li>里面的函数有2个参数：index是每个元素的索引号；element遍历内容</li>
</ul>
<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;style&gt;

    &lt;/style&gt;
    &lt;script src=&quot;jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;div&gt;1&lt;/div&gt;
    &lt;div&gt;2&lt;/div&gt;
    &lt;div&gt;3&lt;/div&gt;
    &lt;script&gt;
        $(function() {
            // $(&quot;div&quot;).css(&quot;color&quot;, &quot;red&quot;);
            // 如果针对于同一类元素做不同操作，需要用到遍历元素（类似for，但是比for强大）
            var sum = 0;
            // 1. each() 方法遍历元素 
            var arr = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;];
            $(&quot;div&quot;).each(function(i, domEle) {
                // 回调函数第一个参数一定是索引号  可以自己指定索引号号名称
                // console.log(index);
                // console.log(i);
                // 回调函数第二个参数一定是 dom元素对象 也是自己命名
                // console.log(domEle);
                // domEle.css(&quot;color&quot;); dom对象没有css方法
                $(domEle).css(&quot;color&quot;, arr[i]);
                sum += parseInt($(domEle).text());
            })
            console.log(sum);
            // 2. $.each() 方法遍历元素 主要用于遍历数据，处理数据
            // $.each($(&quot;div&quot;), function(i, ele) {
            //     console.log(i);
            //     console.log(ele);

            // });
            // $.each(arr, function(i, ele) {
            //     console.log(i);
            //     console.log(ele);


            // })
            $.each({
                name: &quot;andy&quot;,
                age: 18
            }, function(i, ele) {
                console.log(i); // 输出的是 name age 属性名
                console.log(ele); // 输出的是 andy  18 属性值


            })
        })
    &lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre>
<h3>2.创建元素</h3>
<p><strong>语法</strong>：$(&quot;&lt; li&gt;&lt; /li&gt;&quot;)   动态的创建了一个&lt; li&gt;</p>
<h3>3.添加元素</h3>
<h4>内部添加</h4>
<ul>
<li>把内容放入匹配元素内部最<strong>后面</strong>：element.append(&quot;内容&quot;)</li>
<li>把内容放到匹配元素内部最<strong>前面</strong>：elemenet.prepend(&quot;内容&quot;)</li>
</ul>
<h4>外部添加</h4>
<ul>
<li>把内容放入目标元素后面：element.after(&quot;内容&quot;)   生成之后，它们是父子关系</li>
<li>把内容放入目标元素前面：element.before(&quot;内容&quot;)   生成之后，它们是兄弟关系</li>
</ul>
<h3>4.删除元素</h3>
<ul>
<li>删除匹配的元素（本身）：element.remove()</li>
<li>删除匹配的元素集合中所有的子节点：element.empty()</li>
<li>清空匹配的元素内容：element.html(&quot;&quot;)</li>
</ul>
<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;script src=&quot;jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;ul&gt;
        &lt;li&gt;原先的li&lt;/li&gt;
    &lt;/ul&gt;
    &lt;div class=&quot;test&quot;&gt;我是原先的div&lt;/div&gt;
    &lt;script&gt;
        $(function() {
            // 1. 创建元素
            var li = $(&quot;&lt;li&gt;我是后来创建的li&lt;/li&gt;&quot;);
            // 2. 添加元素

            // (1) 内部添加
            // $(&quot;ul&quot;).append(li);  内部添加并且放到内容的最后面 
            $(&quot;ul&quot;).prepend(li); // 内部添加并且放到内容的最前面

            // (2) 外部添加
            var div = $(&quot;&lt;div&gt;我是后妈生的&lt;/div&gt;&quot;);
            // $(&quot;.test&quot;).after(div);
            $(&quot;.test&quot;).before(div);
            // 3. 删除元素
            // $(&quot;ul&quot;).remove(); 可以删除匹配的元素 自杀
            // $(&quot;ul&quot;).empty(); // 可以删除匹配的元素里面的子节点 孩子
            $(&quot;ul&quot;).html(&quot;&quot;); // 可以删除匹配的元素里面的子节点 孩子

        })
    &lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre>
<h2>九、jQuery尺寸操作</h2>
<table>
<thead>
<tr>
<th>语法</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>width()/height()</td>
<td>取得匹配元素宽度和高度值 只算width/height</td>
</tr>
<tr>
<td>innerWidth()/innerHieght()</td>
<td>取得匹配元素宽度和高度值 包含padding</td>
</tr>
<tr>
<td>outerWidth()/outerHeight()</td>
<td>取得匹配元素宽度和高度值 包含padding、border</td>
</tr>
<tr>
<td>outerWidth(true)/outerHeight(true)</td>
<td>取得匹配元素宽度和高度值 包含padding、border、margin</td>
</tr>
</tbody>
</table>
<ul>
<li>以上参数为空，则是获取相应值，返回的是数字型。</li>
<li>如果参数为数值，则是修改相应值。</li>
<li>参数可以不写单位。</li>
</ul>
<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;style&gt;
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
            padding: 10px;
            border: 15px solid red;
            margin: 20px;
        }
    &lt;/style&gt;
    &lt;script src=&quot;jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;div&gt;&lt;/div&gt;
    &lt;script&gt;
        $(function() {
            // 1. width() / height() 获取设置元素 width和height大小 
            console.log($(&quot;div&quot;).width());
            // $(&quot;div&quot;).width(300);

            // 2. innerWidth() / innerHeight()  获取设置元素 width和height + padding 大小 
            console.log($(&quot;div&quot;).innerWidth());

            // 3. outerWidth()  / outerHeight()  获取设置元素 width和height + padding + border 大小 
            console.log($(&quot;div&quot;).outerWidth());

            // 4. outerWidth(true) / outerHeight(true) 获取设置 width和height + padding + border + margin
            console.log($(&quot;div&quot;).outerWidth(true));


        })
    &lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre>
<h2>十、jQuery位置操作</h2>
<h3>1.offse()设置或获取元素偏移</h3>
<ul>
<li>offset()方法设置或返回被选元素相对于文档的偏移坐标，跟父级没有关系。</li>
<li>该方法有2个属性left、top，offset().top用于获取距离文档顶部的距离，offset().left用于获取距离文档左侧的距离。</li>
<li>可以设置元素的偏移：offset({top:20,left:30});</li>
</ul>
<h3>2.position() 获取元素偏移</h3>
<ul>
<li>position()方法用于返回被选元素相对于带有定位的父级偏移坐标，如果父级都没有定位，则以文档为准。</li>
</ul>
<pre><code class="language-html">&lt;body&gt;
    &lt;div class=&quot;father&quot;&gt;
        &lt;div class=&quot;son&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;script&gt;
        $(function() {
            // 1. 获取设置距离文档的位置（偏移） offset
            console.log($(&quot;.son&quot;).offset());
            console.log($(&quot;.son&quot;).offset().top);
            // $(&quot;.son&quot;).offset({
            //     top: 200,
            //     left: 200
            // });
            // 2. 获取距离带有定位父级位置（偏移） position   如果没有带有定位的父级，则以文档为准
            // 这个方法只能获取不能设置偏移
            console.log($(&quot;.son&quot;).position());
            // $(&quot;.son&quot;).position({
            //     top: 200,
            //     left: 200
            // });
        })
    &lt;/script&gt;
&lt;/body&gt;
</code></pre>
<h3>3.scrollTop()/scrollLeft() 设置或获取元素被卷去的头部和左侧</h3>
<ul>
<li>scrollTop()方法设置或返回被选元素被卷去的头部。</li>
</ul>
<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;style&gt;
        body {
            height: 2000px;
        }
        
        .back {
            position: fixed;
            width: 50px;
            height: 50px;
            background-color: pink;
            right: 30px;
            bottom: 100px;
            display: none;
        }
        
        .container {
            width: 900px;
            height: 500px;
            background-color: skyblue;
            margin: 400px auto;
        }
    &lt;/style&gt;
    &lt;script src=&quot;jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;div class=&quot;back&quot;&gt;返回顶部&lt;/div&gt;
    &lt;div class=&quot;container&quot;&gt;
    &lt;/div&gt;
    &lt;script&gt;
        $(function() {
            $(document).scrollTop(100);
            // 被卷去的头部 scrollTop()  / 被卷去的左侧 scrollLeft()
            // 页面滚动事件
            var boxTop = $(&quot;.container&quot;).offset().top;
            $(window).scroll(function() {
                // console.log(11);
                console.log($(document).scrollTop());
                if ($(document).scrollTop() &gt;= boxTop) {
                    $(&quot;.back&quot;).fadeIn();
                } else {
                    $(&quot;.back&quot;).fadeOut();
                }
            });
            // 返回顶部
            $(&quot;.back&quot;).click(function() {
                // $(document).scrollTop(0);
                $(&quot;body, html&quot;).stop().animate({
                    scrollTop: 0
                });
                // $(document).stop().animate({
                //     scrollTop: 0
                // }); 不能是文档而是 html和body元素做动画
            })
        })
    &lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre>
<h2>十一、jQuery事件</h2>
<h3>1.jQuery事件注册</h3>
<p><strong>单个事件注册</strong>：</p>
<p>element.事件(function() {})</p>
<p>$(&quot;div&quot;).click(function) { 事件处理程序 }</p>
<h3>2.jQuery事件处理</h3>
<h4>on() 绑定事件</h4>
<blockquote>
<p>on() 方法在匹配元素上绑定一个或多个事件的事件处理函数</p>
</blockquote>
<p><strong>on() 绑定事件</strong>：element.on(event,[selector],fn)</p>
<ul>
<li>events：一个或多个用空格分隔的事件类型，如&quot;click&quot;或&quot;keydown&quot;。</li>
<li>selector：元素的子元素选择器。</li>
<li>fn：回调函数 即绑定在元素身上的监听函数。</li>
</ul>
<p><strong>on() 方法优势1</strong>：可以绑定多个事件，处理多个事件处理程序。</p>
<p><strong>on() 方法优势 2</strong>：可以事件委派操作。事件委派的定义就是，把原来加给子元素身上的事件绑定在父元素身上，就是把事件委派给父元素。</p>
<p><strong>on() 方法优势 3</strong>：动态创建元素，click()没有办法绑定事件，on()可以动态生成的元素绑定事件。</p>
<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;style&gt;
        div {
            width: 100px;
            height: 100px;
            background-color: pink;
        }
        
        .current {
            background-color: purple;
        }
    &lt;/style&gt;
    &lt;script src=&quot;jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;div&gt;&lt;/div&gt;
    &lt;ul&gt;
        &lt;li&gt;我们都是好孩子&lt;/li&gt;
        &lt;li&gt;我们都是好孩子&lt;/li&gt;
        &lt;li&gt;我们都是好孩子&lt;/li&gt;
        &lt;li&gt;我们都是好孩子&lt;/li&gt;
        &lt;li&gt;我们都是好孩子&lt;/li&gt;
    &lt;/ul&gt;
    &lt;ol&gt;

    &lt;/ol&gt;
    &lt;script&gt;
        $(function() {
            // 1. 单个事件注册
            // $(&quot;div&quot;).click(function() {
            //     $(this).css(&quot;background&quot;, &quot;purple&quot;);
            // });
            // $(&quot;div&quot;).mouseenter(function() {
            //     $(this).css(&quot;background&quot;, &quot;skyblue&quot;);
            // });

            // 2. 事件处理on
            // (1) on可以绑定1个或者多个事件处理程序
            // $(&quot;div&quot;).on({
            //     mouseenter: function() {
            //         $(this).css(&quot;background&quot;, &quot;skyblue&quot;);
            //     },
            //     click: function() {
            //         $(this).css(&quot;background&quot;, &quot;purple&quot;);
            //     },
            //     mouseleave: function() {
            //         $(this).css(&quot;background&quot;, &quot;blue&quot;);
            //     }
            // });
            $(&quot;div&quot;).on(&quot;mouseenter mouseleave&quot;, function() {
                $(this).toggleClass(&quot;current&quot;);
            });
            // (2) on可以实现事件委托（委派）
            // $(&quot;ul li&quot;).click();
            $(&quot;ul&quot;).on(&quot;click&quot;, &quot;li&quot;, function() {
                alert(11);
            });
            // click 是绑定在ul 身上的，但是 触发的对象是 ul 里面的小li
            // (3) on可以给未来动态创建的元素绑定事件
            // $(&quot;ol li&quot;).click(function() {
            //     alert(11);
            // })
            $(&quot;ol&quot;).on(&quot;click&quot;, &quot;li&quot;, function() {
                alert(11);
            })
            var li = $(&quot;&lt;li&gt;我是后来创建的&lt;/li&gt;&quot;);
            $(&quot;ol&quot;).append(li);
        })
    &lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre>
<h4>off() 解绑事件</h4>
<blockquote>
<p>off() 方法可以移除通过on() 方法添加的事件处理程序。</p>
</blockquote>
<ul>
<li>解绑p元素所有事件处理程序：$(&quot;p&quot;).off()</li>
<li>解绑p元素上面的点击事件 后面的是监听函数名：$(&quot;p&quot;).off(&quot;click&quot;)</li>
<li>解绑事件委托：$(&quot;ul&quot;).off(&quot;click&quot;,&quot;li&quot;)</li>
</ul>
<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;style&gt;
        div {
            width: 100px;
            height: 100px;
            background-color: pink;
        }
    &lt;/style&gt;
    &lt;script src=&quot;jquery.min.js&quot;&gt;&lt;/script&gt;
    &lt;script&gt;
        $(function() {
            $(&quot;div&quot;).on({
                click: function() {
                    console.log(&quot;我点击了&quot;);
                },
                mouseover: function() {
                    console.log('我鼠标经过了');
                }
            });
            $(&quot;ul&quot;).on(&quot;click&quot;, &quot;li&quot;, function() {
                alert(11);
            });
            // 1. 事件解绑 off 
            // $(&quot;div&quot;).off();  // 这个是解除了div身上的所有事件
            $(&quot;div&quot;).off(&quot;click&quot;); // 这个是解除了div身上的点击事件
            $(&quot;ul&quot;).off(&quot;click&quot;, &quot;li&quot;);
            // 2. one() 但是它只能触发事件一次
            $(&quot;p&quot;).one(&quot;click&quot;, function() {
                alert(11);
            })
        })
    &lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;div&gt;&lt;/div&gt;
    &lt;ul&gt;
        &lt;li&gt;我们都是好孩子&lt;/li&gt;
        &lt;li&gt;我们都是好孩子&lt;/li&gt;
        &lt;li&gt;我们都是好孩子&lt;/li&gt;
    &lt;/ul&gt;
    &lt;p&gt;我是屁&lt;/p&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre>
<h4>trigger() 自动触发事件</h4>
<blockquote>
<p>有些事件希望自动触发，比如轮播图自动播放功能跟点击右键按钮一致。可以利用定时器自动触发右侧按钮点击事件，不必鼠标点击触发。</p>
</blockquote>
<p><strong>语法格式</strong>：</p>
<ul>
<li>element.trigger(&quot;type&quot;)</li>
<li>element.triggerHandler(type)</li>
</ul>
<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;style&gt;
        div {
            width: 100px;
            height: 100px;
            background-color: pink;
        }
    &lt;/style&gt;
    &lt;script src=&quot;jquery.min.js&quot;&gt;&lt;/script&gt;
    &lt;script&gt;
        $(function() {
            $(&quot;div&quot;).on(&quot;click&quot;, function() {
                alert(11);
            });

            // 自动触发事件
            // 1. 元素.事件()
            // $(&quot;div&quot;).click();会触发元素的默认行为
            // 2. 元素.trigger(&quot;事件&quot;)
            // $(&quot;div&quot;).trigger(&quot;click&quot;);会触发元素的默认行为
            $(&quot;input&quot;).trigger(&quot;focus&quot;);
            // 3. 元素.triggerHandler(&quot;事件&quot;) 就是不会触发元素的默认行为
            $(&quot;div&quot;).triggerHandler(&quot;click&quot;);
            $(&quot;input&quot;).on(&quot;focus&quot;, function() {
                $(this).val(&quot;你好吗&quot;);
            });
            // $(&quot;input&quot;).triggerHandler(&quot;focus&quot;);

        });
    &lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;div&gt;&lt;/div&gt;
    &lt;input type=&quot;text&quot;&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre>
<h3>3.事件对象</h3>
<blockquote>
<p>事件触发，就会有事件对象的产生。</p>
</blockquote>
<ul>
<li>element.on(events,[selector],function(event) {} )</li>
</ul>
<p><strong>阻止默认行为</strong>：event.preventDefaule() 或 return false</p>
<p><strong>阻止冒泡</strong>：event.stopPropagation()</p>
<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;style&gt;
        div {
            width: 100px;
            height: 100px;
            background-color: pink;
        }
    &lt;/style&gt;
    &lt;script src=&quot;jquery.min.js&quot;&gt;&lt;/script&gt;
    &lt;script&gt;
        $(function() {
            $(document).on(&quot;click&quot;, function() {
                console.log(&quot;点击了document&quot;);

            })
            $(&quot;div&quot;).on(&quot;click&quot;, function(event) {
                // console.log(event);
                console.log(&quot;点击了div&quot;);
                event.stopPropagation();
            })
        })
    &lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;div&gt;&lt;/div&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre>
`,
    };
  },
};
</script>

<style lang="less" scoped>
.jquery {
  display: flex;
  width: 70%;
  margin: 0 auto;
}
.content {
  ul {
    list-style: disc !important;
  }
  flex: 1;
  // 半透明背景
  // background-color: rgba(0, 0, 0, 0.55);
  // // 背景模糊（毛玻璃）
  // backdrop-filter: blur(30px);
  background-color: #fff;
  color: black;
  font-size: 14px;
  height: 720px;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 10px 10px;
}
</style>