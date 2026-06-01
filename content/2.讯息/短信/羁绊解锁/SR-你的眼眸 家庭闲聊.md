---
title: 家庭闲聊
tags: "SR-你的眼眸"
weight: 48
---

> 获取途径：SR-你的眼眸进化 解锁


**[玩家姓名]** ：我最近看了《海街日记》，突然很想有个姐姐。

**白起：** 为什么会有这个想法？


<br>

<!-- 第1组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o1-1">小时候曾经很讨厌……现在却觉得有个兄弟姐妹会很温暖。</option>
    <option value="o1-2">有个姐姐不会孤单啊，有心事还能一起分享。</option>
  </select>
  <div id="o1-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：小时候曾经很讨厌……现在却觉得有个兄弟姐妹会很温暖。  <br>

 <strong>白起：</strong> 我现在依然很讨厌。  <br>

  </div>
  <div id="o1-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：有个姐姐不会孤单啊，有心事还能一起分享。  <br>

 <strong>白起：</strong> 孤单这种事情和有兄弟姐妹没什么关系。  <br>

  </div>
</div>
<br>

<!-- 第2组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o2-1">为什么这么说呢……难道你有兄弟姐妹？</option>
    <option value="o2-2">唔……好像有故事，难道你有兄弟姐妹？</option>
  </select>
  <div id="o2-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：为什么这么说呢……难道你有兄弟姐妹？  <br>

 <strong>白起：</strong> ……没有。  <br>

  </div>
  <div id="o2-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：唔……好像有故事，难道你有兄弟姐妹？  <br>

 <strong>白起：</strong> ……没有。  <br>

  </div>
</div>
<br>

<!-- 第3组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o3-1">省略号是什么意思啊？</option>
    <option value="o3-2">真的吗？</option>
  </select>
  <div id="o3-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：省略号是什么意思啊？  <br>

 <strong>白起：</strong> 算了……我有个弟弟，不过不熟。  <br>

  </div>
  <div id="o3-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：真的吗？  <br>

 <strong>白起：</strong> 算了……我有个弟弟，不过不熟。  <br>

  </div>
</div>
<br>

<!-- 第4组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o4-1">原来你还有个弟弟啊，以前从来没听你说过……</option>
    <option value="o4-2">不熟？他可是你弟弟啊……</option>
  </select>
  <div id="o4-1" class="opt-content">
 <strong>[玩家姓名]</strong> ：原来你还有个弟弟啊，以前从来没听你说过……  <br>

 <strong>白起：</strong> 嗯……很久没见过他了。  <br>

 <strong>白起：</strong> 不过以后也不想见到他。  <br>

  </div>
  <div id="o4-2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：不熟？他可是你弟弟啊……  <br>

 <strong>白起：</strong> 我很久没见过他了，以后也不想见到他。  <br>

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
