---
title: 诱人汉堡
tags: "R-别有滋味"
weight: 19
---

> 获取途径：R-别有滋味进化 解锁


**白起：** 怎么突然问我要不要吃汉堡？

<!-- 第1组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o1">你上次吃KFC的套餐吃得太香了，我也想尝尝。</option>
    <option value="o2">对呀，一起吃吧？我还可以准备一份沙拉，方便解腻。</option>
    <option value="o3">可是……买多了吃不掉会很浪费。</option>
  </select>
  <div id="o1" class="opt-content">
 <strong>[玩家姓名]</strong> ：你上次吃KFC的套餐吃得太香了，我也想尝尝。  <br>
   <br>
 <strong>白起：</strong> 汉堡的套餐？  <br>
   <br>
 <strong>白起：</strong> 确实很好吃。  <br>
   <br>
  </div>
  <div id="o2" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：对呀，一起吃吧？我还可以准备一份沙拉，方便解腻。  <br>
   <br>
 <strong>白起：</strong> 嗯。我正好在我家附近的店。  <br>
   <br>
 <strong>白起：</strong> 你还想吃什么？直接告诉我。  <br>
   <br>
 <strong>白起：</strong> 我现在去排队。  <br>
   <br>
  </div>
  <div id="o3" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：可是……买多了吃不掉会很浪费。  <br>
   <br>
 <strong>白起：</strong> 那就分次买。  <br>
   <br>
 <strong>白起：</strong> 买一次很方便。  <br>
   <br>
 <strong>白起：</strong> 你想吃几次都可以。  <br>
   <br>
  </div>
</div>
<br>

<!-- 第2组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o4">刚好刷到KFC的广告，看饿了……</option>
    <option value="o5">嗯！你要吃吗？不过我有点纠结……越想越觉得什么都想吃。</option>
    <option value="o6">汉堡、薯条、冰淇淋……好多，买了也拿不动。</option>
  </select>
  <div id="o4" class="opt-content">
 <strong>[玩家姓名]</strong> ：刚好刷到KFC的广告，看饿了……  <br>
   <br>
 <strong>白起：</strong> 汉堡的广告？  <br>
   <br>
 <strong>白起：</strong> 我好像看到过。  <br>
   <br>
 <strong>白起：</strong> 看起来很好吃。  <br>
   <br>
  </div>
  <div id="o5" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：嗯！你要吃吗？不过我有点纠结……越想越觉得什么都想吃。  <br>
   <br>
 <strong>白起：</strong> ……不用纠结。  <br>
   <br>
 <strong>白起：</strong> 想吃的都买一份就好。  <br>
   <br>
  </div>
  <div id="o6" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：汉堡、薯条、冰淇淋……好多，买了也拿不动。  <br>
   <br>
 <strong>白起：</strong> 都给你买好了。  <br>
   <br>
 <strong>白起：</strong> 你在家里等我，我去找你。  <br>
   <br>
  </div>
</div>
<br>

<!-- 第3组 -->
<div class="opt-group">
  <select class="opt-select" style="padding:3px 6px;border-radius:3px;border:1px solid #ccc;">
    <option value="o7">心血来潮想吃KFC的汉堡……你会突然很想吃什么东西吗？</option>
    <option value="o8">是的，怎么样？要不要一起？我下楼买好等你。</option>
    <option value="o9">真的可以吗？会不会太奢侈？</option>
  </select>
  <div id="o7" class="opt-content">
 <strong>[玩家姓名]</strong> ：心血来潮想吃KFC的汉堡……你会突然很想吃什么东西吗？  <br>
   <br>
 <strong>白起：</strong> 有时候会。  <br>
   <br>
 <strong>白起：</strong> 你现在想吃？  <br>
   <br>
  </div>
  <div id="o8" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：是的，怎么样？要不要一起？我下楼买好等你。  <br>
   <br>
 <strong>白起：</strong> 不用，我买了带过去。  <br>
   <br>
 <strong>白起：</strong> 把想吃的都发给我。  <br>
   <br>
  </div>
  <div id="o9" class="opt-content" style="display:none;">
 <strong>[玩家姓名]</strong> ：真的可以吗？会不会太奢侈？  <br>
   <br>
 <strong>白起：</strong> 不会，你不是想吃吗？  <br>
   <br>
 <strong>白起：</strong> 想吃就吃吧。  <br>
   <br>
 <strong>白起：</strong> 不用考虑太多。  <br>
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
