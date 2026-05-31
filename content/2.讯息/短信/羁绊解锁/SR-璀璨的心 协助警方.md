---
title: 协助警方
tags: "SR-璀璨的心"
weight: 55
---

> 获取途径：SR-璀璨的心拿卡 解锁


- **[玩家姓名]** ：学长，明天下午有空吗？我有点事情想当面请教

**白起：** 正好，我也有事情想麻烦你

<!-- 第1组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o1">发生什么了？</option>
    <option value="o2">我可以带摄像机吗</option>
    <option value="o3">明天我可以跟你一起去案发现场吗</option>
  </select>
  <div id="o1" class="opt-content">
 <strong>[玩家姓名]</strong> ：发生什么了？  <br>
   <br>
 <strong>白起：</strong> 上次你协助我的案件有了新的进展  <br>
   <br>
 <strong>白起：</strong> 这次也需要你的帮助  <br>
   <br>
  </div>
  <div id="o2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：我可以带摄像机吗  <br>
   <br>
 <strong>白起：</strong> 不能带  <br>
   <br>
 <strong>白起：</strong> 现在调查中，处于保密阶段  <br>
   <br>
  </div>
  <div id="o3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：明天我可以跟你一起去案发现场吗  <br>
   <br>
 <strong>白起：</strong> 不可以，你只是场外协助  <br>
   <br>
 <strong>白起：</strong> 具体情况等你明天到了再说  <br>
   <br>
  </div>
</div>
<br>

<!-- 第2组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o4">可是我明天下午已经有安排了</option>
    <option value="o5">我可以带同事一起去吗</option>
    <option value="o6">真的不可以吗？你再考虑考虑</option>
  </select>
  <div id="o4" class="opt-content">
 <strong>[玩家姓名]</strong> ：可是我明天下午已经有安排了  <br>
   <br>
 <strong>白起：</strong> 上次的案件有了进展  <br>
   <br>
 <strong>白起：</strong> 我在持续调查，需要你的协助  <br>
   <br>
  </div>
  <div id="o5" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：我可以带同事一起去吗  <br>
   <br>
 <strong>白起：</strong> 还在调查阶段，一切保密  <br>
   <br>
 <strong>白起：</strong> 只有你一个人可以过来  <br>
   <br>
  </div>
  <div id="o6" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：真的不可以吗？你再考虑考虑  <br>
   <br>
 <strong>白起：</strong> 不可以。明天会告诉你详细的情况  <br>
   <br>
  </div>
</div>
<br>

<!-- 第3组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o7">怎么了？为什么突然让我过去</option>
    <option value="o8">我可以把破案经过拍成纪录片吗</option>
    <option value="o9">明天我可以帮你做什么呢？</option>
  </select>
  <div id="o7" class="opt-content">
 <strong>[玩家姓名]</strong> ：怎么了？为什么突然让我过去  <br>
   <br>
 <strong>白起：</strong> 有关上次的案件  <br>
   <br>
 <strong>白起：</strong> 希望得到你的帮助  <br>
   <br>
  </div>
  <div id="o8" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：我可以把破案经过拍成纪录片吗  <br>
   <br>
 <strong>白起：</strong> 不行，现在处于保密阶段  <br>
   <br>
  </div>
  <div id="o9" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：明天我可以帮你做什么呢？  <br>
   <br>
 <strong>白起：</strong> 需要用到你传媒相关的专业知识  <br>
   <br>
 <strong>白起：</strong> 详细的明天见面再说  <br>
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
