---
title: 你的项链
tags: "SR-独家造型"
weight: 40
---

> 获取途径：SR-独家造型进化 解锁


**白起：** 那条项链，你很喜欢吗？

<!-- 第1组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o1">嗯，我很喜欢。怎么了？突然问起这个。</option>
    <option value="o2">是一个很重要的人送我的……</option>
    <option value="o3">没事。你还挺很适合做侦探的，知微见著！</option>
  </select>
  <div id="o1" class="opt-content">
 <strong>[玩家姓名]</strong> ：嗯，我很喜欢。怎么了？突然问起这个。  <br>
   <br>
 <strong>白起：</strong> 我看你一直戴着。  <br>
   <br>
 <strong>白起：</strong> 扣那里有点褪色了应该是戴了很久。  <br>
   <br>
 <strong>白起：</strong> 那条项链有什么故事吗？  <br>
   <br>
  </div>
  <div id="o2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：是一个很重要的人送我的……  <br>
   <br>
 <strong>白起：</strong> ……  <br>
   <br>
 <strong>白起：</strong> 你不想说的话我就不问了。  <br>
   <br>
  </div>
  <div id="o3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：没事。你还挺很适合做侦探的，知微见著！  <br>
   <br>
 <strong>白起：</strong> 以前的确也学过这方面内容。  <br>
   <br>
 <strong>白起：</strong> 这条项链对你很重要吧，周末带你去首饰店保养一下。  <br>
   <br>
  </div>
</div>
<br>

<!-- 第2组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o4">嗯，虽然有点旧了……怎么突然问这个？</option>
    <option value="o5">嗯……是我爸爸以前送我的生日礼物</option>
    <option value="o6">是职业病？你还真的很擅长追踪这种蛛丝马迹呢……</option>
  </select>
  <div id="o4" class="opt-content">
 <strong>[玩家姓名]</strong> ：嗯，虽然有点旧了……怎么突然问这个？  <br>
   <br>
 <strong>白起：</strong> 我看你一直戴着，项链看上去也有点变色。  <br>
   <br>
 <strong>白起：</strong> 应该有些年数了。  <br>
   <br>
 <strong>白起：</strong> 那条项链有什么故事吗？  <br>
   <br>
  </div>
  <div id="o5" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：嗯……是我爸爸以前送我的生日礼物  <br>
   <br>
 <strong>白起：</strong> 抱歉。  <br>
   <br>
 <strong>白起：</strong> ……  <br>
   <br>
 <strong>白起：</strong> 我不太会安慰人。  <br>
   <br>
  </div>
  <div id="o6" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：是职业病？你还真的很擅长追踪这种蛛丝马迹呢……  <br>
   <br>
 <strong>白起：</strong> ……  <br>
   <br>
 <strong>白起：</strong> 只不过是我个人比较在意而已。  <br>
   <br>
 <strong>白起：</strong> 我认识一家店，老板应该有办法让项链复原。  <br>
   <br>
 <strong>白起：</strong> 周末带你去看看。  <br>
   <br>
  </div>
</div>
<br>

<!-- 第3组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o7">一直没有换，是不是太单调了……</option>
    <option value="o8">对不起……现在不太想说</option>
    <option value="o9">原来你还有这么细心的一面。</option>
  </select>
  <div id="o7" class="opt-content">
 <strong>[玩家姓名]</strong> ：一直没有换，是不是太单调了……  <br>
   <br>
 <strong>白起：</strong> 不会。  <br>
   <br>
 <strong>白起：</strong> 我给你的手链，希望你也能这样一直戴着。  <br>
   <br>
 <strong>白起：</strong> 那条项链有什么故事？有点褪色了，你戴了很久？  <br>
   <br>
  </div>
  <div id="o8" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：对不起……现在不太想说  <br>
   <br>
 <strong>白起：</strong> 不想说就别勉强自己。  <br>
   <br>
 <strong>白起：</strong> 我问得突兀了。  <br>
   <br>
  </div>
  <div id="o9" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：原来你还有这么细心的一面。  <br>
   <br>
 <strong>白起：</strong> 我其实在意很久了……算不上细心。  <br>
   <br>
 <strong>白起：</strong> 这条项链你戴着很好看。  <br>
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
