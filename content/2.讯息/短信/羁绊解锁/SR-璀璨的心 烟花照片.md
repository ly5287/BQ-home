---
title: 烟花照片
tags: "SR-璀璨的心"
weight: 58
---

> 获取途径：SR-璀璨的心进化 解锁


**白起：** 烟花的照片，什么时候拍的？

<!-- 第1组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o1">在你眨眼睛的时候拍的。</option>
    <option value="o2">谢谢你的惊喜，不过你怎么知道我想看烟花？</option>
    <option value="o3">那是一条很早的朋友圈啊……</option>
  </select>
  <div id="o1" class="opt-content">
 <strong>[玩家姓名]</strong> ：在你眨眼睛的时候拍的。  <br>
   <br>
 <strong>白起：</strong> 一眨眼时间，错过这么多。看来下次不能眨眼。  <br>
   <br>
  </div>
  <div id="o2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：谢谢你的惊喜，不过你怎么知道我想看烟花？  <br>
   <br>
 <strong>白起：</strong> 看到你以前的朋友圈留言。  <br>
   <br>
  </div>
  <div id="o3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：那是一条很早的朋友圈啊……  <br>
   <br>
 <strong>白起：</strong> 咳，无意中翻到的……  <br>
   <br>
 <strong>白起：</strong> 不过很开心帮你实现了当时的愿望。  <br>
   <br>
  </div>
</div>
<br>

<!-- 第2组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o4">哈哈，是想表扬我的拍照技术吗？</option>
    <option value="o5">烟花很漂亮，不过你怎么知道我想看烟花？</option>
    <option value="o6">啊，你要是不提我都忘了……</option>
  </select>
  <div id="o4" class="opt-content">
 <strong>[玩家姓名]</strong> ：哈哈，是想表扬我的拍照技术吗？  <br>
   <br>
 <strong>白起：</strong> 不能轻易下结论，不过比我拍的好。  <br>
   <br>
  </div>
  <div id="o5" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：烟花很漂亮，不过你怎么知道我想看烟花？  <br>
   <br>
 <strong>白起：</strong> 看到你以前的朋友圈留言。  <br>
   <br>
  </div>
  <div id="o6" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：啊，你要是不提我都忘了……  <br>
   <br>
 <strong>白起：</strong> 咳，无意中翻到的……  <br>
   <br>
 <strong>白起：</strong> 不过很开心帮你实现了当时的愿望。  <br>
   <br>
  </div>
</div>
<br>

<!-- 第3组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o7">在你接电话的时候拍的，不小心带到了你的背影。</option>
    <option value="o8">没想到你有那么浪漫的一面。</option>
    <option value="o9">原来是这样啊。</option>
  </select>
  <div id="o7" class="opt-content">
 <strong>[玩家姓名]</strong> ：在你接电话的时候拍的，不小心带到了你的背影。  <br>
   <br>
 <strong>白起：</strong> 背影影响了你的构图。  <br>
   <br>
  </div>
  <div id="o8" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：没想到你有那么浪漫的一面。  <br>
   <br>
 <strong>白起：</strong> 浪漫谈不上，看到你朋友圈说想看烟花，就带你去了。  <br>
   <br>
  </div>
  <div id="o9" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：原来是这样啊。  <br>
   <br>
 <strong>白起：</strong> 很开心帮你实现了当时的愿望。  <br>
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
