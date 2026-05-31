---
title: 点外卖
tags: "SR-湛蓝温度"
weight: 38
---

> 获取途径：SR-湛蓝温度进化 解锁


**白起：** 有空一起吃饭吗？

<!-- 第1组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o1">好呀！不过我最近事情超多……今晚恐怕是不行了……</option>
    <option value="o2">谢谢你！但是我可以自己搞定啦~</option>
    <option value="o3">其实我最想吃火锅了……可惜不能外卖tut</option>
  </select>
  <div id="o1" class="opt-content">
 <strong>[玩家姓名]</strong> ：好呀！不过我最近事情超多……今晚恐怕是不行了……  <br>
   <br>
 <strong>白起：</strong> 没关系，我们可以改天。  <br>
   <br>
 <strong>白起：</strong> 到饭点了，今天先给你点个外卖吧。  <br>
   <br>
  </div>
  <div id="o2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：谢谢你！但是我可以自己搞定啦~  <br>
   <br>
 <strong>白起：</strong> 不要见外。  <br>
   <br>
 <strong>白起：</strong> 等你有空了我带你去吃好的。  <br>
   <br>
 <strong>白起：</strong> 今天先将就一下，你想吃什么？  <br>
   <br>
  </div>
  <div id="o3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：其实我最想吃火锅了……可惜不能外卖tut  <br>
   <br>
 <strong>白起：</strong> 没关系，这个我们下次吃。  <br>
   <br>
 <strong>白起：</strong> 我记得你上次说想吃炸鸡，怎么样？桂圆红枣茶要吗？  <br>
   <br>
 <strong>白起：</strong> 要多吃点，别担心会胖。你怎么样都很好看。  <br>
   <br>
  </div>
</div>
<br>

<!-- 第2组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o4">可能不太方便呢，最近超忙的，累……</option>
    <option value="o5">啊，这种事就不麻烦你啦，点外卖的时间还是有的~</option>
    <option value="o6">那……想吃红烧狮子头！会不会太油腻了QAQ……</option>
  </select>
  <div id="o4" class="opt-content">
 <strong>[玩家姓名]</strong> ：可能不太方便呢，最近超忙的，累……  <br>
   <br>
 <strong>白起：</strong> 这么辛苦，更是要好好吃饭的。  <br>
   <br>
 <strong>白起：</strong> 我听韩野说你最近都没按时吃饭，这样不行。  <br>
   <br>
 <strong>白起：</strong> 我给你点个外卖。  <br>
   <br>
  </div>
  <div id="o5" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：啊，这种事就不麻烦你啦，点外卖的时间还是有的~  <br>
   <br>
 <strong>白起：</strong> 听话。  <br>
   <br>
 <strong>白起：</strong> 我担心你忙着就忘了。  <br>
   <br>
 <strong>白起：</strong> 直接跟我说吧，吃什么？  <br>
   <br>
  </div>
  <div id="o6" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：那……想吃红烧狮子头！会不会太油腻了QAQ……  <br>
   <br>
 <strong>白起：</strong> 没关系，多加些蔬菜。桂圆红枣茶也来一杯吗？  <br>
   <br>
 <strong>白起：</strong> 要多吃点，别担心会胖。  <br>
   <br>
 <strong>白起：</strong> 你怎么样都很好看。  <br>
   <br>
  </div>
</div>
<br>

<!-- 第3组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o7">那就脆皮烤鸡吧！</option>
  </select>
  <div id="o7" class="opt-content">
 <strong>[玩家姓名]</strong> ：那就脆皮烤鸡吧！  <br>
   <br>
 <strong>白起：</strong> 嗯，给你加了一杯桂圆红枣茶。  <br>
   <br>
 <strong>白起：</strong> 要多吃点，别担心会胖。  <br>
   <br>
 <strong>白起：</strong> 你怎么样都很好看。  <br>
   <br>
  </div>
</div>

<script>
document.querySelectorAll(".opt-select").forEach(s => {
    s.onchange = function(){
        let group = this.closest('.opt-group');
        if (!group) return;
        group.querySelectorAll(".opt-content").forEach(d => d.style.display = "none");
        let target = document.getElementById(this.value);
        if (target) target.style.display = "block";
    }
})
</script>
