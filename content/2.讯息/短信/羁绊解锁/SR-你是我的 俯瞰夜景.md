---
title: 俯瞰夜景
tags: "SR-你是我的"
weight: 59
---

> 获取途径：SR-你是我的进化 解锁


**白起：** 你去哪儿了，怎么一转眼不见了？

<!-- 第1组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o1">我在天鹅广场，这里人好多啊，我找不到你。</option>
    <option value="o2">不好意思，我本来只想离开一会。</option>
    <option value="o3">打算带我去哪里呀？</option>
  </select>
  <div id="o1" class="opt-content">
 <strong>[玩家姓名]</strong> ：我在天鹅广场，这里人好多啊，我找不到你。  <br>
   <br>
 <strong>白起：</strong> 你不要乱跑，我现在过来找你。  <br>
   <br>
 <strong>白起：</strong> 你刚才为什么一个人走开了？  <br>
   <br>
  </div>
  <div id="o2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：不好意思，我本来只想离开一会。  <br>
   <br>
 <strong>白起：</strong> 不是想看俯瞰城市的夜景吗？我知道一个特别的地方。  <br>
   <br>
  </div>
  <div id="o3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：打算带我去哪里呀？  <br>
   <br>
 <strong>白起：</strong> 一会就知道，我看到你了。  <br>
   <br>
  </div>
</div>
<br>

<!-- 第2组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o4">我在游乐场小吃店买吃的，你等我一会。</option>
    <option value="o5">你一直在打电话啊，没机会告诉你。</option>
    <option value="o6">时间来得及吗？不会赶不上吧？</option>
  </select>
  <div id="o4" class="opt-content">
 <strong>[玩家姓名]</strong> ：我在游乐场小吃店买吃的，你等我一会。  <br>
   <br>
 <strong>白起：</strong> 买好之后你在原地不要动，我去找你。  <br>
   <br>
 <strong>白起：</strong> 你怎么不说一声就离开了？  <br>
   <br>
  </div>
  <div id="o5" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：你一直在打电话啊，没机会告诉你。  <br>
   <br>
 <strong>白起：</strong> 抱歉，刚才有很重要的事。  <br>
   <br>
 <strong>白起：</strong> 不是想看俯瞰城市的夜景吗？我知道一个特别的地方。  <br>
   <br>
  </div>
  <div id="o6" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：时间来得及吗？不会赶不上吧？  <br>
   <br>
 <strong>白起：</strong> 来得及，我看到你了，回头。  <br>
   <br>
  </div>
</div>
<br>

<!-- 第3组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o7">我在排队玩旋转木马。</option>
    <option value="o8">看你在忙，不想打扰你。</option>
    <option value="o9">不会要带我飞吧！</option>
  </select>
  <div id="o7" class="opt-content">
 <strong>[玩家姓名]</strong> ：我在排队玩旋转木马。  <br>
   <br>
 <strong>白起：</strong> ……你怎么不跟我说一声就离开了？  <br>
   <br>
  </div>
  <div id="o8" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：看你在忙，不想打扰你。  <br>
   <br>
 <strong>白起：</strong> 我现在过去找你。  <br>
   <br>
 <strong>白起：</strong> 不是想看俯瞰城市的夜景吗？我知道一个特别的地方。  <br>
   <br>
  </div>
  <div id="o9" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：不会要带我飞吧！  <br>
   <br>
 <strong>白起：</strong> 一会就知道了。我看到你了，回头。  <br>
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
