<template>
  <div class="css">
    <div class="content markdown-body" v-html="cssMarkdown"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cssMarkdown:`
    <p>[TOC]</p>
<h2>CSS基础</h2>
<h3>一、CSS样式插入</h3>
<p><strong>1.外部样式</strong>：</p>
<pre><code class="language-html">&lt;head&gt;
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;mystyle.css&quot;&gt;
&lt;/head&gt;
</code></pre>
<p><strong>2.内部样式</strong>：</p>
<pre><code class="language-html">&lt;head&gt;
	&lt;style&gt;
		hr {color:sienna;}
		p {margin-left:20px;}
		body {background-image:url(&quot;images/back40.gif&quot;);}
	&lt;/style&gt;
&lt;/head&gt;
</code></pre>
<p><strong>3.内联样式</strong>：</p>
<pre><code class="language-html">&lt;p style=&quot;color:sienna;margin-left:20px&quot;&gt;这是一个段落。&lt;/p&gt;
</code></pre>
<p><strong>多重样式优先级</strong>：一般情况下，优先级如下：</p>
<p>（内联样式）Inline style &gt; （内部样式）Internal style sheet &gt;（外部样式）External style sheet &gt; 浏览器默认样式</p>
<hr>
<h3>二、常用选择器</h3>
<h4>1.基本选择器</h4>
<p><strong>1.通配选择器</strong></p>
<blockquote>
<p>在开发测试阶段固然是好的，但是我不建议这么做，因为这样做会给浏览器增加很大的负担。</p>
</blockquote>
<pre><code class="language-html">* {
 margin: 0;
 padding: 0;
}
</code></pre>
<p><strong>2.ID选择器</strong></p>
<pre><code class="language-html">#container {
 width: 960px;
 margin: auto;
}
</code></pre>
<p><strong>3.类选择器</strong></p>
<pre><code class="language-html">.error {
	color: red;
}
</code></pre>
<p><strong>4.后代选择器</strong></p>
<pre><code class="language-html">li a {
	text-decoration: none;
}
</code></pre>
<p><strong>5.元素选择器</strong></p>
<pre><code class="language-html">a { color: red; }
ul { margin-left: 0; }
</code></pre>
<h4>2.结构伪类选择器</h4>
<table>
<thead>
<tr>
<th>选择符</th>
<th>简介</th>
</tr>
</thead>
<tbody>
<tr>
<td>E:first-child</td>
<td>选择父元素的第一个子元素</td>
</tr>
<tr>
<td>E:last-child</td>
<td>选择父元素的倒数第一个子元素</td>
</tr>
<tr>
<td>E:nth-child(n)</td>
<td>选择父元素的第n个子元素</td>
</tr>
<tr>
<td>E:nth-last-child</td>
<td>选择父元素的倒数第n个子元素</td>
</tr>
<tr>
<td>F E:first-of-type</td>
<td>选择父元素F中的第一个E元素</td>
</tr>
<tr>
<td>F E:last-of-type</td>
<td>选择父元素F中的倒数第一个E元素</td>
</tr>
<tr>
<td>F E:nth-of-type(n)</td>
<td>选择父元素F中的第n个E元素</td>
</tr>
<tr>
<td>F E:nth-last-of-type(n)</td>
<td>选择父元素F中的倒数第n个E元素</td>
</tr>
<tr>
<td>E:empty</td>
<td>选择没有子元素的元素，而且该元素也不包含任何文本节点</td>
</tr>
</tbody>
</table>
<p><strong>注</strong>：</p>
<p>1.n可以是关键字，even偶数，odd奇数</p>
<p>2.n可以是公式：2n偶数 2n+1奇数 5n(5,10,15···)</p>
<p>3.n从1开始</p>
<h4>3.属性选择器</h4>
<table>
<thead>
<tr>
<th>选择符</th>
<th>简</th>
</tr>
</thead>
<tbody>
<tr>
<td>E[att]</td>
<td>选择具有att属性的E元素</td>
</tr>
<tr>
<td>E[att=&quot;val&quot;]</td>
<td>选择具有att属性且属性值等于val的E元素</td>
</tr>
<tr>
<td>E[att^=&quot;val&quot;]</td>
<td>选择具有att属性且以val开头的E元素</td>
</tr>
<tr>
<td>E[att$=&quot;val&quot;]</td>
<td>选择具有att属性且以val结尾的E元素</td>
</tr>
<tr>
<td>E[att*=&quot;val&quot;]</td>
<td>选择具有att属性且值中含有val的E元素</td>
</tr>
</tbody>
</table>
<h4>4.伪元素选择器</h4>
<blockquote>
<p>伪元素选择器可以帮助我们利用CSS创建新标签元素，为不需要html标签，从而简化html结构。</p>
</blockquote>
<table>
<thead>
<tr>
<th>选择符</th>
<th>简介</th>
</tr>
</thead>
<tbody>
<tr>
<td>::before</td>
<td>在元素内部的前面插入内容</td>
</tr>
<tr>
<td>::after</td>
<td>在元素内部的后面插入内容</td>
</tr>
</tbody>
</table>
<p><strong>注</strong>：</p>
<p>1.before和after创建一个元素，但都属于<strong>行内元素</strong></p>
<p>2.这个元素在<strong>文档中找不到</strong>，故称<strong>伪元素</strong></p>
<p>3.before和after<strong>必须有content属性</strong></p>
<p>4.权重为1</p>
<p><strong>应用场景</strong>：伪元素字体图标</p>
<h4>5.层次选择器</h4>
<p><strong>1.子选择器</strong></p>
<pre><code class="language-HTML">body&gt;p {
	background:red;
}
只有body后面的p标签会改变样式
</code></pre>
<p>只有与body元素有<strong>直接关系（父子关系）的元素才会被变色</strong>，如果是后代选择器，<strong>body中的其他标签</strong>若有p标签，<strong>其他标签中的p标签也会变色</strong>，这也是子选择器与后代选择器的区别</p>
<p><strong>2.相邻兄弟选择器</strong></p>
<pre><code class="language-html">.a + .b{
    
}
向下改变
</code></pre>
<p>只改变a标签的下一个相邻的b标签，若下一个相邻的标签不是b标签，则不改变，即使下下一个是b标签，也不改变，只改变相邻的。</p>
<p><strong>3.通用选择器</strong></p>
<pre><code class="language-html">.a ~ .b{
	background-color: red;
}
</code></pre>
<p>和相邻兄弟标签相似，改变a标签<strong>之后</strong>的<strong>所有</strong>的<strong>兄弟关系</strong>的<strong>b标签</strong>，a标签<strong>之前</strong>的兄弟b标签<strong>不改变</strong>。</p>
<hr>
<h3>三、字体（font）</h3>
<h4>1.font-family</h4>
<blockquote>
<p>指定文本的字体</p>
</blockquote>
<pre><code class="language-html">body {
	font-family:'Microsoft YaHei',tohoma,···;
}
</code></pre>
<h4>2.font-size</h4>
<p>单位可以是px,em,%等</p>
<h4>3.font-weight</h4>
<blockquote>
<p>字体粗细</p>
</blockquote>
<p><strong>值</strong>：</p>
<p><strong>nornal</strong>:不加粗（默认值）</p>
<p><strong>bold</strong>:粗体</p>
<p><strong>100-900</strong>(不加单位px)</p>
<pre><code class="language-html">p.thicker {font-weight:900;}
</code></pre>
<h4>4.font-style</h4>
<p><strong>值</strong>：</p>
<p>normal: 标准样式（默认值）</p>
<p>italic:斜体</p>
<h4>5.复合写法</h4>
<p>font:font-sytle font-weighr font-size font-family;</p>
<p><strong>注</strong>：<strong>不可省略</strong>size和family，若省略了font整行无效。尽可能<strong>不交换顺序</strong>，否则font正好代码无效，不便寻找错误。</p>
<hr>
<h3>四、文本（text）</h3>
<h4>1.颜色(color)</h4>
<p>color:red;</p>
<p>color:#ffffff;</p>
<p>color:rgb(255,0,0);</p>
<h4>2.对齐文本(text-align)</h4>
<p>left:左对齐</p>
<p>right:右对齐</p>
<p>center:居中</p>
<h4>3.修饰文本(text-decoration)</h4>
<p>none:默认（常用，可用于去除超链接下划线）</p>
<p>underline:下划线</p>
<p>overline:上划线（几乎不用）</p>
<p>line-through:删除线</p>
<p>blink:定义闪烁的文本</p>
<h4>4.文本缩进(text-indent)</h4>
<p>单位%，em(相当于当前元素的文字大小)，</p>
<h4>5.文本方向(direction)</h4>
<p>ltr:默认，文本从左到右</p>
<p>rtl:文本从右左</p>
<h4>6.行高(line-height)</h4>
<p>行间距=上间距+文本高度+下间距</p>
<p>单位px</p>
<h4>7.阴影文本(text-shadow)</h4>
<p>h-shadow:必须。水平阴影的位置，可以负值</p>
<p>v-shadow:必须。垂直阴影的位置，可以负值</p>
<p>blur:可选。模糊距离</p>
<p>color:可选。阴影的颜色</p>
<hr>
<h3>五、背景</h3>
<h4>1.背景颜色</h4>
<p>background-color:</p>
<h4>2.背景图片</h4>
<p>background-image:none | url();</p>
<h4>3.背景平铺</h4>
<p>background-repeat: repeat | no-repeat;</p>
<h4>4.背景图片位置</h4>
<p>background-position: x y;</p>
<p>单位可以是精确单位，如%，浮点数字；也可以是方位词(top,bottom,left,right,center)</p>
<h4>5.背景图像固定</h4>
<p>background-attachment: scroll | fixed;</p>
<p>scroll:随对象内容滚动</p>
<p>fixed:固定</p>
<h4>6.背景复合写法</h4>
<p>background: transparent url() repeat fixed top;</p>
<p>背景颜色半透明：rgba(0,0,0,0.2)</p>
<hr>
<h3>六、链接修饰</h3>
<h4>1.a:link</h4>
<p>未访问的链接</p>
<h4>2.a:visited</h4>
<p>已访问的链接</p>
<h4>3.a:hover</h4>
<p>当用户鼠标放在链接上时</p>
<h4>4.a:avtive</h4>
<p>链接被点击的那一刻</p>
<hr>
<h3>七、边框</h3>
<h4>基本概念</h4>
<p>border-width:边框粗细，单位px</p>
<p>border-color:边框颜色</p>
<p>border-style:边框样式 solid(实线) dashed(虚线) double(双线边框) dotted(点线边框)</p>
<p><strong>边框简写</strong>：没有顺序</p>
<p><strong>边框分开写</strong>：border-top: 1px solid red;</p>
<h4>圆角边框</h4>
<p>border-radio:length;</p>
<p><strong>注</strong>：</p>
<p>1.参数可以是<strong>数值或者百分比</strong>的形式</p>
<p>2.可简写，跟四值，分别：左上角，右上角，右下角，左下角；</p>
<p>3.分开写: border-top-left-radios  border-bottom-right-radios；</p>
<p>4.如果是<strong>正方形</strong>，想要设置为一个<strong>圈</strong>，把<strong>数值</strong>修改为<strong>高度</strong>或者<strong>宽度</strong>的<strong>一半</strong>即可，或者直接写<strong>50%</strong></p>
<p>5.如果是<strong>矩形</strong>，设置为<strong>高度</strong>的<strong>一半</strong>就可以</p>
<hr>
<h3>八、边距</h3>
<h4>内边距(padding)</h4>
<p><strong>简写</strong>：</p>
<table>
<thead>
<tr>
<th>代码</th>
<th>简介</th>
</tr>
</thead>
<tbody>
<tr>
<td>padding: 5px;</td>
<td>上下左右：5px</td>
</tr>
<tr>
<td>padding: 10px 5px;</td>
<td>上下：10px；左右：5px；</td>
</tr>
<tr>
<td>padding: 5px 10px 20px;</td>
<td>上：5px；左右：10px；下：20px；</td>
</tr>
<tr>
<td>padding: 5px 10px 20px 30px;</td>
<td>上下左右分别为：5px,10px,20px,30px；</td>
</tr>
</tbody>
</table>
<h4>外边距(margin)</h4>
<p><strong>简写方式和padding一致</strong></p>
<p>典型应用：让块级盒子水平居中</p>
<p><strong>常见写法</strong>：</p>
<p>margin-left: left;margin-right: auto;</p>
<p>margin:auto;</p>
<p>margin: 0 auto;</p>
<hr>
<h3>九、显示与隐藏</h3>
<h4>1.display属性</h4>
<p>display:none;隐藏对象</p>
<p>display:block;显示对象，还有转换成块元素的作用</p>
<p><strong>注</strong>：display隐藏元素后，<strong>不再占有原来的位置</strong></p>
<h4>2.visibility可见性</h4>
<p>visibility:visible;可视</p>
<p>visibility:hidden;隐藏</p>
<p><strong>注</strong>：visibility隐藏元素后<strong>继续占有原来的位置</strong></p>
<h4>3.overflow溢出</h4>
<table>
<thead>
<tr>
<th>属性值</th>
<th>简介</th>
</tr>
</thead>
<tbody>
<tr>
<td>visible</td>
<td>不剪切内容也不添加滚动条</td>
</tr>
<tr>
<td>hidden</td>
<td>不显示超过对象尺寸的内容，超出部分隐藏</td>
</tr>
<tr>
<td>scroll</td>
<td>不管超出内容与否，总是显示滚动条</td>
</tr>
<tr>
<td>auto</td>
<td>超出自动显示滚动条，不超出不显示滚动条</td>
</tr>
</tbody>
</table>
<p><strong>注</strong>：如果盒子有定位，慎用overflow:hidden因为它会隐藏多余的部分</p>
<h4>嵌套块级元素垂直外边距的塌陷问题</h4>
<p><strong>解决方案：</strong></p>
<p>（1）为父元素定义上边框</p>
<p>（2）为父元素定义内边距</p>
<p>（3）为父元素添加overflow:hedden;</p>
<h2>CSS三大特性</h2>
<h3>一、层叠性</h3>
<blockquote>
<p>层叠性是指多种CSS样式的叠加。</p>
<p>如果一个属性通过两个相同选择器设置到同一个元素上，那么这个时候一个属性就会将另一个属性层叠掉。</p>
</blockquote>
<p><strong>层叠性原则</strong>：</p>
<p>1.样式冲突：就近原则，那个样式离结构近，就执行哪个样式。</p>
<p>2.样式不冲突：不会层叠。</p>
<h3>二、继承性</h3>
<blockquote>
<p>给父元素设置一些属性, 子元素也可以使用, 这个我们就称之为继承性。</p>
</blockquote>
<ul>
<li>不是所有元素都有继承性，只有以**color/font-/text-/line-**开头的属性才可以继承</li>
<li>在CSS的继承中不仅仅是儿子可以继承, 只要是<strong>后代都可以继承</strong></li>
<li><strong>a标签</strong>的<strong>文字颜色</strong>和<strong>下划线</strong>是不能继承的</li>
<li><strong>h标签的文字大小</strong>是不能继承的</li>
<li>继承性一般用于设置网页上的公共信息，例如网页文字颜色、字体以及大小等</li>
<li>伪元素，伪类这些设置不能继承</li>
<li><strong>块元素</strong>可以继承父级元素的<strong>宽度</strong>，<strong>高度不继承</strong></li>
</ul>
<p>转载于:https://www.cnblogs.com/cowboybusy/p/11459004.html</p>
<h3>三、优先级</h3>
<table>
<thead>
<tr>
<th>选择器</th>
<th>权重</th>
</tr>
</thead>
<tbody>
<tr>
<td>继承或*</td>
<td>0，0，0，0</td>
</tr>
<tr>
<td>元素选择器</td>
<td>0，0，0，1</td>
</tr>
<tr>
<td>类选择器，伪类选择器</td>
<td>0，0，1，0</td>
</tr>
<tr>
<td>ID选择器</td>
<td>0，1，0，0</td>
</tr>
<tr>
<td>行内样式 style=&quot;&quot;</td>
<td>1，0，0，0</td>
</tr>
<tr>
<td>！important 重要的</td>
<td>最大</td>
</tr>
</tbody>
</table>
<p><strong>注</strong>：</p>
<p>1.继承的权重是0，如果该元素没有直接选中，不管父元素权重多高，子元素得到的权重都是0；</p>
<p>2.权重会叠加，eg：</p>
<p>div ul li---0,0,0,3</p>
<p>.nav ul li---0,0,1,2</p>
<p>a:hover---0,0,1,1</p>
<p>.nav a---0,0,1,1</p>

      `
    }
  }
}
</script>

<style lang="less" scoped>
.css {
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